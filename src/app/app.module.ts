import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardListEntryComponent } from './card-list-entry/card-list-entry.component';
import { CardSummaryComponent } from './card-summary/card-summary.component';
import { CardCommentComponent } from './card-comment/card-comment.component';
import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';
import { LoginComponent } from './login/login.component';
import { CardOverviewComponent } from './card-overview/card-overview.component';
import { CardCreateComponent } from './login/card-dialogs/card-create/card-create.component';
import { CardEditComponent } from './login/card-dialogs/card-edit/card-edit.component';
import { CardDeleteComponent } from './login/card-dialogs/card-delete/card-delete.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    CardListComponent,
    CardListEntryComponent,
    CardSummaryComponent,
    CardCommentComponent,
    CommentDialogComponent,
    LoginComponent,
    CardOverviewComponent,
    CardCreateComponent,
    CardEditComponent,
    CardDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    MatChipsModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
