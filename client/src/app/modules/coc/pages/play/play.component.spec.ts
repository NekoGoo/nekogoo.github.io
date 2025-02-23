import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocPlayComponent } from './play.component';

describe('PlayComponent', () => {
  let component: CocPlayComponent;
  let fixture: ComponentFixture<CocPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocPlayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
