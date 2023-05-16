"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import burgernav from "../public/burgernavlight.svg";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BurgerDropDown() {
  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="mt-1">
        <Menu.Button>
          <Image src={burgernav} width={35} height={35} alt="profile" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md blue-bg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1  lato-16-white">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-white",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Dashboard
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/about-us"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-white",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Transaction History
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-white",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Explore Cases
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1  lato-16-white">
            <Menu.Item>
              {({ active }) => (
                <p
                  onClick={logout}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-white",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}
                >
                  Log Out
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
