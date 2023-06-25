import React from "react";
import clsx from 'clsx';
import Image from "@theme/IdealImage";
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function ProjectTags({tags}) {
    console.log(tags);
    return (
        <ul className={clsx('card__footer', styles.cardFooter)}>
            {tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                    <span className={styles.textLabel}>{tag}</span>
                    {/* <span className={styles.colorLabel} style={{backgroundColor: 'grey'}} /> */}
                </li>
            ))}
        </ul>
    )
}

export default function ProjectCard({project}) {
    return (
        <li key={project.title} className={clsx('card shadow--md', styles.projectCard)}>
            <Link href={project.website} className={styles.showcaseCardLink}>
                <div className={clsx('card__image', styles.showcaseCardImage)}>
                    <Image img={project.preview} />
                </div>
            </Link>
            <div className="card__body">
                <div className={clsx(styles.showcaseCardHeader)}>
                <Heading as="h4" className={styles.showcaseCardTitle}>
                    <Link href={project.website} className={styles.showcaseCardLink}>
                    {project.title}
                    </Link>
                </Heading>
                {project.source && (
                    <Link
                    href={project.source}
                    className={clsx(
                        'button button--secondary button--sm',
                        styles.showcaseCardSrcBtn,
                    )}>
                        source
                    </Link>
                )}
                </div>
                <p className={styles.showcaseCardBody}>{project.description}</p>
            </div>
            <ProjectTags tags={project.tags} />
        </li>
      );
}