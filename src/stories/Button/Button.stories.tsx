import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import  Button, { Props } from './index'

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

//  Basic Buttons

export const Basic = Template.bind({})
Basic.args = {
  color: 'default'
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline'
}

export const Text = Template.bind({})
Text.args = {
  variant: 'text',
  disableShadow: true
}

// No Shadow

export const DisableShadow =  Template.bind({})
DisableShadow.args = {
  color: 'primary',
  disableShadow: true
}

// Disable

export const Disable = Template.bind({})
Disable.args = {
  disable: true,
  disableShadow: true
}

// Text Disable

export const TextDisable = Template.bind({})
TextDisable.args = {
  disable: true,
  variant: 'text'
}

//  Icons

export const StarIcon = Template.bind({})
StarIcon.args = {
  color: 'primary',
  startIcon: 'alarm_on'
}

export const EndIcon = Template.bind({})
StarIcon.args = {
  color: 'primary',
  endIcon: 'alarm_on'
}

// Sizes

export const Small = Template.bind({})
Small.args = {
  color: 'primary',
  size: 'sm'
}

export const Medium = Template.bind({})
Medium.args = {
  color: 'primary',
  size: 'md'
}

export const Large = Template.bind({})
Large.args = {
  color: 'primary',
  size: 'lg'
}

// Colors

export const Default = Template.bind({})
Default.args = {
  color: 'default'
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary'
}

export const Danger = Template.bind({})
Danger.args = {
  color: 'danger'
}