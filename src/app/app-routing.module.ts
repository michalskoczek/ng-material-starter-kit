import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './components/product/product.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {CryptoComponent} from './components/crypto/crypto.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponentModule} from './components/product/product.component-module';
import {ProductServiceModule} from './services/product.service-module';
import {EmployeeComponentModule} from './components/employee/employee.component-module';
import {EmployeeServiceModule} from './services/employee.service-module';
import {CryptoComponentModule} from './components/crypto/crypto.component-module';
import {CryptoCurrencyServiceModule} from './services/crypto-currency.service-module';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products-master-details',
    component: ProductComponent
  }, {path: 'employees-master-details', component: EmployeeComponent}, {
    path: 'crypto-master-details',
    component: CryptoComponent
  }, {
    path: 'products',
    component: ProductListComponent
  }]), ProductComponentModule, ProductServiceModule, EmployeeComponentModule, EmployeeServiceModule, CryptoComponentModule, CryptoCurrencyServiceModule, ProductListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
