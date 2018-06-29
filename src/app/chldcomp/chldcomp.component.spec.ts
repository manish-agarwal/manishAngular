/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChldcompComponent } from './chldcomp.component';

describe('ChldcompComponent', () => {
  let component: ChldcompComponent;
  let fixture: ComponentFixture<ChldcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChldcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChldcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
