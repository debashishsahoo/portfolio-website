import React from 'react'
import Image from "next/image"
import styles from "./Card.module.css";
import type { Role } from "../../types/types";
import { AiFillGithub } from "react-icons/ai";

interface CardProps {
    image: string;
    title: string;
    url: string | null;
    subtitle: string | string[];
    location?: string;
    startDate: string;
    endDate: string | null;
    description?: string[];
    roles?: Role[];
  }

function formatDates(startDate: string, endDate: string | null) {
    return endDate ? `${startDate} — ${endDate}` : startDate;
}

export default function Card({ image, title, url, subtitle, location, startDate, endDate, description, roles }: CardProps) {
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
                    <h3>{`${title} `}</h3>
                    {url ? <a href={url} target='_blank'> <AiFillGithub size="2.5em" /> </a> : null}
                </div>
                <h4>{Array.isArray(subtitle) ? `${subtitle.join(', ')}` : subtitle}</h4>
                <p>{location ? `${formatDates(startDate, endDate)} · ${location}` : formatDates(startDate, endDate)}</p>
                { 
                    description ? 
                        <ul>
                            { description.map((point, id) => <li key={id}> {point} </li>) }
                        </ul> 
                    : null 
                }
                { 
                    roles ? 
                        <div className={styles.roles}>
                            { 
                                roles.map((item: Role, id: number) => {
                                    return (
                                        <div className={styles.role} key={id}>
                                            <h5>{item.role}</h5>
                                            <p className={styles.roleDates}>{formatDates(item.startDate, item.endDate)}</p>
                                            <ul>
                                                { item.description.map((point, id) => <li key={id}> {point} </li>) }
                                            </ul>
                                        </div>
                                    );
                                })
                            }
                        </div> 
                    : null 
                }
            </div>
        </div>
    )
}
