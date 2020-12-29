import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApprenantByProfilesSortieComponent } from './list-apprenant-by-profiles-sortie.component';

describe('ListApprenantByProfilesSortieComponent', () => {
  let component: ListApprenantByProfilesSortieComponent;
  let fixture: ComponentFixture<ListApprenantByProfilesSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApprenantByProfilesSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApprenantByProfilesSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
