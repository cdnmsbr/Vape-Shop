import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCard, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
  standalone: true,
  imports: [IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SubmitPage implements OnInit {

  constructor(private router: Router) { }
  returnHome() {
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    console.log
  }

}
