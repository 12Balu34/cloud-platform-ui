import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRuntimeComponent } from './app-runtime.component';

describe('AppRuntimeComponent', () => {
  let component: AppRuntimeComponent;
  let fixture: ComponentFixture<AppRuntimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRuntimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRuntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
