import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoriesCheckboxesComponent } from './categories-checkboxes.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CategoriesCheckboxesComponent],
  providers: [],
  exports: [CategoriesCheckboxesComponent]
})
export class CategoriesCheckboxesComponentModule {
}
