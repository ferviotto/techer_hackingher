import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferServicesComponent } from './offer-services.component';

describe('OfferServicesComponent', () => {
  let component: OfferServicesComponent;
  let fixture: ComponentFixture<OfferServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferServicesComponent]
    });
    fixture = TestBed.createComponent(OfferServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
