import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
      { path: 'about', loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule) },
      { path: 'projects', loadChildren: () => import('./pages/projects/projects.module').then((m) => m.ProjectsModule) },
      { path: 'news', loadChildren: () => import('./pages/news/news.module').then((m) => m.NewsModule) },
      { path: 'contacts', loadChildren: () => import('./pages/contacts/contacts.module').then((m) => m.ContactsModule) },
    ],
  },
];
