import { Injectable } from '@angular/core';
import { User, UserRole } from '../model/data-model';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
  ) { }
  getAllUsers() {
    const users = <User[]>JSON.parse(localStorage.getItem('users'))
    return users || []
  }
  saveUserInMemory(users: User[]){
    localStorage.setItem('users', JSON.stringify(users))
  }
  deleteUser(userId: number) {
    const users = this.getAllUsers();
    const selectedUserIndex = users.findIndex(user => user.id == userId)
    users.splice(selectedUserIndex, 1)
    this.saveUserInMemory(users)

    const roles = this.getAllRoles();
    const userRoleIndex = roles.findIndex(role => role.userId == userId )
    roles.splice(userRoleIndex, 1);
    this.saveRolesInMemory(roles)
  }


  getAllRoles(){
    const roles = <UserRole[]>JSON.parse(localStorage.getItem('roles'))
    return roles || []
  } 
  saveRolesInMemory(roles: UserRole[]){
    localStorage.setItem('roles', JSON.stringify(roles))
  }
  getUserRoles(userId: number){
    const allRoles = this.getAllRoles();
    const userRoles  = allRoles.filter( r => r.userId == userId).map(r => r.role)
    return userRoles
  }
}
