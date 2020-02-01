import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "posts",
    loadChildren: "../app/posts/posts.module#PostsModule"
  },
  {
    path: "king",
    loadChildren: "../app/king/king.module#KingModule"
  },
  {
    path: "products",
    loadChildren: "../app/product/product.module#ProductModule"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
