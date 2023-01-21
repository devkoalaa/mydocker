import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SobreComponent } from './sobre/sobre.component';
import { UsuarioComponent } from './usuario/usuario.component';

const appRoutes: Routes = [
  { path: 'principal', component: PrincipalComponent }, // www.exemplo.com.br/
  { path: 'sobre', component: SobreComponent }, // www.exemplo.com.br/sobre
  { path: 'usuario', component: UsuarioComponent }  // www.exemplo.com.br/usuario
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
