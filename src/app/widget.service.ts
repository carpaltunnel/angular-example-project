import { Injectable } from '@angular/core';
import { Widget } from './widget';
import { WIDGETS } from './mock-widgets';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor() { }

  getWidgets(): Widget[] {
    return WIDGETS;
  }
}
