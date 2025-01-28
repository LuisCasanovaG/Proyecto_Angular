import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RymService {

  private URLBase='https://rickandmortyapi.com/api'
  ///para injectar un servicio se hace con el constructor
  /// se importa el HttpClient
  constructor(private http: HttpClient) { }

  obtenerPersonajes(pagina: number){
  
    return this.http.get(`${this.URLBase}/character/?page=${pagina}`);
  }

  obtenerUnPersonaje(id: string){
    return this.http.get(`${this.URLBase}/character/${id}`)
  }

}
