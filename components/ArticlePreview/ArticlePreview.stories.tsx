import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArticlePreview } from "./ArticlePreview";

export default {
  title: "ArticlePreview",
  component: ArticlePreview,
} as ComponentMeta<typeof ArticlePreview>;

const Template: ComponentStory<typeof ArticlePreview> = (args) => (
    <ArticlePreview {...args} />
);

export const Initial = Template.bind({});
