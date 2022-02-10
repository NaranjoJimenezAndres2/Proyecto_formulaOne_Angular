import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecambioComponent } from './recambio.component';

describe('RecambioComponent', () => {
  let component: RecambioComponent;
  let fixture: ComponentFixture<RecambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecambioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
