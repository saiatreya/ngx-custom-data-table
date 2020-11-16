import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxCustomDataTableComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxCustomDataTableModule {
}
NgxCustomDataTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxCustomDataTableComponent],
                imports: [
                    RadioButtonModule,
                    TableModule,
                    TooltipModule,
                    DropdownModule,
                    CheckboxModule,
                    MultiSelectModule,
                    CommonModule,
                    FormsModule,
                    ButtonModule
                ],
                exports: [NgxCustomDataTableComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxCustomDataTableComponent, NgxCustomDataTableModule };
//# sourceMappingURL=ngx-custom-data-table.js.map
