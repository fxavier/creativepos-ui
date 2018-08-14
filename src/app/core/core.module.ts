import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '../../../node_modules/@angular/router';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule.forRoot(),

  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
