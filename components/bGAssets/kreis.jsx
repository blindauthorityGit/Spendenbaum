import { colors } from "../../config";
import { motion } from "framer-motion";

const Kreis = (props) => {
    return (
        <motion.div
            layout
            initial={{
                scale: 0,
            }}
            animate={{ scale: 1 }}
            transition={{ duration: props.duration, delay: 1.5, type: "spring" }}
            className={`w-56 h-56 md:w-96 md:h-96 rounded-full absolute top-[12%] left-[20%] md:left-[28%] lg:top-[15%] lg:left-[15%] z-0  bg-[#f5f5f5]`}
            onAnimationComplete={props.onAnimationComplete}
            onClick={props.onClick}
        ></motion.div>
    );
    // return <div className={`w-96 h-96 rounded-full  bg-[${colors.primaryColor.toLowerCase()}]`}></div>;
};

export default Kreis;
