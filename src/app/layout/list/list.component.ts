import { Component, OnInit } from '@angular/core';
import { layoutService, Contato } from '../layout.service';
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [routerTransition()]
})

export class ListComponent implements OnInit {

    public contatos;
    public contato: Contato;

    constructor(private _layoutService: layoutService) {
        this.contatos = this.contatos === undefined ? {} : this.contatos;
    }

    ngOnInit() {
        this.contatos = this.getContatos();
    }

    /**
     * Recupera lista de contatos
     */
    getContatos() {
        this._layoutService.getContatos().subscribe(data => {
            this.contatos = data;
        }, error => {
            alert(error);
        });
    }

    /**
     * Inativa registro da base de dados
     * 
     * @param id 
     */
    excluir(id) {
        this._layoutService.excluir(id).subscribe(data => {
            alert('Registro inativao com sucesso');
            this.getContatos();
        }, error => {
            alert(error);
        });
    }
}
