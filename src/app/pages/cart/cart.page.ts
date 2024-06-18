import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBadge, IonLabel, IonItem, IonList, IonButton, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonImg, IonButtons, IonBackButton, IonSelectOption} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonButtons, IonImg, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonBadge, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonSelectOption]
})
export class CartPage implements OnInit {

  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedQuantity: number = 1;

  constructor(private router: Router) { }
  
  checkout() {
    this.router.navigate(['/checkout']);
  }
  add() {
    this.router.navigate(['/added']);
  }
  addToCart() {
    console.log(`Added ${this.selectedQuantity} items to cart`);
  }
  ngOnInit() {
    console.log
  }

}
