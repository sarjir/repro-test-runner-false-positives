import { MyCard } from "./card.component.js";

export * from "./card.component.js";
export default MyCard;

MyCard.define("my-card");

declare global {
  interface HTMLElementTagNameMap {
    "my-card": MyCard;
  }
}
