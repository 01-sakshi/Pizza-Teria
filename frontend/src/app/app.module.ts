import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CartTabComponent } from "./cart-tab/cart-tab.component";
import { MenuTabComponent } from "./menu-tab/menu-tab.component";
import { ViewProductComponent } from "./view-product/view-product.component";
import { ProfileTabComponent } from "./profile-tab/profile-tab.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  // { path: "home", component: HomeComponent },
  {
    path: "home",
    children: [
      {
        component: HomeComponent,
        path: ''
      },
      {
        component: RegisterComponent,
        path: 'register'
      },
      {
        component: LoginComponent,
        path: 'login'
      },
      {
        component: CartTabComponent,
        path: 'cart-tab',
      },
      {
        path: 'menu-tab',
        children: [
          {
            component: MenuTabComponent,
            path: ''
          },
          {
            component: ViewProductComponent,
            path: 'view-product'
          }
        ]
      },
      {
        component: ProfileTabComponent,
        path: 'profile-tab',
      },
    ]
  },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "restaurants", component: RestaurantsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    RestaurantsComponent,
    MenuTabComponent,
    ViewProductComponent,
    CartTabComponent,
    ProfileTabComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
