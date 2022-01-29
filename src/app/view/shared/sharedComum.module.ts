import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from './components/PrimeNg.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ProdutoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [],
    exports: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ProdutoComponent,
        /* ---interface--- */
        PrimeNgModule
    ]
})
export class SharedComumModule { }
