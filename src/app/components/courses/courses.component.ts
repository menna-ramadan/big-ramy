import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  Subscription: Subscription = new Subscription();
  courses: Course[] = [];

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses() {
    this.Subscription.add(
      this.courseService.getcourses().subscribe((res: any) => {
        this.courses = res.data;
        // this.totalCount = res.result.itemsCount;

        console.log(this.courses);
      })
    );
  }
}
