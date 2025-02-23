import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: CocHeaderComponent;
  let fixture: ComponentFixture<CocHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
