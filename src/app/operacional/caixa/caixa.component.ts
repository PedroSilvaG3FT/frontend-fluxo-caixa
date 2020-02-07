import { Component, OnInit } from '@angular/core';
import { Caixa } from 'src/app/models/caixa';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.scss']
})
export class CaixaComponent implements OnInit {
  public lstCaixa: any[] = [];
  public caixa: Caixa = new Caixa();

  constructor() { }

  ngOnInit() {
    listTeste.forEach(x => this.lstCaixa.push(x));
  }

  insertCaixa() {
    console.log("CAIXA : ", this.caixa);
    this.lstCaixa.push(this.caixa);
    this.caixa = new Caixa();
  }

  removeCaixa(caixa) {
    this.lstCaixa.splice(this.lstCaixa.indexOf(caixa, 1))
  }

}

export const listTeste = [
  {
    recargaId: 1,
    usuarioId: 1,
    telefone: "(11) 95888-5825",
    descricao: "Descrição produto",
    valor: 15.00,
    dataInclusao: new Date(),
    usuario: ""
  },

  {
    recargaId: 2,
    usuarioId: 1,
    telefone: "(11) 95888-5825",
    descricao: "Descrição produto",
    valor: 15.00,
    dataInclusao: new Date(),
    usuario: ""
  },

  {
    recargaId: 3,
    usuarioId: 1,
    telefone: "(11) 95888-5825",
    descricao: "Descrição produto",
    valor: 15.00,
    dataInclusao: new Date(),
    usuario: ""
  },

  {
    recargaId: 4,
    usuarioId: 1,
    telefone: "(11) 95888-5825",
    descricao: "Descrição produto",
    valor: 15.00,
    dataInclusao: new Date(),
    usuario: ""
  },
]

