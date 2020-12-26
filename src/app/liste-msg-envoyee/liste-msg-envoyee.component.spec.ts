import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMsgEnvoyeeComponent } from './liste-msg-envoyee.component';

describe('ListeMsgEnvoyeeComponent', () => {
  let component: ListeMsgEnvoyeeComponent;
  let fixture: ComponentFixture<ListeMsgEnvoyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMsgEnvoyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMsgEnvoyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
