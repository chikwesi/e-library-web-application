import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { RouterModule, Routes } from '@angular/router';
import { InternalLayoutComponent } from './internal-layout/internal-layout.component';
import { InternalHeaderComponent } from './internal-header/internal-header.component';
import { InternalFooterComponent } from './internal-footer/internal-footer.component';
import { AuthGuard } from '../authentication/auth.guard';
import { RoleGuard } from '../authentication/role.guard';


const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../landing/landing.module').then(mod => mod.LandingModule),
      }
    ]
  },
  {
    path: '',
    component: InternalLayoutComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {role: 0},
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../librarian/dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
      {
        path: 'library',
        loadChildren: () => import('../librarian/library/library.module').then(mod => mod.LibraryModule),
      },
      {
        path: 'users',
        loadChildren: () => import('../librarian/Users/Users.module').then(mod => mod.UsersModule),
      }
    ]
  },
  {
    path: 'user',
    component: InternalLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        loadChildren: () => import('../user/library/library.module').then(mod => mod.LibraryModule)
      }
    ]
  }
];

@NgModule({
  declarations: [LandingLayoutComponent, LandingHeaderComponent, LandingFooterComponent, InternalLayoutComponent, InternalHeaderComponent, InternalFooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LandingLayoutComponent
  ]
})
export class LayoutModule { }
