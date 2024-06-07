import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonLabel, IonList, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonList, IonLabel, IonButton, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  constructor(private router: Router, private toastController: ToastController) { }
  async updateProfile() {
    console.log('Profile updated');

    const toast = await this.toastController.create({
      message: 'Profile updated successfully',
      duration: 2000,
      color: 'success'
    });
    toast.present();

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000);
  }
  ngOnInit() {
    console.log();  
  }

}
