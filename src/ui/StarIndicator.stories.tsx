import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StarIndicator, StarIndicatorProps } from '@/ui/StarIndicator';

export default {
  title: 'Library/StarIndicator',
  component: StarIndicator,
  argTypes: {
    numberOfStar: { control: { type: 'range', min: 0, max: 5, step: 0.5 } },
  },
} as ComponentMeta<typeof StarIndicator>;

const Template: ComponentStory<typeof StarIndicator> = (
  args: StarIndicatorProps
) => {
  return <StarIndicator {...args} />;
};

export const None = Template.bind({});
None.args = {
  numberOfStar: 0,
};

export const Half = Template.bind({});
Half.args = {
  numberOfStar: 2.5,
};

export const All = Template.bind({});
All.args = {
  numberOfStar: 5,
};
