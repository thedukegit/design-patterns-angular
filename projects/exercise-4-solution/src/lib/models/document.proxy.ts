import { DocumentInterface } from './document';
import { UserService } from '../services/user.service';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DocumentProxy implements DocumentInterface {
  public name: string = '';
  public content: string = '';
  private realDocument?: DocumentInterface;
  private readonly userService: UserService = inject(UserService);

  public constructor() {}

  public setDocument(document: DocumentInterface): void {
    this.realDocument = document;
  }

  public read(): string {
    if (this.realDocument) {
      // check if user has access to document
      if (this.userService.getSelectedUser().id === 1) {
        return `NO ACCESS TO ${this.realDocument.name}`;
      } else {
        return this.realDocument.read();
      }
    }
    return '';
  }
}
