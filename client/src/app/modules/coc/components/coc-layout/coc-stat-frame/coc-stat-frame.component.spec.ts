import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocStatFrameComponent } from './coc-stat-frame.component';

describe('CocStatFrameComponent', () => {
  let component: CocStatFrameComponent;
  let fixture: ComponentFixture<CocStatFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocStatFrameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocStatFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
