import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { SocialComponent } from './social/social.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    ImageSliderComponent,
    JumbotronComponent,
    TeamSectionComponent,
    PhilosophyComponent,
    SocialComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
