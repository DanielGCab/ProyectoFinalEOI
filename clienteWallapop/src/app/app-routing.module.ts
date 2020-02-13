import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ver-productos',
    loadChildren: () => import('./producto/ver-productos/ver-productos.module').then( m => m.VerProductosPageModule)
  },
  {
    path: 'ver-productos/:id',
    loadChildren: () => import('./producto/producto-informacion/producto-informacion.module').then( m => m.ProductoInformacionPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./auth/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'add-producto',
    loadChildren: () => import('./producto/add-producto/add-producto.module').then( m => m.AddProductoPageModule)
  },
  {
    path: 'producto-editar',
    loadChildren: () => import('./producto/producto-editar/producto-editar.module').then( m => m.ProductoEditarPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
