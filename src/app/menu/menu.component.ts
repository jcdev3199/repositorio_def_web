import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class MenuComponent {
  @Input() home: string = '';
  @Input() about: string = '';
  @Input() services: string = '';
  @Input() contact: string = '';

}
