import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CGUComponent } from './pages/cgu/cgu.component';
import { CGVComponent } from './pages/cgv/cgv.component';
import { HomesComponent } from './pages/homes/homes.component';
import { InProgressComponent } from './pages/in-progress/in-progress.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { MentionLegaleComponent } from './pages/mention-legale/mention-legale.component';
import { PageAvantageComponent } from './pages/page-avantage/page-avantage.component';
import { PageFonctionnaliteComponent } from './pages/page-fonctionnalite/page-fonctionnalite.component';
import { PolitiqueConfidentialiteComponent } from './pages/politique-confidentialite/politique-confidentialite.component';
import { AboutComponent } from './pages/about/about.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { FunctionalityComponent } from './pages/functionality/functionality.component';
import { MockUpsComponent } from './pages/mock-ups/mock-ups.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path:'',
    component: LoadingComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'benefits',
    component: BenefitsComponent
  },
  {
    path:'functionality',
    component: FunctionalityComponent
  },
  {
    path:'mock-ups',
    component: MockUpsComponent
  },
  {
    path:'blog',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }