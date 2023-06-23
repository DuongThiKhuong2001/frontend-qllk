import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichTrucComponent } from './lichtruc.component';

describe('LichtrucComponent', () => {
  let component: LichTrucComponent;
  let fixture: ComponentFixture<LichTrucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichTrucComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LichTrucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
