import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonFooter, IonCardContent, IonCardTitle, IonCardHeader, IonImg, IonItem, IonCard, IonList, IonLabel, IonSelectOption, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.page.html',
  styleUrls: ['./viewcart.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonLabel, IonList, IonCard, IonItem, IonImg, IonCardHeader, IonCardTitle, IonCardContent, IonFooter, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelectOption]
})
export class ViewcartPage implements OnInit {
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  cartItems: Array<{ title: string, image: string, price: number, quantity: number }> = [];
  constructor() {
    this.loadCartItems();
   }
   loadCartItems() {
    // Load cart items from a service or local storage
    // Example hardcoded items
    this.cartItems = [
      {
        title: 'Demon X Mirus Xyber 12500 Disposable Vape Kit',
        image: 'https://vapes.ph/wp-content/uploads/2024/01/10ml-430x430.jpg',
        price: 600,
        quantity: 1
      },
      {
        title: 'Black Elite 8000 Puffs Prefilled Pod',
        image: 'https://vapes.ph/wp-content/uploads/2024/03/428614548_7176165252468211_6258204137381484537_n_upscayl_4x_realesrgan-x4plus.png',
        price: 500,
        quantity: 1
      }
    ];
  }
  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeFromCart(item: { title: string; image: string; price: number; quantity: number; }) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  proceedToCheckout() {
    console.log('Proceeding to checkout');
    // Implement checkout logic here
  }
  ngOnInit() {
    console.log
  }

}
