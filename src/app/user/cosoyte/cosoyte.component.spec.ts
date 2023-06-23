import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosoyteComponent } from './cosoyte.component';

describe('CosoyteComponent', () => {
  let component: CosoyteComponent;
  let fixture: ComponentFixture<CosoyteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CosoyteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CosoyteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
