import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { map, take } from 'rxjs';
import { BatteryTelemetryInterface } from 'src/app/interfaces/bateryTelemetry.interface';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { ChartOptions } from './chartOptions.type';
import { CHART_INIT_OPTIONS, DATA_TO_SHOW } from './chart.constants';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-power-chart',
  standalone: true,
  templateUrl: 'powerChart.component.html',
  imports: [NgApexchartsModule, CommonModule, LoaderComponent],
})
export class PowerChartComponent implements OnInit {
  @ViewChild('chart', { static: false }) chart: ChartComponent;
  chartOptions: Partial<ChartOptions>;
  isLoading: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getData(-60);
  }

  getData(offSet: number) {
    this.isLoading = true;
    this.api
      .getBatteryTelemetry(environment.DEVICE_ID, offSet)
      .pipe(
        take(1),
        map((data: BatteryTelemetryInterface) => ({
          series: data.series.filter((item) =>
            DATA_TO_SHOW.includes(item.name)
          ),
        }))
      )
      .subscribe((data: BatteryTelemetryInterface) => {
        this.isLoading = false;

        const dates = data.series?.[0]?.data.map((dateItem) =>
          new Date(dateItem?.[0]).toString()
        );

        this.chartOptions = {
          ...CHART_INIT_OPTIONS,
          series: data.series,
          labels: dates,
        };
      });
  }
}
