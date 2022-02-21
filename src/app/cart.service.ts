import { Injectable } from '@angular/core';
import { Product } from './products';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  addToCart(product: Product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(private cartService: CartService) { }
}
