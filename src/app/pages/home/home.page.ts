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

  constructor(private router: Router) { }
  logout() {
    localStorage.removeItem('auth-token');
    
    this.router.navigate(['/login']);
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }

  ngOnInit() {
    console.log("hello")
  }

}
