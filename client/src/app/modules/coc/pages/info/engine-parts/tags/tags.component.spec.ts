import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTagsComponent } from './tags.component';

describe('TagsComponent', () => {
  let component: InfoTagsComponent;
  let fixture: ComponentFixture<InfoTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTagsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
