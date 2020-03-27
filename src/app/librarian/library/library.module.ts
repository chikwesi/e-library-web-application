import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LibraryRoutingModule } from './library-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddBookDialogComponent } from './modal/add-book-dialog/add-book-dialog.component';
import { UpdateBookDialogComponent } from './modal/update-book-dialog/update-book-dialog.component';
import { LendBookDialogComponent } from './modal/lend-book-dialog/lend-book-dialog.component';


@NgModule({
  declarations: [BookListComponent, AddBookDialogComponent, UpdateBookDialogComponent, LendBookDialogComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
  ],
  entryComponents: [
    AddBookDialogComponent,
    UpdateBookDialogComponent,
    LendBookDialogComponent
  ]
})
export class LibraryModule { }
