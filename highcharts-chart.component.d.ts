import { ElementRef, EventEmitter } from '@angular/core';
export declare class HighchartsChartComponent {
    private el;
    constructor(el: ElementRef);
    chart: any;
    Highcharts: any;
    constructorType: string;
    callbackFunction: any;
    optionsValue: any;
    options: any;
    updateValue: boolean;
    updateChange: EventEmitter<{}>;
    update: any;
    oneToOne: boolean;
    updateOrCreateChart: () => void;
}