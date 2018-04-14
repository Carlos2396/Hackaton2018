import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MashRetrieveComponent } from './mash-retrieve.component';

describe('MashRetrieveComponent', () => {
  let component: MashRetrieveComponent;
  let fixture: ComponentFixture<MashRetrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MashRetrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MashRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
