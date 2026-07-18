"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjImg1 from "./../../assets/projects/p_1.JPG";
import ProjImg2 from "./../../assets/projects/p1.JPEG";
import ProjImg3 from "./../../assets/projects/p-2.JPG";
import ProjImg4 from "./../../assets/projects/p4.png";
import ProjImg5 from "./../../assets/projects/p5.jpg";

const ProjData = [
  {
    id: 1,
    title: "Prescripto Doctors App",
    img: ProjImg1,
    link: "https://prescripto-doctors-frontend-only.netlify.app/",
    link2:"https://github.com/RehmanGhoto97/Prescripto-web-app-frontend-only.git",
    descr:
      "A UI clone of the Prescripto Doctors App built to explore responsive design principles and enhance user interaction.",
    delay: 1.2,
  },
  {
    id: 2,
    title: "UI Clone Web Page",
    img: ProjImg2,
    link: "https://food-delivery-webapp97.netlify.app/",
    link2:"https://github.com/RehmanGhoto97/food-delivery-web-app.git",
    descr:
      "Developed a responsive UI clone to improve skills in design frameworks and CSS layout techniques.",
    delay: 1.6,
  },
  {
    id: 3,
    title: "Hotel Management System",
    img: ProjImg3,
    link: "https://hotel-management-system-mini.netlify.app/",
    link2:"https://github.com/RehmanGhoto97/Hotel-Management-System.git",
    descr:
      "Created a Hotel Management System with React.js and modern UI frameworks, featuring a sleek, responsive layout.",
    delay: 2,
  },
  {
    id: 4,
    title: "School Management System",
    img: ProjImg4,
    link: "https://owe-we97.vercel.app/",
    link2:"https://github.com/ourworldofeducation-owe/owe-frontend.git",
    descr:
      "Built a full-stack School Management System using React.js, Node.js, Supabase, and Redux Toolkit with secure authentication, role- based access control, and separate Admin and Student dashboards.",
    delay: 2,
  },
    {
    id: 5,
    title: "Tic Tac Toe Game",
    img: ProjImg5,
    link: "https://tic-tac-toe-game-by-rehman.netlify.app/",
    link2:"https://github.com/RehmanGhoto97/tic-tac-toe-game-reactjs.git",
    descr:
      "A modern take on the classic game built with React.js and vanilla CSS. The application uses React Context API for efficient state management, delivering a responsive and interactive two-player experience.",
    delay: 2,
  },
];
const Projects = () => {
  return (
    <section id="priects" className="bg-black text-white">
      <div className="container py-20 xl:py-36 space-y-36">
        <div className="relative">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-3xl lg:text-4xl mb-20 tracking-widest font-bold text-center uppercase relative z-20"
          >
            My Projects
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold"
          >
            Projects
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {ProjData.map((proj) => (
            <div
              key={proj.id}
              className="bg-black hover:red-shadow border-2 border-primary/80 p-4 rounded-xl hover:scale-110 duration-300 group space-y-5"
            >
              <Image
                loading="lazy"
                decoding="async"
                data-nimg="1"
                src={proj.img}
                alt="Project "
                width={3264}
                height={1836}
                className="w-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: proj.delay }}
                className="space-y-2 p-4"
              >
                <h1>{proj.title}</h1>
                <p className="text-sm line-clamp-2">{proj.descr}</p>
              </motion.div>
              <div className="hidden group-hover:flex justify-around items-center duration-300">
                <a target="_blank" href={proj.link}>
                  <button className="border-2 border-white px-4 py-2 rounded-lg">
                    Live
                  </button>
                </a>
                <a target="_blank" href={proj.link2}>
                  <button className="btn">View Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
