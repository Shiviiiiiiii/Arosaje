import { motion } from "framer-motion";

const animation = {
    initial: {opacity: 0, x: 0, y: 20},
    animate: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: 20},
}

const Animation = ({ children }) => {
    return (
        <motion.div variants={animation} initial='initial' animate='animate' exit='exit' transition={{ duration: 1, type: 'easeInOut'}} style={{ position: 'relative' }} >
            {children}
        </motion.div>
    )
}

export default Animation;