import React from "react";
import { Link } from "react-router-dom";

export  default function Footer (){
    return (
        <div className="bg-white">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <Link to="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            About
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link to="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Blog
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link to="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Team
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link to="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Pricing
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link to="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Contact
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link to="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Terms
                        </Link>
                    </div>
                </nav>
              
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    © 2023 kavinsGadgets, Inc. All rights reserved.
                </p>
            </div>
        </div>
    )
}