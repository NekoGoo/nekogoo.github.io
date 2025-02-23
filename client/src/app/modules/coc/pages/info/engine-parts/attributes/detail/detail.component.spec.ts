import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAttributesDetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: InfoAttributesDetailComponent;
  let fixture: ComponentFixture<InfoAttributesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAttributesDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoAttributesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
