import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MashListComponent } from './mash-list.component';

describe('MashListComponent', () => {
  let component: MashListComponent;
  let fixture: ComponentFixture<MashListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MashListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MashListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
