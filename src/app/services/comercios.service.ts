import { ComercioModel } from 'src/app/models/comercio.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComerciosService {
  private url = 'http://pure-springs-70195.herokuapp.com';
  
  constructor( private http: HttpClient) { }

  // Crear un nuevo comercio

  crearComercio( comercio: ComercioModel ){
    return this.http.post(`${ this.url }/comercio`, comercio)
          .pipe(
            map( (resp: any)=> {
              comercio.id = resp.data.id;
              return comercio;
            })
          );
  }

  // Actualizar un comercio especifico por ID

  actualizarComercio( comercio: ComercioModel ){

    const comercioTemp = {
      ...comercio
    };

    delete comercioTemp.id;

    return this.http.put(`${ this.url }/comercio/${ comercio.id }`, comercioTemp);
  }

  // Traer todos los comercios

  getComercios(){
    return this.http.get(`${ this.url }/comercio`);
  }

  // Traer un comercio especifico por ID

  getComercio( id: string){
    return this.http.get(`${ this.url }/comercio/${ id }`);
  }

  // Soft Delete, dar de baja un comercio

  borrarComercio( id: string ){
    return this.http.delete(`${ this.url }/comercio/${ id }`);
  }

  // Restaurar un comercio de baja

  trashComercio(){
    return this.http.get(`${ this.url }/trashed/comercio`);
  }
}
