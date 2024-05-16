export interface DocumentInterface {
  id: number;
  name: string;
  content: string;
  accessLevel: number;
}

export class MyDocument implements DocumentInterface {
  id: number;
  name: string;
  content: string;
  accessLevel: number;

  public constructor(
    id: number,
    name: string,
    content: string,
    accessLevel: number,
  ) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.accessLevel = accessLevel;
  }
}
