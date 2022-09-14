import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {CartService} from "../service/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  cart$:Observable<Book[]> = this.cartService.carts$;

  constructor(private cartService:CartService, private router:Router) { }

  ngOnInit(): void {
  }

  removeFromCart(id:number | undefined){
    this.cartService.removeFromCart(id as number)
      .subscribe(
        data => console.log(data),
        error => console.log(error),
        () => this.router.navigate(['/viewcart'])
      );
  }

  goHome(){
    this.router.navigate(['/']);
  }

  clearCart(){
    this.cartService.clearCart()
      .subscribe(
        data => console.log(data),
        error => console.log(error),
        () => this.router.navigate(['/'])
      );
  }

}
