import { ComponentProps } from 'react';
import Div from './Div';
import { Meta, StoryObj } from '@storybook/react/*';
type StoryProps = ComponentProps<typeof Div>;
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<StoryProps>;
export declare const Primary: Story;
export declare const Danger: Story;
