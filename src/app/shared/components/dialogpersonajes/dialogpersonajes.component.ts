import { Component, Inject, inject, Injector, OnInit } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { DialogData } from '../observables/observables.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { RymService } from '../../../core/services/rym.service';
import { PersonajesComponent } from '../../../core/components/personajes/personajes.component';


@Component({
  selector: 'app-dialogpersonajes',
  imports: [
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MaterialModule
],
  templateUrl: './dialogpersonajes.component.html',
  styleUrl: './dialogpersonajes.component.css'
})
export class DialogpersonajesComponent implements OnInit{
  character: any;
 
  constructor(private rymservicios: RymService, private dialogRef: MatDialogRef<DialogpersonajesComponent>,@Inject(MAT_DIALOG_DATA) private data: DialogData){}

  ngOnInit(): void {
    
    this.character = this.data.character;
    //console.log('Personaje', this.character.status);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
