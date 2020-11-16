import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-custom-data-table',
  template: `
    <div class="p-col-12 margin-top-24" *ngIf="!noActions && !onlyDelete">
    <button class="button-primary" pButton type="button" label="+ Add"
        (click)="addNew()"></button>
</div>
<p-table #itemTable [sortField]="sortKey" [sortOrder]="sortOrder" [selectionMode]="enableSelection ? 'single' : ''"
    [(selection)]="choosenItems" [rowHover]="true" [value]="items" [scrollable]="true" scrollHeight="300px"
    class="items-table" *ngIf="items?.length > 0;else noDataAv"
    (onRowSelect)="radioSelectedValue = $event;selectValue()" (onRowUnselect)="radioSelectedValue='';selectValue()">
    <ng-template pTemplate="header">
        <tr>
            <th *ngIf="showCheckBox" style="width: 3em"></th>
            <th *ngIf="!noActions">Actions</th>
            <ng-container *ngFor="let obj of itemObj">
                <th *ngIf="!obj.hide && obj.type !== 'dropdown'" [pSortableColumn]="obj.key"
                    [style.width]="obj.width + 'em'">
                    {{obj.value}} <p-sortIcon [field]="obj.key"></p-sortIcon>
                </th>
                <th *ngIf="obj.type === 'dropdown'" [innerHTML]="obj.value"></th>
            </ng-container>
        </tr>
        <tr>
            <th *ngIf="showCheckBox" style="width: 3em">
                <p-tableHeaderCheckbox *ngIf="!hideHeaderCheckBox"></p-tableHeaderCheckbox>
            </th>
            <th *ngIf="!noActions"></th>
            <ng-container *ngFor="let obj of itemObj">
                <th *ngIf="!obj.hide && !noHeaderDropdown" [style.width]="obj.width + 'em'">
                    <p-dropdown *ngIf="obj.type!=='multi-select'" appendTo="body" [filter]="true"
                        (onChange)="itemTable.filter($event.value ? $event.value[obj.key] : '', obj?.key, 'contains')"
                        [options]="filterDuplicates(items,obj.key, obj.keySet)"
                        placeholder="{{'Search By ' + obj.value}}"
                        [optionLabel]="obj.key" [showClear]="true">
                    </p-dropdown>
                </th>
            </ng-container>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-item let-rowIndex="rowIndex">
        <tr class="text-center" [pSelectableRow]="item" [pSelectableRowDisabled]="item?.disableCheckbox" *ngIf="item">
            <ng-container *ngIf="!item?.tempId;else newInput">
                <ng-container *ngIf="editItems.indexOf(item[uniqKey]) === -1;else showInput">
                    <td *ngIf="!noActions">
                        <p-radioButton class="radio-button" *ngIf="showRadioInRows" name="groupname" [value]="item"
                            [(ngModel)]="radioSelectedValue" (onClick)="selectValue()"></p-radioButton>
                        <button
                            *ngIf="!onlyDelete"
                            pButton type="button" icon="pi pi-pencil" class="ui-button-info"
                            (click)="editRowItems(item)"></button>
                        <button pButton
                            type="button" icon="pi pi-trash" class="ui-button-danger"
                            (click)="deleteItem(item[uniqKey])"></button>
                    </td>
                    <td *ngIf="showCheckBox" style="width: 3em">
                        <p-tableCheckbox [escape]="false" [pTooltip]="item?.tooltipMsg" [value]="item"
                            [disabled]="item?.disableCheckbox">
                        </p-tableCheckbox>
                    </td>
                    <ng-container *ngFor="let obj of itemObj">
                        <ng-container *ngIf="!obj.hide">
                            <td *ngIf="obj.keySet;else noSet" [style.width]="obj.width + 'em'">
                                <div *ngFor="let set of item[obj?.key];let setInx = index;" class="set-content">
                                    <span title="{{set}}" class="ellipsis-content">
                                        {{set}}
                                    </span>
                                    <i title="Assignee info" class="pi pi-info-circle"
                                        (click)="selectInfo(item[obj?.keySet][setInx],item)"></i>
                                </div>
                            </td>
                            <ng-template #noSet>
                                <td [class.link]="obj.link" *ngIf="obj.type!=='multi-select' && obj.type!=='dropdown'"
                                    (click)="obj?.action ? selectLink(item,$event) : ''"
                                    [style.width]="obj.width + 'em'">
                                    {{obj?.date ? (item[obj?.key] | date: 'dd MMM yyyy, HH:mm') : item[obj?.key]}}</td>
                                <td *ngIf="obj.type==='multi-select'" [style.width]="obj.width + 'em'">
                                    <div *ngFor="let option of item[obj.key]">{{option.name}}</div>
                                </td>
                                <td *ngIf="obj.type === 'dropdown'"
                                    [class.changed]="item[obj.key + ',prevKeyVal'] && item[obj.key + ',prevKeyVal'] !== item[obj.key]"
                                    [style.width]="obj.width + 'em'">
                                    <p-dropdown (onChange)="item[obj.key] = $event?.originalEvent?.target?.innerText"
                                        [options]="profilesList" *ngIf="obj.type==='dropdown'"
                                        placeholder="{{item[obj.key]}}" [ngModel]="item[obj.key]"
                                        id="{{obj.key + '' + rowIndex}}" required="true" [autoWidth]="false"
                                        appendTo="body">
                                    </p-dropdown>
                                </td>
                            </ng-template>
                        </ng-container>
                    </ng-container>
                </ng-container>
            </ng-container>
            <ng-template #newInput>
                <td>
                    <button pButton type="button" icon="pi pi-check" class="ui-button-success"
                        (click)="addNewItem(item)"></button>
                    <button pButton type="button" icon="pi pi-times" class="ui-button-danger"
                        (click)="removeRow(item)"></button>
                </td>
                <ng-container *ngFor="let obj of itemObj;let index = index">
                    <ng-container *ngIf="!obj.hide">
                        <td *ngIf="obj.type!=='multi-select'" [style.width]="obj.width + 'em'">
                            <div *ngIf="autoGenerateId && obj.key === uniqKey;else notAutoGenerTemp">{{item[uniqKey]}}
                            </div>
                            <ng-template #notAutoGenerTemp>
                                <input (keyup.enter)="addNewItem(item)" *ngIf="obj.type!='drop-down'" type="text"
                                    id="{{obj.key + '' + index}}" pInputText [(ngModel)]="item[obj.key]"
                                    placeholder="{{'Please Enter ' + obj.value}}">
                                <p-dropdown [options]="obj.values || profilesList" *ngIf="obj.type==='drop-down'"
                                    id="{{obj.key + '' + rowIndex}}"
                                    placeholder="{{'Please Enter ' + obj.value}}"
                                    required="true" [(ngModel)]="item[obj.key]"
                                    [optionLabel]="obj.values?.length > 0 ? 'label' : 'profileName'" [autoWidth]="false"
                                    appendTo="body">
                                </p-dropdown>
                            </ng-template>
                        </td>
                        <td *ngIf="obj.type==='multi-select'" [style.width]="obj.width + 'em'">
                            <p-multiSelect filter="true" multiple="true" appendTo="body" checkbox="true"
                                [options]="obj.values"
                                [(ngModel)]="item[obj.key]" optionLabel="name">
                            </p-multiSelect>
                        </td>
                    </ng-container>
                </ng-container>
            </ng-template>
            <ng-template #showInput>
                <td>
                    <button pButton type="button" icon="pi pi-check" class="ui-button-success"
                        (click)="updateItem(item)"></button>
                    <button pButton type="button" icon="pi pi-times" class="ui-button-danger"
                        (click)="editCancel(item)"></button>
                </td>
                <ng-container *ngFor="let obj of itemObj;let first = first">
                    <ng-container *ngIf="!obj.hide">
                        <td *ngIf="uniqKey === obj?.key" [style.width]="obj.width + 'em'">{{item[obj?.key]}}</td>
                        <td *ngIf="uniqKey !== obj?.key && obj.type!=='multi-select'" [style.width]="obj.width + 'em'">
                            <input (keyup.enter)="updateItem(item)" *ngIf="obj.type!='drop-down'" type="text"
                                id="{{obj.key + '' + rowIndex}}" pInputText
                                placeholder="{{'Please Enter ' + obj.value}}"
                                [(ngModel)]="item[obj.key]">
                            <p-dropdown [options]="obj.values || profilesList" *ngIf="obj.type==='drop-down'"
                                placeholder="{{item[obj.key]}}" id="{{obj.key + '' + rowIndex}}"
                                [(ngModel)]="item[obj.key]" required="true"
                                [optionLabel]="obj.values?.length > 0 ? 'label' : 'profileName'" [autoWidth]="false"
                                appendTo="body">
                            </p-dropdown>
                        </td>
                        <td *ngIf="obj.type==='multi-select'" [style.width]="obj.width + 'em'">
                            <p-multiSelect filter="true" multiple="true" appendTo="body" checkbox="true"
                                [options]="obj.values" [(ngModel)]="item[obj.key]" optionLabel="name">
                            </p-multiSelect>
                        </td>
                    </ng-container>
                </ng-container>
            </ng-template>
        </tr>
    </ng-template>
</p-table>
<div class="p-col-12" [ngClass]="{'text-right': btnContents?.length > 1, 'text-center': btnContents?.length === 1}"
    *ngIf="btnContents?.length > 0">
    <ng-container *ngFor="let btn of btnContents">
        <button class="button-{{btn.styleClass}} btn-{{btn.width}}" pButton type="button"
            label="{{btn.btnName}}" (click)="btn.cancel ? cancelCheck() : saveItems()"></button>
    </ng-container>
</div>
<ng-template #noDataAv>
    <div class="text-center no-data-content">
        No Data available
    </div>
</ng-template>
  `,
  styles: [
    `
    .radio-button {
      margin-right: 10px;
    }
    .link {
        color: #116fbf;
    }
    .ui-state-highlight {
        .link {
            color: #fff;
        }
    }
    .set-content {
        display: flex;
        justify-content: center;
        align-items: center;
        i {
            font-size: 24px;
            color: #ffcc33;
        }
    }
    `
  ]
})
export class NgxCustomDataTableComponent implements OnInit {

