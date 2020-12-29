import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilesSortieComponent } from './edit-profiles-sortie.component';

describe('EditProfilesSortieComponent', () => {
  let component: EditProfilesSortieComponent;
  let fixture: ComponentFixture<EditProfilesSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfilesSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilesSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
