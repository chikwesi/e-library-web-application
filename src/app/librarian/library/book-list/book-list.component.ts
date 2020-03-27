import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User, Book } from 'src/app/model/data-model';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/service/users.service';
import { startWith, map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddBookDialogComponent } from '../modal/add-book-dialog/add-book-dialog.component';
import { BookService } from 'src/app/service/book.service';
import { UpdateBookDialogComponent } from '../modal/update-book-dialog/update-book-dialog.component';
import { LendBookDialogComponent } from '../modal/lend-book-dialog/lend-book-dialog.component';
import { ToasterService } from 'src/app/service/toaster.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {


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
  getAllBooks(){
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
  deleteBook(bookId: number){
    this.toaster.confirm('delete').then(
      (res) => {
        if(res.value) {
        this.bookService.deleteBook(bookId)
        this.getAllBooks()
        }
      }
    )
  }
  updateBook(book: Book){
    const modalRef = this.modalService.open(UpdateBookDialogComponent);
    modalRef.componentInstance.bookToUpdate = book
    modalRef.componentInstance.saved.subscribe(res => res ? this.getAllBooks() : null)

  }
  lendBook(book: Book){
    const modalRef = this.modalService.open(LendBookDialogComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.bookToLend = book
    modalRef.componentInstance.saved.subscribe(res => res ? this.getAllBooks() : null)
  }

}
