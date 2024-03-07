import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasJrmbComponent } from './tareas-jrmb.component';

describe('TareasJrmbComponent', () => {
  let component: TareasJrmbComponent;
  let fixture: ComponentFixture<TareasJrmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasJrmbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasJrmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
