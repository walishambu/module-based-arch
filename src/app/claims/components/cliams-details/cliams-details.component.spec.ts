import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliamsDetailsComponent } from './cliams-details.component';

describe('CliamsDetailsComponent', () => {
  let component: CliamsDetailsComponent;
  let fixture: ComponentFixture<CliamsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CliamsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CliamsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
