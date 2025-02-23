import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocLayoutComponent } from './coc-layout.component';

describe('CocLayoutComponent', () => {
  let component: CocLayoutComponent;
  let fixture: ComponentFixture<CocLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
