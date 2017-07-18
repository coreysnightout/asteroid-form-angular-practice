import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NasaListComponent } from './nasa-list/nasa-list.component';
import { NasaFormComponent } from './nasa-form/nasa-form.component';


const appRoutes: Routes = [
  {
    path: '',
    component: NasaFormComponent
  },
  {
    path: 'nasa-list',
    component: NasaListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
