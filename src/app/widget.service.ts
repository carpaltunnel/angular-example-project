import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Widget } from './widget';
import { WIDGETS } from './mock-widgets';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private widgetsUrl = '/api/v1/widgets';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getWidgets(): Observable<Widget[]> {
    this.messageService.add('WidgetService : fetched widgets');
    return this.http.get<Widget[]>(this.widgetsUrl);
  }

  getWidget(id: string): Observable<Widget> {
    this.messageService.add(`WidgetService : fetched widgetId : ${id}`);
    return this.http.get<Widget>(`${this.widgetsUrl}/${id}`);
  }

  updateWidget(widget: Widget): Observable<any> {
    return this.http.put(`${this.widgetsUrl}/${widget.id}`, widget, this.httpOptions);
  }

  deleteWidget(widget: Widget): Observable<any> {
    return this.http.delete(`${this.widgetsUrl}/${widget.id}`);
  }
}
