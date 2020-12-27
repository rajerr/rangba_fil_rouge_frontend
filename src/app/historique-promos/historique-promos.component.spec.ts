import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePromosComponent } from './historique-promos.component';

describe('HistoriquePromosComponent', () => {
  let component: HistoriquePromosComponent;
  let fixture: ComponentFixture<HistoriquePromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriquePromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquePromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
