import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutMeComponent } from './about-me/about-me.component';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    ProjectPageComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
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
