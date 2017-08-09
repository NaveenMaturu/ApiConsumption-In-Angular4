import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  a;
  b;
  n;
  l;
  c = [];
  d = [];
  private apiURL = "assets/data.json"

  data: any ={};

  constructor(public http: Http){

	  console.log('hello world');
	  this.getData();
	  this.getNaveen();
	  
  }

  getData(){

	  return this.http.get(this.apiURL)
	  .map(response=>response.json())
  }
  getNaveen(){
	  this.getData().subscribe(data =>{
	  //console.log(JSON.stringify(data));
		  this.a = JSON.stringify(data)
		   console.log(this.a);
		 
		   
	 this.n = JSON.parse(this.a)
	console.log(this.n.length);
	
	this.b=this.n.length
	
	console.log(this.n[0]);
	for(var i=0;i<3;i++)
	{
		console.log(this.n[i]);
		this.c.push(JSON.stringify(this.n[i]));
		console.log(this.c);
	}
	
	
  })}
  
	
 naveen(){
	 this.l= true;
	  for(var i=3;i<7;i++){
		 this.d.push(JSON.stringify(this.n[i]));
		 console.log(this.d);
	  }
} 
    
	 
  }
  
