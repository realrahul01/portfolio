import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";


const Header=()=>{

const [isMenu, setIsMenu] = useState(false)    


const menuHandler=()=>{
    setIsMenu((prev)=>{
        return !prev
    })
}

    return (
        <nav>
            <div className="left_nav">
                <h1>Portfolio</h1>
            </div>
            {isMenu && (
                    <div className="menu_one">
                    <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#project">Projects</a></li>
                    </ul>
                </div>
                )}
            <div className="right_nav">
                <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#project">Projects</a></li>
                </ul>
            </div>
                <div className="menu">
                    {isMenu && (
                        <TfiClose onClick={menuHandler}/>
                    )}
                    {!isMenu && (
                        <CiMenuFries onClick={menuHandler}/>
                    )}
                
                </div>
                
        </nav>
    )
}

export default Header;