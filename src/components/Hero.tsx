"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import profilepic1 from "../assets/profilepic1.png";
import cursor from "../assets/cursor.png";
import lightning from "../assets/lightning.png";

const Hero = () => {
    return (
        <section
            id="hero"
            className="py-24 relative overflow-hidden bg-[linear-gradient(to_bottom,#0F0F0F,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)] scroll-smooth"
        >
            {/* Radial Background Glow */}
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"
            />

            <div className="relative z-10 flex flex-col items-center text-center px-4">
                {/* Headings */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight"
                >
                    <h1 className="text-[#98B4CE] drop-shadow-md">Hi, I am</h1>
                    <h1 className="text-[#E48A57] drop-shadow-md">Andriel Henrique</h1>
                </motion.div>

                {/* Floating Icons */}
                <motion.div
                    className="hidden md:block absolute left-[5%] top-[180px] sm:left-[150px]"
                    drag
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                >
                    <Image
                        src={cursor}
                        height={150}
                        width={150}
                        alt="cursor icon"
                        draggable={false}
                        priority
                    />
                </motion.div>

                <motion.div
                    className="hidden md:block absolute right-[5%] top-[80px] sm:right-[150px]"
                    drag
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                >
                    <Image
                        src={lightning}
                        height={130}
                        width={130}
                        alt="lightning icon"
                        draggable={false}
                        priority
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg sm:text-xl max-w-[500px] mt-8 text-[#C5C5C5] drop-shadow-sm"
                >
                    I am a full-stack developer focused on Back-End
                </motion.p>

                {/* Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="mt-16 sm:mt-8 drop-shadow-lg"
                >
                    <Image
                        src={profilepic1}
                        height={1000}
                        width={1000}
                        alt="Andriel Henrique"
                        className="mx-auto h-auto w-[120%] max-w-[300px] sm:max-w-[360px]"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
