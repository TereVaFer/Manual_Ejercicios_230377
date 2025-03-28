import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-practice9-assistant',
  imports: [],
  templateUrl: './practice9-assistant.component.html',
  styleUrl: './practice9-assistant.component.css'
})
export class Practice9AssistantComponent {
  @Output() addItemEvent = new EventEmitter();
  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
