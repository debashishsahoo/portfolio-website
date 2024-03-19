import React from 'react'
import Image from "next/image"
import styles from "./Card.module.css";

interface CardProps {
    image: string;
    title: string;
    subtitle: string | string[];
    startDate: string;
    endDate: string | null;
    description: string[];
  }

export default function Card({ image, title, subtitle, startDate, endDate, description }: CardProps) {
    return (
        <div className={styles.item}>        
            <div className={styles.itemDetails}>
                <h3>{`${title}`}</h3>
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