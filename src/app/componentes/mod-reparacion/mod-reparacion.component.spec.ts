import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModReparacionComponent } from './mod-reparacion.component';

describe('ModReparacionComponent', () => {
  let component: ModReparacionComponent;
  let fixture: ComponentFixture<ModReparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModReparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
