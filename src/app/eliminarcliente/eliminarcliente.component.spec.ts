import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarclienteComponent } from './eliminarcliente.component';

describe('EliminarclienteComponent', () => {
  let component: EliminarclienteComponent;
  let fixture: ComponentFixture<EliminarclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarclienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
