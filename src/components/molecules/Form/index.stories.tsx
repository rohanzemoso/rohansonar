import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Form from './index';

export default {
  title: 'Molecules/Form',
  component: Form,
  parameters: {
    actions: {
      handles: ['click button'],
    },
  },
} as Meta<typeof Form>;

const Template: StoryFn<typeof Form> = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
