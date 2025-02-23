import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTagsDetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: InfoTagsDetailComponent;
  let fixture: ComponentFixture<InfoTagsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTagsDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoTagsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
