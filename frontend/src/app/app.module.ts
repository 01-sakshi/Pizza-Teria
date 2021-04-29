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
// import { AdminComponent } from './admin/admin.component';
// import { AdminTasksComponent } from './admin-tasks/admin-tasks.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileTabComponent } from "./profile-tab/profile-tab.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminTasksComponent } from "./admin-tasks/admin-tasks.component";
import { AddItemComponent } from "./add-item/add-item.component";
import { AddLocationComponent } from "./add-location/add-location.component";
import { AddRestaurantComponent } from "./add-restaurant/add-restaurant.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'admin-tasks', component: AdminTasksComponent },
  {
    path:"admin",
    children:[
     
      {
        component: AddItemComponent,
        path:'add-item'
      },
      {
        component:AddLocationComponent,
        path:'add-location'
      },
      {
        component:AddRestaurantComponent,
        path:'add-restaurant'
      }
    ]
  },
  
  
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
  {
    path: "payment",component: PaymentComponent
     },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "restaurants", children: [
    {
      component: RestaurantsComponent,
      path: ''
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
  ]}
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
    ProfileTabComponent,
    PaymentComponent,
    AdminComponent,
    AdminTasksComponent,
    AddItemComponent,
    AddLocationComponent,
    AddRestaurantComponent
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
