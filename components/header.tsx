import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import React, { useEffect } from "react"

function Header() {

    const [isScrolled, setIsScrolled] = React.useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY>0){
                setIsScrolled(true)
            }
            else{
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll",handleScroll)
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])

    return (
        <header className={`${isScrolled && "bg-[#141414]"} z-50 `}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"/>

                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV</li>
                    <li className="headerLink">Shows</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className="flex item-center space-x-4 text-sm font-light">
                <MagnifyingGlassIcon  className="hidden sm:inline h-6 w-6"  />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className="h-6 w-6"></BellIcon>
                <Link href={"/account"}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
                    alt=""
                    width={25}
                    height={25}
                    className="cursor-pointer rounded"
                    />
                </Link>
            </div>
        </header>
    )
}

export default Header
