// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { MenuTabComponent } from './menu-tab.component';

// const routes: Routes = [
//   {
//     path: 'menu-tab',
//     component: MenuTabComponent,
//     children: [
//       {
//         path: 'view-product',
//         children: [
//           {
//             path: '',
//             loadChildren: () =>
//               import('../view-product/view-product.module').then(m => m.ViewProductModule)
//           }
//         ]
//       },
//       // {
//       //   path: '',
//       //   redirectTo: '/tabs/menu-tab',
//       //   pathMatch: 'full'
//       // }
//     ]
//   },
//   // {
//   //   path: '',
//   //   redirectTo: '/tabs/menu-tab',
//   //   pathMatch: 'full'
//   // }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class MenuTabRoutingModule {}
