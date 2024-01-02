import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BatterySpecificationInterface } from '../interfaces/batterySpecification.interface';
import { Observable, catchError, throwError } from 'rxjs';
import { BatteryListInterface } from '../interfaces/batteryList.interface';
import { BatteryStatusInterface } from '../interfaces/batteryStatus.interface';
import { BatteryTelemetryInterface } from '../interfaces/bateryTelemetry.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getAllBatteries(): Observable<BatteryListInterface> {
    return this.http
      .get<BatteryListInterface>('/myiwell/api/v1/batteries')
      .pipe(catchError(this.handleError));
  }

  getBatteryStatus(deviceId: string): Observable<BatteryStatusInterface> {
    const url = `/myiwell/api/v1/batteries/${deviceId}/status`;
    return this.http
      .get<BatteryStatusInterface>(url)
      .pipe(catchError(this.handleError));
  }

  getBatterySpecification(
    deviceId: string
  ): Observable<BatterySpecificationInterface> {
    const url = `/myiwell/api/v1/batteries/${deviceId}/specification`;
    return this.http
      .get<BatterySpecificationInterface>(url)
      .pipe(catchError(this.handleError));
  }

  getBatteryTelemetry(
    deviceId: string,
    offSet: number
  ): Observable<BatteryTelemetryInterface> {
    const url = `/myiwell/api/v1/batteries/${deviceId}/telemetry?OffsetMinutes=${offSet}`;
    return this.http
      .get<BatteryTelemetryInterface>(url)
      .pipe(catchError(this.handleError));
  }
}
