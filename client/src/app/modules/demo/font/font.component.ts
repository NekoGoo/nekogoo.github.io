import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-demo-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.scss'],
})
export class FontComponent implements OnInit {
  subDemoHMR: Subscription | undefined;

  ngOnInit(): void {
    console.log('testing testing');
    this.subDemoHMR = interval(1000).subscribe((value) => {
      console.log('values', String(value));
    });
  }

  ngOnDestroy(): void {
    this.subDemoHMR?.unsubscribe();
  }
}
