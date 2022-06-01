import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vedio.GameComponent } from './vedio.game.component';

describe('Vedio.GameComponent', () => {
  let component: Vedio.GameComponent;
  let fixture: ComponentFixture<Vedio.GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vedio.GameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vedio.GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
