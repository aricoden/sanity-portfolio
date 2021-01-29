import React from "react"

// Below allows users to click the nav links and be taken to the respective pages (not have to type the URL in the URL search bar)
import { NavLink } from "react-router-dom";

// React Social Icons
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-8 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Kapehe
                    </NavLink>
                    <NavLink to="/post" 
                    activeClassName="text-red-100- bg-red-700"  
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Blog Post
                    </NavLink>
                    <NavLink to="/project" 
                    activeClassName="text-red-100- bg-red-700"  
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Project
                    </NavLink>
                    <NavLink to="/about" 
                    activeClassName="text-red-100- bg-red-700"  
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/kapehe_ok" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}}/>
                    <SocialIcon url="https://www.youtube.com/c/kapehe" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/kapehe" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}}/>

                </div>    


            </div>
        </header>
    )
}