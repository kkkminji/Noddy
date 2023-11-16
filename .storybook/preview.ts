import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        // color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        web: {
          name: 'web',
          styles: {
            width: '1920px',
            height: '1080px',
          },
        },
        HD: {
          name: 'HD',
          styles: {
            width: '1280px',
            height: '720px',
          },
        },
        QHD: {
          name: 'QHD',
          styles: {
            width: '2560px',
            height: '1440px',
          },
        },
        mobile: {
          name: 'mobile',
          styles: {
            width: '720px',
            height: '1280px',
          },
        },
      },
      defaultViewport: 'web',
    },
  },
  // decorators: [withThemeProvider],
};

export default preview;
