import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from 'src/app/models/administrador';
import { Paginacao } from 'src/app/models/paginacao';
import { AdministradorServico } from 'src/app/servicos/administradorServico';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  public paginacao: Paginacao | undefined
  public pagina: Number = 1

  ngOnInit(): void {
    this.carregarAdministradores()
  }

  private async carregarAdministradores(){
    this.paginacao = await new AdministradorServico(this.http).todos(this.pagina)
    debugger
  }

  public async excluir(adm: Administrador){
    throw "Método ainda será implementado"

  }

}
