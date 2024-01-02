import { Component, EventEmitter, Output } from '@angular/core';

type TimeFrame = 'hour' | 'day' | 'week' | 'month';

@Component({
  selector: 'app-page-header',
  templateUrl: 'pageHeader.component.html',
  standalone: true,
})
export class PageHeaderComponent {
  @Output() refreshData = new EventEmitter<TimeFrame>();
  chartTimeFrame: TimeFrame = 'hour';

  selectTimeframe(value: TimeFrame) {
    this.chartTimeFrame = value;
    this.refreshData.emit(value);
  }
}
