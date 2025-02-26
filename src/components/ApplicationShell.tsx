'use client'

import "../app/globals.css";
import { client } from "../lib/client";
import { ConnectButton } from "thirdweb/react";
import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

//Blockchain stuff
const activeChain = "ethereum";


// Optionally, if you have these defined elsewhere, you can import them.
const navigation = [
  { name: 'Home', href: '/', icon: '/images/home.svg', current: false },
  { name: 'Airdrop', href: '/airdrop', icon: '/images/airdrops.svg', current: false },
  { name: 'Staking', href: '/staking', icon: '/images/staking.svg', current: false },
  { name: 'Lucky Packs', href: '/luckypacks', icon:'/images/lucky.svg', current: false },
  { name: 'NFT Marketplace', href: '/market', icon: '/images/market.svg', current: false },
  
  { name: 'Redemptions', href: '/redemption', icon: '/images/redemption.svg', current: false },
  { name: 'Learn More', href: '#', icon: ChartPieIcon, current: false },
  { name: 'Contact Us', href: '#', icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: 'My Collection', href: '#', initial: 'C', current: false },
  { id: 2, name: 'My Lucky Packs', href: '#', initial: 'L', current: false },
  { id: 3, name: 'My Tokens', href: '/tokens', initial: 'T', current: false },
];
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type ApplicationShellProps = {
  children: React.ReactNode
};

export default function ApplicationShell({ children }: ApplicationShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>
            {/* Mobile Sidebar Content */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
              <div className="flex h-16 shrink-0 items-center">
                <img
                  alt="Pokecoin"
                  src="/images/logo.svg"
                  className="h-8 w-auto"
                />
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-50 text-gray-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                            )}
                          >
                            {typeof item.icon === "string" ? (
  <img
    src={item.icon}
    alt={item.name}
    className={classNames(
      item.current ? 'opacity-100' : 'opacity-70 group-hover:opacity-100',
      'h-6 w-6 shrink-0'
    )}
  />
) : (
  <item.icon
    className={classNames(
      item.current ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-600',
      'h-6 w-6 shrink-0'
    )}
    aria-hidden="true"
  />
)}
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <div className="text-xs/6 font-semibold text-gray-400">My Profile</div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                      {teams.map((team) => (
                        <li key={team.name}>
                          <a
                            href={team.href}
                            className={classNames(
                              team.current
                                ? 'bg-gray-50 text-gray-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                            )}
                          >
                            <span
                              className={classNames(
                                team.current
                                  ? 'border-gray-600 text-gray-600'
                                  : 'border-gray-200 text-gray-400 group-hover:border-gray-600 group-hover:text-gray-600',
                                'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium'
                              )}
                            >
                              {team.initial}
                            </span>
                            <span className="truncate">{team.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="mt-auto">
                    <a
                      href="#"
                      className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-600"
                    >
                      <Cog6ToothIcon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-gray-400 group-hover:text-gray-600"
                      />
                      Settings
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <img
              alt="Your Company"
              src="/images/logo.svg"
              className="h-8 w-auto"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-50 text-gray-600'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-600',
                          'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                        )}
                      >
                        {typeof item.icon === "string" ? (
  <img
    src={item.icon}
    alt={item.name}
    className="h-6 w-6 shrink-0"
  />
) : (
  <item.icon
    aria-hidden="true"
    className={classNames(
      item.current
        ? 'text-gray-600'
        : 'text-gray-400 group-hover:text-gray-600',
      'h-6 w-6 shrink-0'
    )}
  />
)}

                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs/6 font-semibold text-gray-400">My Stuff</div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={classNames(
                          team.current
                            ? 'bg-gray-50 text-gray-600'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-600',
                          'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                        )}
                      >
                        <span
                          className={classNames(
                            team.current
                              ? 'border-gray-600 text-gray-600'
                              : 'border-gray-200 text-gray-400 group-hover:border-gray-600 group-hover:text-gray-600',
                            'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium'
                          )}
                        >
                          {team.initial}
                        </span>
                        <span className="truncate">{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <a
                  href="#"
                  className="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-600"
                >
                  <Cog6ToothIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-gray-400 group-hover:text-gray-600"
                  />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 lg:pl-72">
        {/* Header */}
        <header className="h-16 flex items-center justify-between gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 fixed lg:px-8 top-0 w-full z-50">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden -m-2.5 p-2.5 text-gray-700">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
          
          
          <div className="flex items-center gap-x-4">

          <div>
            <p>
              Graduate from the Lisk Incubator - connect with Lisk
              </p>
              </div>
          
            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <img src='/images/lisk.svg' className="h-6 w-auto" />
            </button>
            <ConnectButton client={client} />


            
          </div>
        </header>

        {/* Main Body */}
        <main className="mt-16 flex-1 p-4 overflow-auto">
          {children}
        </main>
      </div>
    </>
  )
}
