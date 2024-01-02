import { ChartOptions } from './chartOptions.type';

const DATA_TO_SHOW = ['BatteryPowerW', 'GridPowerW'];
const CHART_COLORS = ['#00adef', '#8dc63f'];
const DATE_FORMAT = 'dd-MM-yyyy hh:mm:ss';

const CHART_INIT_OPTIONS: Partial<ChartOptions> = {
  chart: {
    type: 'line',
  },
  dataLabels: {
    enabled: false,
    style: {
      colors: CHART_COLORS,
    },
  },
  stroke: {
    curve: 'straight',
    width: 3,
    colors: CHART_COLORS,
  },
  grid: {
    padding: {
      right: 30,
      left: 20,
    },
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    decimalsInFloat: 0,
  },
  tooltip: {
    x: {
      format: DATE_FORMAT,
    },
    marker: {
      fillColors: CHART_COLORS,
    },
  },
  legend: {
    show: true,
    labels: {
      colors: CHART_COLORS,
    },
    markers: {
      fillColors: CHART_COLORS,
    },
  },
};

export { DATA_TO_SHOW, CHART_COLORS, DATE_FORMAT, CHART_INIT_OPTIONS };
