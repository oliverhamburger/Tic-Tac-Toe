import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  constructor() { }

  x = 0;
  o = 0;

  getXwins(){
    return this.x;
  }

  getOwins(){
    return this.o;
  }

  addXwin(){
    this.x++;
  }

  addOwin(){
    this.o++;
  }

  
}
