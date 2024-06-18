import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuynowPage } from './buynow.page';

describe('BuynowPage', () => {
  let component: BuynowPage;
  let fixture: ComponentFixture<BuynowPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuynowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
