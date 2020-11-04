import { Component, OnInit } from '@angular/core';
import {  SrvBusquedaService} from './services/srv-busqueda.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private SrvEliService:SrvBusquedaService){
    
  }
  ngOnInit(){ 
  }
  title = 'titulo'
}
