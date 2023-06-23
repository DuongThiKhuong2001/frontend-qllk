import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyenkhoaComponent } from './chuyenkhoa.component';

describe('ChuyenkhoaComponent', () => {
  let component: ChuyenkhoaComponent;
  let fixture: ComponentFixture<ChuyenkhoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuyenkhoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuyenkhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
