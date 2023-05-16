"use client"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import profile from "../public/profile.svg";
import Image from "next/image"
import React from 'react';
import 'reactjs-popup/dist/index.css';
import Signupmodal from './signupmodal';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavDropDown() {
  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <>
      <Menu as="div" className="relative inline-block text-left ">
        <div className='mt-1 '>
          <Menu.Button >
            <Image className='hover:bg-pink-800 rounded-full'
              src={profile}
              width={35}
              height={35}
              alt="profile"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md main-accent shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1  lato-16-white">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/userdashboard"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-white',
                      'block px-4 py-2 text-sm '
                    )}
                  >
                    My Profile
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="py-1  lato-16-white">
              <Menu.Item>
                {({ active }) => (
                  <label
                    htmlFor='signupmodal'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-white',
                      'block px-4 py-2 text-sm cursor-pointer'
                    )}
                  >
                    Create Account
                  </label>
                )}
              </Menu.Item>
            </div>
            <div className="py-1  lato-16-white">
              <Menu.Item>
                {({ active }) => (
                  <button onClick={logout}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-white',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>

      </Menu>
      <>
        <Signupmodal />
      </>
    </>
  )
}
