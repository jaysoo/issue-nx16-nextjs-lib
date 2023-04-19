import type { Meta } from '@storybook/react';
import {  Message  }  from './message';





const Story: Meta<typeof Message> = {
  component: Message,
  title: 'Message', 
};
export default Story;


export const Primary = {
  args: {
  },
};