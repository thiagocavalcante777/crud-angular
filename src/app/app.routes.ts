import {Routes} from "@angular/router";
import {ListarComponentComponent} from "./listar-component/listar-component.component";
import {CriarComponentComponent} from "./criar-component/criar-component.component";
import {EditarComponentComponent} from "./editar-component/editar-component.component";
import {XyzComponent} from "./xyz/xyz.component";

export const AppRoutes: Routes = [
  { path: '', component: ListarComponentComponent },
  { path: 'criar', component: CriarComponentComponent },
  { path: 'editar/:id', component: EditarComponentComponent },
  { path: 'xyz', component: XyzComponent }
];
