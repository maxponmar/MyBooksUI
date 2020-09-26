import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BooksComponent } from './components/books/books/books.component';
import { BookComponent } from './components/books/book/book.component';
import { BookEditComponent } from './components/books/book-edit/book-edit.component';
import { AuthorsComponent } from './components/authors/authors/authors.component';
import { AuthorComponent } from './components/authors/author/author.component';
import { AuthorEditComponent } from './components/authors/author-edit/author-edit.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BooksComponent,
    BookComponent,
    BookEditComponent,
    AuthorsComponent,
    AuthorComponent,
    AuthorEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
