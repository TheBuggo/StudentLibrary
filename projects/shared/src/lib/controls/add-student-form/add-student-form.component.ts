import { Component, OnInit, Inject, } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {
  form: FormGroup;
  title: string = 'Edit user';
  favoriteBooks: string[] = [];

  constructor(public dialogRef: MatDialogRef<AddStudentFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'firstName': new FormControl(this.data.studentInfo.firstName || '', Validators.required),
      'middleName': new FormControl(this.data.studentInfo.middleName || ''),
      'lastName': new FormControl(this.data.studentInfo.lastName || '', Validators.required),
      'email': new FormControl(this.data.studentInfo.email || '', [Validators.required, Validators.email]),
      'favBooks': new FormControl(null)
    });
    if (this.data && this.data.studentInfo && this.data.studentInfo.favBooks) {
      this.favoriteBooks = this.data.studentInfo.favBooks;
    }
  }
  addFavoriteBook() {
    this.favoriteBooks.push(this.form.controls.favBooks.value);
    this.form.controls.favBooks.reset();
  }
  removeFavoriteBook(val: string) {
    let index = this.favoriteBooks.findIndex(x => x == val);
    if (index > -1) {
      this.favoriteBooks.splice(index, 1);
    }
  }
  apply() {
    let data = this.form.value;
    data.favBooks = this.favoriteBooks;
    this.dialogRef.close(data);
  }
}
