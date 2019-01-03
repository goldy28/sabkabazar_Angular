import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ SignupComponent} from './signup/signup.component'
import{ LoginComponent} from './login/login.component'
import { HomePageComponent } from './home-page/home-page.component';
import { PlpComponent } from './plp/plp.component';

const routes: Routes = [
    {path:'',component:HomePageComponent},
    {path:'products',component:PlpComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents = [SignupComponent,LoginComponent,PlpComponent,HomePageComponent]