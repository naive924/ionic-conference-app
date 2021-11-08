import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HelloPage } from './hello';
import { HelloPageRoutingModule } from './hello-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelloPageRoutingModule
  ],
  declarations: [
    HelloPage,
  ]
})
export class HelloModule { }
