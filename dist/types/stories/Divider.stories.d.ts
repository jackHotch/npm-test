import { ComponentProps } from 'react';
import Divider from '../components/Divider';
import { Meta, StoryObj } from '@storybook/react/*';
type StoryProps = ComponentProps<typeof Divider>;
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<StoryProps>;
export declare const Primary: Story;
export declare const Danger: Story;
