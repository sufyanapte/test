import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addtocart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addtocart.html',
  styleUrl: './addtocart.css'
})
export class Addtocart {

  cartItems = [
    {
      id: 1,
      name: 'Structured Leather Bag',
      category: 'Italian Leather',
      price: 285,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=90'
    },
    {
      id: 2,
      name: 'Classic Timepiece',
      category: 'Swiss Movement',
      price: 490,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=90'
    }
  ];


  increaseQuantity(item: any) {

    item.quantity++;

  }


  decreaseQuantity(item: any) {

    if (item.quantity > 1) {

      item.quantity--;

    }

  }


  removeItem(id: number) {

    this.cartItems =
      this.cartItems.filter(item => item.id !== id);

  }


  getSubtotal(): number {

    return this.cartItems.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );

  }


  getShipping(): number {

    return this.getSubtotal() >= 300 ? 0 : 15;

  }


  getTotal(): number {

    return this.getSubtotal() + this.getShipping();

  }


  getTotalItems(): number {

    return this.cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  }


  checkout() {

    alert('Checkout page coming soon.');

  }

}
