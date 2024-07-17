import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './index';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Enter text',
  value: '',
  onChange: (e) => console.log(e.target.value),
};
