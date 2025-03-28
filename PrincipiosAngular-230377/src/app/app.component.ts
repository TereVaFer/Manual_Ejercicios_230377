import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, ContentComponent, BreadcrumbComponent, FooterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTask: number | null = null;

  onTaskSelected(event: { taskNumber: number }) {
    this.currentTask = event.taskNumber;
  }
  isAuthenticated: boolean = false;
  sidebarVisible: boolean = true; 

  constructor(private router: Router) {
    const storedAuth = localStorage.getItem('isAuthenticated');
    this.isAuthenticated = storedAuth === 'true';
  }

  handleLogin() {
    this.isAuthenticated = true;
    localStorage.setItem('isAuthenticated', 'true');
    this.router.navigate(['/dashboard']);
  }

  handleLogout() {
    this.isAuthenticated = false;
    localStorage.setItem('isAuthenticated', 'false');
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

  // Al recibir la actividad seleccionada desde el Navbar, actualizamos el Sidebar.
  onActivitySelected(activity: { name: string, description: string }) {
    this.sidebar.setSelectedActivity(activity);
  }
}
