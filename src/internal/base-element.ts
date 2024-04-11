import { LitElement } from "lit";

export class BaseElement extends LitElement {
  static define(
    name: string,
    elementConstructor: CustomElementConstructor = this,
    options: ElementDefinitionOptions = {}
  ) {
    const currentlyRegisteredConstructor = customElements.get(name) as
      | CustomElementConstructor
      | typeof BaseElement;

    if (!currentlyRegisteredConstructor) {
      customElements.define(name, class extends elementConstructor {}, options);

      return;
    }
  }

  static dependencies: Record<string, typeof BaseElement> = {};

  constructor() {
    super();
    Object.entries(
      (this.constructor as typeof BaseElement).dependencies
    ).forEach(([name, component]) => {
      (this.constructor as typeof BaseElement).define(name, component);
    });
  }
}
