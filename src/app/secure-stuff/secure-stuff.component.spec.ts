import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureStuffComponent } from './secure-stuff.component';

describe('SecureStuffComponent', () => {
  let component: SecureStuffComponent;
  let fixture: ComponentFixture<SecureStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
