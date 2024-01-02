import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { BatteryTelemetryInterface } from 'src/app/interfaces/bateryTelemetry.interface';
import { ChartOptions } from './chartOptions.type';
import { CHART_INIT_OPTIONS } from './chart.constants';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-power-chart',
  standalone: true,
  templateUrl: 'powerChart.component.html',
  imports: [NgApexchartsModule, CommonModule, LoaderComponent],
})
export class PowerChartComponent implements OnChanges {
  @Input() telemetry: BatteryTelemetryInterface | null;
  @Input() isLoading: boolean = false;

  @ViewChild('chart', { static: false }) chart: ChartComponent;
  chartOptions: Partial<ChartOptions>;

  ngOnChanges(): void {
    if (this.telemetry) {
      this.chartOptions = {
        ...CHART_INIT_OPTIONS,
        series: this.telemetry.series,
        labels: this.telemetry.labels,
      };
    }
  }
}
