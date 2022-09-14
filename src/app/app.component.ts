import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {BookListComponent} from "./core/book-list/book-list.component";
import {BookService} from "./core/service/book.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./core/navbar/navbar.component";
import {SideBarComponent} from "./core/side-bar/side-bar.component";
import {HeaderComponent} from "./core/header/header.component";
import {CartComponent} from "./core/cart/cart.component";
import {BookDetailsComponent} from "./core/book-details/book-details.component";
import {CartViewComponent} from "./core/cart-view/cart-view.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from "./core/footer/footer.component";
import {UpdateBookComponent} from "./admin/update-book/update-book.component";

@Component({
  selector: 'app-root',
  imports:[
    AppComponent,CommonModule, RouterModule, BookListComponent, HttpClientModule, NavbarComponent, SideBarComponent, HeaderComponent, CartComponent, BookDetailsComponent, CartViewComponent, FormsModule, ReactiveFormsModule, FooterComponent, UpdateBookComponent
  ],
  providers:[BookService, HttpClient],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true
})
export class AppComponent {
  title = 'ng-book-store-project';
}
