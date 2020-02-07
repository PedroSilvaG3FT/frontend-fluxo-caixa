import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from "ngx-mask";
import { CurrencyMaskModule } from "ng2-currency-mask";
import {
  CollapseModule,
  BsDropdownModule,
  TooltipModule,
  BsDatepickerModule,
} from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CaixaComponent } from './operacional/caixa/caixa.component';
import { RecargaComponent } from './operacional/recarga/recarga.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    CaixaComponent,
    RecargaComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,

    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
