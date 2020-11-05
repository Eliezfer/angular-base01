import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
busquedaQuery: string;
  constructor(private ServicioBuscarService:SrvBusquedaService, private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.ServicioBuscarService.busqueda('Eliezer').then((response)=>{
      this.resultadoBusqueda = response;
    },(error) => {
      alert('Error:'+ error.statusText)
    })
  }

  busquedaGit = () => {
    this.ServicioBuscarService.busqueda(this.busquedaQuery).then((response) =>{
      this.resultadoBusqueda = response;
    },(error) =>{
      alert("error:" + error.statusText)
    })
  }

}
