import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardComponentComponent } from './guard-component.component';

describe('GuardComponentComponent', () => {
  let component: GuardComponentComponent;
  let fixture: ComponentFixture<GuardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
