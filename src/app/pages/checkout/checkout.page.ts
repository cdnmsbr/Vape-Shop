import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBadge, IonLabel, IonItem, IonItemDivider, IonButton, IonCardContent, IonList, IonCardHeader, IonCard, IonInput, IonCardTitle, IonSelectOption, IonSelect, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: true,
  imports: [IonImg, IonCardTitle, IonInput, IonCard, IonCardHeader, IonList, IonCardContent, IonButton, IonItemDivider, IonItem, IonLabel, IonBadge, IonSelectOption, IonSelect, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CheckoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log
  }

}
