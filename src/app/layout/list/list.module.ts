import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ListRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule,],
    declarations: [ListComponent]
})
export class ListModule {}
