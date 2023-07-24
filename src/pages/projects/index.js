import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import ProjectList from '../../../data/projects';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
    return (
        <Layout title={'Projects'}>
            <main className="margin-vert--lg">
                <section className="margin-top--lg margin-bottom--xl">
                    <div className="container">
						<ul className={clsx('clean-list', styles.showcaseList)}>
							{ProjectList.map((project) => (
								<ProjectCard key={project.title} project={project} />
							))}
						</ul>
                    </div>
                </section>
            </main>
        </Layout>
    )
}