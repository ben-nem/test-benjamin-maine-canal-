import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { HeaderDeprecated } from './HeaderDeprecated';

export default {
  title: 'Library/HeaderDeprecated',
  component: HeaderDeprecated,
} as ComponentMeta<typeof HeaderDeprecated>;

const Template: ComponentStory<typeof HeaderDeprecated> = (args) => (
  <HeaderDeprecated {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
