import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isVisible: boolean = true;
  selectedActivity: { name: string, description: string } | null = null;

  // Si se requiere, se pueden mantener actividades locales para interacción interna
  selectedActivities = [
    { name: 'Actividad 1', description: 'Descripción de la actividad 1: ' },
    { name: 'Actividad 2', description: 'Descripción de la actividad 2' },
    { name: 'Actividad 3', description: 'Descripción de la actividad 3' },
    { name: 'Actividad 4', description: 'Descripción de la actividad 4' },
    { name: 'Actividad 5', description: 'Descripción de la actividad 5' },
    { name: 'Actividad 6', description: 'Descripción de la actividad 6' },
    { name: 'Actividad 7', description: 'Descripción de la actividad 7' },
    { name: 'Actividad 8', description: 'Descripción de la actividad 8' },
    { name: 'Actividad 9', description: 'Descripción de la actividad 9' },
    { name: 'Actividad 10', description: 'Descripción de la actividad 10' },
    { name: 'Actividad 11', description: 'Descripción de la actividad 11' },
    { name: 'Actividad 12', description: 'Descripción de la actividad 12' },
  ];

  @Output() toggleSidebar = new EventEmitter<void>();

  toggle() {
    this.isVisible = !this.isVisible;
    this.toggleSidebar.emit();
  }

  // Si se hace clic desde el propio sidebar, se alterna la visibilidad del mensaje (opcional)
  toggleDescription(activity: any) {
    this.selectedActivity = this.selectedActivity === activity ? null : activity;
  }

  // Método para actualizar la actividad seleccionado desde el Navbar (o componente padre)
  setSelectedActivity(activity: { name: string, description: string }) {
    // Si la actividad actual es la misma, no se hace nada
    if (this.selectedActivity && this.selectedActivity.name === activity.name) {
      return;
    }
    // Si es una actividad diferente, se actualiza la selección
    this.selectedActivity = activity;
  }  
}
