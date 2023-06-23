import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichkhamComponent } from './lichkham.component';

describe('LichkhamComponent', () => {
  let component: LichkhamComponent;
  let fixture: ComponentFixture<LichkhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichkhamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LichkhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
