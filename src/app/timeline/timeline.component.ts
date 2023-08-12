import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
    ngOnInit(): void {
        AOS.init(); //AOS - 2
        AOS.refresh();
    }
}
