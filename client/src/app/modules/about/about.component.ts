import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalAppearanceComponent } from './components/modal-appearance/modal-appearance.component';
import { ModalPersonalityComponent } from './components/modal-personality/modal-personality.component';
import { ModalSpecialComponent } from './components/modal-special/modal-special.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  imgNekoGooFull = 'assets/images/NekoGoo-01-A.png';
  imgNekoGooHead = 'assets/images/NekoGoo-head-only.png';
  gapSize = '24px';
  modalWidth = '60%';
  backdropClass = 'nekogoo-modal-noscroll';
  modalWindowClass = 'nekogoo-modal-about';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(ModalComponent, {
  //     width: '250px',
  //     data: { name: this.name, animal: this.animal },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.animal = String(result);
  //   });
  // }

  openAppearanceDialog(): void {
    this.dialog.open(ModalAppearanceComponent, {
      // width: '500px',
      // width: this.modalWidth,
      panelClass: this.modalWindowClass,
    });
  }

  openPersonalityDialog(): void {
    this.dialog.open(ModalPersonalityComponent, {
      // width: this.modalWidth,
      // backdropClass: this.backdropClass,
      panelClass: this.modalWindowClass,
    });
  }

  openSpecialDialog(): void {
    this.dialog.open(ModalSpecialComponent, {
      // width: this.modalWidth,
      panelClass: this.modalWindowClass,
    });
  }
}
