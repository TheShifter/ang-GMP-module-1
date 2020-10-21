import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, CourseListComponent, CourseItemComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class CoreModule { }
