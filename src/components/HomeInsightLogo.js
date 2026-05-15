import React from 'react';
import Link from '@docusaurus/Link'; // Import Docusaurus Link
import { useColorMode } from '@docusaurus/theme-common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/material';

export default function HomeLogo() {
  const { colorMode } = useColorMode();

  const insightSrc = colorMode === 'dark' ? 'img/insightWhite.png' : 'img/insight.png';
  const piagetSrc = colorMode === 'dark' ? 'img/piagetWhite.png' : 'img/piaget.png';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // Important: Reset any possible inherited padding/margins from Docusaurus
        margin: '0 auto',
        padding: { xs: '2rem 0', md: '0' }, 
        gap: '2rem',
        minHeight: '40vh',
        overflow: 'hidden' // Prevents the "scroll to the right" bug
      }}
    >
      {/* Insight Logo */}
      <Link to="https://investigacao.ipiaget.org/" target="_blank" style={{ display: 'block' }}>
        <Box
          component="img"
          src={insightSrc}
          alt="INSIGHT Logo"
          sx={{ 
            height: { xs: 'auto', md: '120px' }, // Auto height on mobile to keep aspect ratio
            width: { xs: '100%', md: 'auto' },   // Take up 80% of screen width on mobile
            maxWidth: '300px',                  // Don't let it get too big
            display: 'block',
            objectFit: 'contain'
          }}
        />
      </Link>

      {/* Plus Sign - Hidden on mobile */}
      <Box 
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <FontAwesomeIcon
          icon={faPlus}
          style={{
            fontSize: '3rem',
            color: colorMode === 'dark' ? '#fff' : '#333'
          }}
        />
      </Box>

      {/* Piaget Logo */}
      <Link to="https://ipiaget.org/" target="_blank" style={{ display: 'block' }}>
        <Box
          component="img"
          src={piagetSrc}
          alt="Piaget Logo"
          sx={{ 
            height: { xs: 'auto', md: '120px' },
            width: { xs: '100%', md: 'auto' },
            maxWidth: '300px',
            display: 'block',
            objectFit: 'contain'
          }}
        />
      </Link>
    </Box>
  );
}