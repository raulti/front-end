import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Contato {
  nome: string;
  sobreNome: string;
  dtNascimento:string;
  email: string;
  telefone: string;
  cpf: string;
  celular: string;
}

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
};

@Injectable()
export class layoutService {

  urlBase = 'http://localhost/contato/';
  

  constructor(private http: HttpClient) { }

  /**
   * Retorna rota para consumo do serviço na API de acordo com urlBase e rota relativa
   *
   * @param rota
   */
  getRota(rota) {
    return this.urlBase + rota;
  }

  /**
   * Recupera lista de contatos.
   */
  getContatos() {
    return this.http.get(this.getRota('listar'));
  }

  /**
   * Recupera contato.
   */
  getContato(id) {
    return this.http.get(this.getRota('visualizar' + id));
  }

  /**
   * Inativa registro da base de dados.
   */
  excluir(id) {
    return this.http.get(this.getRota('excluir/' + id));
  }

 /**
   * Salva contato.
   */
  salvar(contato) {
    return this.http.post(this.getRota('salvar'), JSON.stringify(contato), httpOptions);
  }

}
