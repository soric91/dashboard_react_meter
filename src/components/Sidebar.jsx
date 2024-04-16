import React from "react";
import './Sidebar.css'
import Logo from '../imgs/meter.png'
const Sidebar =() => {
    return (
        <div className="Sidebar">
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt="" />
                    <span>
                        Emsi<span>M</span>eter
                    </span>
            </div>
        </div>
    )
}

export default Sidebar