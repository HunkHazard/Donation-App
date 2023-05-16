"use client"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import burgernav from "../public/burgernavlight.svg";
import Image from "next/image"
import Link from 'next/link';
import Signupmodal from './signupmodal';
import Admin from './LoginAdmin';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BurgerDropDown() {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div className='mt-1'>
          <Menu.Button >
            <Image
              src={burgernav}
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
                  <Link
                    href="/"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-white',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Home
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/about-us"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-white',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    About Us
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-white',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Insights
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="py-1  lato-16-white">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-white',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    My Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <label
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-white',
                      'block px-4 py-2 text-sm cursor-pointer'
                    )}
                    htmlFor='sign-shameekh'
                  >
                    Employee Sign in
                  </label>
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
                      'block px-4 py-2 text-sm'
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
                  <Link
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-white',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Sign Out
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <>
        <input type="checkbox" id="sign-shameekh" className="modal-toggle" />
        <label htmlFor="sign-shameekh" className="modal cursor-pointer">
          <label className="modal-box w-3/12 h-[26.3rem] rounded-[20px] max-w-5xl " htmlFor="">
            <Admin />
          </label>
        </label>
      </>
      <>
        <Signupmodal />
      </>
    </>
  )
}
