import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';
import { InfoBlockComponent } from '../info-block/info-block.component';
import { ServicesComponent } from '../services/services.component';
import { ToggleServicosComponent } from '../toggle-servicos/toggle-servicos.component';
import { PainelFacilitiesComponent } from '../painel-components/painel-facilities/painel-facilities.component';
import { PainelSegurancaComponent } from '../painel-components/painel-seguranca/painel-seguranca.component';
import { SegmentosComponent } from '../segmentos/segmentos.component';
import { CarroselComponent } from '../carrosel/carrosel.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { LocalAtuacaoComponent } from '../local-atuacao/local-atuacao.component';

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
    PainelFacilitiesComponent,
    SegmentosComponent,
    CarroselComponent,
    CarouselComponent,
    LocalAtuacaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
