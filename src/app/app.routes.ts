import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
    {path: '', component: MissionlistComponent},
    {path: 'detail/:id', component: MissiondetailsComponent, data: { prerender: false }},
    {path: 'filter', component: MissionfilterComponent}
];


