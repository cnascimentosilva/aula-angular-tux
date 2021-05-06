import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo ='Primeira pagina';
  foto = 'https://cdn.pixabay.com/photo/2021/04/24/23/24/road-6205261__340.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  //Função ou método
  botao() {
    alert('cliquei no botão ;)')
  }
}
