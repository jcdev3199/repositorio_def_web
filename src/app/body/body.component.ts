import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  constructor(private router: Router) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  enviarComentario() {
    alert('Enviado');
    const comentario = (<HTMLTextAreaElement>document.getElementById('comentario'));
    comentario.value = '';
  }
}
