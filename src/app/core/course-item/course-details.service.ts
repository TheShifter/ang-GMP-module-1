import { Injectable } from '@angular/core';
import {CourseInfo} from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  constructor() { }

  public courseDetails: Array<CourseInfo> = [{
    Id: 1, Title: 'Video Course 1. Name tag', CreationDate: '08/28/2020', Duration: '1h 28 min', Description: 'Learn about where you can find course descriptions, what information they include,' +
      'how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both' +
      'in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
  }, {
    Id: 2, Title: 'Video Course 1. Name tag', CreationDate: '08/28/2020', Duration: '1h 28 min', Description: 'Learn about where you can find course descriptions, what information they include,' +
      'how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both' +
      'in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
  }, {
    Id: 3, Title: 'Video Course 1. Name tag', CreationDate: '08/28/2020', Duration: '1h 28 min', Description: 'Learn about where you can find course descriptions, what information they include,' +
      'how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both' +
      'in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
  },
  ];
}
