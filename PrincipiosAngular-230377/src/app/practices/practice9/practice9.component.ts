import { Component } from '@angular/core';
import { Practice9AssistantComponent } from "../practice9-assistant/practice9-assistant.component";

@Component({
  selector: 'app-practice9',
  imports: [Practice9AssistantComponent],
  templateUrl: './practice9.component.html',
  styleUrl: './practice9.component.css'
})
export class Practice9Component {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
