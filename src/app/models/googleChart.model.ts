export class GoogleChartModel {

    constructor(
        public title: string = '',
        public type: string = 'AreaChart',
        public data: Array<Array<any>> = [[]],
        public columnNames: Array<string> = ['Month', 'Rate'],
        public options: any =
            {
                curveType: 'function',
                legend: { position: 'bottom', textStyle: { color: '#8bbabb' } },
                backgroundColor: '#464159',
                chartArea: { width: "75%", height: "70%" },
                colors: ['#8bbabb'],
                hAxis: { textStyle: { color: '#8bbabb' } },
                vAxis: { textStyle: { color: '#8bbabb' } },
                titleTextStyle: { color: '#8bbabb' }
            },
    ) { }
}