import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooModalHeaderComponent } from './goo-modal-header.component';

describe('GooModalHeaderComponent', () => {
  let component: GooModalHeaderComponent;
  let fixture: ComponentFixture<GooModalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GooModalHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GooModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
