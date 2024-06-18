import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonImg, IonCardContent, IonCardTitle, IonCardHeader, IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.page.html',
  styleUrls: ['./buynow.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BuynowPage implements OnInit {
  item: { title: string; image: string; price: number; } | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['item']) {
        this.item = JSON.parse(params['item']);
      }
    });
  }
  confirmPurchase() {
    alert('Purchase confirmed!');
  }
  returnHome() {
    this.router.navigate(['/home']);
  }
}
