import { Component, OnInit } from '@angular/core';
import { BackendConnectorService } from '../backend-connector.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares!: any[];
  xIsNext!: boolean;
  winner!: string;
  loggedIn!: boolean;
  userName!: string;
  password!: string;

  constructor(private service: BackendConnectorService) { }

  ngOnInit(): void {
    this.newGame();
    this.loggedIn = false;
  }

  login(){
    this.loggedIn = this.service.login(this.userName, this.password);
  }

  logout(){
    this.loggedIn = this.service.logout(this.userName);
    this.userName = "";
    this.password = "";
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
  }

  getPlayer(){
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number){
    if(!this.squares[idx]){
      this.squares.splice(idx, 1, this.getPlayer());
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
    if(this.winner === 'O'){
      this.service.addOwin(this.userName);
    }else if(this.winner === 'X'){
      this.service.addXwin(this.userName);
    }
    
  }

  calculateWinner(){
    const lines = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]){
        return this.squares[a];
      }
    }
    return null;
  }

  getXwins(){
    return this.service.getXwins(this.userName);
  }

  getOwins(){
    return this.service.getOwins(this.userName);
  }

  getUserName(){
    return this.userName;
  }

}
