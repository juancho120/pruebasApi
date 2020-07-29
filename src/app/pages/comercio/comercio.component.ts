import { ComerciosService } from './../../services/comercios.service';
import { Component, OnInit } from '@angular/core';
import { ComercioModel } from 'src/app/models/comercio.model';
import { NgForm } from '@angular/forms';

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

    this.comerciosService.crearComercio( this.comercio )
      .subscribe(resp => {
        console.log(resp);
      });
    
    
    
  }

 

}
