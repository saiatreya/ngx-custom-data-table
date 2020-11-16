/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NgxCustomDataTableComponent {
    constructor() {
        this.radioSelectedValue = '';
        this.uniqKey = '';
        this.autoGenerateId = false;
        this.keyOptional = false;
        this.showRadioInRows = false;
        this.showCheckBox = false;
        this.noActions = false;
        this.enableSelection = false;
        this.onlyDelete = false;
        this.sortOrder = 1;
        this.sortKey = this.uniqKey;
        this.hideHeaderCheckBox = false;
        this.btnContents = {};
        this.noHeaderDropdown = false;
        this.selectedValueEmit = new EventEmitter();
        this.confirmAdd = new EventEmitter();
        this.confirmUpdate = new EventEmitter();
        this.selectedLinkEmit = new EventEmitter();
        this.confirmDelete = new EventEmitter();
        this.closeDialog = new EventEmitter();
        this.saveChoosenValues = new EventEmitter();
        this.selectInfoEmit = new EventEmitter();
        this.rowObj = {};
        this.editItems = [];
        this.clonedItems = {};
        this.items = [];
        this.itemObj = [];
        this.rowInx = '';
        this.addNewItems = [];
        this.newItem = '';
        this.choosenItems = [];
        this.profilesList = [];
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set selectionChange(val) {
        this.items = [...this.items.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x[this.uniqKey]))];
        this.addNewItems = [];
        this.editCancel();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set tableList(val) {
        if (this.rowInx) {
            this.editCancel();
            this.rowInx = '';
        }
        if (this.newItem) {
            /** @type {?} */
            const newInx = this.addNewItems.findIndex((/**
             * @param {?} x
             * @return {?}
             */
            x => x[this.uniqKey] === this.newItem));
            /** @type {?} */
            const itemInx = this.items.findIndex((/**
             * @param {?} x
             * @return {?}
             */
            x => x[this.uniqKey] === this.newItem));
            delete this.items[itemInx].tempId;
            this.addNewItems.splice(newInx, 1);
            this.newItem = '';
        }
        if (val) {
            this.items = [...this.addNewItems, ...val];
            this.choosenItems = this.items.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.chosen));
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set tableKeysList(val) {
        this.itemObj = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set tableProfileList(val) {
        this.profilesList = val;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sortKey = this.sortKey || this.uniqKey;
        this.sortOrder = this.sortOrder || 1;
        this.itemObj.forEach((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.rowObj[x.key] = '';
        }));
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    addNewItem(item = {}) {
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
    /**
     * @param {?} item
     * @param {?} key
     * @param {?=} keySet
     * @return {?}
     */
    filterDuplicates(item, key, keySet = '') {
        /** @type {?} */
        let noDuplicates = [];
        item.forEach((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            /** @type {?} */
            const value = x[key];
            if (value) {
                if (Array.isArray(value)) {
                    noDuplicates = [...noDuplicates, ...value];
                }
                else {
                    noDuplicates.push(value);
                }
            }
        }));
        /** @type {?} */
        const filteredDuplicates = Array.from(new Set(noDuplicates));
        /** @type {?} */
        const filteredData = filteredDuplicates.map((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            /** @type {?} */
            const obj = {};
            obj[key] = x;
            return obj;
        }));
        return filteredData;
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    emailValidation(item = {}) {
        /** @type {?} */
        const isEmail = this.itemObj.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.email));
        if (isEmail && isEmail['key']) {
            /** @type {?} */
            const emailVal = item[isEmail['key']];
            /** @type {?} */
            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            if (!emailPattern.test(emailVal)) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    dropdownValidation(item = {}) {
        /** @type {?} */
        const isProfil = item['profileName'];
        if (isProfil === '') {
            return false;
        }
        return true;
    }
    /**
     * @param {?=} uniqKey
     * @return {?}
     */
    editCancel(uniqKey) {
        /** @type {?} */
        const key = uniqKey ? uniqKey[this.uniqKey] : this.rowInx;
        /** @type {?} */
        const rowToCancel = this.editItems.indexOf(key);
        /** @type {?} */
        const index = this.items.findIndex((/**
         * @param {?} x
         * @return {?}
         */
        x => x[this.uniqKey] === key));
        this.editItems.splice(rowToCancel, 1);
        this.items[index] = Object.assign({}, this.clonedItems[key]);
        this.clonedItems[key] = {};
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    updateItem(item = {}) {
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
    /**
     * @param {?} item
     * @return {?}
     */
    checkEmptyFields(item) {
        /** @type {?} */
        const values = Object.values(item);
        /** @type {?} */
        const checkEmpty = values.indexOf('');
        /** @type {?} */
        const key = Object.keys(item)[checkEmpty];
        if (checkEmpty !== -1) {
            return false;
        }
        return true;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeRow(item) {
        /** @type {?} */
        const newInx = this.addNewItems.findIndex((/**
         * @param {?} x
         * @return {?}
         */
        x => x.tempId === item.tempId));
        /** @type {?} */
        const itemInx = this.items.findIndex((/**
         * @param {?} x
         * @return {?}
         */
        x => x.tempId === item.tempId));
        this.addNewItems.splice(newInx, 1);
        this.items.splice(itemInx, 1);
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    editRowItems(item = {}) {
        /** @type {?} */
        const uniqKey = this.uniqKey;
        this.editItems.push(item[uniqKey]);
        /** @type {?} */
        const cloned = this.items.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x[uniqKey] === item[uniqKey]));
        this.clonedItems[item[uniqKey]] = Object.assign({}, cloned);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteItem(id) {
        this.confirmDelete.emit(id);
    }
    /**
     * @return {?}
     */
    getNextGroupId() {
        /** @type {?} */
        let maxGroupId = 0;
        /** @type {?} */
        let nextGroupId = 0;
        this.items.forEach((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (!isNaN(x[this.uniqKey])) {
                if (maxGroupId < x[this.uniqKey]) {
                    maxGroupId = x[this.uniqKey];
                }
            }
        }));
        nextGroupId = +maxGroupId + 1;
        return nextGroupId;
    }
    /**
     * @return {?}
     */
    addNew() {
        /** @type {?} */
        const obj = Object.assign({}, this.rowObj);
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
    /**
     * @return {?}
     */
    selectValue() {
        this.selectedValueEmit.emit(this.radioSelectedValue);
    }
    /**
     * @param {?} set
     * @param {?} item
     * @return {?}
     */
    selectInfo(set, item) {
        /** @type {?} */
        const selectedItem = Object.assign({}, item, set);
        this.selectInfoEmit.emit(selectedItem);
    }
    /**
     * @param {?=} selectedItem
     * @param {?=} $event
     * @return {?}
     */
    selectLink(selectedItem = {}, $event = {}) {
        if ($event) {
            $event.stopPropagation();
        }
        this.selectedLinkEmit.emit(selectedItem);
    }
    /**
     * @return {?}
     */
    saveItems() {
        this.saveChoosenValues.emit(this.choosenItems);
    }
    /**
     * @return {?}
     */
    cancelCheck() {
        this.closeDialog.emit(true);
    }
}
NgxCustomDataTableComponent.decorators = [
    { type: Component, args: [{
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
                styles: [`
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
    `]
            }] }
];
/** @nocollapse */
NgxCustomDataTableComponent.ctorParameters = () => [];
NgxCustomDataTableComponent.propDecorators = {
    uniqKey: [{ type: Input }],
    autoGenerateId: [{ type: Input }],
    keyOptional: [{ type: Input }],
    showRadioInRows: [{ type: Input }],
    showCheckBox: [{ type: Input }],
    noActions: [{ type: Input }],
    enableSelection: [{ type: Input }],
    onlyDelete: [{ type: Input }],
    sortOrder: [{ type: Input }],
    sortKey: [{ type: Input }],
    hideHeaderCheckBox: [{ type: Input }],
    btnContents: [{ type: Input }],
    noHeaderDropdown: [{ type: Input }],
    selectionChange: [{ type: Input }],
    tableList: [{ type: Input }],
    tableKeysList: [{ type: Input }],
    tableProfileList: [{ type: Input }],
    selectedValueEmit: [{ type: Output }],
    confirmAdd: [{ type: Output }],
    confirmUpdate: [{ type: Output }],
    selectedLinkEmit: [{ type: Output }],
    confirmDelete: [{ type: Output }],
    closeDialog: [{ type: Output }],
    saveChoosenValues: [{ type: Output }],
    selectInfoEmit: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.radioSelectedValue;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.menus;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.uniqKey;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.autoGenerateId;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.keyOptional;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.showRadioInRows;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.showCheckBox;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.noActions;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.enableSelection;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.onlyDelete;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.sortOrder;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.sortKey;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.hideHeaderCheckBox;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.btnContents;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.noHeaderDropdown;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.selectedValueEmit;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.confirmAdd;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.confirmUpdate;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.selectedLinkEmit;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.confirmDelete;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.closeDialog;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.saveChoosenValues;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.selectInfoEmit;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.rowObj;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.editItems;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.clonedItems;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.items;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.itemObj;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.rowInx;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.addNewItems;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.newItem;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.choosenItems;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.processes;
    /** @type {?} */
    NgxCustomDataTableComponent.prototype.profilesList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWN1c3RvbS1kYXRhLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jdXN0b20tZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY3VzdG9tLWRhdGEtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBME0vRSxNQUFNLE9BQU8sMkJBQTJCO0lBa0V0QztRQWhFTyx1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFFZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxZQUFPLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMvQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBOEJ4QixzQkFBaUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzRCxxQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM5RCxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNELGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekQsc0JBQWlCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0QsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV0RSxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0QixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUV6QixpQkFBWSxHQUFRLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7O0lBakRqQixJQUFhLGVBQWUsQ0FBQyxHQUFRO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBQ0QsSUFBYSxTQUFTLENBQUMsR0FBUTtRQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDbEI7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7O2tCQUNWLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBQzs7a0JBQzFFLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBQztZQUMzRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOzs7OztJQUNELElBQWEsYUFBYSxDQUFDLEdBQVE7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxJQUFhLGdCQUFnQixDQUFDLEdBQVE7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDMUIsQ0FBQzs7OztJQXVCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFZLEVBQUU7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkIsT0FBTztTQUNSO1FBQ0Q7OztZQUdJO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDOzs7O1lBSUk7UUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7OztJQUVELGdCQUFnQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBaUIsRUFBRTs7WUFDekMsWUFBWSxHQUFHLEVBQUU7UUFDckIsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTs7a0JBQ1QsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDcEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN4QixZQUFZLEdBQUcsQ0FBQyxHQUFHLFlBQVksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO2lCQUM1QztxQkFBTTtvQkFDTCxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMxQjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7O2NBQ0csa0JBQWtCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7Y0FDdEQsWUFBWSxHQUFHLGtCQUFrQixDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTs7a0JBQ3hDLEdBQUcsR0FBRyxFQUFFO1lBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxFQUFDO1FBQ0YsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsT0FBWSxFQUFFOztjQUN0QixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDO1FBQy9DLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTs7a0JBQ3ZCLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOztrQkFDL0IsWUFBWSxHQUFHLDBDQUEwQztZQUMvRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLE9BQVksRUFBRTs7Y0FDekIsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDcEMsSUFBSSxRQUFRLEtBQUssRUFBRSxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBQ0QsVUFBVSxDQUFDLE9BQWdCOztjQUNuQixHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTs7Y0FDbkQsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzs7Y0FDekMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUM7UUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFZLEVBQUU7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDOzs7Ozs7OztZQVFJO1FBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFTOztjQUNsQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7O2NBQzVCLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzs7Y0FDL0IsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ3pDLElBQUksVUFBVSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQUk7O2NBQ04sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFDOztjQUNsRSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUM7UUFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxPQUFZLEVBQUU7O2NBQ25CLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Y0FDN0IsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxxQkFBUSxNQUFNLENBQUUsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxFQUFVO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxjQUFjOztZQUNSLFVBQVUsR0FBRyxDQUFDOztZQUNkLFdBQVcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNoQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDOUI7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsV0FBVyxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsTUFBTTs7Y0FDRSxHQUFHLHFCQUFhLElBQUksQ0FBQyxNQUFNLENBQUU7UUFDbkMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBUSxFQUFFLElBQVM7O2NBQ3RCLFlBQVkscUJBQVEsSUFBSSxFQUFLLEdBQUcsQ0FBRTtRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsZUFBb0IsRUFBRSxFQUFFLFNBQWMsRUFBRTtRQUNqRCxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQWpiRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMktUO3lCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxQkM7YUFFSjs7Ozs7c0JBS0UsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSztpQ0FDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUtMLEtBQUs7NEJBaUJMLEtBQUs7K0JBSUwsS0FBSztnQ0FHTCxNQUFNO3lCQUNOLE1BQU07NEJBQ04sTUFBTTsrQkFDTixNQUFNOzRCQUNOLE1BQU07MEJBQ04sTUFBTTtnQ0FDTixNQUFNOzZCQUNOLE1BQU07Ozs7SUFuRFAseURBQStCOztJQUMvQiw0Q0FBa0I7O0lBQ2xCLDhDQUE2Qjs7SUFDN0IscURBQXVDOztJQUN2QyxrREFBb0M7O0lBQ3BDLHNEQUF3Qzs7SUFDeEMsbURBQXFDOztJQUNyQyxnREFBa0M7O0lBQ2xDLHNEQUF3Qzs7SUFDeEMsaURBQW1DOztJQUNuQyxnREFBOEI7O0lBQzlCLDhDQUErQzs7SUFDL0MseURBQTJDOztJQUMzQyxrREFBc0M7O0lBQ3RDLHVEQUF5Qzs7SUE4QnpDLHdEQUFnRjs7SUFDaEYsaURBQXlFOztJQUN6RSxvREFBNEU7O0lBQzVFLHVEQUErRTs7SUFDL0Usb0RBQTRFOztJQUM1RSxrREFBMEU7O0lBQzFFLHdEQUFnRjs7SUFDaEYscURBQTZFOztJQUU3RSw2Q0FBbUI7O0lBQ25CLGdEQUEyQjs7SUFDM0Isa0RBQTZCOztJQUM3Qiw0Q0FBdUI7O0lBQ3ZCLDhDQUF5Qjs7SUFDekIsNkNBQW1COztJQUNuQixrREFBNkI7O0lBQzdCLDhDQUFvQjs7SUFDcEIsbURBQWdDOztJQUNoQyxnREFBc0I7O0lBQ3RCLG1EQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbmd4LWN1c3RvbS1kYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicC1jb2wtMTIgbWFyZ2luLXRvcC0yNFwiICpuZ0lmPVwiIW5vQWN0aW9ucyAmJiAhb25seURlbGV0ZVwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tcHJpbWFyeVwiIHBCdXR0b24gdHlwZT1cImJ1dHRvblwiIGxhYmVsPVwiKyBBZGRcIlxuICAgICAgICAoY2xpY2spPVwiYWRkTmV3KClcIj48L2J1dHRvbj5cbjwvZGl2PlxuPHAtdGFibGUgI2l0ZW1UYWJsZSBbc29ydEZpZWxkXT1cInNvcnRLZXlcIiBbc29ydE9yZGVyXT1cInNvcnRPcmRlclwiIFtzZWxlY3Rpb25Nb2RlXT1cImVuYWJsZVNlbGVjdGlvbiA/ICdzaW5nbGUnIDogJydcIlxuICAgIFsoc2VsZWN0aW9uKV09XCJjaG9vc2VuSXRlbXNcIiBbcm93SG92ZXJdPVwidHJ1ZVwiIFt2YWx1ZV09XCJpdGVtc1wiIFtzY3JvbGxhYmxlXT1cInRydWVcIiBzY3JvbGxIZWlnaHQ9XCIzMDBweFwiXG4gICAgY2xhc3M9XCJpdGVtcy10YWJsZVwiICpuZ0lmPVwiaXRlbXM/Lmxlbmd0aCA+IDA7ZWxzZSBub0RhdGFBdlwiXG4gICAgKG9uUm93U2VsZWN0KT1cInJhZGlvU2VsZWN0ZWRWYWx1ZSA9ICRldmVudDtzZWxlY3RWYWx1ZSgpXCIgKG9uUm93VW5zZWxlY3QpPVwicmFkaW9TZWxlY3RlZFZhbHVlPScnO3NlbGVjdFZhbHVlKClcIj5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiaGVhZGVyXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCAqbmdJZj1cInNob3dDaGVja0JveFwiIHN0eWxlPVwid2lkdGg6IDNlbVwiPjwvdGg+XG4gICAgICAgICAgICA8dGggKm5nSWY9XCIhbm9BY3Rpb25zXCI+QWN0aW9uczwvdGg+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvYmogb2YgaXRlbU9ialwiPlxuICAgICAgICAgICAgICAgIDx0aCAqbmdJZj1cIiFvYmouaGlkZSAmJiBvYmoudHlwZSAhPT0gJ2Ryb3Bkb3duJ1wiIFtwU29ydGFibGVDb2x1bW5dPVwib2JqLmtleVwiXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJvYmoud2lkdGggKyAnZW0nXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7b2JqLnZhbHVlfX0gPHAtc29ydEljb24gW2ZpZWxkXT1cIm9iai5rZXlcIj48L3Atc29ydEljb24+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggKm5nSWY9XCJvYmoudHlwZSA9PT0gJ2Ryb3Bkb3duJ1wiIFtpbm5lckhUTUxdPVwib2JqLnZhbHVlXCI+PC90aD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggKm5nSWY9XCJzaG93Q2hlY2tCb3hcIiBzdHlsZT1cIndpZHRoOiAzZW1cIj5cbiAgICAgICAgICAgICAgICA8cC10YWJsZUhlYWRlckNoZWNrYm94ICpuZ0lmPVwiIWhpZGVIZWFkZXJDaGVja0JveFwiPjwvcC10YWJsZUhlYWRlckNoZWNrYm94PlxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aCAqbmdJZj1cIiFub0FjdGlvbnNcIj48L3RoPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb2JqIG9mIGl0ZW1PYmpcIj5cbiAgICAgICAgICAgICAgICA8dGggKm5nSWY9XCIhb2JqLmhpZGUgJiYgIW5vSGVhZGVyRHJvcGRvd25cIiBbc3R5bGUud2lkdGhdPVwib2JqLndpZHRoICsgJ2VtJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8cC1kcm9wZG93biAqbmdJZj1cIm9iai50eXBlIT09J211bHRpLXNlbGVjdCdcIiBhcHBlbmRUbz1cImJvZHlcIiBbZmlsdGVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cIml0ZW1UYWJsZS5maWx0ZXIoJGV2ZW50LnZhbHVlID8gJGV2ZW50LnZhbHVlW29iai5rZXldIDogJycsIG9iaj8ua2V5LCAnY29udGFpbnMnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJmaWx0ZXJEdXBsaWNhdGVzKGl0ZW1zLG9iai5rZXksIG9iai5rZXlTZXQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3snU2VhcmNoIEJ5ICcgKyBvYmoudmFsdWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uTGFiZWxdPVwib2JqLmtleVwiIFtzaG93Q2xlYXJdPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3AtZHJvcGRvd24+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L3RyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImJvZHlcIiBsZXQtaXRlbSBsZXQtcm93SW5kZXg9XCJyb3dJbmRleFwiPlxuICAgICAgICA8dHIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIFtwU2VsZWN0YWJsZVJvd109XCJpdGVtXCIgW3BTZWxlY3RhYmxlUm93RGlzYWJsZWRdPVwiaXRlbT8uZGlzYWJsZUNoZWNrYm94XCIgKm5nSWY9XCJpdGVtXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0/LnRlbXBJZDtlbHNlIG5ld0lucHV0XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRJdGVtcy5pbmRleE9mKGl0ZW1bdW5pcUtleV0pID09PSAtMTtlbHNlIHNob3dJbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCIhbm9BY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1yYWRpb0J1dHRvbiBjbGFzcz1cInJhZGlvLWJ1dHRvblwiICpuZ0lmPVwic2hvd1JhZGlvSW5Sb3dzXCIgbmFtZT1cImdyb3VwbmFtZVwiIFt2YWx1ZV09XCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInJhZGlvU2VsZWN0ZWRWYWx1ZVwiIChvbkNsaWNrKT1cInNlbGVjdFZhbHVlKClcIj48L3AtcmFkaW9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhb25seURlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWNvbj1cInBpIHBpLXBlbmNpbFwiIGNsYXNzPVwidWktYnV0dG9uLWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJlZGl0Um93SXRlbXMoaXRlbSlcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBpY29uPVwicGkgcGktdHJhc2hcIiBjbGFzcz1cInVpLWJ1dHRvbi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkZWxldGVJdGVtKGl0ZW1bdW5pcUtleV0pXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNob3dDaGVja0JveFwiIHN0eWxlPVwid2lkdGg6IDNlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtdGFibGVDaGVja2JveCBbZXNjYXBlXT1cImZhbHNlXCIgW3BUb29sdGlwXT1cIml0ZW0/LnRvb2x0aXBNc2dcIiBbdmFsdWVdPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW0/LmRpc2FibGVDaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXRhYmxlQ2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9iaiBvZiBpdGVtT2JqXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW9iai5oaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwib2JqLmtleVNldDtlbHNlIG5vU2V0XCIgW3N0eWxlLndpZHRoXT1cIm9iai53aWR0aCArICdlbSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgc2V0IG9mIGl0ZW1bb2JqPy5rZXldO2xldCBzZXRJbnggPSBpbmRleDtcIiBjbGFzcz1cInNldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cInt7c2V0fX1cIiBjbGFzcz1cImVsbGlwc2lzLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3NldH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSB0aXRsZT1cIkFzc2lnbmVlIGluZm9cIiBjbGFzcz1cInBpIHBpLWluZm8tY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0SW5mbyhpdGVtW29iaj8ua2V5U2V0XVtzZXRJbnhdLGl0ZW0pXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm9TZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBbY2xhc3MubGlua109XCJvYmoubGlua1wiICpuZ0lmPVwib2JqLnR5cGUhPT0nbXVsdGktc2VsZWN0JyAmJiBvYmoudHlwZSE9PSdkcm9wZG93bidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9iaj8uYWN0aW9uID8gc2VsZWN0TGluayhpdGVtLCRldmVudCkgOiAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwib2JqLndpZHRoICsgJ2VtJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tvYmo/LmRhdGUgPyAoaXRlbVtvYmo/LmtleV0gfCBkYXRlOiAnZGQgTU1NIHl5eXksIEhIOm1tJykgOiBpdGVtW29iaj8ua2V5XX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwib2JqLnR5cGU9PT0nbXVsdGktc2VsZWN0J1wiIFtzdHlsZS53aWR0aF09XCJvYmoud2lkdGggKyAnZW0nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgaXRlbVtvYmoua2V5XVwiPnt7b3B0aW9uLm5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJvYmoudHlwZSA9PT0gJ2Ryb3Bkb3duJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY2hhbmdlZF09XCJpdGVtW29iai5rZXkgKyAnLHByZXZLZXlWYWwnXSAmJiBpdGVtW29iai5rZXkgKyAnLHByZXZLZXlWYWwnXSAhPT0gaXRlbVtvYmoua2V5XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwib2JqLndpZHRoICsgJ2VtJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24gKG9uQ2hhbmdlKT1cIml0ZW1bb2JqLmtleV0gPSAkZXZlbnQ/Lm9yaWdpbmFsRXZlbnQ/LnRhcmdldD8uaW5uZXJUZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJwcm9maWxlc0xpc3RcIiAqbmdJZj1cIm9iai50eXBlPT09J2Ryb3Bkb3duJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2l0ZW1bb2JqLmtleV19fVwiIFtuZ01vZGVsXT1cIml0ZW1bb2JqLmtleV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tvYmoua2V5ICsgJycgKyByb3dJbmRleH19XCIgcmVxdWlyZWQ9XCJ0cnVlXCIgW2F1dG9XaWR0aF09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG89XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtZHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNuZXdJbnB1dD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gcEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWNvbj1cInBpIHBpLWNoZWNrXCIgY2xhc3M9XCJ1aS1idXR0b24tc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkTmV3SXRlbShpdGVtKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHBCdXR0b24gdHlwZT1cImJ1dHRvblwiIGljb249XCJwaSBwaS10aW1lc1wiIGNsYXNzPVwidWktYnV0dG9uLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlUm93KGl0ZW0pXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvYmogb2YgaXRlbU9iajtsZXQgaW5kZXggPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW9iai5oaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJvYmoudHlwZSE9PSdtdWx0aS1zZWxlY3QnXCIgW3N0eWxlLndpZHRoXT1cIm9iai53aWR0aCArICdlbSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiYXV0b0dlbmVyYXRlSWQgJiYgb2JqLmtleSA9PT0gdW5pcUtleTtlbHNlIG5vdEF1dG9HZW5lclRlbXBcIj57e2l0ZW1bdW5pcUtleV19fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm90QXV0b0dlbmVyVGVtcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IChrZXl1cC5lbnRlcik9XCJhZGROZXdJdGVtKGl0ZW0pXCIgKm5nSWY9XCJvYmoudHlwZSE9J2Ryb3AtZG93bidcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7b2JqLmtleSArICcnICsgaW5kZXh9fVwiIHBJbnB1dFRleHQgWyhuZ01vZGVsKV09XCJpdGVtW29iai5rZXldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3snUGxlYXNlIEVudGVyICcgKyBvYmoudmFsdWV9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1kcm9wZG93biBbb3B0aW9uc109XCJvYmoudmFsdWVzIHx8IHByb2ZpbGVzTGlzdFwiICpuZ0lmPVwib2JqLnR5cGU9PT0nZHJvcC1kb3duJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7b2JqLmtleSArICcnICsgcm93SW5kZXh9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7J1BsZWFzZSBFbnRlciAnICsgb2JqLnZhbHVlfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ0cnVlXCIgWyhuZ01vZGVsKV09XCJpdGVtW29iai5rZXldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25MYWJlbF09XCJvYmoudmFsdWVzPy5sZW5ndGggPiAwID8gJ2xhYmVsJyA6ICdwcm9maWxlTmFtZSdcIiBbYXV0b1dpZHRoXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtZHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJvYmoudHlwZT09PSdtdWx0aS1zZWxlY3QnXCIgW3N0eWxlLndpZHRoXT1cIm9iai53aWR0aCArICdlbSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1tdWx0aVNlbGVjdCBmaWx0ZXI9XCJ0cnVlXCIgbXVsdGlwbGU9XCJ0cnVlXCIgYXBwZW5kVG89XCJib2R5XCIgY2hlY2tib3g9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwib2JqLnZhbHVlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbVtvYmoua2V5XVwiIG9wdGlvbkxhYmVsPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1tdWx0aVNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjc2hvd0lucHV0PlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBwQnV0dG9uIHR5cGU9XCJidXR0b25cIiBpY29uPVwicGkgcGktY2hlY2tcIiBjbGFzcz1cInVpLWJ1dHRvbi1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ1cGRhdGVJdGVtKGl0ZW0pXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gcEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWNvbj1cInBpIHBpLXRpbWVzXCIgY2xhc3M9XCJ1aS1idXR0b24tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJlZGl0Q2FuY2VsKGl0ZW0pXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvYmogb2YgaXRlbU9iajtsZXQgZmlyc3QgPSBmaXJzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW9iai5oaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJ1bmlxS2V5ID09PSBvYmo/LmtleVwiIFtzdHlsZS53aWR0aF09XCJvYmoud2lkdGggKyAnZW0nXCI+e3tpdGVtW29iaj8ua2V5XX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cInVuaXFLZXkgIT09IG9iaj8ua2V5ICYmIG9iai50eXBlIT09J211bHRpLXNlbGVjdCdcIiBbc3R5bGUud2lkdGhdPVwib2JqLndpZHRoICsgJ2VtJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAoa2V5dXAuZW50ZXIpPVwidXBkYXRlSXRlbShpdGVtKVwiICpuZ0lmPVwib2JqLnR5cGUhPSdkcm9wLWRvd24nXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7b2JqLmtleSArICcnICsgcm93SW5kZXh9fVwiIHBJbnB1dFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eydQbGVhc2UgRW50ZXIgJyArIG9iai52YWx1ZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtW29iai5rZXldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24gW29wdGlvbnNdPVwib2JqLnZhbHVlcyB8fCBwcm9maWxlc0xpc3RcIiAqbmdJZj1cIm9iai50eXBlPT09J2Ryb3AtZG93bidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7aXRlbVtvYmoua2V5XX19XCIgaWQ9XCJ7e29iai5rZXkgKyAnJyArIHJvd0luZGV4fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW1bb2JqLmtleV1cIiByZXF1aXJlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uTGFiZWxdPVwib2JqLnZhbHVlcz8ubGVuZ3RoID4gMCA/ICdsYWJlbCcgOiAncHJvZmlsZU5hbWUnXCIgW2F1dG9XaWR0aF09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1kcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJvYmoudHlwZT09PSdtdWx0aS1zZWxlY3QnXCIgW3N0eWxlLndpZHRoXT1cIm9iai53aWR0aCArICdlbSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1tdWx0aVNlbGVjdCBmaWx0ZXI9XCJ0cnVlXCIgbXVsdGlwbGU9XCJ0cnVlXCIgYXBwZW5kVG89XCJib2R5XCIgY2hlY2tib3g9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwib2JqLnZhbHVlc1wiIFsobmdNb2RlbCldPVwiaXRlbVtvYmoua2V5XVwiIG9wdGlvbkxhYmVsPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1tdWx0aVNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC90cj5cbiAgICA8L25nLXRlbXBsYXRlPlxuPC9wLXRhYmxlPlxuPGRpdiBjbGFzcz1cInAtY29sLTEyXCIgW25nQ2xhc3NdPVwieyd0ZXh0LXJpZ2h0JzogYnRuQ29udGVudHM/Lmxlbmd0aCA+IDEsICd0ZXh0LWNlbnRlcic6IGJ0bkNvbnRlbnRzPy5sZW5ndGggPT09IDF9XCJcbiAgICAqbmdJZj1cImJ0bkNvbnRlbnRzPy5sZW5ndGggPiAwXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYnRuIG9mIGJ0bkNvbnRlbnRzXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24te3tidG4uc3R5bGVDbGFzc319IGJ0bi17e2J0bi53aWR0aH19XCIgcEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGxhYmVsPVwie3tidG4uYnRuTmFtZX19XCIgKGNsaWNrKT1cImJ0bi5jYW5jZWwgPyBjYW5jZWxDaGVjaygpIDogc2F2ZUl0ZW1zKClcIj48L2J1dHRvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuPG5nLXRlbXBsYXRlICNub0RhdGFBdj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbm8tZGF0YS1jb250ZW50XCI+XG4gICAgICAgIE5vIERhdGEgYXZhaWxhYmxlXG4gICAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5saW5rIHtcbiAgICAgICAgY29sb3I6ICMxMTZmYmY7XG4gICAgfVxuICAgIC51aS1zdGF0ZS1oaWdobGlnaHQge1xuICAgICAgICAubGluayB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2V0LWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmY2MzMztcbiAgICAgICAgfVxuICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4Q3VzdG9tRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgcmFkaW9TZWxlY3RlZFZhbHVlID0gJyc7XG4gIHB1YmxpYyBtZW51czogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgdW5pcUtleSA9ICcnO1xuICBASW5wdXQoKSBwdWJsaWMgYXV0b0dlbmVyYXRlSWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGtleU9wdGlvbmFsID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93UmFkaW9JblJvd3MgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIHNob3dDaGVja0JveCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgbm9BY3Rpb25zID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVTZWxlY3Rpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIG9ubHlEZWxldGUgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIHNvcnRPcmRlciA9IDE7XG4gIEBJbnB1dCgpIHB1YmxpYyBzb3J0S2V5OiBzdHJpbmcgPSB0aGlzLnVuaXFLZXk7XG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlSGVhZGVyQ2hlY2tCb3ggPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGJ0bkNvbnRlbnRzOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgcHVibGljIG5vSGVhZGVyRHJvcGRvd24gPSBmYWxzZTtcbiAgQElucHV0KCkgc2V0IHNlbGVjdGlvbkNoYW5nZSh2YWw6IGFueSkge1xuICAgIHRoaXMuaXRlbXMgPSBbLi4udGhpcy5pdGVtcy5maWx0ZXIoeCA9PiB4W3RoaXMudW5pcUtleV0pXTtcbiAgICB0aGlzLmFkZE5ld0l0ZW1zID0gW107XG4gICAgdGhpcy5lZGl0Q2FuY2VsKCk7XG4gIH1cbiAgQElucHV0KCkgc2V0IHRhYmxlTGlzdCh2YWw6IGFueSkge1xuICAgIGlmICh0aGlzLnJvd0lueCkge1xuICAgICAgdGhpcy5lZGl0Q2FuY2VsKCk7XG4gICAgICB0aGlzLnJvd0lueCA9ICcnO1xuICAgIH1cbiAgICBpZiAodGhpcy5uZXdJdGVtKSB7XG4gICAgICBjb25zdCBuZXdJbnggPSB0aGlzLmFkZE5ld0l0ZW1zLmZpbmRJbmRleCh4ID0+IHhbdGhpcy51bmlxS2V5XSA9PT0gdGhpcy5uZXdJdGVtKTtcbiAgICAgIGNvbnN0IGl0ZW1JbnggPSB0aGlzLml0ZW1zLmZpbmRJbmRleCh4ID0+IHhbdGhpcy51bmlxS2V5XSA9PT0gdGhpcy5uZXdJdGVtKTtcbiAgICAgIGRlbGV0ZSB0aGlzLml0ZW1zW2l0ZW1JbnhdLnRlbXBJZDtcbiAgICAgIHRoaXMuYWRkTmV3SXRlbXMuc3BsaWNlKG5ld0lueCwgMSk7XG4gICAgICB0aGlzLm5ld0l0ZW0gPSAnJztcbiAgICB9XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5pdGVtcyA9IFsuLi50aGlzLmFkZE5ld0l0ZW1zLCAuLi52YWxdO1xuICAgICAgdGhpcy5jaG9vc2VuSXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcih4ID0+IHguY2hvc2VuKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgc2V0IHRhYmxlS2V5c0xpc3QodmFsOiBhbnkpIHtcbiAgICB0aGlzLml0ZW1PYmogPSB2YWw7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgdGFibGVQcm9maWxlTGlzdCh2YWw6IGFueSkge1xuICAgIHRoaXMucHJvZmlsZXNMaXN0ID0gdmFsO1xuICB9XG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWRWYWx1ZUVtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY29uZmlybUFkZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjb25maXJtVXBkYXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkTGlua0VtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY29uZmlybURlbGV0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjbG9zZURpYWxvZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBzYXZlQ2hvb3NlblZhbHVlczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3RJbmZvRW1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgcm93T2JqID0ge307XG4gIHB1YmxpYyBlZGl0SXRlbXM6IGFueSA9IFtdO1xuICBwdWJsaWMgY2xvbmVkSXRlbXM6IGFueSA9IHt9O1xuICBwdWJsaWMgaXRlbXM6IGFueSA9IFtdO1xuICBwdWJsaWMgaXRlbU9iajogYW55ID0gW107XG4gIHB1YmxpYyByb3dJbnggPSAnJztcbiAgcHVibGljIGFkZE5ld0l0ZW1zOiBhbnkgPSBbXTtcbiAgcHVibGljIG5ld0l0ZW0gPSAnJztcbiAgcHVibGljIGNob29zZW5JdGVtczogYW55W10gPSBbXTtcbiAgcHVibGljIHByb2Nlc3NlczogYW55O1xuICBwdWJsaWMgcHJvZmlsZXNMaXN0OiBhbnkgPSBbXTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNvcnRLZXkgPSB0aGlzLnNvcnRLZXkgfHwgdGhpcy51bmlxS2V5O1xuICAgIHRoaXMuc29ydE9yZGVyID0gdGhpcy5zb3J0T3JkZXIgfHwgMTtcbiAgICB0aGlzLml0ZW1PYmouZm9yRWFjaCh4ID0+IHtcbiAgICAgIHRoaXMucm93T2JqW3gua2V5XSA9ICcnO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkTmV3SXRlbShpdGVtOiBhbnkgPSB7fSkge1xuICAgIGlmICghaXRlbVt0aGlzLnVuaXFLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qIGNvbnN0IGNoZWNrQWxsRmllbGRzID0gdGhpcy5jaGVja0VtcHR5RmllbGRzKGl0ZW0pO1xuICAgIGlmICghY2hlY2tBbGxGaWVsZHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9ICovXG4gICAgdGhpcy5uZXdJdGVtID0gaXRlbVt0aGlzLnVuaXFLZXldO1xuICAgIC8qIGNvbnN0IHZhbGlkUHJvZmlsZSA9IHRoaXMuZHJvcGRvd25WYWxpZGF0aW9uKGl0ZW0pO1xuICAgIGNvbnN0IHZhbGlkRW1haWwgPSB0aGlzLmVtYWlsVmFsaWRhdGlvbihpdGVtKTtcbiAgICBpZiAoIXZhbGlkRW1haWwgfHwgIXZhbGlkUHJvZmlsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gKi9cbiAgICB0aGlzLmNvbmZpcm1BZGQuZW1pdCh7IGl0ZW0gfSk7XG4gIH1cblxuICBmaWx0ZXJEdXBsaWNhdGVzKGl0ZW0sIGtleSwga2V5U2V0OiBzdHJpbmcgPSAnJykge1xuICAgIGxldCBub0R1cGxpY2F0ZXMgPSBbXTtcbiAgICBpdGVtLmZvckVhY2goeCA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHhba2V5XTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBub0R1cGxpY2F0ZXMgPSBbLi4ubm9EdXBsaWNhdGVzLCAuLi52YWx1ZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9EdXBsaWNhdGVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZmlsdGVyZWREdXBsaWNhdGVzID0gQXJyYXkuZnJvbShuZXcgU2V0KG5vRHVwbGljYXRlcykpO1xuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkRHVwbGljYXRlcy5tYXAoeCA9PiB7XG4gICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgIG9ialtrZXldID0geDtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkRGF0YTtcbiAgfVxuXG4gIGVtYWlsVmFsaWRhdGlvbihpdGVtOiBhbnkgPSB7fSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzRW1haWwgPSB0aGlzLml0ZW1PYmouZmluZCh4ID0+IHguZW1haWwpO1xuICAgIGlmIChpc0VtYWlsICYmIGlzRW1haWxbJ2tleSddKSB7XG4gICAgICBjb25zdCBlbWFpbFZhbCA9IGl0ZW1baXNFbWFpbFsna2V5J11dO1xuICAgICAgY29uc3QgZW1haWxQYXR0ZXJuID0gL15bYS16MC05Ll8lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsNH0kLztcbiAgICAgIGlmICghZW1haWxQYXR0ZXJuLnRlc3QoZW1haWxWYWwpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBkcm9wZG93blZhbGlkYXRpb24oaXRlbTogYW55ID0ge30pOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1Byb2ZpbCA9IGl0ZW1bJ3Byb2ZpbGVOYW1lJ107XG4gICAgaWYgKGlzUHJvZmlsID09PSAnJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBlZGl0Q2FuY2VsKHVuaXFLZXk/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBrZXkgPSB1bmlxS2V5ID8gdW5pcUtleVt0aGlzLnVuaXFLZXldIDogdGhpcy5yb3dJbng7XG4gICAgY29uc3Qgcm93VG9DYW5jZWwgPSB0aGlzLmVkaXRJdGVtcy5pbmRleE9mKGtleSk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleCh4ID0+IHhbdGhpcy51bmlxS2V5XSA9PT0ga2V5KTtcbiAgICB0aGlzLmVkaXRJdGVtcy5zcGxpY2Uocm93VG9DYW5jZWwsIDEpO1xuICAgIHRoaXMuaXRlbXNbaW5kZXhdID0geyAuLi50aGlzLmNsb25lZEl0ZW1zW2tleV0gfTtcbiAgICB0aGlzLmNsb25lZEl0ZW1zW2tleV0gPSB7fTtcbiAgfVxuXG4gIHVwZGF0ZUl0ZW0oaXRlbTogYW55ID0ge30pIHtcbiAgICB0aGlzLnJvd0lueCA9IGl0ZW1bdGhpcy51bmlxS2V5XTtcbiAgICAvKiBjb25zdCBjaGVja0FsbEZpZWxkcyA9IHRoaXMuY2hlY2tFbXB0eUZpZWxkcyhpdGVtKTtcbiAgICBpZiAoIWNoZWNrQWxsRmllbGRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbGlkUHJvZmlsZSA9IHRoaXMuZHJvcGRvd25WYWxpZGF0aW9uKGl0ZW0pO1xuICAgIGNvbnN0IHZhbGlkRW1haWwgPSB0aGlzLmVtYWlsVmFsaWRhdGlvbihpdGVtKTtcbiAgICBpZiAoIXZhbGlkRW1haWwgfHwgIXZhbGlkUHJvZmlsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gKi9cbiAgICB0aGlzLmNvbmZpcm1VcGRhdGUuZW1pdChpdGVtKTtcbiAgfVxuXG4gIGNoZWNrRW1wdHlGaWVsZHMoaXRlbTogYW55KSB7XG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhpdGVtKTtcbiAgICBjb25zdCBjaGVja0VtcHR5ID0gdmFsdWVzLmluZGV4T2YoJycpO1xuICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGl0ZW0pW2NoZWNrRW1wdHldO1xuICAgIGlmIChjaGVja0VtcHR5ICE9PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZVJvdyhpdGVtKSB7XG4gICAgY29uc3QgbmV3SW54ID0gdGhpcy5hZGROZXdJdGVtcy5maW5kSW5kZXgoeCA9PiB4LnRlbXBJZCA9PT0gaXRlbS50ZW1wSWQpO1xuICAgIGNvbnN0IGl0ZW1JbnggPSB0aGlzLml0ZW1zLmZpbmRJbmRleCh4ID0+IHgudGVtcElkID09PSBpdGVtLnRlbXBJZCk7XG4gICAgdGhpcy5hZGROZXdJdGVtcy5zcGxpY2UobmV3SW54LCAxKTtcbiAgICB0aGlzLml0ZW1zLnNwbGljZShpdGVtSW54LCAxKTtcbiAgfVxuXG4gIGVkaXRSb3dJdGVtcyhpdGVtOiBhbnkgPSB7fSkge1xuICAgIGNvbnN0IHVuaXFLZXkgPSB0aGlzLnVuaXFLZXk7XG4gICAgdGhpcy5lZGl0SXRlbXMucHVzaChpdGVtW3VuaXFLZXldKTtcbiAgICBjb25zdCBjbG9uZWQgPSB0aGlzLml0ZW1zLmZpbmQoeCA9PiB4W3VuaXFLZXldID09PSBpdGVtW3VuaXFLZXldKTtcbiAgICB0aGlzLmNsb25lZEl0ZW1zW2l0ZW1bdW5pcUtleV1dID0geyAuLi5jbG9uZWQgfTtcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0oaWQ6IHN0cmluZykge1xuICAgIHRoaXMuY29uZmlybURlbGV0ZS5lbWl0KGlkKTtcbiAgfVxuXG4gIGdldE5leHRHcm91cElkKCkge1xuICAgIGxldCBtYXhHcm91cElkID0gMDtcbiAgICBsZXQgbmV4dEdyb3VwSWQgPSAwO1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCh4ID0+IHtcbiAgICAgIGlmICghaXNOYU4oeFt0aGlzLnVuaXFLZXldKSkge1xuICAgICAgICBpZiAobWF4R3JvdXBJZCA8IHhbdGhpcy51bmlxS2V5XSkge1xuICAgICAgICAgIG1heEdyb3VwSWQgPSB4W3RoaXMudW5pcUtleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBuZXh0R3JvdXBJZCA9ICttYXhHcm91cElkICsgMTtcbiAgICByZXR1cm4gbmV4dEdyb3VwSWQ7XG4gIH1cblxuICBhZGROZXcoKSB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7IC4uLnRoaXMucm93T2JqIH07XG4gICAgb2JqLnRlbXBJZCA9IHRoaXMuaXRlbXMubGVuZ3RoICsgMTtcbiAgICBpZiAodGhpcy5hdXRvR2VuZXJhdGVJZCkge1xuICAgICAgb2JqW3RoaXMudW5pcUtleV0gPSB0aGlzLmdldE5leHRHcm91cElkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmtleU9wdGlvbmFsKSB7XG4gICAgICBvYmpbdGhpcy51bmlxS2V5XSA9IG9iai50ZW1wSWQ7XG4gICAgfVxuICAgIHRoaXMuYWRkTmV3SXRlbXMudW5zaGlmdChvYmopO1xuICAgIHRoaXMuaXRlbXMudW5zaGlmdChvYmopO1xuICB9XG5cbiAgc2VsZWN0VmFsdWUoKSB7XG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlRW1pdC5lbWl0KHRoaXMucmFkaW9TZWxlY3RlZFZhbHVlKTtcbiAgfVxuXG4gIHNlbGVjdEluZm8oc2V0OiBhbnksIGl0ZW06IGFueSkge1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHsgLi4uaXRlbSwgLi4uc2V0IH07XG4gICAgdGhpcy5zZWxlY3RJbmZvRW1pdC5lbWl0KHNlbGVjdGVkSXRlbSk7XG4gIH1cblxuICBzZWxlY3RMaW5rKHNlbGVjdGVkSXRlbTogYW55ID0ge30sICRldmVudDogYW55ID0ge30pIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRMaW5rRW1pdC5lbWl0KHNlbGVjdGVkSXRlbSk7XG4gIH1cblxuICBzYXZlSXRlbXMoKSB7XG4gICAgdGhpcy5zYXZlQ2hvb3NlblZhbHVlcy5lbWl0KHRoaXMuY2hvb3Nlbkl0ZW1zKTtcbiAgfVxuXG4gIGNhbmNlbENoZWNrKCkge1xuICAgIHRoaXMuY2xvc2VEaWFsb2cuZW1pdCh0cnVlKTtcbiAgfVxuXG59XG4iXX0=