import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, Observable} from 'rxjs';
import { PublicHolidaysModel } from '../../models/public-holidays.model';
import { PublicHolidaysService } from '../../services/public-holidays.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-public-holidays',
  styleUrls: ['./public-holidays.component.scss'],
  templateUrl: './public-holidays.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHolidaysComponent {
  readonly holidays$: Observable<PublicHolidaysModel[]> = this._publicHolidaysService.getAll().pipe(delay(1000), map(() => []));

  constructor(private _publicHolidaysService: PublicHolidaysService) {
  }
}
