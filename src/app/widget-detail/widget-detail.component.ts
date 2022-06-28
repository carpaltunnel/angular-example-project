import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../widget';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-widget-detail',
  templateUrl: './widget-detail.component.html',
  styleUrls: ['./widget-detail.component.css']
})
export class WidgetDetailComponent implements OnInit {

  @Input() widget?: Widget;
  
  constructor(private route: ActivatedRoute,
      private widgetService: WidgetService,
      private location: Location) { }

  ngOnInit(): void {
    // Fetch the widget based on ID
    this.getWidget();
  }

  getWidget(): void {
    const widgetId = this.route.snapshot.paramMap.get('id');

    if (widgetId) {
      this.widgetService.getWidget(widgetId).subscribe((returnWidget) => {
        this.widget = returnWidget;
      });
    }
  }

  saveWidget(): void {
    if (this.widget) {
      this.widgetService.updateWidget(this.widget)
      .subscribe(() => this.goBack());
    }
  }

  deleteWidget(): void {
    if (this.widget) {
      this.widgetService.deleteWidget(this.widget)
      .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
