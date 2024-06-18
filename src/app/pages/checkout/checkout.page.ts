import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonBackButton, IonButtons, IonNav, IonCol, IonRow, IonGrid, IonSearchbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBadge, IonLabel, IonItem, IonItemDivider, IonButton, IonCardContent, IonList, IonCardHeader, IonCard, IonInput, IonCardTitle, IonSelectOption, IonSelect, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonGrid, IonRow, IonCol, IonNav, IonButtons, IonBackButton, IonImg, IonCardTitle, IonInput, IonCard, IonCardHeader, IonList, IonCardContent, IonButton, IonItemDivider, IonItem, IonLabel, IonBadge, IonSelectOption, IonSelect, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CheckoutPage implements OnInit {
  paymentMethod: string = '';
  checkoutItems: Array<{ title: string, image: string, price: number }> = [];
  
  constructor(private nav:NavController,private route: ActivatedRoute, private navCtrl: NavController, private router: Router) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['checkoutItems']) {
        this.checkoutItems = JSON.parse(params['checkoutItems']);
      }
    });
  }
  submitOrder() {
    this.nav.navigateForward('/submit');
  }
}
