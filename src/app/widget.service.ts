import { Injectable } from '@angular/core';
import { Widget } from './widget';
import { WIDGETS } from './mock-widgets';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor(private messageService: MessageService) { }

  getWidgets(): Observable<Widget[]> {
    const widgets = of(WIDGETS);

    this.messageService.add('WidgetService : fetched widgets');
    return widgets;
  }

  getWidget(id: string): Observable<Widget|undefined> {
    const widget = WIDGETS.find(widg => widg.id === id);
    this.messageService.add(`WidgetService : fetched widgetId : ${id}`);
   
    return of(widget);
  }
}
