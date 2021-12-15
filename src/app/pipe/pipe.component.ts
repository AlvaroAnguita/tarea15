import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: [
  ]
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre:string="Alvaro"
  apellido:string="Anguita"

  frase:string="hola juan como estas"
  numero:number=6.0229312471
  persona={
    nombre:"Alvaro",
    apellido:"Anguita",
    edad:28,
    direccion:{
      calle:"Isla de Java",
      numero:78
    },
    email:"alvaroanguitta@gmail.com"
  }

  fecha = new Date();
}
