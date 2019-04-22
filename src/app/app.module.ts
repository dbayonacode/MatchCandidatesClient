import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './candidate.matching/layout/layout.component';
import { HomeComponent } from './candidate.matching/home/home.component';
import { MatchingDataService } from './candidate.matching/services/matching-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MatchingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
