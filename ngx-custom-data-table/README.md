# NgxCustomDataTable

This library is used to generate dynamic custom tables for angular application. 

## Features

Based on the json input we can do the following:

- Add/delete/update a table row
- Selecting a table row
- Multiple selection of table rows
- Sorting based on table column
- Capturing actions on link click or row click
- Hiding columns that are not necessary

## Installation

- Run `npm install ngx-custom-data-table` to install the package.
- The package has `primeng` modules as peer dependencies. So, please install below as a dependencies in your `package.json` file.
 * @angular/cdk
 * primeicons
 * primeng
 * primeflex
- Add the following import statements in your `styles.scss` file
 * @import '../node_modules/primeng/resources/primeng.min.css';
 * @import "../node_modules/primeicons/primeicons.css";
 * @import "../node_modules/primeflex/primeflex.css";
 * @import "../node_modules/primeng/resources/themes/nova-light/theme.css"
- Add then include the library module in your module (app.module.ts)
```
import { NgxCustomDataTableModule } from 'ngx-custom-data-table';
// ...

 @NgModule({
   declarations: [
     AppComponent
   ],
   imports: [
     // ...
     NgxCustomDataTableModule
   ],
   // ...
 })
 
 export class AppModule { }
```

### Usage

```
import { Component } from '@angular/core';

export class AppComponent {
  public itemObj: any = [{
    key: 'name',
    value: 'Name',
    searchPlaceholder: 'Search By User Name'
  }, {
    key: 'age',
    value: 'Age'
  }];
  public uniqParam = 'name';
  public items: any = [];

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
```

```
<ngx-custom-data-table 
  [uniqKey]="uniqParam" 
  [tableList]="items" 
  [tableKeysList]="tableKeysList"
  (confirmAdd)="addNewItem($event)" 
  (confirmUpdate)="updateItem($event)" 
  (confirmDelete)="deleteItem($event)">
</ngx-custom-data-table>
```

### Settings

| Setting                        | Type       | Description                                                                                                                                                                                                                                                                                                                                              | Default Value       |
| :----------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------ |
| tableKeysList                | Array    | tableKeysList should consist of set of objects with  properties as mentioned in below table  | Mandatory               |
| tableList | Array | List of dynamic items from server or by any other means | if empty, table will show `No data available` message |
| uniqKey |  string | primary key in the tableKeysList used to identify the rows in the table while performing an action on particular row | Mandatory |
| showRadioInRows | boolean | to display radio buttons in each row | false |
| showCheckBox | boolean | to display checkbox in each row | false |
| noActions | boolean | to hide the actions column provided by the library | false |
| enableSelection | boolean | Enabling a row to be selected which invokes a callback `(selectedValueEmit)` |
| hideHeaderCheckBox | boolean | hiding header checkbox in the table | false |
| btnContents | Object | to display the custom buttons for the table. Please refer below table for the properties | optional |
| noHeaderDropdown | boolean | to hide the dropdown in the header | false |

### btnContents:

| Property                       | Type| Use       |
| :----------------------------- | - | :---------|
| btnName                            | string |Name of the button |
| styleClass                          | string | to apply custom class to the button |
| width | string | to adjust the width of the buttons |
| cancel | boolean | if it is true `(closeDialog)` callback will be invoked or else always `(saveChoosenValues)` will be invoked on click of the button/buttons with selected rows in the table.

Please find below example `btnContents` for reference.
```
public btnContents: any = [{
    btnName: 'Save',
    styleClass: 'primary',
    width: 'small'
  }, {
    btnName: 'Cancel',
    styleClass: 'default',
    width: 'small',
    cancel: true
  }];
```

### tableKeysList:

| Property                       | Type| Use       |
| :----------------------------- | - | :---------|
| key                            | string |refer the value in the items/data array |
| value                          | string | column header name or the placeholder|
| searchPlaceholder              | string | custom placeholder to the search dropdown in the header |
| hide | boolean | hides a particular column |
| link | boolean | to display a particular column value as a link |
| action | boolean | on using this flag, callback will be invoked on click of the link |
| width | string | to adjust the width of the columns
| date | boolean | if that particular key will be holding the date format

Please find below example `tableKeysList` for reference.
```
public tableKeysList: any = [{
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
```


### Callback Methods
- `selectedValueEmit` - return the selected row in the table
- `selectedLinkEmit` - return selected row on link click
- `closeDialog` - callback invoked on click of cancel button in the table which is configured using `btnContents`
- `saveChoosenValues` - callback invoked on click of a button in the table which is configured using `btnContents` to retrieve the choosen mutliple values
- `confirmAdd` - return new row added to the table
- `confirmUpdate` - return row that was updated with new values
- `confirmDelete` - return row that needs to be deleted from the table

> Note: Please find above example code in usage section where callback methods were used.

## Run locally

- Run `npm install`
- Run `ng serve` for a dev server
- Navigate to `http://localhost:4200/`

