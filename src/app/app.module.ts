import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainLayoutModule } from './shared/components/main-layout/main-layout.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [AppRoutingModule, BrowserModule, MainLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
