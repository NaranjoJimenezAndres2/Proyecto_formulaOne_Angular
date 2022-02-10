import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReparacionComponent } from './ver-reparacion.component';

describe('VerReparacionComponent', () => {
  let component: VerReparacionComponent;
  let fixture: ComponentFixture<VerReparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerReparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
