import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  constructor() { }

  getXwins(user: string){
    return JSON.parse(this.httpGet('http://localhost:8000/getXwins/?username=' + user)).value;
  }

  getOwins(user: string){
    return JSON.parse(this.httpGet('http://localhost:8000/getOwins/?username=' + user)).value;
  }

  addXwin(user: string){
    this.httpGet('http://localhost:8000/addXwins/?username=' + user);
  }

  addOwin(user: string){
    this.httpGet('http://localhost:8000/addOwins/?username=' + user);
  }

  httpGet(theUrl: string | URL) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", theUrl, false); 
    xmlHttpReq.send(null);
    return xmlHttpReq.responseText;
  }

  login(user: string, pass: string){
    if(this.httpGet('http://localhost:8000/login/?username=' + user + '&password=' + pass) === 'true'){
      return true;
    }else{
      return false;
    }
  }

  logout(user: string){
    if(this.httpGet('http://localhost:8000/logout/?username=' + user) === 'true'){
      return false;
    }else{
      return true;
    }
  }

  
}
