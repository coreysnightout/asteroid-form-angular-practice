import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaFormComponent } from './nasa-form.component';

describe('NasaFormComponent', () => {
  let component: NasaFormComponent;
  let fixture: ComponentFixture<NasaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
