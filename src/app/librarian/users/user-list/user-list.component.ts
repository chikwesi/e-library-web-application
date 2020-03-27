import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { User } from 'src/app/model/data-model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ToasterService } from 'src/app/service/toaster.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  filter = new FormControl('');
  page = 1;
  pageSize = 2;
  collectionSize: number
  userList: User[]
  users$: Observable<User[]>;
  constructor(
    private usersService: UsersService,
    private toaster: ToasterService

  ) { }
  ngOnInit(): void {
    this.getAllUsers()
  }
  get users(): User[] {
    return this.userList
      .map((user, i) => ({ id: i + 1, ...user }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  deleteUser(userId: number) {
    this.toaster.confirm('delete').then(
      res => {
        if (res.value) {
          this.usersService.deleteUser(userId)
          this.getAllUsers()
        }
      }
    )
  }
  getAllUsers(){

    this.userList = this.usersService.getAllUsers();
    this.collectionSize = this.userList.length;
    this.users$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.userList.filter(u => {
        const term = text.toLowerCase();
        return u.username.toLowerCase().includes(term)
      }
      )))
  }
}
