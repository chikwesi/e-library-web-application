import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookSearchComponent } from './book-search/book-search.component';


@NgModule({
  declarations: [
    BookSearchComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
