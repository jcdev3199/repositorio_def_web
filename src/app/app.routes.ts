
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {
        path: 'menu',
        component:MenuComponent
    },
    {
        path: 'slider',
        component:SliderComponent
    }
    ,
    {
        path: 'body',
        component:BodyComponent
    },
    {
        path: 'footer',
        component:FooterComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }