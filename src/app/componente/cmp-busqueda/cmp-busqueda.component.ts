import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { from } from 'rxjs';
import { InterfaceBusqueda } from 'src/app/interfaces/interface-busqueda';
import {SrvBusquedaService} from '../../services/srv-busqueda.service'

@Component({
  selector: 'app-cmp-busqueda',
  templateUrl: './cmp-busqueda.component.html',
  styleUrls: ['./cmp-busqueda.component.css']
})
export class CmpBusquedaComponent implements OnInit {

  resultadoBusqueda: InterfaceBusqueda;
  constructor(private ServioBuscar:SrvBusquedaService){ }

  ngOnInit(): void {
    this.ServioBuscar.busqueda('Eliezer').then((response)=>{
      this.resultadoBusqueda = response;
    },(error) => {
      alert('Error:'+ error.statusText)
    })
  }

  busquedaGit = (query:string) => {
    this.ServioBuscar.busqueda(query).then((response) =>{
      this.resultadoBusqueda = response;
    },(error) =>{
      alert("error:" + error.statusText)
    })
  }

}
