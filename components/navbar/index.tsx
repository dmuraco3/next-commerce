import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {FaUser, FaUserCircle} from 'react-icons/fa'

import { signIn, signOut, useSession } from 'next-auth/react'
const NavLink: React.FC<{to: string,}> = ({to, children}) => {
    const router = useRouter()
    let basePath = router.asPath.split('/')[1]
    return <Link href={to}>
        <span className={`mx-4 border-b-2 border-white ${"/" + basePath === to ? "border-black" : "" } hover:border-black hover:cursor-pointer font-medium text-lg`}>
            {children}
        </span>
    </Link>
}

const MobileNavLink: React.FC<{to: string, setOpen: React.Dispatch<React.SetStateAction<boolean>>}> = ({to, children, setOpen}) => {
    const router = useRouter()
    let basePath = router.asPath.split('/')[1]
    return <span onClick={() => {
        setOpen(false)
        router.push(to)
    }} className={`mx-4  ${"/" + basePath === to ? "font-semibold" : "" } hover:cursor-pointer font-medium text-lg my-2`}>
            {children}
    </span>
}


const MobileNav: React.FC<{open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}> = ({open, setOpen}) => {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen z-40 bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
            <a className="text-2xl font-semibold font-sans relative" href="/">
                    <Image src="/LOGOLOGO.svg" width={75} height={75} className=""/>
                </a>
            </div>
            <div className="flex flex-col ml-4">
                    <MobileNavLink to="/" setOpen={setOpen}>
                        HOME
                    </MobileNavLink>
                    <MobileNavLink to="/contact" setOpen={setOpen}>
                        CONTACT
                    </MobileNavLink>
                    <MobileNavLink to="/about" setOpen={setOpen}>
                        ABOUT
                    </MobileNavLink>
            </div>  
        </div>
    )
}

const Navbar: React.FC = ()  => {
    const [open, setOpen] = useState(false)
    
    const [accountNavOpen, setAccountNavOpen] = useState(false)

    const {data:session} = useSession()

    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center font-mono">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold font-sans relative" href="/">
                    <Image src="/LOGOLOGO.svg" width={75} height={75} className=""/>
                </a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <div className="flex items-center">

                        <NavLink to="/">
                            HOME
                        </NavLink>
                        <NavLink to="/contact">
                            CONTACT
                        </NavLink>
                        <NavLink to="/about">
                            ABOUT
                        </NavLink>
                    </div>
                    {session ? <div className="flex justify-center border-l-2 border-gray-200 pl-4 relative">
                        <button onClick={(e) => {
                            e.preventDefault()
                            setAccountNavOpen(!accountNavOpen)
                        }}>
                            <FaUserCircle size={30} className="text-gray-500 filter drop-shadow-lg bg-white rounded-full hover:cursor-pointer"/>
                        </button>
                        <div className={`absolute top-10 right-0  w-40 h-60 bg-white filter drop-shadow-xl border border-gray-200 rounded-lg flex flex-col justify-end p-4 ${accountNavOpen ? "flex" : "hidden"}`}>
                            <button onClick={(e) => {
                                e.preventDefault()
                                signOut()
                            }}>
                                Sign Out
                            </button>
                        </div>
                    </div> : <div>
                        <button onClick={(e) => {
                            e.preventDefault()
                            signIn()
                        }}
                            className="px-3 py-2 bg-primary rounded-md filter drop-shadow-md hover:drop-shadow-xl active:drop-shadow-sm"
                        >
                            Sign In
                        </button>    
                    </div>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;