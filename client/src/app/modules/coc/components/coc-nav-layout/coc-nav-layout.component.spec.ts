import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocNavLayoutComponent } from './coc-nav-layout.component';

describe('CocNavLayoutComponent', () => {
  let component: CocNavLayoutComponent;
  let fixture: ComponentFixture<CocNavLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocNavLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocNavLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
