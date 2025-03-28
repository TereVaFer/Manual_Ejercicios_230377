import { Component } from '@angular/core';

@Component({
  selector: 'app-practice7',
  imports: [],
  templateUrl: './practice7.component.html',
  styleUrl: './practice7.component.css'
})
export class Practice7Component {
  message = '';

  onMouseOver() {
    this.message = '¡Bien hecho! 🚀';
  }
  
  greet() {
    console.log('¡Hola, ahí! 👋');
  }

}
