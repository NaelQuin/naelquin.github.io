import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const ProjectList = [
  {
    title: 'Metabase Education Analytics',
    description: 'Real-time data visualization of student performance.',
    link: 'https://naelquin.github.io/education_dashboard_roadmap/',
  },
  {
    title: 'Infrastructure Roadmap',
    description: 'Documentation for the server and database setup.',
    link: '/docs/roadmap/introduction', // Internal link
  },
];

export default function Home() {
  return (
    <Layout title="Education Hub">
      <main style={{padding: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
        <h1>My Education Projects</h1>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
          {ProjectList.map((project, idx) => (
            <div key={idx} style={{border: '1px solid #ddd', padding: '1rem', borderRadius: '8px'}}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link className="button button--primary" to={project.link}>
                View Project
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}