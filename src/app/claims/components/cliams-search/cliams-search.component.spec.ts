import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliamsSearchComponent } from './cliams-search.component';

describe('CliamsSearchComponent', () => {
  let component: CliamsSearchComponent;
  let fixture: ComponentFixture<CliamsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CliamsSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CliamsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
