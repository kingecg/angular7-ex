import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { AngularMaterialModule } from '../mat.module';
import { CgDragDirective } from './drag/cg-drag.directive';

@NgModule({
  declarations: [CardsComponent, CgDragDirective],
  entryComponents:[CardsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class ComponentsModule { }
