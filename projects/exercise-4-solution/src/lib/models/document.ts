export interface DocumentInterface {
  name: string;
  content: string;

  read(): string;
}

export class MyDocument implements DocumentInterface {
  id: number;
  name: string;
  content: string;

  public constructor(id: number, name: string, content: string) {
    this.id = id;
    this.name = name;
    this.content = content;
  }

  public read(): string {
    return `Name of document: ${this.name}, Content: ${this.content}`;
  }
}
