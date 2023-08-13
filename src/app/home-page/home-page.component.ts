import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    ngOnInit(): void {
        AOS.init(); //AOS - 2
        AOS.refresh();
    }
}
