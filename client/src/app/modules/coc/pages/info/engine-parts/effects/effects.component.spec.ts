import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEffectsComponent } from './effects.component';

describe('EffectsComponent', () => {
  let component: InfoEffectsComponent;
  let fixture: ComponentFixture<InfoEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoEffectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
