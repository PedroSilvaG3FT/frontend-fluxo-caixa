import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.scss']
})
export class RecargaComponent implements OnInit {
  public lstRecargas = listTeste;
  public recarga: Recarga = new Recarga();

  constructor() { }

  ngOnInit() { }

  insertRecarga() {
    console.log("RECARGA : ", this.recarga);
    this.lstRecargas.push(this.recarga);
    this.recarga = new Recarga();
  }

}

export class Recarga {
  telefone: any;
  valor: any;
  dataInclusao: any;
}

 export const listTeste = [
  {
    telefone: "(11) 95888-5825",
    valor: 15.00,
    dataInclusao: new Date()
  },

  {
    telefone: "(11) 95888-5825",
    valor: 15.00,
    dataInclusao: new Date()
  },

  {
    telefone: "(11) 95888-5825",
    valor: 15.00,
    dataInclusao: new Date()
  },

  {
    telefone: "(11) 95888-5825",
    valor: 15.00,
    dataInclusao: new Date()
  },
]
