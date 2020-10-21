import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courses: string[];
  public hide = true;

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      'course 1', 'course 2', 'course 3',
    ];
  }

}
