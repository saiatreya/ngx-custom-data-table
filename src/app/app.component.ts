import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tableLibraryApp';
  public itemObj: any = [{
    key: 'name',
    value: 'Name',
    searchPlaceholder: 'Search By Name'
  }, {
    key: 'age',
    value: 'Age'
  }];
  public itemObj2: any = [{
    key: 'referenceId',
    value: 'Reference Id',
    hide: true
  },
  {
    key: 'name',
    value: 'Name'
  },
  {
    key: 'website',
    value: 'website',
    link: true,
    action: true
  },
  {
    key: 'createdDate',
    value: 'Created date',
    date: true
  }, {
    key: 'createdBy',
    value: 'Created by'
  }];
  public btnObj: any = [{
    btnName: 'Save',
    styleClass: 'primary',
    width: 'small'
  }, {
    btnName: 'Cancel',
    styleClass: 'default',
    width: 'small',
    cancel: true
  }];
  public uniqParam = 'name';
  public items: any = [];
  public items2: any = [];
  constructor() {
    this.items = [
      {
        name: 'Niranjan',
        age: 24
      }, {
        name: 'Sai kumar',
        age: 27
      }
    ];
    this.items2 = [
      {
        referenceId: '1',
        name: 'Niranjan',
        website: 'https://google.com',
        createdDate: new Date(),
        createdBy: 'Niranjan'
      }, {
        referenceId: '2',
        name: 'Sai kumar',
        website: 'http://makemewhite.github.io',
        createdDate: new Date(),
        createdBy: 'Sai kumar'
      }
    ];
  }

  addNewItem(value) {
    console.log(value);
  }

  updateItem(value) {
    console.log(value);
  }

  deleteItem(value) {
    console.log(value);
  }

  radioSelectedValue(value) {
    console.log(value);
  }

  choosenValues(values) {
    console.log(values);
  }

  unSelectChosenValues() {
    console.log('Do some resetting here');
  }

  linkClick(value) {
    console.log(value);
  }

  showInfoDetails(details) {
    console.log(details);
  }
}
