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

  login(user: string, pass: string){
    //TODO: pass user and pass as a query in a POST request to the backend to verify credentials and get that users xwins and owins
    //      will have to reconstruct the backend if each user has an xwins and an owins, because as of now their is only one xwins and owins
    if(user === "hello" && pass === "hello"){
      return true;
    }
    return false;
  }

  logout(){
    return false;
  }

  
}
