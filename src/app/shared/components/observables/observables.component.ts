import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import {
  MatDialog,
  } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

  export interface DialogData {
    character: any;
    results: any[];
personajes: any;
    animal: string;
    name: string;
  }

@Component({
  selector: 'app-observables',
  imports: [CommonModule, MaterialModule,FormsModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent implements OnInit{
  //observableIntervalo=interval(1000);///se hace en mil miles segundos,osea en segundos
  //contador=0;

animal = '';
name = '';
readonly dialog = inject(MatDialog);

openDialog(): void {
const dialogRef = this.dialog.open(DialogComponent, {
data: {name: this.name, animal: this.animal},
});

dialogRef.afterClosed().subscribe(result => {
console.log('el dialogo fue cerrado con la data: ', result);
if (result !== undefined) {
this.animal = result;
}
});
}

  ngOnInit(): void {
   /* this.observableIntervalo.subscribe(x => {
      console.log(x) 
      this.contador=x;
  })*/
  }

  


  
}
