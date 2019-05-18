import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';

// Modules
import { DefaultPageModule } from 'src/app/default-page/default-page.module';
import { SettingsPageModule } from 'src/app/settings-page/settings-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Material
    MatToolbarModule,
    // Modules
    DefaultPageModule,
    SettingsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
