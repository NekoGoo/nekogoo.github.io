import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPersonalityComponent } from './modal-personality.component';

describe('ModalPersonalityComponent', () => {
  let component: ModalPersonalityComponent;
  let fixture: ComponentFixture<ModalPersonalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPersonalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPersonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
