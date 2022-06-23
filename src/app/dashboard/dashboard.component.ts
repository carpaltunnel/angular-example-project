import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  widgets: Widget[] = [];

  constructor(private widgetService: WidgetService) { }

  ngOnInit(): void {
    this.widgetService.getWidgets()
      .subscribe((widgetsFromObservable) => {
        this.widgets = widgetsFromObservable.slice(0, 3);
      });
  }

}
