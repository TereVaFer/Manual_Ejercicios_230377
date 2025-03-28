import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() logoutEvent = new EventEmitter<void>();
  @Output() activitySelected = new EventEmitter<{ name: string, description: string }>();

  activities = [
    { name: 'ACTIVIDAD 1: Componentes en Angular', link: '/practice1', description: 'Los componentes son los bloques fundamentales de cualquier aplicación Angular. Cada componente tiene tres partes: Typescript, plantilla HTML y estilos CSS.' },
    { name: 'ACTIVIDAD 2: Actualizando la Clase del Componente', link: '/practice2', description: 'En Angular, la lógica y el comportamiento de los componentes se definen en la clase TypeScript del componente.' },
    { name: 'ACTIVIDAD 3: Componiendo Componentes', link: '/practice3', description: 'Has aprendido a actualizar la plantilla del componente, la lógica del componente y los estilos del componente, pero ¿cómo se usa un componente en tu aplicación? La propiedad selector de la configuración del componente te da un nombre para usar cuando haces referencia al componente en otra plantilla. Usas el selector como una etiqueta HTML, por ejemplo, app-user sería <app-user /> en la plantilla.' },
    { name: 'ACTIVIDAD 4: Flujo de Control en Componentes - @if', link: '/practice4', description: 'Decidir qué mostrar en la pantalla para el usuario es una tarea común en el desarrollo de aplicaciones. Muchas veces, la decisión se toma programáticamente utilizando condiciones. Para expresar visualizaciones condicionales en las plantillas, Angular usa la sintaxis de plantilla @if.' },
    { name: 'ACTIVIDAD 5: Flujo de Control en Componentes - @for', link: '/practice5', description: 'A menudo, cuando construyes aplicaciones web, necesitas repetir cierto código un número específico de veces. Por ejemplo, dada una lista de nombres, puede que desees mostrar cada nombre en una etiqueta <p>. En esta actividad, aprenderás cómo usar @for para repetir elementos en una plantilla.' },
    { name: 'ACTIVIDAD 6: Binding de Propiedades en Angular', link: '/practice6', description: 'El binding de propiedades en Angular te permite establecer valores para las propiedades de elementos HTML, componentes Angular y más. Usa el binding de propiedades para establecer valores dinámicamente en propiedades y atributos. Puedes hacer cosas como alternar características de botones, establecer rutas de imágenes programáticamente y compartir valores entre componentes. En esta actividad, aprenderás cómo usar el binding de propiedades en las plantillas.' },
    { name: 'ACTIVIDAD 7: Manejo de Eventos', link: '/practice7', description: 'El manejo de eventos permite características interactivas en las aplicaciones web. Te da la capacidad como desarrollador de responder a acciones del usuario, como pulsaciones de botones, envíos de formularios y más. En esta actividad, aprenderás cómo agregar un manejador de eventos.' },
    { name: 'ACTIVIDAD 8: Comunicación entre Componentes con @Input', link: '/practice8', description: 'A veces, el desarrollo de aplicaciones requiere enviar datos a un componente. Estos datos pueden usarse para personalizar un componente o tal vez enviar información de un componente padre a un componente hijo.' },
    { name: 'ACTIVIDAD 9: Comunicación entre Componentes con @Output', link: '/practice9', description: 'Cuando trabajas con componentes, puede ser necesario notificar a otros componentes que algo ha sucedido. Tal vez un botón ha sido presionado, un ítem ha sido agregado/eliminado de una lista o alguna otra actualización importante ha ocurrido. En este escenario, los componentes necesitan comunicarse con los componentes padres.' },
    { name: 'ACTIVIDAD 10: Vistas Diferidas', link: '/practice10', description: 'A veces, en el desarrollo de aplicaciones, te encuentras con muchos componentes que necesitas referenciar en tu aplicación, pero algunos de esos no necesitan cargarse inmediatamente por diversas razones. Tal vez están debajo del pliegue visible o son componentes pesados que no se interactúan hasta más tarde. En ese caso, podemos cargar algunos de esos recursos más tarde con vistas diferidas.' },
    { name: 'ACTIVIDAD 11: Optimización de Imágenes', link: '/practice11', description: 'Las imágenes son una parte importante de muchas aplicaciones y pueden ser una fuente importante de problemas de rendimiento, incluyendo bajas puntuaciones en Core Web Vitals. La optimización de imágenes puede ser un tema complejo, pero Angular maneja la mayor parte por ti, con la directiva NgOptimizedImage. En esta actividad, aprenderás cómo usar NgOptimizedImage para asegurar que tus imágenes se carguen de manera eficiente.' },
    { name: 'ACTIVIDAD 12: Introducción al Routing', link: '/practice12', description: 'Para la mayoría de las aplicaciones, llega un momento en el que la aplicación requiere más de una sola página. Cuando ese momento llega, el routing se convierte en una parte importante del rendimiento para los usuarios. En esta actividad, aprenderás a configurar tu aplicación para usar Angular Router.' }
];


  onActivityClick(activity: { name: string, description: string }) {
    // Emite la actividad seleccionada. Si se hace clic de nuevo en la misma, la lógica del sidebar se encargará de ocultarla.
    this.activitySelected.emit(activity);
  }

  handleLogout() {
    console.log("⛔ Click en Cerrar Sesión");
    this.logoutEvent.emit();
  }
}
