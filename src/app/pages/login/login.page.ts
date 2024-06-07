import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonCardContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonLabel, IonButton, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonImg, IonButton, IonLabel, IonItem, IonInput, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonCardContent, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {}
  login() {
    this.router.navigate(['/home']);
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  ngOnInit() {
    console.log("Hello")
  }

}
