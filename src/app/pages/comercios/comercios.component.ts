import { ComercioModel } from 'src/app/models/comercio.model';
import { ComerciosService } from './../../services/comercios.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styleUrls: ['./comercios.component.scss']
})
export class ComerciosComponent implements OnInit {

  comercios: ComercioModel[] = [];
  trash: ComercioModel[] = [];

  constructor( private comerciosService: ComerciosService ) { }

  ngOnInit(): void {

    this.comerciosService.getComercios()
        .subscribe( resp => {
          this.comercios = resp['data'];
          console.log(this.comercios);
        })

        this.comerciosService.trashComercio()
        .subscribe( resp => {
          this.trash = resp['data'];
          console.log(this.trash);
        })

  }

  borrarComercio( comercio: ComercioModel, i: number ){

    Swal.fire({
      title: '¿Esta seguro?',
      text: `Esta seguro que desea eliminar el comercio ${ comercio.nombre }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then( resp => {
      if (resp.value){
        this.comercios.splice(i, 1)
        this.comerciosService.borrarComercio( comercio.id ).subscribe();
      }
    })    
  }

}
