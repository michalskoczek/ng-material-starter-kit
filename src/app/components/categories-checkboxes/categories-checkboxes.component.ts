import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, Observable} from 'rxjs';
import { CategoryService } from '../../services/category.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-categories-checkboxes',
  styleUrls: ['./categories-checkboxes.component.scss'],
  templateUrl: './categories-checkboxes.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesCheckboxesComponent {
  readonly categories$: Observable<string[]> = this._categoryService.getCategories().pipe(delay(5000), map(() => []));

  constructor(private _categoryService: CategoryService) {
  }
}
