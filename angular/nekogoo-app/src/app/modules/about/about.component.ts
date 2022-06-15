import { Component, OnInit } from '@angular/core';

// import imgNekoGooFull from '../assets/images/NekoGoo-01-A.png';
// import imgcNekoGooHead from '../assets/images/NekoGoo-head-only.png';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  imgNekoGooFull = '../../assets/images/NekoGoo-01-A.png';

  imgNekoGooHead = '../../assets/images/NekoGoo-head-only.png';

  constructor() {}

  ngOnInit(): void {}
}
