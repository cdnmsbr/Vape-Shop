import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, IonImg, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonButton, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonImg, CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonButton, IonList, IonItem]
})
export class OrdersPage implements OnInit {
  orders: Array<{ title: string, image: string, price: number, date: string }> = [];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.orders = [
      { title: 'Demon X Mirus Xyber 12500 Disposable Vape Kit', image: 'https://vapes.ph/wp-content/uploads/2024/01/10ml-430x430.jpg', price: 600, date: '2024-06-15' },
      { title: 'Black Elite 8000 Puffs Prefilled Pod', image: 'https://vapes.ph/wp-content/uploads/2024/03/428614548_7176165252468211_6258204137381484537_n_upscayl_4x_realesrgan-x4plus.png', price: 500, date: '2024-06-14' }
    ];
  }
}
