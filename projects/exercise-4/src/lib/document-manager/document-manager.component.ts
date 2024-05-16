import { Component } from '@angular/core';
import { User } from './models/user';
import { MatButton } from '@angular/material/button';
import { DocumentInterface } from './models/document';
import { JsonPipe } from '@angular/common';
import { DocumentManager } from './services/document-manager';

@Component({
  selector: 'lib-document-manager',
  standalone: true,
  imports: [MatButton, JsonPipe],
  templateUrl: './document-manager.component.html',
  styleUrl: './document-manager.component.css',
})
export class DocumentManagerComponent {
  // create several users
  protected jim: User;
  protected bel: User;
  protected ushi: User;
  protected selectedUser: User | undefined = undefined;
  protected error: string = '';
  protected selectedDoc: DocumentInterface | undefined = undefined;
  private documentManager: DocumentManager;

  public constructor() {
    this.documentManager = new DocumentManager();
    this.jim = new User(1, 'Jim', 1);
    this.bel = new User(2, 'Bel', 2);
    this.ushi = new User(3, 'Ushi', 3);
  }

  //
  protected login(user: User): void {
    this.reset();
    this.selectedUser = user;
  }

  protected readDoc(docId: number) {
    this.reset();
    if (!this.selectedUser) {
      this.error = 'User not logged in';
      return;
    }
    try {
      this.selectedDoc = this.documentManager.getDocumentById(
        docId,
        this.selectedUser,
      );
    } catch (e: any) {
      this.error = e.message;
    } finally {
      console.log(this.error);
    }
  }

  private reset(): void {
    this.selectedDoc = undefined; //remove any previous doc info
    this.error = ''; // reset the error
  }
}
