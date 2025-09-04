import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-giph-detail',
  templateUrl: './giph-detail.page.html',
  styleUrls: ['./giph-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GiphDetailPage implements OnInit {
  gif: any;

  constructor() { }

  ngOnInit() {
    const navigation = window.history.state;
    this.gif = navigation?.gif;
  }

}
