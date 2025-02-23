import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSpecialComponent } from './modal-special.component';

describe('ModalSpecialComponent', () => {
  let component: ModalSpecialComponent;
  let fixture: ComponentFixture<ModalSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSpecialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
