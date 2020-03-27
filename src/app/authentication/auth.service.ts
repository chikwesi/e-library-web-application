import { Injectable } from '@angular/core';
import { User, Role, UserRole } from '../model/data-model';
import { UsersService } from '../service/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private usersService: UsersService
  ) { }

  login(data: {
    username: string,
    password: string
  }) {
    const users = <User[]>this.usersService.getAllUsers()
    const userObject = users.find(u => u.username == data.username && u.password == data.password);
      if (userObject) {
        this.setLoggedInUser( {userId: userObject.id, status: true})
        return { 
          status: 'Success', 
          message: 'Assess granted',
          userId: userObject.id,
          token: true
      }
      } 
    else {
      throw ({ status: 'Error', message: 'Incorrect username or password' })
    }
  }

  register(data: {
    username: string,
    password: string
  }) {
    
      let users = <User[]>this.usersService.getAllUsers()
      const usernameExists = users.find(u => u.username == data.username);
      if(usernameExists || data.username == ADMIN_USER.username){
        throw({ status: 'Error', message: 'username already Exist' })
      }
      const userObject: User = {
        username: data.username.toLowerCase(),
        password: data.password,
        id: users ? users.reduce((x, i)=> i.id > x ? i.id + 1 : x + 1, 1) : 1,
        dateCreated: new Date(Date.now())
      }
      users ? users.push(userObject) : users = [userObject]

      let roles = this.usersService.getAllRoles()
      const role: UserRole = {
        userId : userObject.id,
        role : Role.USER
      }
      roles.push(role)
      this.usersService.saveUserInMemory(users)
      this.usersService.saveRolesInMemory(roles)
      return ({ status: 'Success', message: 'user created successfully' })
    
  }
  setLoggedInUser(data: {userId: number, status: boolean}){
    localStorage.setItem('userId', JSON.stringify(data))
  }
  getLoggedInUser():{userId: number, status: number}{
    
    const status = JSON.parse(localStorage.getItem('userId'))
    return status
  }
  loggOutUser(){
    localStorage.removeItem('userId')
  }
}
export const ADMIN_USER = {
  username: 'librarian',
  password: 'admin-password'
}