  public radioSelectedValue = '';
  public menus: any;
  @Input() public uniqKey = '';
  @Input() public autoGenerateId = false;
  @Input() public keyOptional = false;
  @Input() public showRadioInRows = false;
  @Input() public showCheckBox = false;
  @Input() public noActions = false;
  @Input() public enableSelection = false;
  @Input() public onlyDelete = false;
  @Input() public sortOrder = 1;
  @Input() public sortKey: string = this.uniqKey;
  @Input() public hideHeaderCheckBox = false;
  @Input() public btnContents: any = {};
  @Input() public noHeaderDropdown = false;
  @Input() set selectionChange(val: any) {
    this.items = [...this.items.filter(x => x[this.uniqKey])];
    this.addNewItems = [];
    this.editCancel();
  }
  @Input() set tableList(val: any) {
    if (this.rowInx) {
      this.editCancel();
      this.rowInx = '';
    }
    if (this.newItem) {
      const newInx = this.addNewItems.findIndex(x => x[this.uniqKey] === this.newItem);
      const itemInx = this.items.findIndex(x => x[this.uniqKey] === this.newItem);
      delete this.items[itemInx].tempId;
      this.addNewItems.splice(newInx, 1);
      this.newItem = '';
    }
    if (val) {
      this.items = [...this.addNewItems, ...val];
      this.choosenItems = this.items.filter(x => x.chosen);
    }
  }
  @Input() set tableKeysList(val: any) {
    this.itemObj = val;
  }

