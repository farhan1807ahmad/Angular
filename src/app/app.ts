import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = 'Angular-Intro';
  // name = "Farhan Ahmad";
  // x = 10;
  // y = 20;

  // user1="farhan";
  // user2="ahmad";
  
  // handleClickEvent(){
  //   console.log("Function Called");
  //   this.otherFunction(); 
  // }
  // otherFunction(){
  //   console.log("Other Function Called");
  // }

  // name:string="Farhan Ahmad";

  // updateName(){
  //   this.name="Angular Developer";
  // }

  sum(a:number,b:number){
    console.log(a+b);
  }
}
