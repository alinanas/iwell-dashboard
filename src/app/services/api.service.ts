import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BatterySpecificationInterface } from '../interfaces/batterySpecification.interface';
import { Observable } from 'rxjs';
import { BatteryListInterface } from '../interfaces/batteryList.interface';
import { BatteryStatusInterface } from '../interfaces/batteryStatus.interface';
import { BatteryTelemetryInterface } from '../interfaces/bateryTelemetry.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllBatteries(): Observable<BatteryListInterface> {
    return this.http.get<BatteryListInterface>('/myiwell/api/v1/batteries');
  }

  getBatteryStatus(deviceId: string): Observable<BatteryStatusInterface> {
    const url = `/myiwell/api/v1/batteries/${deviceId}/status`;
    return this.http.get<BatteryStatusInterface>(url);
  }

  getBatterySpecification(
    deviceId: string
  ): Observable<BatterySpecificationInterface> {
    const url = `/myiwell/api/v1/batteries/${deviceId}/specification`;
    return this.http.get<BatterySpecificationInterface>(url);
  }

  getBatteryTelemetry(
    deviceId: string,
    offSet: number
  ): Observable<BatteryTelemetryInterface> {
    const url = `/myiwell/api/v1/batteries/${deviceId}/telemetry?OffsetMinutes=${offSet}`;
    return this.http.get<BatteryTelemetryInterface>(url);
  }
}
