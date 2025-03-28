import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-practice8-assistant',
  imports: [],
  templateUrl: './practice8-assistant.component.html',
  styleUrl: './practice8-assistant.component.css'
})
export class Practice8AssistantComponent {
  @Input() occupation = '';
  @Input() name = ''
}
