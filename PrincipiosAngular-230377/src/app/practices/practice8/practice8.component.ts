import { Component, Input } from '@angular/core';
import { Practice8AssistantComponent } from '../practice8-assistant/practice8-assistant.component';
@Component({
  selector: 'app-practice8',
  imports: [Practice8AssistantComponent],
  templateUrl: './practice8.component.html',
  styleUrl: './practice8.component.css'
})
export class Practice8Component {
  @Input() occupation = '';
  @Input() name = '';
}
