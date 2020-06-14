import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AdoptionsComponent } from './main-views/adoptions/adoptions.component';
import { AdoptionDetailComponent } from './main-views/adoptions/adoption-detail/adoption-detail.component';
import { AdoptionFormComponent } from './main-views/adoptions/adoption-form/adoption-form.component';
import { BreedDetailComponent } from './main-views/breed-list/breed-detail/breed-detail.component';
import { BreedListComponent } from './main-views/breed-list/breed-list.component';
import { ContactUsComponent } from './main-views/contact-us/contact-us.component';
import { HomeComponent } from './main-views/home/home.component';
import { MainLayoutComponent } from './main-views/main-layout/main-layout.component';
import { Page404Component } from './main-views/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '404',
        component: Page404Component,
      },
      {
        path: 'adopciones',
        children: [
          {
            path: '',
            component: AdoptionsComponent,
          },
          {
            path: ':id',
            component: AdoptionDetailComponent,
          },
          {
            path: 'formulario/:id',
            component: AdoptionFormComponent,
          },
        ],
      },
      {
        path: 'razas',
        children: [
          {
            path: '',
            component: BreedListComponent,
          },
          {
            path: ':raza',
            component: BreedDetailComponent,
          }
        ],
      },
      {
        path: 'contactanos',
        component: ContactUsComponent,
      },
      {
        path: '',
        children: [
          {
            path: '',
            component: HomeComponent,
          },
          {
            path: '**',
            redirectTo: '/404',
          },
        ],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
