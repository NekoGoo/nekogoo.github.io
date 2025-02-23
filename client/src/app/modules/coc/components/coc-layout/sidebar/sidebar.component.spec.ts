import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocSidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: CocSidebarComponent;
  let fixture: ComponentFixture<CocSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
