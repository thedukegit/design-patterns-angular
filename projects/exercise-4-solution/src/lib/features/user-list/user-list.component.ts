import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';

@Component({
  selector: 'lib-user-list',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  @Input() users!: User[];
  @Output() onLogin: EventEmitter<User> = new EventEmitter();
  displayedColumns: string[] = ['name', 'action'];

  protected login(user: User) {
    this.onLogin.emit(user);
  }
}
