import { configure } from '@storybook/react';

configure(loadStories, module);

function loadStories() {
  loadComponentStories();
}

function loadComponentStories() {
  const componentStories = require.context('../src/components', true, /\.stories\.js$/);

  componentStories.keys().forEach(filename => componentStories(filename));
}
