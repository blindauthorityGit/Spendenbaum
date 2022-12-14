import React, { useState, useEffect, useRef, forwardRef } from "react";
import { motion } from "framer-motion";
import ToolTip from "./toolTip";
import { useDroppable } from "@dnd-kit/core";
import { isBrowser, isMobile } from "react-device-detect";

import Droppable from "../dragNDrop/droppable";

const Kugel = (props, ref) => {
    const toolTipRef = useRef();
    useEffect(() => {
        // console.log(toolTipRef);
    }, [toolTipRef.current]);

    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
        disabled: props.disabled,
    });
    const style = {
        color: isOver ? "green" : undefined,
    };

    return (
        <div
            className={`kugel relative mx-1 lg:mx-1 flex h-full items-center text-bold ${
                isOver ? "bg-red-600 " : ""
            } justify-center text-white ${props.size} ${props.klasse} rounded-full ${props.color} ${props.textColor}`}
            id={props.id}
            data-isClaimed={props.isClaimed}
            cat={props.cat}
            ref={setNodeRef}
            style={props.style}
            key={props.key}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            disabled={props.disabled}
            onAnimationEnd={props.onAnimationEnd}
            data-isWinner={props.winner}
        >
            <>
                <div className="hidden xl:block text-xs pointer-events-none">{props.name}</div>
                {/* {props.name} */}
                {props.children}
            </>
            <ToolTip
                klasse={`absolute tooltip hidden z-20 lg:right-[${props.abstand}rem] bg-black py-4 lg:py-6 px-4 lg:px-6 min-w-[13rem] max-w-[18rem] md:min-w-[15rem] lg:font-bold rounded-xl ${props.toolTipColor} ${props.toolTipAfterColor}`}
                name={props.fullName}
                sum={props.sum}
                isAnon={props.isAnon}
                comment={props.comment}
                style={props.toolTipStyle}
                // ref={toolTipRef}
                avatrSrc={props.avatrSrc}
                onMouseLeave={props.toolTiponMouseLeave}
                imgData={props.imgData}
                tooltipID={props.id}
                // onClickAvatar={props.onClickAvatar}
            ></ToolTip>
        </div>
    );
};

export default forwardRef(Kugel);
