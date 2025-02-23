import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEffectsDetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: InfoEffectsDetailComponent;
  let fixture: ComponentFixture<InfoEffectsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoEffectsDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoEffectsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
