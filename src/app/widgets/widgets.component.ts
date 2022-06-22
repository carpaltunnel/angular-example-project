import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget';
import { WIDGETS } from '../mock-widgets';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  widget: Widget = {
    id: 'e463af1b-5939-4e5c-b9a2-18fadd1a3d14',
    name: 'Widget #1',
    hexColor: 'FFF',
    weight: 25,
    color: 'orange',
  };
  widgets = WIDGETS;

  selectedWidget!: Widget;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(widget: Widget) {
    console.log(widget.name);
    this.selectedWidget = widget;
  }

}
