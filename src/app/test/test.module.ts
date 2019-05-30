import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponent } from './some/some.component';
import { BoldDirective } from './bold.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SomeComponent,
    BoldDirective
  ],
  exports: [SomeComponent]
})
export class TestModule { }
