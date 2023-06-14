import Link from "next/link";
import React, { Fragment } from "react";
import DarkModeToggle from "./DarkmodeToggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex justify-between items-center mx-auto container p-4">
        <Link href="/#home" className="flex items-center space-x-4 group cursor-pointer">
          <img
            src="/assets/ischa.jpg"
            alt="ischa"
            className="h-12 w-12 rounded-full object-cover border-2 border-gray-900 dark:border-gray-100 group-hover:border-primary group-dark:hover:border-primary"
          />
          <p className="text-center text-gray-900 dark:text-gray-100 group-hover:text-primary group-dark:hover:text-primary font-bold text-lg">
            Ischa
          </p>
        </Link>

        <div className="hidden lg:flex space-x-12">
          <Link
            href="/#home"
            className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary font-bold text-lg"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary font-bold text-lg"
          >
            Over mezelf
          </Link>
          <Link
            href="/#internship"
            className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary font-bold text-lg"
          >
            Stage
          </Link>
          <Link
            href="/#projects"
            className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary font-bold text-lg"
          >
            Overige projecten
          </Link>
        </div>
        <div className="flex space-x-10">
          <DarkModeToggle />
          <MobileNavigation />
        </div>
      </nav>
    </header>
  );
}

function MobileNavigation() {
  return (
    <Popover className="lg:hidden">
      <Popover.Button>
        <Bars3Icon className="h-10 w-10 bg text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-6 ring-1 ring-gray-900/5 dark:bg-gray-900 dark:gray-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <XMarkIcon className="h-8 w-8 text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary" />
              </Popover.Button>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                Navigatie
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 text-base text-gray-900 dark:text-gray-100">
                <MobileNavItem href="/#home">Home</MobileNavItem>
                <MobileNavItem href="/#about">Over mezelf</MobileNavItem>
                <MobileNavItem href="/#internship">Stage</MobileNavItem>
                <MobileNavItem href="/#projects">
                  Overige projecten
                </MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button
        as={Link}
        href={href}
        className="block py-2 text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary font-bold text-lg"
      >
        {children}
      </Popover.Button>
    </li>
  );
}

export default Header;
