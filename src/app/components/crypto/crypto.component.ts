import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoCurrencyService } from '../../services/crypto-currency.service';


@Component({
  selector: 'app-crypto',
  styleUrls: ['./crypto.component.scss'],
  templateUrl: './crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoComponent {
  readonly cryptoList$: Observable<CryptoModel[]> = this._cryptoCurrencyService.getAll();
  private _selectedCryptoSubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public selectedCrypto$: Observable<CryptoModel> = this._selectedCryptoSubject.asObservable();


  constructor(private _cryptoCurrencyService: CryptoCurrencyService) {
  }

  selectCrypto(crypto: CryptoModel): void {
    this._selectedCryptoSubject.next(crypto);
  }
}
