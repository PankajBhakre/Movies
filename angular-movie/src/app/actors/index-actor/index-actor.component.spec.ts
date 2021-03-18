import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexActorComponent } from './index-actor.component';

describe('IndexActorComponent', () => {
  let component: IndexActorComponent;
  let fixture: ComponentFixture<IndexActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
