import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovosComponent } from './pages/novos/novos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'novos',
        component: NovosComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
