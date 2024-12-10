export interface ComponentInterface {
  render(): string

  add(child: ComponentInterface): void
}
