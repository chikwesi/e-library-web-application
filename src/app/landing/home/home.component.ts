import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/data-model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  recentlyAddedBooks: Book[]
  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.getRecentBooks()
  }
  getRecentBooks(){
    this.recentlyAddedBooks = this.bookService.getAllBooks().sort( (a, b)=> a.dateCreated > b.dateCreated ? -1 : 1).slice(0, 4)
  }
}
