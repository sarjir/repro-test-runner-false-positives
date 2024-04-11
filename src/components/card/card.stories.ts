import { expect } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { MyCard } from "./card.component.js";
import "./card.js";

// -------------------------------------------------------------------------------------------------
// META
// -------------------------------------------------------------------------------------------------

const StoryCardMeta: Meta<MyCard> = {
  title: "Components/Card",
  component: "my-card",
  tags: ["autodocs"],
  args: {
    slot: "Laboriosam maiores occaecati itaque. Maxime ex aperiam nostrum ullam facere occaecati. Et minus sunt ratione labore. Nihil omnis aliquid ex commodi magnam corporis quisquam laborum. Incidunt alias ea provident quo in rerum totam et.",
  },
  render: (args) =>
    html`<my-card
      ?no-border=${args.noBorder}
      ?no-padding=${args.noPadding}
      ?stretch=${args.stretch}
      @click=${() => console.log("Card clicked")}
      >${args.slot}</my-card
    >`,
  decorators: [
    (story, context) => {
      if (context.args.stretch) {
        return html`<div
          style="border: 1px dashed #0f58d6; height: 400px; padding: 1rem;"
        >
          ${story()}
        </div>`;
      }
      return story();
    },
  ],
};

export default StoryCardMeta;

// -------------------------------------------------------------------------------------------------
// STORY
// -------------------------------------------------------------------------------------------------

type Story = StoryObj<MyCard>;

export const StoryCard: Story = {
  name: "Default",
  parameters: { docs: { canvas: { sourceState: "shown" } } },
  play: async () => {
    await expect(true).toBe(false);
  },
};

export const StoryCardNoBorder: Story = {
  args: { noBorder: true },
  name: "No Border",
};

export const StoryCardNoPadding: Story = {
  args: { noPadding: true },
  name: "No Padding",
};
