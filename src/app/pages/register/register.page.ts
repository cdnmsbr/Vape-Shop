import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonButton, IonInput, IonItem, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardContent
]
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) { }
  register() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    console.log("hello")
  }

}
