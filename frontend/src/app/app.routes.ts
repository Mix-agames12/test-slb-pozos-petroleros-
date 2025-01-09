import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModifyViewComponent } from './modify-view/modify-view.component';
import { FormViewComponent } from './form-view/form-view.component';

export const routes: Routes = [
    {
        path: 'pozos',
        component: ModifyViewComponent
    },
    {
        path: 'form',
        component: FormViewComponent
    },
];
