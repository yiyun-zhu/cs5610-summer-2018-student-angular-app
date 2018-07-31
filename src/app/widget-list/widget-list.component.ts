import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private service: WidgetServiceClient,
                private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setContext(params)
    );
  }

  context;
  widgets = [];
  setContext(params) {
    this.context = params;
    if (params.lessonId !== undefined) {
      this.loadWidgets(params.lessonId);
    }
  }
  loadWidgets(lessonId) {
    this.service
      .findWidgetsForLesson(lessonId)
      .then(
        widgets => {
          const temp = [];
          for (let i = 0; i < widgets.length; i++) {
            if (widgets[i].widgetType !== 'Exam' &&
              widgets[i].widgetType !== 'Assignment') {
              temp.push(widgets[i]);
            }
          }
          this.widgets = temp;
        });
  }
  ngOnInit() {
  }

}
