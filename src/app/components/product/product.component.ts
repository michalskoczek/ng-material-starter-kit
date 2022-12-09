import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  readonly products$: Observable<ProductModel[]> = this._productService.getAll();
  private _selectedProductSubject: Subject<number> = new Subject<number>();
  public selectedProduct$: Observable<number> = this._selectedProductSubject.asObservable();
  readonly details$: Observable<ProductModel> = this.selectedProduct$.pipe(switchMap(data => this._productService.getOne(data)));

  constructor(private _productService: ProductService) {
  }

  selectProduct(id: number): void {
    this._selectedProductSubject.next(id);
  }
}
