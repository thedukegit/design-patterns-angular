import { User } from '../models/user';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private selectedUser?: User;

  public getUsers(): User[] {
    return [new User(1, 'Jim'), new User(2, 'Bel')];
  }

  public setSelectedUser(user: User): void {
    this.selectedUser = user;
  }

  public getSelectedUser(): User {
    if (this.selectedUser) return this.selectedUser;
    throw new Error('No user selected');
  }
}
