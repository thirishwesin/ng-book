import {enableProdMode, importProvidersFrom} from '@angular/core';

import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {BookService} from "./app/core/service/book.service";
import {RouterModule} from "@angular/router";
import {CartViewComponent} from "./app/core/cart-view/cart-view.component";

const routes = [
  {
    path:'', loadComponent:() => import('./app/core/book-list/book-list.component')
      .then( c => c.BookListComponent)
  },
  {
    path:'book/:id', loadComponent:() => import('./app/core/book-details/book-details.component').then(
      c => c.BookDetailsComponent
    )
  },
  {
    path:'viewcart', component:CartViewComponent
  },
  {
    path:'bookcreate', loadComponent:() => import('./app/admin/book-create/book-create.component').then(
      c => c.BookCreateComponent
    )
  },
  {
    path:'listbook', loadComponent:() => import('./app/admin/all-books/all-books.component').then(
      c => c.AllBooksComponent
    )
  },
  {
    path:'book/update/:id', loadComponent:() => import('./app/admin/update-book/update-book.component').then(
      c => c.UpdateBookComponent
    )
  }
]

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers:[
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(BookService)]
}).catch(err => console.error(err));
