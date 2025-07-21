import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';
import { InfoBlockComponent } from '../info-block/info-block.component';
import { ServicesComponent } from '../services/services.component';
import { ToggleServicosComponent } from '../toggle-servicos/toggle-servicos.component';
import { PainelFacilitiesComponent } from '../painel-facilities/painel-facilities.component';
import { PainelSegurancaComponent } from '../painel-seguranca/painel-seguranca.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    InfoBlockComponent,
    ServicesComponent,
    ToggleServicosComponent,
    PainelSegurancaComponent,
    PainelFacilitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
