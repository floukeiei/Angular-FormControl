import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  departmentList = [
        {
            departmentCode: '001',
            departmentName: 'Sale'
        },
        {
            departmentCode: '002',
            departmentName: 'IT'
        },
        {
            departmentCode: '003',
            departmentName: 'HR'
        }
    ];

    myForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      department: new FormControl(null, Validators.required),
      gender: new FormControl('M', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    });

  }

  setValue() {
    this.myForm.get('firstName').setValue('oreo');
  }

  patchValue() {
    this.myForm.patchValue({
      department: { departmentCode: '001',
       departmentName: 'Sale' },
      gender: 'M',
      firstName: 'hello',
      lastName: 'hi'
    });

    this.myForm.get('firstName').disable();
  }
}
