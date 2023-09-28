import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeadernavbarComponent } from './headernavbar/headernavbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomebuttonComponent } from './homebutton/homebutton.component';
import {MatButtonModule} from '@angular/material/button';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field'
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { InstructorComponent } from './instructor/instructor.component';
import { AdminComponent } from './admin/admin.component';
import { LearnerComponent } from './learner/learner.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { NavTabseComponent } from './navtabs/navtabs.component';
import { CoursetableComponent } from './navtabs/coursetable/coursetable.component';


const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component:LoginpageComponent},
  { path: 'instructor', component:InstructorComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'learner', component:LearnerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeadernavbarComponent,
    HomebuttonComponent,
    LoginpageComponent,
    HomeComponent,
    ProfileComponent,
    InstructorComponent,
    AdminComponent,
    LearnerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    NavTabseComponent,
    CoursetableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
