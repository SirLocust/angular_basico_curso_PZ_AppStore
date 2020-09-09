import { LayoutComponent } from './layout/layout.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      // { path: 'products', component: ProductsComponent },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contactss/contacts.module').then((m) => m.ContactsModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/product.module').then((m) => m.ProductModule),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
