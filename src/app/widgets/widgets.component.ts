import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget';
import { WidgetService } from '../widget.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  widgets: Widget[] = [];

  selectedWidget!: Widget;

  constructor(private widgetService: WidgetService,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.getWidgets();
  }

  getWidgets(): void {
    this.widgetService.getWidgets()
      .subscribe((widgetsFromObservable) => {
        this.widgets = widgetsFromObservable;
      });
  }

  onSelect(widget: Widget) {
    this.messageService.add(`WidgetsComponent : User selected ${widget.name}`)
    this.selectedWidget = widget;
  }

}
