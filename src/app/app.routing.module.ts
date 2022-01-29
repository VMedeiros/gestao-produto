import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/shared/home/home.component';
import { ProdutoComponent } from './view/shared/produto/produto.component';

registerLocaleData(localePt, 'pt');

/*  Rotas da Aplicação */
const rotas: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'produto', component: ProdutoComponent },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ]
})

export class AppRoutingModule { }
