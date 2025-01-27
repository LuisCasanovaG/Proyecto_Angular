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
  ///standalone:true
})
export class PersonajesComponent implements OnInit{
  personajes:any[]=[];
//data: any;
  
  constructor(private rymService: RymService, public dialog: MatDialog){}
  ngOnInit(): void {
    this.rymService.obtenerPersonajes().subscribe( (data: any) =>{
      console.log(data);
      this.personajes=data.results; ///esto de result se saca de la api
    } )
    
  }

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

/*
  onNoClick(): void {
    this.dialogRef.close();
  }*/

}
