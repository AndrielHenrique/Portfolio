"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import project from "../assets/project.jpg"

const projects = [
    {
        title: "None",
        desc: "Lorem ipsum dolor sit amet. Aut iure assumenda ex delectus ipsam aut itaque molestiae ut laboriosam voluptas ex molestias molestiae vel impedit omnis ut aliquam omnis. Aut quos sint id ullam galisum ut necessitatibus quisquam et voluptatem ipsam et omnis quidem. Qui pariatur sequi eum pariatur galisum aut quisquam modi est placeat doloribus sed quos animi et ipsa quia.",
        devStack: "NextJS",
        link: "#",
        git: "#",
        src: project
    },
    {
        title: "None",
        desc: "Lorem ipsum dolor sit amet. Aut iure assumenda ex delectus ipsam aut itaque molestiae ut laboriosam voluptas ex molestias molestiae vel impedit omnis ut aliquam omnis. Aut quos sint id ullam galisum ut necessitatibus quisquam et voluptatem ipsam et omnis quidem. Qui pariatur sequi eum pariatur galisum aut quisquam modi est placeat doloribus sed quos animi et ipsa quia.",
        devStack: "NextJS",
        link: "#",
        git: "#",
        src: project
    },
    {
        title: "None",
        desc: "Lorem ipsum dolor sit amet. Aut iure assumenda ex delectus ipsam aut itaque molestiae ut laboriosam voluptas ex molestias molestiae vel impedit omnis ut aliquam omnis. Aut quos sint id ullam galisum ut necessitatibus quisquam et voluptatem ipsam et omnis quidem. Qui pariatur sequi eum pariatur galisum aut quisquam modi est placeat doloribus sed quos animi et ipsa quia.",
        devStack: "NextJS",
        link: "#",
        git: "#",
        src: project
    }
]
const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">
            <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold my-12">
                Selected <span className="text-orange-400">Projects</span>
            </h1>
            <div className="px-6 md-px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row gap-12"}`}
                    >

                        <div className="space-y-2 max-w-[550px]">
                            <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                            <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                <a href={project.link} className="mr-6">Link</a>
                                <a href={project.git} className="mr-6">Git</a>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border
                                    rounded border-gray-700 hover:scale-120
                            "></Image>
                        </div>
                    </motion.div>
                ))}

            </div>


        </div>
    )
}

export default Portfolio;