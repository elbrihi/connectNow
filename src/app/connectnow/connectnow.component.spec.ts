import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectnowComponent } from './connectnow.component';

describe('ConnectnowComponent', () => {
  let component: ConnectnowComponent;
  let fixture: ComponentFixture<ConnectnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
