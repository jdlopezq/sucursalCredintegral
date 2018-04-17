import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http/'
import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';

//Modules
import 'hammerjs/hammer';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordresetComponent } from './components/passwordreset/passwordreset.component';
import { RegistuserComponent } from './components/registuser/registuser.component';
import { RelationComponent } from './components/relation/relation.component';
import { StateComponent } from './components/state/state.component';
import { UtilizationComponent } from './components/utilization/utilization.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserrecoveryComponent } from './components/userrecovery/userrecovery.component';
import { PasswordrecoveryComponent } from './components/passwordrecovery/passwordrecovery.component';
import { InitialpageComponent } from './components/initialpage/initialpage.component';
import { ServicetermsComponent } from './components/serviceterms/serviceterms.component';
import { UserpassrecoverComponent } from './components/userpassrecover/userpassrecover.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';

//Services
import { IpService } from './services/ip.service';
import { APP_ROUTING } from './app.routes';
import { LogService } from './services/log.service';
import {Badpassword, Blockacount, Baduser } from './components/popups/popups.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswordresetComponent,
    RegistuserComponent,
    RelationComponent,
    StateComponent,
    UtilizationComponent,
    NavbarComponent,
    UserrecoveryComponent,
    PasswordrecoveryComponent,
    InitialpageComponent,
    CreateaccountComponent,
    ServicetermsComponent,
    UserpassrecoverComponent,
    Badpassword,Blockacount, Baduser
    
  ],
  imports: [
    BrowserModule,
    
    APP_ROUTING,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  entryComponents:[Badpassword, Blockacount, Baduser, RegistuserComponent, PasswordresetComponent],
  providers: [IpService, LogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
