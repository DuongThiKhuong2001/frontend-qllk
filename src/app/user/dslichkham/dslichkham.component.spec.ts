import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DslichkhamComponent } from './dslichkham.component';

describe('DslichkhamComponent', () => {
  let component: DslichkhamComponent;
  let fixture: ComponentFixture<DslichkhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DslichkhamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DslichkhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
