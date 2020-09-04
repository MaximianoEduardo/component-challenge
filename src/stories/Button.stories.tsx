import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, Props } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Default',
  size: 'md'
};

export const Secondary = Template.bind({});
Primary.args = {
  secondary: true,
  label: 'Default',
  size: 'md'
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  label: 'Default',
}

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  label: 'Default',
}

export const DisableShadow = Template.bind({});
DisableShadow.args = {
  disableShadow: true
}

export const Disable = Template.bind({});
Disable.args = {
  disable: true
}