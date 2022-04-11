import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutMeComponent } from './about-me/about-me.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DialogPageComponent } from './dialog-page/dialog-page.component';
import { DialogPageTwoComponent } from './dialog-page-two/dialog-page-two.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    ProjectPageComponent,
    ContactMeComponent,
    DialogPageComponent,
    DialogPageTwoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'projects', component: ProjectPageComponent },
    { path: 'contact-me', component: ContactMeComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
