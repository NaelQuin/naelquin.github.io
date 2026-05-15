import React from 'react';
import Head from '@docusaurus/Head';
import {useColorMode} from '@docusaurus/theme-common';

function DynamicFavicon() {
  const {colorMode} = useColorMode();
  const favicon = colorMode === 'dark' ? '/img/faviconDark.ico' : '/img/faviconLight.ico';

  return (
    <Head>
      <link rel="icon" href={favicon} />
    </Head>
  );
}

export default DynamicFavicon;