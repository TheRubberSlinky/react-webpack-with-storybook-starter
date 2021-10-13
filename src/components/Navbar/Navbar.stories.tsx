import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navbar } from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/Navbar",
  component: Navbar,
  decorators: [(story) => <Router>{story()}</Router>],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
