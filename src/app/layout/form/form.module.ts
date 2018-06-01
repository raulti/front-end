import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { ContatoResolve } from '../../shared/resolve/contato.resolve';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule, NgxMaskModule],
    declarations: [FormComponent]
})
export class FormModule { }
