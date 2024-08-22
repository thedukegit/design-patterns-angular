export interface LinuxWindow {
  linuxWindowRender(title: string, data: string, isFullScreen: boolean): void;
}

export class LinuxWindowHandler implements LinuxWindow {
  // Only works for Linux machines !!
  // Is part of the Os library, so you can't change the code !
  linuxWindowRender(
    title: string,
    data: string,
    isFullScreen: boolean,
  ): string {
    return `On a Linux machine this will result in a window with title ${title}, and  show the game ${data}`;
  }
}
