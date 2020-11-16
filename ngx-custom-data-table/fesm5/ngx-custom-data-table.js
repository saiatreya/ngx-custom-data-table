import { __spread, __assign } from 'tslib';
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
var NgxCustomDataTableComponent = /** @class */ (function () {
    function NgxCustomDataTableComponent() {
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
    Object.defineProperty(NgxCustomDataTableComponent.prototype, "selectionChange", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            this.items = __spread(this.items.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x[_this.uniqKey]; })));
            this.addNewItems = [];
            this.editCancel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCustomDataTableComponent.prototype, "tableList", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            if (this.rowInx) {
                this.editCancel();
                this.rowInx = '';
            }
            if (this.newItem) {
                /** @type {?} */
                var newInx = this.addNewItems.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x[_this.uniqKey] === _this.newItem; }));
                /** @type {?} */
                var itemInx = this.items.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x[_this.uniqKey] === _this.newItem; }));
                delete this.items[itemInx].tempId;
                this.addNewItems.splice(newInx, 1);
                this.newItem = '';
            }
            if (val) {
                this.items = __spread(this.addNewItems, val);
                this.choosenItems = this.items.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.chosen; }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCustomDataTableComponent.prototype, "tableKeysList", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.itemObj = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCustomDataTableComponent.prototype, "tableProfileList", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.profilesList = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sortKey = this.sortKey || this.uniqKey;
        this.sortOrder = this.sortOrder || 1;
        this.itemObj.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.rowObj[x.key] = '';
        }));
    };
    /**
     * @param {?=} item
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.addNewItem = /**
     * @param {?=} item
     * @return {?}
     */
    function (item) {
        if (item === void 0) { item = {}; }
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
        this.confirmAdd.emit({ item: item });
    };
    /**
     * @param {?} item
     * @param {?} key
     * @param {?=} keySet
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.filterDuplicates = /**
     * @param {?} item
     * @param {?} key
     * @param {?=} keySet
     * @return {?}
     */
    function (item, key, keySet) {
        if (keySet === void 0) { keySet = ''; }
        /** @type {?} */
        var noDuplicates = [];
        item.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            /** @type {?} */
            var value = x[key];
            if (value) {
                if (Array.isArray(value)) {
                    noDuplicates = __spread(noDuplicates, value);
                }
                else {
                    noDuplicates.push(value);
                }
            }
        }));
        /** @type {?} */
        var filteredDuplicates = Array.from(new Set(noDuplicates));
        /** @type {?} */
        var filteredData = filteredDuplicates.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            /** @type {?} */
            var obj = {};
            obj[key] = x;
            return obj;
        }));
        return filteredData;
    };
    /**
     * @param {?=} item
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.emailValidation = /**
     * @param {?=} item
     * @return {?}
     */
    function (item) {
        if (item === void 0) { item = {}; }
        /** @type {?} */
        var isEmail = this.itemObj.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.email; }));
        if (isEmail && isEmail['key']) {
            /** @type {?} */
            var emailVal = item[isEmail['key']];
            /** @type {?} */
            var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            if (!emailPattern.test(emailVal)) {
                return false;
            }
        }
        return true;
    };
    /**
     * @param {?=} item
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.dropdownValidation = /**
     * @param {?=} item
     * @return {?}
     */
    function (item) {
        if (item === void 0) { item = {}; }
        /** @type {?} */
        var isProfil = item['profileName'];
        if (isProfil === '') {
            return false;
        }
        return true;
    };
    /**
     * @param {?=} uniqKey
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.editCancel = /**
     * @param {?=} uniqKey
     * @return {?}
     */
    function (uniqKey) {
        var _this = this;
        /** @type {?} */
        var key = uniqKey ? uniqKey[this.uniqKey] : this.rowInx;
        /** @type {?} */
        var rowToCancel = this.editItems.indexOf(key);
        /** @type {?} */
        var index = this.items.findIndex((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x[_this.uniqKey] === key; }));
        this.editItems.splice(rowToCancel, 1);
        this.items[index] = __assign({}, this.clonedItems[key]);
        this.clonedItems[key] = {};
    };
    /**
     * @param {?=} item
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.updateItem = /**
     * @param {?=} item
     * @return {?}
     */
    function (item) {
        if (item === void 0) { item = {}; }
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
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.checkEmptyFields = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var values = Object.values(item);
        /** @type {?} */
        var checkEmpty = values.indexOf('');
        /** @type {?} */
        var key = Object.keys(item)[checkEmpty];
        if (checkEmpty !== -1) {
            return false;
        }
        return true;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.removeRow = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var newInx = this.addNewItems.findIndex((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.tempId === item.tempId; }));
        /** @type {?} */
        var itemInx = this.items.findIndex((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.tempId === item.tempId; }));
        this.addNewItems.splice(newInx, 1);
        this.items.splice(itemInx, 1);
    };
    /**
     * @param {?=} item
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.editRowItems = /**
     * @param {?=} item
     * @return {?}
     */
    function (item) {
        if (item === void 0) { item = {}; }
        /** @type {?} */
        var uniqKey = this.uniqKey;
        this.editItems.push(item[uniqKey]);
        /** @type {?} */
        var cloned = this.items.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x[uniqKey] === item[uniqKey]; }));
        this.clonedItems[item[uniqKey]] = __assign({}, cloned);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.deleteItem = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.confirmDelete.emit(id);
    };
    /**
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.getNextGroupId = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var maxGroupId = 0;
        /** @type {?} */
        var nextGroupId = 0;
        this.items.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (!isNaN(x[_this.uniqKey])) {
                if (maxGroupId < x[_this.uniqKey]) {
                    maxGroupId = x[_this.uniqKey];
                }
            }
        }));
        nextGroupId = +maxGroupId + 1;
        return nextGroupId;
    };
    /**
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.addNew = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var obj = __assign({}, this.rowObj);
        obj.tempId = this.items.length + 1;
        if (this.autoGenerateId) {
            obj[this.uniqKey] = this.getNextGroupId();
        }
        if (this.keyOptional) {
            obj[this.uniqKey] = obj.tempId;
        }
        this.addNewItems.unshift(obj);
        this.items.unshift(obj);
    };
    /**
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.selectValue = /**
     * @return {?}
     */
    function () {
        this.selectedValueEmit.emit(this.radioSelectedValue);
    };
    /**
     * @param {?} set
     * @param {?} item
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.selectInfo = /**
     * @param {?} set
     * @param {?} item
     * @return {?}
     */
    function (set, item) {
        /** @type {?} */
        var selectedItem = __assign({}, item, set);
        this.selectInfoEmit.emit(selectedItem);
    };
    /**
     * @param {?=} selectedItem
     * @param {?=} $event
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.selectLink = /**
     * @param {?=} selectedItem
     * @param {?=} $event
     * @return {?}
     */
    function (selectedItem, $event) {
        if (selectedItem === void 0) { selectedItem = {}; }
        if ($event === void 0) { $event = {}; }
        if ($event) {
            $event.stopPropagation();
        }
        this.selectedLinkEmit.emit(selectedItem);
    };
    /**
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.saveItems = /**
     * @return {?}
     */
    function () {
        this.saveChoosenValues.emit(this.choosenItems);
    };
    /**
     * @return {?}
     */
    NgxCustomDataTableComponent.prototype.cancelCheck = /**
     * @return {?}
     */
    function () {
        this.closeDialog.emit(true);
    };
    NgxCustomDataTableComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'ngx-custom-data-table',
                    template: "\n    <div class=\"p-col-12 margin-top-24\" *ngIf=\"!noActions && !onlyDelete\">\n    <button class=\"button-primary\" pButton type=\"button\" label=\"+ Add\"\n        (click)=\"addNew()\"></button>\n</div>\n<p-table #itemTable [sortField]=\"sortKey\" [sortOrder]=\"sortOrder\" [selectionMode]=\"enableSelection ? 'single' : ''\"\n    [(selection)]=\"choosenItems\" [rowHover]=\"true\" [value]=\"items\" [scrollable]=\"true\" scrollHeight=\"300px\"\n    class=\"items-table\" *ngIf=\"items?.length > 0;else noDataAv\"\n    (onRowSelect)=\"radioSelectedValue = $event;selectValue()\" (onRowUnselect)=\"radioSelectedValue='';selectValue()\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th *ngIf=\"showCheckBox\" style=\"width: 3em\"></th>\n            <th *ngIf=\"!noActions\">Actions</th>\n            <ng-container *ngFor=\"let obj of itemObj\">\n                <th *ngIf=\"!obj.hide && obj.type !== 'dropdown'\" [pSortableColumn]=\"obj.key\"\n                    [style.width]=\"obj.width + 'em'\">\n                    {{obj.value}} <p-sortIcon [field]=\"obj.key\"></p-sortIcon>\n                </th>\n                <th *ngIf=\"obj.type === 'dropdown'\" [innerHTML]=\"obj.value\"></th>\n            </ng-container>\n        </tr>\n        <tr>\n            <th *ngIf=\"showCheckBox\" style=\"width: 3em\">\n                <p-tableHeaderCheckbox *ngIf=\"!hideHeaderCheckBox\"></p-tableHeaderCheckbox>\n            </th>\n            <th *ngIf=\"!noActions\"></th>\n            <ng-container *ngFor=\"let obj of itemObj\">\n                <th *ngIf=\"!obj.hide && !noHeaderDropdown\" [style.width]=\"obj.width + 'em'\">\n                    <p-dropdown *ngIf=\"obj.type!=='multi-select'\" appendTo=\"body\" [filter]=\"true\"\n                        (onChange)=\"itemTable.filter($event.value ? $event.value[obj.key] : '', obj?.key, 'contains')\"\n                        [options]=\"filterDuplicates(items,obj.key, obj.keySet)\"\n                        placeholder=\"{{'Search By ' + obj.value}}\"\n                        [optionLabel]=\"obj.key\" [showClear]=\"true\">\n                    </p-dropdown>\n                </th>\n            </ng-container>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-item let-rowIndex=\"rowIndex\">\n        <tr class=\"text-center\" [pSelectableRow]=\"item\" [pSelectableRowDisabled]=\"item?.disableCheckbox\" *ngIf=\"item\">\n            <ng-container *ngIf=\"!item?.tempId;else newInput\">\n                <ng-container *ngIf=\"editItems.indexOf(item[uniqKey]) === -1;else showInput\">\n                    <td *ngIf=\"!noActions\">\n                        <p-radioButton class=\"radio-button\" *ngIf=\"showRadioInRows\" name=\"groupname\" [value]=\"item\"\n                            [(ngModel)]=\"radioSelectedValue\" (onClick)=\"selectValue()\"></p-radioButton>\n                        <button\n                            *ngIf=\"!onlyDelete\"\n                            pButton type=\"button\" icon=\"pi pi-pencil\" class=\"ui-button-info\"\n                            (click)=\"editRowItems(item)\"></button>\n                        <button pButton\n                            type=\"button\" icon=\"pi pi-trash\" class=\"ui-button-danger\"\n                            (click)=\"deleteItem(item[uniqKey])\"></button>\n                    </td>\n                    <td *ngIf=\"showCheckBox\" style=\"width: 3em\">\n                        <p-tableCheckbox [escape]=\"false\" [pTooltip]=\"item?.tooltipMsg\" [value]=\"item\"\n                            [disabled]=\"item?.disableCheckbox\">\n                        </p-tableCheckbox>\n                    </td>\n                    <ng-container *ngFor=\"let obj of itemObj\">\n                        <ng-container *ngIf=\"!obj.hide\">\n                            <td *ngIf=\"obj.keySet;else noSet\" [style.width]=\"obj.width + 'em'\">\n                                <div *ngFor=\"let set of item[obj?.key];let setInx = index;\" class=\"set-content\">\n                                    <span title=\"{{set}}\" class=\"ellipsis-content\">\n                                        {{set}}\n                                    </span>\n                                    <i title=\"Assignee info\" class=\"pi pi-info-circle\"\n                                        (click)=\"selectInfo(item[obj?.keySet][setInx],item)\"></i>\n                                </div>\n                            </td>\n                            <ng-template #noSet>\n                                <td [class.link]=\"obj.link\" *ngIf=\"obj.type!=='multi-select' && obj.type!=='dropdown'\"\n                                    (click)=\"obj?.action ? selectLink(item,$event) : ''\"\n                                    [style.width]=\"obj.width + 'em'\">\n                                    {{obj?.date ? (item[obj?.key] | date: 'dd MMM yyyy, HH:mm') : item[obj?.key]}}</td>\n                                <td *ngIf=\"obj.type==='multi-select'\" [style.width]=\"obj.width + 'em'\">\n                                    <div *ngFor=\"let option of item[obj.key]\">{{option.name}}</div>\n                                </td>\n                                <td *ngIf=\"obj.type === 'dropdown'\"\n                                    [class.changed]=\"item[obj.key + ',prevKeyVal'] && item[obj.key + ',prevKeyVal'] !== item[obj.key]\"\n                                    [style.width]=\"obj.width + 'em'\">\n                                    <p-dropdown (onChange)=\"item[obj.key] = $event?.originalEvent?.target?.innerText\"\n                                        [options]=\"profilesList\" *ngIf=\"obj.type==='dropdown'\"\n                                        placeholder=\"{{item[obj.key]}}\" [ngModel]=\"item[obj.key]\"\n                                        id=\"{{obj.key + '' + rowIndex}}\" required=\"true\" [autoWidth]=\"false\"\n                                        appendTo=\"body\">\n                                    </p-dropdown>\n                                </td>\n                            </ng-template>\n                        </ng-container>\n                    </ng-container>\n                </ng-container>\n            </ng-container>\n            <ng-template #newInput>\n                <td>\n                    <button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\"\n                        (click)=\"addNewItem(item)\"></button>\n                    <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"\n                        (click)=\"removeRow(item)\"></button>\n                </td>\n                <ng-container *ngFor=\"let obj of itemObj;let index = index\">\n                    <ng-container *ngIf=\"!obj.hide\">\n                        <td *ngIf=\"obj.type!=='multi-select'\" [style.width]=\"obj.width + 'em'\">\n                            <div *ngIf=\"autoGenerateId && obj.key === uniqKey;else notAutoGenerTemp\">{{item[uniqKey]}}\n                            </div>\n                            <ng-template #notAutoGenerTemp>\n                                <input (keyup.enter)=\"addNewItem(item)\" *ngIf=\"obj.type!='drop-down'\" type=\"text\"\n                                    id=\"{{obj.key + '' + index}}\" pInputText [(ngModel)]=\"item[obj.key]\"\n                                    placeholder=\"{{'Please Enter ' + obj.value}}\">\n                                <p-dropdown [options]=\"obj.values || profilesList\" *ngIf=\"obj.type==='drop-down'\"\n                                    id=\"{{obj.key + '' + rowIndex}}\"\n                                    placeholder=\"{{'Please Enter ' + obj.value}}\"\n                                    required=\"true\" [(ngModel)]=\"item[obj.key]\"\n                                    [optionLabel]=\"obj.values?.length > 0 ? 'label' : 'profileName'\" [autoWidth]=\"false\"\n                                    appendTo=\"body\">\n                                </p-dropdown>\n                            </ng-template>\n                        </td>\n                        <td *ngIf=\"obj.type==='multi-select'\" [style.width]=\"obj.width + 'em'\">\n                            <p-multiSelect filter=\"true\" multiple=\"true\" appendTo=\"body\" checkbox=\"true\"\n                                [options]=\"obj.values\"\n                                [(ngModel)]=\"item[obj.key]\" optionLabel=\"name\">\n                            </p-multiSelect>\n                        </td>\n                    </ng-container>\n                </ng-container>\n            </ng-template>\n            <ng-template #showInput>\n                <td>\n                    <button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\"\n                        (click)=\"updateItem(item)\"></button>\n                    <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"\n                        (click)=\"editCancel(item)\"></button>\n                </td>\n                <ng-container *ngFor=\"let obj of itemObj;let first = first\">\n                    <ng-container *ngIf=\"!obj.hide\">\n                        <td *ngIf=\"uniqKey === obj?.key\" [style.width]=\"obj.width + 'em'\">{{item[obj?.key]}}</td>\n                        <td *ngIf=\"uniqKey !== obj?.key && obj.type!=='multi-select'\" [style.width]=\"obj.width + 'em'\">\n                            <input (keyup.enter)=\"updateItem(item)\" *ngIf=\"obj.type!='drop-down'\" type=\"text\"\n                                id=\"{{obj.key + '' + rowIndex}}\" pInputText\n                                placeholder=\"{{'Please Enter ' + obj.value}}\"\n                                [(ngModel)]=\"item[obj.key]\">\n                            <p-dropdown [options]=\"obj.values || profilesList\" *ngIf=\"obj.type==='drop-down'\"\n                                placeholder=\"{{item[obj.key]}}\" id=\"{{obj.key + '' + rowIndex}}\"\n                                [(ngModel)]=\"item[obj.key]\" required=\"true\"\n                                [optionLabel]=\"obj.values?.length > 0 ? 'label' : 'profileName'\" [autoWidth]=\"false\"\n                                appendTo=\"body\">\n                            </p-dropdown>\n                        </td>\n                        <td *ngIf=\"obj.type==='multi-select'\" [style.width]=\"obj.width + 'em'\">\n                            <p-multiSelect filter=\"true\" multiple=\"true\" appendTo=\"body\" checkbox=\"true\"\n                                [options]=\"obj.values\" [(ngModel)]=\"item[obj.key]\" optionLabel=\"name\">\n                            </p-multiSelect>\n                        </td>\n                    </ng-container>\n                </ng-container>\n            </ng-template>\n        </tr>\n    </ng-template>\n</p-table>\n<div class=\"p-col-12\" [ngClass]=\"{'text-right': btnContents?.length > 1, 'text-center': btnContents?.length === 1}\"\n    *ngIf=\"btnContents?.length > 0\">\n    <ng-container *ngFor=\"let btn of btnContents\">\n        <button class=\"button-{{btn.styleClass}} btn-{{btn.width}}\" pButton type=\"button\"\n            label=\"{{btn.btnName}}\" (click)=\"btn.cancel ? cancelCheck() : saveItems()\"></button>\n    </ng-container>\n</div>\n<ng-template #noDataAv>\n    <div class=\"text-center no-data-content\">\n        No Data available\n    </div>\n</ng-template>\n  ",
                    styles: ["\n    .radio-button {\n      margin-right: 10px;\n    }\n    .link {\n        color: #116fbf;\n    }\n    .ui-state-highlight {\n        .link {\n            color: #fff;\n        }\n    }\n    .set-content {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        i {\n            font-size: 24px;\n            color: #ffcc33;\n        }\n    }\n    "]
                }] }
    ];
    /** @nocollapse */
    NgxCustomDataTableComponent.ctorParameters = function () { return []; };
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
    return NgxCustomDataTableComponent;
}());
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
var NgxCustomDataTableModule = /** @class */ (function () {
    function NgxCustomDataTableModule() {
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
    return NgxCustomDataTableModule;
}());

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
