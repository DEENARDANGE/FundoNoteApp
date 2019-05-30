import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './gaurd/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { MainNotesComponent } from './components/main-notes/note.component';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { TrashComponent } from './components/trash/trash.component';
import { SearchNoteComponent } from './components/search-note/search-note.component';
import { RemainderComponent } from './components/remainder/remainder.component';
import { LabelsComponent } from './components/labels/labels.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { PasswordresetComponent } from './components/passwordreset/passwordreset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegisterComponent
  },
  {
    path: 'passwordforgot',
    component: ForgotpasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'main-notes',
        component: MainNotesComponent
      },
      {
        path: 'archive-notes',
        component: ArchiveNoteComponent
      },
      {
        path: 'trash-notes',
        component: TrashComponent
      },
      {
        path: 'search',
        component: SearchNoteComponent
      },
      {
        path: 'remainder',
        component: RemainderComponent
      },
      {
        path: 'label/:labelName',
        component: LabelsComponent
      },
      {
        path: '',
        component: SidenavbarComponent
      },
      {
        path: '',
        redirectTo: 'main-notes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'resetpassword/:id',
    component: PasswordresetComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
// import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
// import { MainNotesComponent } from './components/main-notes/note.component';
// import { from } from 'rxjs';
// import { DashboardComponent } from './components/dashboard/dashboard.component';

// const routes: Routes = [
//   {path: 'login', component: LoginComponent},
//  { path: 'dashboard', component: DashboardComponent },
//   { path: 'register', component: RegisterComponent},
// { path: 'main-note', component: MainNotesComponent},
//   {path: 'sidenav', component: SidenavbarComponent},
//   {path: '', redirectTo: '/login', pathMatch: 'full'},
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
