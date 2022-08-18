import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductpageComponent } from './productpage/productpage.component';

const routes: Routes = [
  {
    path:'product',
    component: ProductComponent,
  },
  {
    path:'productpage',
    component: ProductpageComponent,
  },
  {
    path:'product/:id',
    component: ProductpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent=[ProductComponent,ProductpageComponent];
