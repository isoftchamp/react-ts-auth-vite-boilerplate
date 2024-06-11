import {Link, useNavigate} from "react-router-dom";
import {Disclosure} from "@headlessui/react";
import {ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

import {useAuth} from "@/lib/auth-util";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Account", href: "/account" },
];

export default function Example() {
  const {isAuthenticated, logoutUser} = useAuth();
  const navigate = useNavigate();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" onClick={() => isAuthenticated ? logoutUser() : navigate("/login")} >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              {isAuthenticated && <ArrowLeftStartOnRectangleIcon className="h-6 w-6" aria-hidden="true" />}
              {!isAuthenticated && <ArrowLeftEndOnRectangleIcon className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
