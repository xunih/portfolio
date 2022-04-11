import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutMeComponent } from './about-me/about-me.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DialogPageComponent } from './dialog-page/dialog-page.component';
import { DialogPageTwoComponent } from './dialog-page-two/dialog-page-two.component';
import { DialogProjectOneComponent } from './smart-car/dialog-project-one.component';
import { OasisComponent } from './oasis/oasis.component';
import { RacingGameComponent } from './racing-game/racing-game.component';
import { MoodyComponent } from './moody/moody.component';
import { ThesisComponent } from './thesis/thesis.component';
import { MenstrualHealthComponent } from './menstrual-health/menstrual-health.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    ProjectPageComponent,
    ContactMeComponent,
    DialogPageComponent,
    DialogPageTwoComponent,
    DialogProjectOneComponent,
    OasisComponent,
    RacingGameComponent,
    MoodyComponent,
    ThesisComponent,
    MenstrualHealthComponent
  ],
  imports: [PdfViewerModule,
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
