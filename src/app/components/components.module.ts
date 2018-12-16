import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { AngularMaterialModule } from '../mat.module';

@NgModule({
  declarations: [CardsComponent],
  entryComponents:[CardsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class ComponentsModule { }
