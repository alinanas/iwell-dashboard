import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BatteryStatusInterface } from 'src/app/interfaces/batteryStatus.interface';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-battery-status',
  standalone: true,
  templateUrl: 'batteryStatus.component.html',
  imports: [CommonModule],
})
export class BatteryStatusComponent {
  @Input() availableDischargePowerKw: number = 0;
  @Input() chargeCapacityRemainingKwh?: number;
  @Input() dischargeCapacityRemainingKwh?: number;
}