  @Input() set tableProfileList(val: any) {
    this.profilesList = val;
  }
  @Output() public selectedValueEmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() public confirmAdd: EventEmitter<any> = new EventEmitter<any>();
  @Output() public confirmUpdate: EventEmitter<any> = new EventEmitter<any>();
  @Output() public selectedLinkEmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() public confirmDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() public closeDialog: EventEmitter<any> = new EventEmitter<any>();
  @Output() public saveChoosenValues: EventEmitter<any> = new EventEmitter<any>();
  @Output() public selectInfoEmit: EventEmitter<any> = new EventEmitter<any>();

  public rowObj = {};
  public editItems: any = [];
  public clonedItems: any = {};
  public items: any = [];
  public itemObj: any = [];
  public rowInx = '';
  public addNewItems: any = [];
  public newItem = '';
  public choosenItems: any[] = [];
  public processes: any;
  public profilesList: any = [];
  constructor() { }

  ngOnInit() {
    this.sortKey = this.sortKey || this.uniqKey;
    this.sortOrder = this.sortOrder || 1;
    this.itemObj.forEach(x => {
      this.rowObj[x.key] = '';
    });
  }

  addNewItem(item: any = {}) {
    if (!item[this.uniqKey]) {
      return;
    }
    /* const checkAllFields = this.checkEmptyFields(item);
    if (!checkAllFields) {
      return;
    } */
    this.newItem = item[this.uniqKey];
    /* const validProfile = this.dropdownValidation(item);
    const validEmail = this.emailValidation(item);
    if (!validEmail || !validProfile) {
      return;
    } */
    this.confirmAdd.emit({ item });
  }

