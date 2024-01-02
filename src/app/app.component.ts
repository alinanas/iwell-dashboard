import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './services/api.service';
import { BatteryStatusComponent } from './components/batttery/status/batteryStatus.component';
import { environment } from 'src/environments/environment';
import { Observable, map, tap } from 'rxjs';
import { BatteryStatusInterface } from './interfaces/batteryStatus.interface';
import { CommonModule } from '@angular/common';
import { BatteryPowerComponent } from './components/batttery/power/batteryPower.component';
import { PowerChartComponent } from './components/charts/powerChart/powerChart.component';
import { PageHeaderComponent } from './components/shared/pageHeader/pageHeader.component';
import { BatteryCapacityRemainingComponent } from './components/batttery/capacityRemaining/batteryCapacityRemaining.component';
import { BatteryTelemetryInterface } from './interfaces/bateryTelemetry.interface';
import { DATA_TO_SHOW } from './components/charts/powerChart/chart.constants';

const timeFrameEnum = new Map<string, number>([
  ['hour', -60],
  ['day', -2400],
  ['week', -16800],
  ['month', -74400],
]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    BatteryStatusComponent,
    BatteryPowerComponent,
    PowerChartComponent,
    PageHeaderComponent,
    BatteryCapacityRemainingComponent,
    CommonModule,
  ],
})
export class AppComponent implements OnInit {
  title = 'iwell dashboard';

  batteryStatus$: Observable<BatteryStatusInterface> | null = null;
  telemetry$: Observable<BatteryTelemetryInterface> | null = null;
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getData('hour');
  }

  getData(offSet: string) {
    this.isLoading = true;
    this.batteryStatus$ = this.api.getBatteryStatus(environment.DEVICE_ID);
    this.telemetry$ = this.api
      .getBatteryTelemetry(environment.DEVICE_ID, timeFrameEnum.get(offSet)!)
      .pipe(
        map((data: BatteryTelemetryInterface) => {
          const dates = data.series?.[0]?.data.map((dateItem) =>
            new Date(dateItem?.[0]).toString()
          );

          return {
            series: data.series.filter((item) =>
              DATA_TO_SHOW.includes(item.name)
            ),
            labels: dates,
          };
        }),
        tap(() => {
          this.isLoading = false;
        })
      );
  }
}
