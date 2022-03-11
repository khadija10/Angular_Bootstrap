import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { UpdateproduitComponent } from './components/produits/updateproduit/updateproduit.component';
import { AddproduitComponent } from './components/produits/addproduit/addproduit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListeproduitComponent } from './components/produits/listeproduit/listeproduit.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    ProduitsComponent,
    UpdateproduitComponent,
    AddproduitComponent,
    HeaderComponent,
    FooterComponent,
    ListeproduitComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    SweetAlert2Module.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
