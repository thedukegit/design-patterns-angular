export interface Window {
  render(data: string, title: string, minimized: boolean): string;
}

export class WindowHandler implements Window {
  // Only works for Windows machines !!
  // Is part of the Os library, so you can't change the code !
  render(data: string, title: string, minimized: boolean): string {
    return `On a windows machine this will result in a window with title ${title}, and  show the game ${data}`;
  }
}
