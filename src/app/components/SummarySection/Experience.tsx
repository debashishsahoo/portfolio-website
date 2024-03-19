import React from 'react'
import { Experience } from "../../types/types";
import Card from '../Card/Card';
import styles from "./SummarySection.module.css";

interface Props {
    experience: Experience[];
}

export default function Experience({ experience }: Props) {
  return (
    <section className={styles.container}>
        <h2 className={styles.heading}>
            Experience
        </h2>

        <div>
            { 
                experience.map((item: Experience, id: number) => {
                    return (
                        <Card
                            key={id}
                            image={item.logoSrc}
                            title={item.company}
                            subtitle={item.role}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            description={item.description}
                        />
                    );
                })
            }
        </div>
    </section>
  )
}