import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me',
  onClick: () => alert('Button clicked!'),
};
