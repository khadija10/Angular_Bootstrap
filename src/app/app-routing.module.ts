import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddproduitComponent } from './components/produits/addproduit/addproduit.component';
import { ListeproduitComponent } from './components/produits/listeproduit/listeproduit.component';
import { UpdateproduitComponent } from './components/produits/updateproduit/updateproduit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produits', component: ListeproduitComponent},
  {path: 'produits/addproduit', component: AddproduitComponent},
  {path: 'produits/update/:id', component: UpdateproduitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
