import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MashSnippetCreateComponent } from './mash-snippet-create.component';

describe('MashSnippetCreateComponent', () => {
  let component: MashSnippetCreateComponent;
  let fixture: ComponentFixture<MashSnippetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MashSnippetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MashSnippetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
