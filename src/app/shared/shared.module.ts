import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
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
