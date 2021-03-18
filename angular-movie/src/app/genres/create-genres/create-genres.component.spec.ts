import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGenresComponent } from './create-genres.component';

describe('CreateGenresComponent', () => {
  let component: CreateGenresComponent;
  let fixture: ComponentFixture<CreateGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
