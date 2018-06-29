/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArthcompComponent } from './arthcomp.component';

describe('ArthcompComponent', () => {
  let component: ArthcompComponent;
  let fixture: ComponentFixture<ArthcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArthcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
