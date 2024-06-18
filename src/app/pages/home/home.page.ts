import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonCardTitle, IonCardContent, IonCard, IonCol, IonRow, IonCardHeader, IonLabel, IonChip, IonSearchbar, IonGrid, IonItem, IonButton, IonButtons, IonImg, IonBackButton, IonMenuButton, IonRouterOutlet, IonIcon, IonApp } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonApp, IonIcon, IonRouterOutlet, IonMenuButton, IonBackButton, IonImg, IonButtons, IonButton, IonItem, IonGrid, IonSearchbar, IonChip, IonLabel, IonCardHeader, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  items = [
    {
      title: 'Demon X Mirus Xyber 12500 Disposable Vape Kit',
      image: 'https://vapes.ph/wp-content/uploads/2024/01/10ml-430x430.jpg',
      price: 600
    },
    {
      title: 'Black Elite 8000 Puffs Prefilled Pod',
      image: 'https://vapes.ph/wp-content/uploads/2024/03/428614548_7176165252468211_6258204137381484537_n_upscayl_4x_realesrgan-x4plus.png',
      price: 500
    },
    {
      title: 'Boss x Nevoks Bar 19K Disposable Vape',
      image: 'https://vapes.ph/wp-content/uploads/2024/03/432994304_122134290122152713_8350299806603295296_n_upscayl_4x_realesrgan-x4plus-860x860.png',
      price: 450
    },
    {
      title: 'Flava Romio Pilot 10000 Puffs Disposable Vape',
      image: 'https://vapes.ph/wp-content/uploads/2024/03/20240328-110118_upscayl_4x_realesrgan-x4plus-860x860.png',
      price: 500
    }
  ];

  constructor(private router: Router) { }
  logout() {
    localStorage.removeItem('auth-token');
    
    this.router.navigate(['/login']);
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
  buyNow(item: { title: string; image: string; price: number }) {
    this.router.navigate(['/buynow'], {
      queryParams: { item: JSON.stringify(item) }
    });
  }
  ngOnInit() {
    console.log("hello")
  }

}
