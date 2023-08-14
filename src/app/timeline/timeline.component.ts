import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
    
    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            AOS.init({ once: true, duration: 1000 });
            AOS.refresh();
        }
    }
}
