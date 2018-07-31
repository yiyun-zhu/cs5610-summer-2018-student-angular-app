import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {routing} from './app.routing';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseServiceClient} from './services/course.service.client';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import {UserServiceClient} from './services/user.service.client';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import {SectionServiceClient} from './services/section.service.client';
import { SectionListComponent } from './section-list/section-list.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/module.service.client';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/lesson.service.client';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {WidgetServiceClient} from './services/widget.service.client';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminComponent,
    SectionListComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    WidgetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    UserServiceClient,
    SectionServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    WidgetServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
