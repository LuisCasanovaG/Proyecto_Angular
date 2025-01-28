import { Component, Inject, INJECTOR, Injector, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { RymService } from '../../services/rym.service';
import { MatDialog,MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogpersonajesComponent } from '../../../shared/components/dialogpersonajes/dialogpersonajes.component';
import { DialogData } from '../../../shared/components/observables/observables.component';

@Component({
  selector: 'app-personajes',
  imports: [MaterialModule, MatDialogModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css',
  
})
export class PersonajesComponent implements OnInit{
  personajes:any[]=[];
  //paginas:any[]=['https://rickandmortyapi.com/api/character/?page='];
  //private paginas='https://rickandmortyapi.com/api/character/?page='
  //paginaTotal:any[]=[];
  paginaActual: number = 1;
  paginaTotal: number = 0;
//data: any;
  
  constructor(private rymService: RymService, public dialog: MatDialog){}
  ngOnInit(): void {

    this.cargarPersonajes(this.paginaActual);
  
  }


    cargarPersonajes(pagina: number):void{
      
    
    this.rymService.obtenerPersonajes(pagina).subscribe( (data: any) =>{
      //console.log(data);
      this.personajes=data.results; ///esto de result se saca de la api
      this.paginaTotal=data.info.pages;
      //console.log("total ", this.paginaTotal);
    } )

  }
    /*
    this.rymService.paginaPersonajes(this.paginaActual).subscribe( (pagina: any) =>{
      this.paginaTotal=pagina.info.pages;
      console.log("total ", this.paginaTotal);
      console.log('Respuesta de la API:', pagina);
      
    } )*/
    
  

  abrirDialog(character: any):void{
    
    const dialogRef = this.dialog.open(DialogpersonajesComponent, {
    data: {character},
    //data:character
    });/*
   injector: Injector.create({
    providers:[{
      provide:MAT_DIALOG_DATA,
      useValue:{character}
    }]
   })*/
    

    dialogRef.afterClosed().subscribe(result => {
    console.log('el dialogo fue cerrado con la data: ', result);
    if (result !== undefined) {
    this.personajes = result;
    }
    });

    
  }


  paginaInicio(): void {
    this.paginaActual = 1;
    this.cargarPersonajes(this.paginaActual);
  }

  paginaFinal(): void {
    this.paginaActual = this.paginaTotal;
    this.cargarPersonajes(this.paginaActual);
    
    
  }
  paginaSiguiente():void{
    if(this.paginaActual < this.paginaTotal){
      this.paginaActual++;
      this.cargarPersonajes(this.paginaActual);
      console.log("paginas",this.paginaActual);
      console.log("paginas total",this.paginaTotal);
    }
    
  }
  paginaAtras():void{
    if(this.paginaActual > 1){
      this.paginaActual--;
      this.cargarPersonajes(this.paginaActual);
      
    }
    
  }
 
}
