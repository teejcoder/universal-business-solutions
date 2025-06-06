import React from "react";

Props: {}

const Footer = (Props: {}) => {

    return(
        <footer className="w-full p-6 flex items-center justify-center border">
            <span className="text-xs">Copyright | {new Date().getFullYear()}</span>
        </footer>
    )
}

export default Footer;