import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-world',
  imports: [FormsModule],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent {
@Input() nombreWorld: String="";
@Output() emisor = new EventEmitter<string>();
mensajeAlPadre:string="";
}
