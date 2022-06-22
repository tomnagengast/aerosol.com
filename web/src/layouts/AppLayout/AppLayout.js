import { Link, routes } from '@redwoodjs/router'

const AppLayout = ({ children }) => {
    return (
        <>
            <header>
                <nav className="bg-gray-800">
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                    <svg
                                        className="hidden h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <span className="block lg:hidden w-auto">
                                        ⛳️
                                    </span>
                                    <span className="hidden lg:block w-auto text-white">
                                        Aerosol
                                    </span>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        <Link
                                            to={routes.home()}
                                            className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to={routes.about()}
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            About
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="ml-3 relative">
                                    <div>
                                        <button
                                            type="button"
                                            className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                            id="user-menu-button"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                        >
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </button>
                                    </div>

                                    <div
                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="user-menu-button"
                                        tabIndex="-1"
                                    >
                                        <Link
                                            to="profile"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                        >
                                            Your Profile
                                        </Link>
                                        <Link
                                            to="settings"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                        >
                                            Settings
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                to={routes.home()}
                                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                to={routes.about()}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                About
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
        </>
    )
}

export default AppLayout
