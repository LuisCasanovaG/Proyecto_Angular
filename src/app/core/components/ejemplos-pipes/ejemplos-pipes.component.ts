import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { CurrencyPipe, DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { CapicuaPipe } from '../../pipes/capicua.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplos-pipes',
  imports: [
    MaterialModule,
    CurrencyPipe,
    DatePipe,
    UpperCasePipe,
    DecimalPipe, 
    CapicuaPipe,
    FormsModule
  ],
  templateUrl: './ejemplos-pipes.component.html',
  styleUrl: './ejemplos-pipes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
 
})
export class EjemplosPipesComponent implements OnInit, OnDestroy{
  ngOnInit(): void {
    ///realizar llamadas al servidor
    console.log("Componente inicializado")
  }
  ngOnDestroy(): void {
   ///Desuscribirse de observables
   console.log("Componente destruido")
  }

  producto={
    nombre:"iPhone X",
    precio:"100.99"

  }
  persona={
    nombre:"Andres Calamaro",
    fechNacimiento:"1985-05-20"
  }

  palabra="";

}
