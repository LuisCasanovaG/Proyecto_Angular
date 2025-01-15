import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindromo',
  imports: [FormsModule],
  templateUrl: './palindromo.component.html',
  styleUrl: './palindromo.component.css'
})
export class PalindromoComponent {
palabra:string="";
esPalindormo:boolean | null=null;

palabraPalindromo(){
  const palabraSinEspacio=this.palabra.replace(/\s+/g, '').toLowerCase();
  const palabraInvertida=palabraSinEspacio.split('').reverse().join('');
  this.esPalindormo=palabraSinEspacio===palabraInvertida;
}
}
