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

  
  crearComercio( comercio: ComercioModel ){
    return this.http.post(`${ this.url }/comercio.json`, comercio)
          /* .pipe(
            map( (resp: any)=> {
              comercio.id = resp.name;
              return comercio;
            })
          ); */
  }

  
}
