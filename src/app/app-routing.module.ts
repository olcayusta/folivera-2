import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';
import { HomeComponent } from './sidenav-container/home/home.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SidenavContainerComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'library',
        canLoad: [AuthGuard],
        loadChildren: () => import('./library/library.module').then((m) => m.LibraryModule),
      },
      {
        path: 'wl',
        canLoad: [AuthGuard],
        loadChildren: () => import('./watch-later/watch-later.module').then((m) => m.WatchLaterModule),
      },
      { path: 'movie/:movieId', loadChildren: () => import('./movie/movie.module').then((m) => m.MovieModule) },
      { path: 'help', loadChildren: () => import('./help/help.module').then((m) => m.HelpModule) },
      { path: 'search/:searchTerm', loadChildren: () => import('./search/search.module').then((m) => m.SearchModule) },
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule) },
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/modules/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'watch/:movieId',
    loadChildren: () => import('./watch/watch.module').then((m) => m.WatchModule),
  },
  {
    path: 'party',
    canLoad: [AuthGuard],
    loadChildren: () => import('./party/party.module').then((m) => m.PartyModule),
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      urlUpdateStrategy: 'eager',
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'corrected',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
