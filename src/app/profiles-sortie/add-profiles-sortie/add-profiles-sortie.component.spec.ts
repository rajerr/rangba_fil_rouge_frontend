import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfilesSortieComponent } from './add-profiles-sortie.component';

describe('AddProfilesSortieComponent', () => {
  let component: AddProfilesSortieComponent;
  let fixture: ComponentFixture<AddProfilesSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfilesSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfilesSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
