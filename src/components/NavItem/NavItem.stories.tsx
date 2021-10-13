import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NavItem } from "./NavItem";
import { BrowserRouter as Router } from "react-router-dom";
import NavItemLoading from "./NavItem.loading";

export default {
  title: "Components/NavItem",
  component: NavItem,
  args: {
    link: "/",
    children: "Home",
  },
  decorators: [(story) => <Router>{story()}</Router>],
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => (
  <NavItem {...args} />
);

const LoadingTemplate: ComponentStory<typeof NavItemLoading> = (args) => (
  <NavItemLoading {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Loading = LoadingTemplate.bind({});
Loading.args = {};
