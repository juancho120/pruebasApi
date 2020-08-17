import { TipoVentasModel } from './../../models/comercio.model';
import { Observable } from 'rxjs';
import { ComerciosService } from './../../services/comercios.service';
import { Component, OnInit } from '@angular/core';
import { ComercioModel } from 'src/app/models/comercio.model';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.scss']
})
export class ComercioComponent implements OnInit {

  comercio: ComercioModel = new ComercioModel();

  constructor( private comerciosService: ComerciosService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ){
      this.comerciosService.getComercio( id )
          .subscribe( (resp: ComercioModel ) => {
            this.comercio = resp['data'];
            this.comercio.id = id ;
          })
    }

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

    
  venta:TipoVentasModel[] = [
    {id: '1', tipo: 'Celiacos'},
    {id: '2', tipo: 'Diabeticos'},
    {id: '3', tipo: 'Comunes'},
  ]
}
