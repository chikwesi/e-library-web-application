import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Book, User, LendBook } from 'src/app/model/data-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/service/book.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-lend-book-dialog',
  templateUrl: './lend-book-dialog.component.html',
  styleUrls: ['./lend-book-dialog.component.scss']
})
export class LendBookDialogComponent implements OnInit {
  @Output() saved:EventEmitter<Boolean> = new EventEmitter<Boolean>()
  @Input() bookToLend:Book;
  usersLent: LendBook[]

  bookImage: string;
  allusers: User[]
  selectedUsers: User[] = [];
  constructor(
    public activeModal: NgbActiveModal,
    private bookService: BookService,
    private userService: UsersService
    ) { }

  ngOnInit(): void {
    this.getAllUsersLent()
    this.allusers = this.userService.getAllUsers()
   
  }
  addUser(event: any) {
    const userId = event.target.value
    const user = this.allusers.find( u => u.id == userId)
    const isPresent = this.selectedUsers.find(u => u.id == user.id)
    isPresent ? null : this.selectedUsers.push(user)
  
  }
  lendBook(){
    const updatedBook = {
      bookId: this.bookToLend.id,
      userIds: this.selectedUsers.map(u=> u.id)
    }
    const isSaved = this.bookService.lendBook(updatedBook)
    if(isSaved) {
      this.getAllUsersLent()
      this.selectedUsers = []
    } 
  }
  getAllUsersLent(){
    this.usersLent = this.bookService.getLentUsersByBookId(this.bookToLend.id)
  }
  removeUser(userId: number){
    const index = this.selectedUsers.findIndex(u => u.id == userId)
    this.selectedUsers.splice(index, 1)
  }
}
