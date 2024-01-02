export interface BatteryTelemetryInterface {
  series: {
    name: string;
    data: number[][];
  }[];
  labels: string[];
}
