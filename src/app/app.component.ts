import { Component } from '@angular/core';
import { Icards } from './shared/models/cards';
import { productsArr } from './shared/const/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cardtask2';
  productsArr1:Array<Icards>=productsArr
}
