import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {


  
  Person = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  cacher = true; 
  
  haidenDisplay () {
    if (this.cacher === true){
      return this.cacher = false;
    }else return this.cacher = true;
    
  }



  constructor() {}

  ngOnInit() {
  }
}

