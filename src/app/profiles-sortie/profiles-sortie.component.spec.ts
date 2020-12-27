import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesSortieComponent } from './profiles-sortie.component';

describe('ProfilesSortieComponent', () => {
  let component: ProfilesSortieComponent;
  let fixture: ComponentFixture<ProfilesSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
