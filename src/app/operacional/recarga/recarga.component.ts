import { Component, OnInit } from '@angular/core';
import { Recarga } from 'src/app/models/recarga';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.scss']
})
export class RecargaComponent implements OnInit {
  public lstRecargas: any[] = [];
  public recarga: Recarga = new Recarga();

  constructor() { }

  ngOnInit() {
    listTeste.forEach(x => this.lstRecargas.push(x));
  }

  insertRecarga() {
    console.log("RECARGA : ", this.recarga);
    this.lstRecargas.push(this.recarga);
    this.recarga = new Recarga();
  }

  removerRecarga(recarga) {
    this.lstRecargas.splice(this.lstRecargas.indexOf(recarga, 1))
  }

}

export const listTeste = [
  {
    recargaId: 1,
    usuarioId: 1,
    telefone: "(11) 95888-5825",
    valor: 15.00,
    dataInclusao: new Date(),
    usuario: ""
  },

  {
    recargaId: 2,
    usuarioId: 1,
    telefone: "(11) 95888-5825",
    valor: 15.00,
    dataInclusao: new Date(),
    usuario: ""
  },

  {
    recargaId: 3,
    usuarioId: 1,
    telefone: "(11) 95888-5825",
    valor: 15.00,
    dataInclusao: new Date(),
    usuario: ""
  },

  {
    recargaId: 4,
    usuarioId: 1,
    telefone: "(11) 95888-5825",
    valor: 15.00,
    dataInclusao: new Date(),
    usuario: ""
  },
]
