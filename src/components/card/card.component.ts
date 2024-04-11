import { BaseElement } from "../../internal/base-element";
import { html } from "lit";
import { property } from "lit/decorators.js";

/**
 * @summary The `<my-card>` can be used to group related subjects in a container
 *
 * @attribute {boolean} no-border - If true, removes border
 * @attribute {boolean} no-padding - If true, removes padding
 * @attribute {boolean} stretch - If true, the Card fills the parent element height
 *
 * @slot - The card's main content
 *
 * @tagname my-card
 */
export class MyCard extends BaseElement {
  @property({ type: Boolean })
  noBorder = false;

  @property({ type: Boolean })
  noPadding = false;

  @property({ type: Boolean })
  stretch = false;

  render() {
    return html`<div id="card"><slot></slot></div>`;
  }
}
