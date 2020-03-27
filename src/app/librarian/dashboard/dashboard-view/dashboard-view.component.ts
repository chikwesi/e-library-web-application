import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { UsersService } from 'src/app/service/users.service';
import { Book } from 'src/app/model/data-model';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  dashboardStats: DashboardStats[]
  recentlyAddedBooks: Book[]
  constructor(
    private bookService: BookService,
    private userService: UsersService
    ) { }

  ngOnInit(): void {
    this.dashboardStats = [
      { 
        icon: 'fa fa-book',
        title: 'No of Books',
        count: this.bookService.getAllBooks().length
      },
      {
        icon: 'fa fa-users',
        title: 'No of Users',
        count: this.userService.getAllUsers().length
      },
      {
        icon: 'fa fa-book-reader',
        title: 'No of Lent Books',
        count: this.bookService.getAllLentBooks().length
      },
    ]
    this.getRecentBooks()
  }

  getRecentBooks(){
    this.recentlyAddedBooks = this.bookService.getAllBooks().sort( (a, b)=> a.dateCreated > b.dateCreated ? -1 : 1).slice(0, 3)
  }
    


}
export interface DashboardStats {
  title: string,
  count: number,
  url?:string,
  icon?:string
}