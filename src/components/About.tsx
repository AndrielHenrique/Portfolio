"use client";
import Image from "next/image";
import React from "react";
import Book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const aboutItems = [
    {
        title: "Education",
        desc: "xxxx",
        icon: Book,
    },
    {
        title: "Problem-Solving",
        desc: "xxxx",
        icon: finance,
    },
    {
        title: "Experience",
        desc: "xxxx",
        icon: card,
    },
    {
        title: "Technical Skills",
        desc: "xxxx",
        icon: pc,
    },
];

const About = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-4 py-20" id="about">
            <h1 className="text-white text-6xl text-center font-semibold mb-16">
                About<span className="text-orange-400">Me</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {aboutItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex items-center gap-4 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110"
                    >
                        {/* Gradient BG */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>

                        {/* Icon */}
                        <Image src={item.icon} alt={item.title} className="w-[100px] h-auto z-10" />

                        {/* Text Content */}
                        <div className="z-10">
                            <h2 className="text-2xl font-bold text-white/80">{item.title}</h2>
                            <p className="text-lg text-white/70 mt-2">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
