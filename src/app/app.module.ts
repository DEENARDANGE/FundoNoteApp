import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { LabelsComponent } from './components/labels/labels.component';
import { AddImageComponent } from './components/add-image/add-image.component';
import { AddNoteLabelsComponent } from './components/add-note-labels/add-note-labels.component';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { ChangeColorComponent } from './components/change-color/change-color.component';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';
import { EditLabelsComponent } from './components/edit-labels/edit-labels.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
// import { ImageComponent } from './components/image/image.component';
import { DynamicHoverClassDirective } from './directive/dynamic-hover-class.directive';
import { NoteFilterPipe } from './pipe/note-filter.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { SearchNotesPipe } from './pipe/search-notes.pipe';
import { SearchUserPipe } from './pipe/search-user.pipe';
import { MainNotesComponent } from './components/main-notes/note.component';
import { TrashComponent } from './components/trash/trash.component';
import { SearchNoteComponent } from './components/search-note/search-note.component';
import { RemainderComponent } from './components/remainder/remainder.component';
import { PasswordresetComponent } from './components/passwordreset/passwordreset.component';
import { NoteSearchBodyComponent } from './components/note-search-body/note-search-body.component';
import { PinNoteComponent } from './components/pin-note/pin-note.component';
import { TrashdailogComponent } from './components/trashdailog/trashdailog.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime' ;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    MainNotesComponent,
    SidenavbarComponent,
    LabelsComponent,
    AddImageComponent,
    AddNoteLabelsComponent,
    ArchiveNoteComponent,
    ChangeColorComponent,
    CollaboratorComponent,
    EditLabelsComponent,
    ForgotpasswordComponent,
    TrashComponent,
    SearchNoteComponent,
    RemainderComponent,
    PasswordresetComponent,
    NoteSearchBodyComponent,
    PinNoteComponent,
    AddNoteLabelsComponent,
    AddImageComponent,
    ArchiveNoteComponent,
    ChangeColorComponent,
    CollaboratorComponent,
    DashboardComponent,
    EditLabelsComponent,
    ForgotpasswordComponent,
    AddImageComponent,
    LoginComponent,
    MainNotesComponent,
    LabelsComponent,
    NoteSearchBodyComponent,
    PasswordresetComponent,
    PinNoteComponent,
    RemainderComponent,
    SearchNoteComponent,
    SidenavbarComponent,
    TrashComponent,
    TrashdailogComponent,
    UpdatenoteComponent,

    // ImageComponent,
    DynamicHoverClassDirective,
    NoteFilterPipe,
    SearchPipe,
    SearchNotesPipe,
    SearchUserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
