import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { PopularProductsComponent } from './components/popular-products/popular-products.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { RecommendedProductsComponent } from './components/recommended-products/recommended-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { BigFooterComponent } from './components/big-footer/big-footer.component';
import { BrandsComponent } from './components/brands/brands.component';
import { DownloadAppsComponent } from './components/download-apps/download-apps.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';

const routes: Routes=[
  {path : "", redirectTo : "products", pathMatch: "full"},
  {path : "**", redirectTo : "products", pathMatch: "full"}
]

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PopularProductsComponent,
    NewArrivalComponent,
    RecommendedProductsComponent,
    FooterComponent,
    BigFooterComponent,
    BrandsComponent,
    DownloadAppsComponent,
    IntroductionComponent,
    HomeBannerComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
