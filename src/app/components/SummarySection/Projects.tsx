import React from 'react'
import { Project } from "../../types/types";
import Card from '../Card/Card';
import styles from "./SummarySection.module.css";

interface Props {
    projects: Project[];
}

export default function Projects({ projects }: Props) {
  return (
    <section className={styles.container}>
        <h2 className={styles.heading}>
            Projects
        </h2>

        <div>
            { 
                projects.map((item: Project, id: number) => {
                    return (     
                        <Card
                            key={id}
                            image={item.logoSrc}
                            title={item.name}
                            subtitle={item.tools}
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