import { Component } from '@angular/core';

@Component({
  selector: 'app-practice5',
  imports: [],
  templateUrl: './practice5.component.html',
  styleUrl: './practice5.component.css'
})
export class Practice5Component {
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  users = [{id: 0, name: 'Teresa'}, {id: 1, name: 'Rodolfo'}, {id: 2, name: 'Valeria'}, {id: 3, name: 'Georgina'}, {id: 4, name: 'Rubén'}];
}
