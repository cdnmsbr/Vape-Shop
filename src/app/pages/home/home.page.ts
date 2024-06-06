import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonCardTitle, IonCardContent, IonCard, IonCol, IonRow, IonCardHeader, IonLabel, IonChip, IonSearchbar, IonGrid, IonItem, IonButton, IonButtons, IonImg, IonBackButton, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonMenuButton, IonBackButton, IonImg, IonButtons, IonButton, IonItem, IonGrid, IonSearchbar, IonChip, IonLabel, IonCardHeader, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("hello")
  }

}
