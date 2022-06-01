
import {NgModule} from '@angular/core';
import {ModelModule} from './model.module';
import {HeaderComponent} from '../connectnow/header/header.component';
import {VedioGameComponent} from '../connectnow/vedio-game/vedio.game.component';
import {ConnectnowComponent} from '../connectnow/connectnow.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactComponent} from '../admin/contact/contact.component';


@NgModule({
    imports: [ModelModule, RouterModule, CommonModule, MatSelectModule, MatOptionModule, ReactiveFormsModule, FormsModule],
  declarations: [HeaderComponent, VedioGameComponent, ConnectnowComponent],
  exports: [HeaderComponent, VedioGameComponent, ConnectnowComponent]
})

export class ConnectNowModule
{
  constructor() {
    console.log('connect now');
  }
}
