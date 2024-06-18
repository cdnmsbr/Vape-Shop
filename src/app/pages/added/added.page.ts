import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-added',
  templateUrl: './added.page.html',
  styleUrls: ['./added.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddedPage implements OnInit {

  constructor(private router: Router) { }
  view() {
    this.router.navigate(['/viewcart']);
  }
  home() {
    // Implement your checkout logic here
    // For example, you can navigate to a checkout page
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    console.log
  }

}
