import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAttributesComponent } from './attributes.component';

describe('AttributesComponent', () => {
  let component: InfoAttributesComponent;
  let fixture: ComponentFixture<InfoAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAttributesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
