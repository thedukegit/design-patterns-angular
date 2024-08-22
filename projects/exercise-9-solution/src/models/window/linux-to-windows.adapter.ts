import { Window } from './window';
import { LinuxWindowHandler } from './linux-window';

export class LinuxToWindowsAdapter implements Window {
  public constructor(private linuxWindowHandler: LinuxWindowHandler) {}

  public render(data: string, title: string, minimized: boolean): string {
    return this.linuxWindowHandler.linuxWindowRender(data, title, minimized);
  }
}
