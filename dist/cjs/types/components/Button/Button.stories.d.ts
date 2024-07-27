import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ComponentProps } from 'react';
type StoryProps = ComponentProps<typeof Button>;
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<StoryProps>;
export declare const Primary: Story;
export declare const Danger: Story;
