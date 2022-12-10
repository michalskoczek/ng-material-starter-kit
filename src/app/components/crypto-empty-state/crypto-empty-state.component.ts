import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, Observable} from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoCurrencyService } from '../../services/crypto-currency.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-crypto-empty-state',
  styleUrls: ['./crypto-empty-state.component.scss'],
  templateUrl: './crypto-empty-state.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoEmptyStateComponent {
  readonly crypto$: Observable<CryptoModel[]> = this._cryptoCurrencyService.getAll().pipe(map(() => []));

  constructor(private _cryptoCurrencyService: CryptoCurrencyService) {
  }
}
