
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { InterfaceBusqueda} from "../interfaces/interface-busqueda";
import { InterfaceBusquedaUser} from "../interfaces/interface-busqueda-user"

import{HttpClient}from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class SrvBusquedaService {
  cachedValues: Array<{
    [query: string]: InterfaceBusqueda
  }> = [];

  constructor(private http:HttpClient) {this.http = http }
  
  busqueda = (query: string): Promise<InterfaceBusqueda> =>{
    let promise = new Promise<InterfaceBusqueda>((resolve, reject)=>{
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      } else {
        this.http.get("https://api.github.com/search/repositories?q="+query)
        .toPromise()
        .then((response)=>{
          resolve(response as InterfaceBusqueda)
        },(error) => {
          reject(error);
        })
      }
    })
    return promise;
  }

  busquedaDeUsuarios = (query: string): Promise<InterfaceBusquedaUser> =>{
    let promise = new Promise<InterfaceBusquedaUser>((resolve, reject)=>{
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      } else {
        this.http.get("https://api.github.com/search/users?q="+query)
        .toPromise()
        .then((response)=>{
          resolve(response as InterfaceBusquedaUser)
        },(error) => {
          reject(error);
        })
      }
    })
    return promise;
  }

}
