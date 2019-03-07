import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionListComponent }      from './region-list/region-list.component';
import { AppModule } from './app.module'

const routes: Routes = [
  { path: 'regions', component: RegionListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
