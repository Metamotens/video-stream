import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StreamComponent } from './stream/stream.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent,
}, {
    path: ':id',
    component: StreamComponent,
}];
