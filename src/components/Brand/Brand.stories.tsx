import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BrowserRouter as Router } from "react-router-dom";
import { Brand } from "./Brand";

export default {
  title: "Components/Brand",
  component: Brand,
  decorators: [(story) => <Router>{story()}</Router>],
  args: {
    color: "red",
    type: "horizontal",
    height: 200,
  },
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = (args) => <Brand {...args} />;

export const Default = Template.bind({});
Default.args = {};
