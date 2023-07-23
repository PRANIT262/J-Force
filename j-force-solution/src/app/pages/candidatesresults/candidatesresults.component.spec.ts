import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesresultsComponent } from './candidatesresults.component';

describe('CandidatesresultsComponent', () => {
  let component: CandidatesresultsComponent;
  let fixture: ComponentFixture<CandidatesresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesresultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
