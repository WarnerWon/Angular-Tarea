import { Component, OnInit } from '@angular/core';
import { Persona } from '../../Modelos/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public p

  constructor() { 
    this.p = new Persona("Jorge", "Campos Ortega", 25, "Hombre")
  }


  ngOnInit(): void {
  }

}
