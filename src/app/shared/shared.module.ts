import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    DropdownDirective
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
