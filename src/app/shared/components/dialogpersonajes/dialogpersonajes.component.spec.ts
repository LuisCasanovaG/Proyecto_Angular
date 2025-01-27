import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogpersonajesComponent } from './dialogpersonajes.component';

describe('DialogpersonajesComponent', () => {
  let component: DialogpersonajesComponent;
  let fixture: ComponentFixture<DialogpersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogpersonajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogpersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
