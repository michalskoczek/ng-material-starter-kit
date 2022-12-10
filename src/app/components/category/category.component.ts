import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, Observable} from 'rxjs';
import { CategoryService } from '../../services/category.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-category',
  styleUrls: ['./category.component.scss'],
  templateUrl: './category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent {
  readonly categories$: Observable<string[]> = this._categoryService.getCategories().pipe(
    delay(4000),
    map(_ => [])
  );

  constructor(private _categoryService: CategoryService) {
  }
}
