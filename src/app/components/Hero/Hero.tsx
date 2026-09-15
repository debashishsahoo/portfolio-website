import React from 'react'
import Image from "next/image"
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.profile}>
        <div>
          <h1 className={styles.heading}>
              <span>Debashish Sahoo</span>
          </h1>
        </div>

        <div className={styles.bio}>
            Tech enthusiast with a passion for software development and building apps.<br></br><br></br>
            Currently working as a Software Engineer at ANZ.<br></br><br></br>
            Experience with Python, JavaScript, TypeScript, Java, Swift, Go, React, Django, GCP, Firebase, SQL, HTML, and CSS.<br></br><br></br>
            Quick learner and always eager to learn new tools and concepts. Big into sports and music.<br></br>
        </div>

        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/sahoo-debashish/" target="_blank" className="bg-white hover:bg-gray-300 px-6 py-3 rounded-full">
            <AiFillLinkedin size="2.5em" style={{ color: "#0077b5" }}/>
          </a>
          <a href="https://github.com/debashishsahoo" target="_blank" className="bg-white hover:bg-gray-300 px-6 py-3 rounded-full">
            <AiFillGithub size="2.5em" style={{ color: "black" }} />
          </a>
        </div>
      </div>

      <div className={styles.image}>
          <Image 
            src="/media/Photo_DebashishSahoo.png"
            alt="headshot"
            fill
            style={{objectFit:"contain"}} 
          />
      </div>
    </section>
  )
}