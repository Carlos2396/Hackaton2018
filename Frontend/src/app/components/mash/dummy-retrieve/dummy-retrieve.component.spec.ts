import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyRetrieveComponent } from './dummy-retrieve.component';

describe('DummyRetrieveComponent', () => {
  let component: DummyRetrieveComponent;
  let fixture: ComponentFixture<DummyRetrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyRetrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
