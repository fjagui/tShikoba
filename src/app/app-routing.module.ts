import { ParteDetailsComponent } from 'src/app/Components/parte-details/parte-details.component';
import { CreateParteComponent } from 'src/app/Components/create-parte/create-parte.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParteListComponent } from 'src/app/Components/parte-list/parte-list.component';
import { UpdateParteComponent } from 'src/app/Components/update-parte/update-parte.component';

const routes: Routes = [
  { path: '', redirectTo: 'parte', pathMatch: 'full' },
  { path: 'partes', component: ParteListComponent },
  { path: 'add', component: CreateParteComponent },
  { path: 'update/:id', component: UpdateParteComponent },
  { path: 'details/:id', component: ParteDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
