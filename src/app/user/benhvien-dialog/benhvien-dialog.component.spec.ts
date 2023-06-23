import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhVienDialogComponent } from './benhvien-dialog.component';

describe('BenhvienDialogComponent', () => {
  let component: BenhVienDialogComponent;
  let fixture: ComponentFixture<BenhVienDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenhVienDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BenhVienDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
