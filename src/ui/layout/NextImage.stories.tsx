import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import NextImage from '@/ui/NextImage';

export default {
  title: 'Library/NextImage',
  component: NextImage,
} as ComponentMeta<typeof NextImage>;

const Template: ComponentStory<typeof NextImage> = (args) => {
  return <NextImage {...args} />;
};

export const WithSkeleton = Template.bind({});
WithSkeleton.args = {
  alt: 'Icon',
  className: 'w-32 md:w-40',
  height: '180',
  src: '/favicon/apple-touch-icon.png',
  useSkeleton: true,
  width: '180',
};

export const WithoutSkeleton = Template.bind({});
WithoutSkeleton.args = {
  alt: 'Icon',
  className: 'w-32 md:w-40',
  height: '180',
  src: '/favicon/apple-touch-icon.png',
  width: '180',
};
