import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import  Button, { Props } from './index'

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
}

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
}

export const DisableShadow = Template.bind({});
DisableShadow.args = {
  disableShadow: true
}

export const Disable = Template.bind({});
Disable.args = {
  disable: true
}

export const StartIcon = Template.bind({})
StartIcon.args = {
  startIcon: 'account',
  size: 'lg'
}

export const EndIcon = Template.bind({})
EndIcon.args = {
  endIcon: 'account',
  size: 'lg'
}