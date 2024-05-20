import { Component, inject, OnInit } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { DocumentProxyComponent } from './features/document-proxy.component';
import { UserService } from './services/user.service';
import { DocumentService } from './services/document.service';
import { DocumentInterface } from './models/document';
import { JsonPipe } from '@angular/common';
import { DocumentListComponent } from './features/document-list/document-list.component';
import { MatCard, MatCardContent } from '@angular/material/card';
import { UserListComponent } from './features/user-list/user-list.component';
import { User } from './models/user';

@Component({
  selector: 'lib-exercise-4-solution',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    DocumentProxyComponent,
    JsonPipe,
    DocumentListComponent,
    MatCard,
    MatCardContent,
    UserListComponent,
  ],
  templateUrl: './exercise-4-solution.component.html',
  styleUrl: 'exercise-4-solution.component.scss',
})
export class Exercise4SolutionComponent implements OnInit {
  protected userService = inject(UserService);
  protected users = this.userService.getUsers();
  protected documentService = inject(DocumentService);
  protected documents: DocumentInterface[] =
    this.documentService.getDocuments();
  protected documentContent: string = '';
  protected userName: string = '';

  public ngOnInit(): void {
    this.userService.setSelectedUser(this.users[0]);
  }

  protected loginUser(user: User) {
    this.reset();
    this.userService.setSelectedUser(user);
    this.userName = user.name;
  }

  protected readDocument(document: DocumentInterface): void {
    this.documentService.setSelectedDocument(document);
    this.documentContent = document.read();
  }

  protected reset() {
    console.log('resetting');
    this.documentContent = '';
    this.userName = '';
  }
}
