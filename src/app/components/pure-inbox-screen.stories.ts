import { moduleMetadata, Story, Meta } from "@storybook/angular";

import { CommonModule } from "@angular/common";

import { PureInboxScreenComponent } from "./pure-inbox-screen.component";

import { TaskModule } from "./task.module";

import { Store, NgxsModule} from '@ngxs/store';
import { TasksState } from "../state/task.state";

export default {
  title: 'PureInboxScreen',
  component: PureInboxScreenComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }),
  ],
} as Meta;

const Template: Story<PureInboxScreenComponent> = args => ({
  props: args,
})

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
};