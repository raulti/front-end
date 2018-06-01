import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ListRoutingModule, PageHeaderModule],
    declarations: [ListComponent]
})
export class ListModule {}