  filterDuplicates(item, key, keySet: string = '') {
    let noDuplicates = [];
    item.forEach(x => {
      const value = x[key];
      if (value) {
        if (Array.isArray(value)) {
          noDuplicates = [...noDuplicates, ...value];
        } else {
          noDuplicates.push(value);
        }
      }
    });
    const filteredDuplicates = Array.from(new Set(noDuplicates));
    const filteredData = filteredDuplicates.map(x => {
      const obj = {};
      obj[key] = x;
      return obj;
    });
    return filteredData;
  }

  emailValidation(item: any = {}): boolean {
    const isEmail = this.itemObj.find(x => x.email);
    if (isEmail && isEmail['key']) {
      const emailVal = item[isEmail['key']];
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (!emailPattern.test(emailVal)) {
        return false;
      }
    }
    return true;
  }

  dropdownValidation(item: any = {}): boolean {
    const isProfil = item['profileName'];
    if (isProfil === '') {
      return false;
    }
    return true;
  }
  editCancel(uniqKey?: string) {
    const key = uniqKey ? uniqKey[this.uniqKey] : this.rowInx;
    const rowToCancel = this.editItems.indexOf(key);
    const index = this.items.findIndex(x => x[this.uniqKey] === key);
    this.editItems.splice(rowToCancel, 1);
    this.items[index] = { ...this.clonedItems[key] };
    this.clonedItems[key] = {};
  }

  updateItem(item: any = {}) {
    this.rowInx = item[this.uniqKey];
    /* const checkAllFields = this.checkEmptyFields(item);
    if (!checkAllFields) {
      return;
    }
    const validProfile = this.dropdownValidation(item);
    const validEmail = this.emailValidation(item);
    if (!validEmail || !validProfile) {
      return;
    } */
    this.confirmUpdate.emit(item);
  }

  checkEmptyFields(item: any) {
    const values = Object.values(item);
    const checkEmpty = values.indexOf('');
    const key = Object.keys(item)[checkEmpty];
    if (checkEmpty !== -1) {
      return false;
    }
    return true;
  }

  removeRow(item) {
    const newInx = this.addNewItems.findIndex(x => x.tempId === item.tempId);
    const itemInx = this.items.findIndex(x => x.tempId === item.tempId);
    this.addNewItems.splice(newInx, 1);
    this.items.splice(itemInx, 1);
  }

  editRowItems(item: any = {}) {
    const uniqKey = this.uniqKey;
    this.editItems.push(item[uniqKey]);
    const cloned = this.items.find(x => x[uniqKey] === item[uniqKey]);
    this.clonedItems[item[uniqKey]] = { ...cloned };
  }

  deleteItem(id: string) {
    this.confirmDelete.emit(id);
  }

  getNextGroupId() {
    let maxGroupId = 0;
    let nextGroupId = 0;
    this.items.forEach(x => {
      if (!isNaN(x[this.uniqKey])) {
        if (maxGroupId < x[this.uniqKey]) {
          maxGroupId = x[this.uniqKey];
        }
      }
    });
    nextGroupId = +maxGroupId + 1;
    return nextGroupId;
  }

  addNew() {
    const obj: any = { ...this.rowObj };
    obj.tempId = this.items.length + 1;
    if (this.autoGenerateId) {
      obj[this.uniqKey] = this.getNextGroupId();
    }
    if (this.keyOptional) {
      obj[this.uniqKey] = obj.tempId;
    }
    this.addNewItems.unshift(obj);
    this.items.unshift(obj);
  }

  selectValue() {
    this.selectedValueEmit.emit(this.radioSelectedValue);
  }

  selectInfo(set: any, item: any) {
    const selectedItem = { ...item, ...set };
    this.selectInfoEmit.emit(selectedItem);
  }

  selectLink(selectedItem: any = {}, $event: any = {}) {
    if ($event) {
      $event.stopPropagation();
    }
    this.selectedLinkEmit.emit(selectedItem);
  }

  saveItems() {
    this.saveChoosenValues.emit(this.choosenItems);
  }

  cancelCheck() {
    this.closeDialog.emit(true);
  }

}
