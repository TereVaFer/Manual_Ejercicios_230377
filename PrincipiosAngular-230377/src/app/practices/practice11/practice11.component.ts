import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practice11',
  imports: [NgOptimizedImage],
  templateUrl: './practice11.component.html',
  styleUrl: './practice11.component.css'
})
export class Practice11Component {
  logoUrl = 'http://localhost:4200/favicon.ico';
  logoAlt = 'Angular logo';
  username = 'Isaac';
}
