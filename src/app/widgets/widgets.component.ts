import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  widgets: Widget[] = [];

  selectedWidget!: Widget;

  constructor(private widgetService: WidgetService) {}

  ngOnInit(): void {
    this.getWidgets();
  }

  getWidgets(): void {
    this.widgets = this.widgetService.getWidgets();
  }

  onSelect(widget: Widget) {
    console.log(widget.name);
    this.selectedWidget = widget;
  }

}
