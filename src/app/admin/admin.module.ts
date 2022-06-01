import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {ContactComponent} from './contact/contact.component';
import {ConnectNowModule} from '../model/connect.now.module';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ConnectNowModule
  ],
  declarations: [ContactComponent]
})
export class AdminModule { }
