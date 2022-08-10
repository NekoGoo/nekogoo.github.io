import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocButtonComponent } from './coc-button.component';

describe('ButtonComponent', () => {
  let component: CocButtonComponent;
  let fixture: ComponentFixture<CocButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CocButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
