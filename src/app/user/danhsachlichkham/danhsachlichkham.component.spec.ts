import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachlichkhamComponent } from './danhsachlichkham.component';

describe('DanhsachlichkhamComponent', () => {
  let component: DanhsachlichkhamComponent;
  let fixture: ComponentFixture<DanhsachlichkhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhsachlichkhamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanhsachlichkhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
