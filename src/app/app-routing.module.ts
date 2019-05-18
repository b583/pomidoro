
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from 'src/app/default-page/default-page/default-page.component';
import { SettingsPageComponent } from 'src/app/settings-page/settings-page.component';

const routes: Routes = [
  { path: '', component: DefaultPageComponent },
  { path: 'settings', component: SettingsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
