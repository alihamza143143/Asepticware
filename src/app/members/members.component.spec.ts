import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersComponent } from './members.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MembersComponent],
      imports: [FormsModule, HttpClientModule, RouterModule],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Testing ngOnInit()
  it('should create', () => {
    expect(component.show).toBeFalsy();
  });

  // Testing goToAddMemberForm()
  it('should create', () => {
    component.goToAddMemberForm();
    expect(component.show).toBeTruthy();
  });
  // Testing submitMember()
  it('should create', () => {
    component.submitMember();
    expect(component.show).toBeFalsy();
  });

});


