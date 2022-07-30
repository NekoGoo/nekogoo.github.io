import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooPillComponent } from './goo-pill.component';

describe('GooPillComponent', () => {
  let component: GooPillComponent;
  let fixture: ComponentFixture<GooPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooPillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GooPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
