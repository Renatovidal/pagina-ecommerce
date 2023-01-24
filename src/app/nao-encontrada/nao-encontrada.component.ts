import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nao-encontrada',
  templateUrl: './nao-encontrada.component.html',
  styleUrls: ['./nao-encontrada.component.css']
})
export class NaoEncontradaComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
  }


  voltar(){
      this.route.navigate([""])
  }

}
