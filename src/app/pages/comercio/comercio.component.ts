import { Observable } from 'rxjs';
import { ComerciosService } from './../../services/comercios.service';
import { Component, OnInit } from '@angular/core';
import { ComercioModel } from 'src/app/models/comercio.model';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.scss']
})
export class ComercioComponent implements OnInit {

  comercio: ComercioModel = new ComercioModel();

  constructor( private comerciosService: ComerciosService) { }

  ngOnInit(): void {
  }

  guardar ( form: NgForm) {

    if (form.invalid){
      console.log('formulario no valido');
      return;
    }


    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false,
    })

    Swal.showLoading();

    let peticion: Observable<any>;

    if ( this.comercio.id ){
      peticion = this.comerciosService.actualizarComercio( this.comercio );
    } else{
      peticion = this.comerciosService.crearComercio( this.comercio );
    }

    peticion.subscribe( resp=>{

      Swal.fire({
        title: this.comercio.nombre,
        text: 'Se actualizo correctamente',
        icon: "success"
      })
    })
  }

}
