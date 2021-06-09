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
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes=[

  {path: "cart", component: ShoppingCartComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "", component: HomePageComponent},
  {path : "**", redirectTo : "/", pathMatch: "full"}
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
    HomeBannerComponent,
    HeaderMainComponent,
    HeaderTopComponent,
    LoginComponent,
    RegisterComponent,
    ShoppingCartComponent,
    HomePageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
