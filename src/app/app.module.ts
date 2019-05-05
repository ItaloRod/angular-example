import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NovosComponent } from './pages/novos/novos.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BannerComponent } from './components/banner/banner.component';
import { SeminovosComponent } from './pages/seminovos/seminovos.component';
import { VendasCorporativasComponent } from './pages/vendas-corporativas/vendas-corporativas.component';
import { AssistenciaTecnicaComponent } from './pages/assistencia-tecnica/assistencia-tecnica.component';
import { PecasComponent } from './pages/pecas/pecas.component';
import { ConsorcioComponent } from './pages/consorcio/consorcio.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { TrabalheConoscoComponent } from './pages/trabalhe-conosco/trabalhe-conosco.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { ModalComponent } from './components/modal/modal.component';
import { CountPipe } from './pipes/count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NovosComponent,
    HomeComponent,
    BannerComponent,
    SeminovosComponent,
    VendasCorporativasComponent,
    AssistenciaTecnicaComponent,
    PecasComponent,
    ConsorcioComponent,
    QuemSomosComponent,
    TrabalheConoscoComponent,
    FaleConoscoComponent,
    ModalComponent,
    CountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
