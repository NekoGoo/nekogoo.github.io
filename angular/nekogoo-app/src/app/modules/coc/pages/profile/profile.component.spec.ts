import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocProfileComponent } from './profile.component';

describe('CocProfileComponent', () => {
  let component: CocProfileComponent;
  let fixture: ComponentFixture<CocProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CocProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
