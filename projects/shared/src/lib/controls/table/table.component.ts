import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { GlobalService } from '../../services/global.service';
import { StudentInfo } from '../../interfaces/student-info';
import { AddStudentFormComponent } from '../add-student-form/add-student-form.component';

@Component({
  selector: 'shared-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  pageSizeOptions = [5, 10, 25, 100];
  displayedColumns: string[] = ['actions', 'firstName', 'middleName', 'lastName', 'email', 'books'];

  students: MatTableDataSource<StudentInfo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog,
              private globalService: GlobalService) {
    this.students = new MatTableDataSource(<any>[]);
    this.loadStudents();
  }
  ngAfterViewInit() {
    this.students.paginator = this.paginator;
    this.students.sort = this.sort;
  }

  loadStudents() {
    this.globalService.invokeApi('/assets/students.json').subscribe(studentsData => {
      this.students = new MatTableDataSource(studentsData);
      this.students.paginator = this.paginator;
      this.students.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.students.filter = filterValue.trim().toLowerCase();

    if (this.students.paginator) {
      this.students.paginator.firstPage();
    }
  }
  openDialog(studentData: any) {
    let dialogRef = this.dialog.open(AddStudentFormComponent, {
      data: {
        studentInfo: studentData
      },
      width: '50vw',
      height: '80vh',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let data = this.students.data;
        data.push(result);
        this.students.data = data;
        this.globalService.writeToFile('/assets/students.json', this.students.data);
      }
    });
  }

  addStudent() {
    this.openDialog([]);
  }
  editStudent(data: any) {
    this.openDialog(data);
  }
  deleteStudent(index: number) {
    this.students.data.splice(index, 1);
    this.students._updateChangeSubscription();
    this.globalService.writeToFile('/assets/students.json', this.students.data);
  }
}
