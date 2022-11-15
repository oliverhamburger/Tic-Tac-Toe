import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  constructor() { }

  getXwins(){
    return JSON.parse(this.httpGet('http://localhost:8000/getXwins')).value;
  }

  getOwins(){
    return JSON.parse(this.httpGet('http://localhost:8000/getOwins')).value;
  }

  addXwin(){
    this.httpGet('http://localhost:8000/addOwins');
  }

  addOwin(){
    this.httpGet('http://localhost:8000/addXwins');
  }

  httpGet(theUrl: string | URL) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", theUrl, false); 
    xmlHttpReq.send(null);
    return xmlHttpReq.responseText;
  }

  
}
