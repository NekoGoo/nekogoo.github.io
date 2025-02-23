import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocFooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: CocFooterComponent;
  let fixture: ComponentFixture<CocFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
