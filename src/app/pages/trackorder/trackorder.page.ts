import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.page.html',
  styleUrls: ['./trackorder.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonImg, CommonModule, FormsModule]
})
export class TrackOrderPage implements OnInit {
  orders: Array<{ title: string, status: string, image: string }> = [];

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    // Fetch orders with their status and image URLs
    this.orders = [
      { title: 'Demon X Mirus Xyber 12500 Disposable Vape Kit', status: 'Shipped', image: 'https://vapes.ph/wp-content/uploads/2024/01/10ml-430x430.jpg' },
      { title: 'Black Elite 8000 Puffs Prefilled Pod', status: 'Delivered', image: 'https://vapes.ph/wp-content/uploads/2024/03/428614548_7176165252468211_6258204137381484537_n_upscayl_4x_realesrgan-x4plus.png' },
      { title: 'Boss x Nevoks Bar 19K Disposable Vape', status: 'Processing', image: 'https://vapes.ph/wp-content/uploads/2024/03/432994304_122134290122152713_8350299806603295296_n_upscayl_4x_realesrgan-x4plus-860x860.png' },
      { title: 'Flava Romio Pilot 10000 Puffs Disposable Vape', status: 'Shipped', image: 'https://vapes.ph/wp-content/uploads/2024/03/20240328-110118_upscayl_4x_realesrgan-x4plus-860x860.png' }
    ];
  }
}
