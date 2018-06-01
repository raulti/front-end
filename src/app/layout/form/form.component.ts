import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormControl, FormsModule, NgModel, NgForm, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Contato, layoutService } from '../layout.service';
import { NgClass } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})

export class FormComponent implements OnInit {

    public layoutServive;
    public contato: any = {}
    public msgInputError: string;
    public formulario: FormGroup;

    constructor(private _layoutService: layoutService, private router: Router) {
        this.msgInputError = 'Preencha o campo corretamente';
        this.layoutServive = _layoutService;
        this.contato = this.contato === undefined ? {} : this.contato;
    }

    ngOnInit() {

        this.contato = this.layoutServive.getContato(1);

        this.formulario = new FormGroup({
            nome: new FormControl('', [
                Validators.minLength(3),
                Validators.maxLength(60),
                Validators.required
            ]),
            sobrenome: new FormControl('', [
                Validators.minLength(3),
                Validators.maxLength(80),
                Validators.required
            ]),
            email: new FormControl('', [
                Validators.minLength(5),
                Validators.maxLength(50),
                Validators.required,
                Validators.pattern("[^ @]*@[^ @]*")
            ]),
            language: new FormControl()
        });
    }

    public salvar(contato: any, form: FormControl): void {

        if (!form.invalid) {
            this.layoutServive.salvar(contato).subscribe(() => {
                alert('Contato Salvo com sucesso');
                this.router.navigate(['list']);
            }, error => {
                alert('Erro ao salvar o contato');
            });
        } else {
            alert('Preencha todos os campos de forma correta');
        }
    }
}
