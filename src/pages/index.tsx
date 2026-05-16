import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Box, Typography } from '@mui/material'; // Using MUI for easy layout

import HomeLogo from '../components/HomeInsightLogo';
import { ProjectList } from '../data/ProjectList';

export default function Home() {
  return (
    <Layout title="">
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Responsive Title */}
        <Box
          component="h1"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: '1rem',
            marginBottom: '2rem',
            // Font size: 1.8rem on mobile, 2.5rem on desktop
            fontSize: {
              xs: '1.8rem', 
              sm: '2.2rem',
              md: '2.5rem',
            },
            // Ensures the text doesn't hit the screen edges on very small phones
            paddingX: '10px' 
          }}
        >
          PsyTech Lab - Roadmaps
        </Box>

        {/* The rest of your responsive Grid Container remains here */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: '1fr 1fr', 
              md: 'repeat(3, 1fr)' 
            },
            gap: '20px',
            marginBottom: '3rem',
          }}
        >
          {ProjectList.map((project, idx) => (
            <Box 
              key={idx} 
              sx={{
                border: '1px solid #ddd', 
                padding: '1.5rem', 
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link className="button button--primary" to={project.link}>
                View Roadmap
              </Link>
            </Box>
          ))}
        </Box>

        <HomeLogo />
      </main>
    </Layout>
  );
}