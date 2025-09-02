import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiphDetailPage } from './giph-detail.page';

describe('GiphDetailPage', () => {
  let component: GiphDetailPage;
  let fixture: ComponentFixture<GiphDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
