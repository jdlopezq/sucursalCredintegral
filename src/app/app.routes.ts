import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { PasswordresetComponent } from './components/passwordreset/passwordreset.component';
import { RegistuserComponent } from './components/registuser/registuser.component';
import { RelationComponent } from './components/relation/relation.component';
import { StateComponent } from './components/state/state.component';
import { UtilizationComponent } from './components/utilization/utilization.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { InitialpageComponent } from './components/initialpage/initialpage.component';
import { PasswordrecoveryComponent } from './components/passwordrecovery/passwordrecovery.component';
import { UserrecoveryComponent } from './components/userrecovery/userrecovery.component';
import { UserpassrecoverComponent } from './components/userpassrecover/userpassrecover.component';


export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { path: 'navbar', component: NavbarComponent, children:[
        { path: '', redirectTo: 'navbar', pathMatch: 'full' },
        { path: 'relation', component: RelationComponent },
        { path: 'state', component: StateComponent },
        { path: 'utilization', component: UtilizationComponent },
        { path: 'summary', component: InitialpageComponent },
    ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'passChange', component: PasswordresetComponent },
    { path: 'passRecover', component: PasswordrecoveryComponent },
    { path: 'userRecover', component: UserrecoveryComponent},
    { path: 'userpassRecover', component: UserpassrecoverComponent},
    { path: 'register', component: RegistuserComponent },
    {path: '**', component: LoginComponent}

]



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
