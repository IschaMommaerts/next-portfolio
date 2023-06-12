import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import DarkModeToggle from "./DarkmodeToggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex justify-between items-center mx-auto container py-2">
        <div className="flex items-center space-x-4">
          <div className="relative h-12 w-12">
            <Image
              src="/../public/assets/ischa.jpg"
              alt="ischa"
              fill={true}
              className="rounded-full object-cover border-2 border-gray-900 dark:border-gray-100"
            />
          </div>
          <p className="text-center text-gray-900 dark:text-gray-100 font-medium text-lg">
            Ischa
          </p>
        </div>

        <div className="hidden md:flex space-x-12">
          <Link
            href="#home"
            className="text-gray-900 dark:text-gray-100 font-medium text-lg"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-900 dark:text-gray-100 font-medium text-lg"
          >
            About
          </Link>
          <Link
            href="#internship"
            className="text-gray-900 dark:text-gray-100 font-medium text-lg"
          >
            Internship
          </Link>
          <Link
            href="/projects"
            className="text-gray-900 dark:text-gray-100 font-medium text-lg"
          >
            Projects
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
    <Popover>
      <Popover.Button>
        <Bars3Icon className="h-10 w-10 bg text-gray-900 dark:text-gray-100" />
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
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
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
            className="container mx-auto fixed inset-x-4 top-8 z-50 origin-top rounded-xl bg-white p-6 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="absolute top-4 right-4 flex items-center justify-end">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <XMarkIcon className="h-8 w-8 text-gray-900 dark:text-gray-100" />
              </Popover.Button>
            </div>
            <nav>
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/articles">Articles</MobileNavItem>
                <MobileNavItem href="/projects">Projects</MobileNavItem>
                <MobileNavItem href="/speaking">Speaking</MobileNavItem>
                <MobileNavItem href="/uses">Uses</MobileNavItem>
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
        className="block py-2 text-gray-900 dark:text-gray-100 font-medium text-lg"
      >
        {children}
      </Popover.Button>
    </li>
  );
}

export default Header;
