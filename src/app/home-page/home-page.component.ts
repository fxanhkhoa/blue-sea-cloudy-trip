import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    ngOnInit(): void {
        const tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750,
        });

        tl.add(
            {
                targets: '.line-text-1',
                scale: 0.5,
            },
            750
        )
            .add(
                {
                    targets: '.line-text-2',
                    scale: 0.5,
                    translateY: -150,
                },
                750
            )
            .add({
                targets: ['.left-div', '.right-div'],
                width: '50%',
            })
            .add({
                targets: '.des-1',
                opacity: 1,
            })
            .add({
                targets: '.des-2',
                opacity: 1,
            })
            .add({
                targets: '.des-3',
                opacity: 1,
            })
            .add({
                targets: '.des-4',
                opacity: 1,
            });
    }
}
