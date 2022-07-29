import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAppearanceComponent } from './modal-appearance.component';

describe('ModalAppearanceComponent', () => {
  let component: ModalAppearanceComponent;
  let fixture: ComponentFixture<ModalAppearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAppearanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
