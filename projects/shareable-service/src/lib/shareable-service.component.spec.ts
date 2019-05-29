import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareableServiceComponent } from './shareable-service.component';

describe('ShareableServiceComponent', () => {
  let component: ShareableServiceComponent;
  let fixture: ComponentFixture<ShareableServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareableServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareableServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
