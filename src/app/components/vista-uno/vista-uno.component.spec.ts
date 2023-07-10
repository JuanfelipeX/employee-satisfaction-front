import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaUnoComponent } from './vista-uno.component';

describe('VistaUnoComponent', () => {
  let component: VistaUnoComponent;
  let fixture: ComponentFixture<VistaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
