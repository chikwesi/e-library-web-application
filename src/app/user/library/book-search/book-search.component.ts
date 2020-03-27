import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Book } from 'src/app/model/data-model';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/service/book.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'src/app/service/toaster.service';
import { startWith, map } from 'rxjs/operators';
import { AddBookDialogComponent } from 'src/app/librarian/library/modal/add-book-dialog/add-book-dialog.component';
import { UpdateBookDialogComponent } from 'src/app/librarian/library/modal/update-book-dialog/update-book-dialog.component';
import { LendBookDialogComponent } from 'src/app/librarian/library/modal/lend-book-dialog/lend-book-dialog.component';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {


  filter = new FormControl('');
  page = 1;
  pageSize = 2;
  collectionSize: number
  bookList: Book[]
  books$: Observable<Book[]>;
  constructor(
    private bookService: BookService,
    private modalService: NgbModal,
    private toaster: ToasterService
  ) { }
  ngOnInit(): void {
    this.getAllBooks();

  }
  getAllBooks() {
    this.bookList = this.bookService.getAllBooks();
    this.collectionSize = this.bookList.length;
    this.books$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.bookList.filter(u => {
        const term = text.toLowerCase();
        return u.title.toLowerCase().includes(term) || u.description.toLowerCase().includes(term) || u.author.toLowerCase().includes(term)
      }
      )))
  }
  addBook() {
    const modalRef = this.modalService.open(AddBookDialogComponent);
    modalRef.componentInstance.saved.subscribe(res => res ? this.getAllBooks() : null)
  }
  get books(): Book[] {
    return this.bookList
      .map((user, i) => ({ id: i + 1, ...user }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
