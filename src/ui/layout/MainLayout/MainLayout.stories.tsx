import { ChakraProps } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MainLayout } from '@/ui/layout/MainLayout/MainLayout';

export default {
  title: 'Library/MainLayout',
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (
  args: ChakraProps | undefined
) => {
  return <MainLayout {...args} />;
};

export const Empty = Template.bind({});
Empty.args = {};
