import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MashCreateComponent } from './mash-create.component';

describe('MashCreateComponent', () => {
  let component: MashCreateComponent;
  let fixture: ComponentFixture<MashCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MashCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MashCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
