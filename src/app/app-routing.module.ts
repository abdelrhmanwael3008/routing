import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServesComponent } from './serves/serves.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent, title:'home'},
  {path:'about',component:AboutComponent,title:'about'},
  {path:'portfolio',component:ServesComponent, title:'portfolio'},
  {path:'contact',component:ContactComponent, title:'contact'},
  {path:'**',component:NotFoundComponent,title:'404'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
