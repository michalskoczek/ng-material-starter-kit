import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, Observable} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly list$: Observable<ProductModel[]> = this._productService.getAll().pipe(delay(2000),map(()=>[]));

  constructor(private _productService: ProductService) {
  }
}
