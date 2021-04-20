import { PreloadAllModules, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { mainRoutes } from './const';

@NgModule({
  // imports: [RouterModule.forRoot(mainRoutes, { preloadingStrategy: PreloadAllModules })],
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
