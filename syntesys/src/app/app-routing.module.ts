import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './syntesys/component/error/error.component';
import { ConsoleComponent } from './syntesys/component/console/console.component';
import { ConfigComponent } from './syntesys/view/config/config.component';
import { LoginComponent } from './syntesys/component/login/login.component';
import { RegisterComponent } from './syntesys/component/register/register.component';

import { AuthGuard } from './auth/auth.guard';
// import { AuthGuard, CanDeactivateGuard, UserProfileService } from '';
// import { PageNotFoundComponent } from './page-not-found.component';

/***************************************************************
 * Lazy Loading to Eager Loading
 *
 * 1. Remove the module and NgModule imports in `app.module.ts`
 *
 * 2. Remove the lazy load route from `app.routing.ts`
 *
 * 3. Change the module's default route path from '' to 'pathname'
 *****************************************************************/
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    component: ConsoleComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'console',
    component: ConsoleComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'anon',
    component: ConsoleComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'config',
    component: ConfigComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'config',
    component: ConfigComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard]
  },
  // { path: 'dashboard', loadChildren: 'app/syntesys/syntesys.module#SyntesysModule' },
  // {
  //   path: 'dashboard',
  //   loadChildren: 'app/syntesys/component.module#ConsoleComponent',
  //   // canActivate: [AuthGuard],
  //   // canActivateChild: [AuthGuard],
  //   // canLoad: [AuthGuard],
  // },
  // {
  //   path: 'admin',
  //   loadChildren: 'app/admin/admin.module#AdminModule',
  //   canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   canLoad: [AuthGuard],
  // },
  // { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  // { path: 'characters', loadChildren: 'app/characters/characters.module#CharactersModule' },
  // { path: 'vehicles', loadChildren: 'app/vehicles/vehicles.module#VehiclesModule' },
  { path: 'error', component: ErrorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [
    // AuthGuard,
    // CanDeactivateGuard,
    // UserProfileService
  ]
})
export class AppRoutingModule {}
