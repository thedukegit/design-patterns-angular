export interface MacWindow {
  macWindowRender(title: string, data: string, isFullScreen: boolean): void;
}

export class MacWindowHandler implements MacWindow {
  // Only works for Apple machines !!
  // Is part of the Os library, so you can't change the code !
  macWindowRender(title: string, data: string, isFullScreen: boolean): void {
    console.log(
      `On a Apple machine this will result in a window with title ${title}, and  show the game ${data}`,
    );
  }
}
