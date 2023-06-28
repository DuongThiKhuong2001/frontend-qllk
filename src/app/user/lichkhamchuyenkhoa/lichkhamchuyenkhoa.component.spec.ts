import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichKhamChuyenKhoaComponent } from './lichkhamchuyenkhoa.component';

describe('LichkhamchuyenkhoaComponent', () => {
  let component: LichKhamChuyenKhoaComponent;
  let fixture: ComponentFixture<LichKhamChuyenKhoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichKhamChuyenKhoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LichKhamChuyenKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
