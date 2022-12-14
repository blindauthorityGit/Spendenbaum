import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { isBrowser, isMobile } from "react-device-detect";
import { useWindowSize, useWindowWidth, useWindowHeight } from "@react-hook/window-size";

import { MdOutlineClose } from "react-icons/md";
const ModalMenu = (props) => {
    const onlyHeight = useWindowHeight();

    useEffect(() => {
        console.log(onlyHeight);
    }, []);

    return (
        <motion.div
            layout
            initial={{
                x: isMobile ? -500 : 0,
                y: isMobile ? 0 : 0,
                scale: 1,
                rotate: 0,
            }}
            animate={{ x: isMobile ? 0 : 20.14, y: props.closeMe ? 700 : 20.685, scale: 1, rotate: 0 }}
            transition={{ duration: "20ms", delay: props.delay, type: "spring" }}
            className={`absolute lg:fixed h-[${
                onlyHeight <= 640 ? 60 : 50
            }%] bottom-6 lg:bottom-auto  lg:h-full max-h-[100%] fade-in w-full lg:w-[90%] lg:w-[45%] min-h-[100%] bg-black p-8 lg:p-16 z-50 `}
        >
            <div
                className="closer absolute top-6 right-6 text-white text-4xl cursor-pointer transition hover:opacity-50 z-50"
                onClick={props.onClick}
            >
                <MdOutlineClose></MdOutlineClose>
            </div>
            {props.children}
        </motion.div>
    );
};

export default ModalMenu;
