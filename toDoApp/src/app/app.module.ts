import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { DateComponent } from './date/date.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewServiceService } from './new-service.service';
import { TitleComponent } from './title/title.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskNameInputComponent } from './task-name-input/task-name-input.component';
import { AddTaskButtonComponent } from './add-task-button/add-task-button.component';
import { TaskItemComponent } from './task-item/task-item.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    DateComponent,
    HomeComponent,
    NotFoundComponent,
    TitleComponent,
    TaskInputComponent,
    TaskNameInputComponent,
    AddTaskButtonComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
