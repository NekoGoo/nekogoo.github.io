import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocRoadmapComponent } from './roadmap.component';

describe('CocRoadmapComponent', () => {
  let component: CocRoadmapComponent;
  let fixture: ComponentFixture<CocRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CocRoadmapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
