import React from 'react'
import Image from "next/image"
import styles from "./Card.module.css";
import { AiFillGithub } from "react-icons/ai";

interface CardProps {
    image: string;
    title: string;
    url: string | null;
    subtitle: string | string[];
    startDate: string;
    endDate: string | null;
    description: string[];
  }

export default function Card({ image, title, url, subtitle, startDate, endDate, description }: CardProps) {
    return (
        <div className={styles.item}>    
            <div className={styles.image}>
                <Image 
                    src={image}
                    alt="logo"
                    width={150}
                    height={150}
                />
            </div>

            <div className={styles.itemDetails}>
                <div className={styles.title}>
                    <h3>{`${title}\u00A0`}</h3>
                    {url ? <a href={url} target='_blank'> <AiFillGithub size="2.5em" /> </a> : null}
                </div>
                <h4>{Array.isArray(subtitle) ? `${subtitle.join(', ')}` : subtitle}</h4>
                <p>{endDate ? `${startDate} — ${endDate}` : startDate}</p>
                <ul>
                    { 
                        description.map((point, id) => {
                            return <li key={id}> {point} </li>;
                        }) 
                    }
                </ul>
            </div>
        </div>
    )
}