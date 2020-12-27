import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerUserComponent } from './editer-user.component';

describe('EditerUserComponent', () => {
  let component: EditerUserComponent;
  let fixture: ComponentFixture<EditerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
