import { ComercioModel } from 'src/app/models/comercio.model';
import { ComerciosService } from './../../services/comercios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styleUrls: ['./comercios.component.scss']
})
export class ComerciosComponent implements OnInit {

  comercios: ComercioModel[] = [];

  constructor( private comerciosService: ComerciosService ) { }

  ngOnInit(): void {

    this.comerciosService.getComercios()
        .subscribe( resp=> {
          console.log(resp)
        })

  }

}
