/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
            this.items = tslib_1.__spread(this.items.filter((/**
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
                this.items = tslib_1.__spread(this.addNewItems, val);
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
                    noDuplicates = tslib_1.__spread(noDuplicates, value);
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
        this.items[index] = tslib_1.__assign({}, this.clonedItems[key]);
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
        this.clonedItems[item[uniqKey]] = tslib_1.__assign({}, cloned);
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
        var obj = tslib_1.__assign({}, this.rowObj);
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
        var selectedItem = tslib_1.__assign({}, item, set);
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
export { NgxCustomDataTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWN1c3RvbS1kYXRhLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jdXN0b20tZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY3VzdG9tLWRhdGEtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQTBRRTtRQWhFTyx1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFFZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxZQUFPLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMvQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBOEJ4QixzQkFBaUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzRCxxQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM5RCxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNELGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekQsc0JBQWlCLEdBQXNCLElBQUks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NkI7O0lBQzdCLHFEQUF1Qzs7SUFDdkMsa0RBQW9DOztJQUNwQyxzREFBd0M7O0lBQ3hDLG1EQUFxQzs7SUFDckMsZ0RBQWtDOztJQUNsQyxzREFBd0M7O0lBQ3hDLGlEQUFtQzs7SUFDbkMsZ0RBQThCOztJQUM5Qiw4Q0FBK0M7O0lBQy9DLHlEQUEyQzs7SUFDM0Msa0RBQXNDOztJQUN0Qyx1REFBeUM7O0lBOEJ6Qyx3REFBZ0Y7O0lBQ2hGLGlEQUF5RTs7SUFDekUsb0RBQTRFOztJQUM1RSx1REFBK0U7O0lBQy9FLG9EQUE0RTs7SUFDNUUsa0RBQTBFOztJQUMxRSx3REFBZ0Y7O0lBQ2hGLHFEQUE2RTs7SUFFN0UsNkNBQW1COztJQUNuQixnREFBMkI7O0lBQzNCLGtEQUE2Qjs7SUFDN0IsNENBQXVCOztJQUN2Qiw4Q0FBeUI7O0lBQ3pCLDZDQUFtQjs7SUFDbkIsa0RBQTZCOztJQUM3Qiw4Q0FBb0I7O0lBQ3BCLG1EQUFnQzs7SUFDaEMsZ0RBQXNCOztJQUN0QixtREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25neC1jdXN0b20tZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInAtY29sLTEyIG1hcmdpbi10b3AtMjRcIiAqbmdJZj1cIiFub0FjdGlvbnMgJiYgIW9ubHlEZWxldGVcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLXByaW1hcnlcIiBwQnV0dG9uIHR5cGU9XCJidXR0b25cIiBsYWJlbD1cIisgQWRkXCJcbiAgICAgICAgKGNsaWNrKT1cImFkZE5ldygpXCI+PC9idXR0b24+XG48L2Rpdj5cbjxwLXRhYmxlICNpdGVtVGFibGUgW3NvcnRGaWVsZF09XCJzb3J0S2V5XCIgW3NvcnRPcmRlcl09XCJzb3J0T3JkZXJcIiBbc2VsZWN0aW9uTW9kZV09XCJlbmFibGVTZWxlY3Rpb24gPyAnc2luZ2xlJyA6ICcnXCJcbiAgICBbKHNlbGVjdGlvbildPVwiY2hvb3Nlbkl0ZW1zXCIgW3Jvd0hvdmVyXT1cInRydWVcIiBbdmFsdWVdPVwiaXRlbXNcIiBbc2Nyb2xsYWJsZV09XCJ0cnVlXCIgc2Nyb2xsSGVpZ2h0PVwiMzAwcHhcIlxuICAgIGNsYXNzPVwiaXRlbXMtdGFibGVcIiAqbmdJZj1cIml0ZW1zPy5sZW5ndGggPiAwO2Vsc2Ugbm9EYXRhQXZcIlxuICAgIChvblJvd1NlbGVjdCk9XCJyYWRpb1NlbGVjdGVkVmFsdWUgPSAkZXZlbnQ7c2VsZWN0VmFsdWUoKVwiIChvblJvd1Vuc2VsZWN0KT1cInJhZGlvU2VsZWN0ZWRWYWx1ZT0nJztzZWxlY3RWYWx1ZSgpXCI+XG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImhlYWRlclwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggKm5nSWY9XCJzaG93Q2hlY2tCb3hcIiBzdHlsZT1cIndpZHRoOiAzZW1cIj48L3RoPlxuICAgICAgICAgICAgPHRoICpuZ0lmPVwiIW5vQWN0aW9uc1wiPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb2JqIG9mIGl0ZW1PYmpcIj5cbiAgICAgICAgICAgICAgICA8dGggKm5nSWY9XCIhb2JqLmhpZGUgJiYgb2JqLnR5cGUgIT09ICdkcm9wZG93bidcIiBbcFNvcnRhYmxlQ29sdW1uXT1cIm9iai5rZXlcIlxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwib2JqLndpZHRoICsgJ2VtJ1wiPlxuICAgICAgICAgICAgICAgICAgICB7e29iai52YWx1ZX19IDxwLXNvcnRJY29uIFtmaWVsZF09XCJvYmoua2V5XCI+PC9wLXNvcnRJY29uPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoICpuZ0lmPVwib2JqLnR5cGUgPT09ICdkcm9wZG93bidcIiBbaW5uZXJIVE1MXT1cIm9iai52YWx1ZVwiPjwvdGg+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoICpuZ0lmPVwic2hvd0NoZWNrQm94XCIgc3R5bGU9XCJ3aWR0aDogM2VtXCI+XG4gICAgICAgICAgICAgICAgPHAtdGFibGVIZWFkZXJDaGVja2JveCAqbmdJZj1cIiFoaWRlSGVhZGVyQ2hlY2tCb3hcIj48L3AtdGFibGVIZWFkZXJDaGVja2JveD5cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGggKm5nSWY9XCIhbm9BY3Rpb25zXCI+PC90aD5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9iaiBvZiBpdGVtT2JqXCI+XG4gICAgICAgICAgICAgICAgPHRoICpuZ0lmPVwiIW9iai5oaWRlICYmICFub0hlYWRlckRyb3Bkb3duXCIgW3N0eWxlLndpZHRoXT1cIm9iai53aWR0aCArICdlbSdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24gKm5nSWY9XCJvYmoudHlwZSE9PSdtdWx0aS1zZWxlY3QnXCIgYXBwZW5kVG89XCJib2R5XCIgW2ZpbHRlcl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJpdGVtVGFibGUuZmlsdGVyKCRldmVudC52YWx1ZSA/ICRldmVudC52YWx1ZVtvYmoua2V5XSA6ICcnLCBvYmo/LmtleSwgJ2NvbnRhaW5zJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwiZmlsdGVyRHVwbGljYXRlcyhpdGVtcyxvYmoua2V5LCBvYmoua2V5U2V0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7J1NlYXJjaCBCeSAnICsgb2JqLnZhbHVlfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbkxhYmVsXT1cIm9iai5rZXlcIiBbc2hvd0NsZWFyXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9wLWRyb3Bkb3duPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC90cj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJib2R5XCIgbGV0LWl0ZW0gbGV0LXJvd0luZGV4PVwicm93SW5kZXhcIj5cbiAgICAgICAgPHRyIGNsYXNzPVwidGV4dC1jZW50ZXJcIiBbcFNlbGVjdGFibGVSb3ddPVwiaXRlbVwiIFtwU2VsZWN0YWJsZVJvd0Rpc2FibGVkXT1cIml0ZW0/LmRpc2FibGVDaGVja2JveFwiICpuZ0lmPVwiaXRlbVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtPy50ZW1wSWQ7ZWxzZSBuZXdJbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlZGl0SXRlbXMuaW5kZXhPZihpdGVtW3VuaXFLZXldKSA9PT0gLTE7ZWxzZSBzaG93SW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiIW5vQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtcmFkaW9CdXR0b24gY2xhc3M9XCJyYWRpby1idXR0b25cIiAqbmdJZj1cInNob3dSYWRpb0luUm93c1wiIG5hbWU9XCJncm91cG5hbWVcIiBbdmFsdWVdPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJyYWRpb1NlbGVjdGVkVmFsdWVcIiAob25DbGljayk9XCJzZWxlY3RWYWx1ZSgpXCI+PC9wLXJhZGlvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIW9ubHlEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBCdXR0b24gdHlwZT1cImJ1dHRvblwiIGljb249XCJwaSBwaS1wZW5jaWxcIiBjbGFzcz1cInVpLWJ1dHRvbi1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZWRpdFJvd0l0ZW1zKGl0ZW0pXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHBCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgaWNvbj1cInBpIHBpLXRyYXNoXCIgY2xhc3M9XCJ1aS1idXR0b24tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGVsZXRlSXRlbShpdGVtW3VuaXFLZXldKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJzaG93Q2hlY2tCb3hcIiBzdHlsZT1cIndpZHRoOiAzZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLXRhYmxlQ2hlY2tib3ggW2VzY2FwZV09XCJmYWxzZVwiIFtwVG9vbHRpcF09XCJpdGVtPy50b29sdGlwTXNnXCIgW3ZhbHVlXT1cIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpdGVtPy5kaXNhYmxlQ2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC10YWJsZUNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvYmogb2YgaXRlbU9ialwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFvYmouaGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cIm9iai5rZXlTZXQ7ZWxzZSBub1NldFwiIFtzdHlsZS53aWR0aF09XCJvYmoud2lkdGggKyAnZW0nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHNldCBvZiBpdGVtW29iaj8ua2V5XTtsZXQgc2V0SW54ID0gaW5kZXg7XCIgY2xhc3M9XCJzZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJ7e3NldH19XCIgY2xhc3M9XCJlbGxpcHNpcy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzZXR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgdGl0bGU9XCJBc3NpZ25lZSBpbmZvXCIgY2xhc3M9XCJwaSBwaS1pbmZvLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdEluZm8oaXRlbVtvYmo/LmtleVNldF1bc2V0SW54XSxpdGVtKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vU2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgW2NsYXNzLmxpbmtdPVwib2JqLmxpbmtcIiAqbmdJZj1cIm9iai50eXBlIT09J211bHRpLXNlbGVjdCcgJiYgb2JqLnR5cGUhPT0nZHJvcGRvd24nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvYmo/LmFjdGlvbiA/IHNlbGVjdExpbmsoaXRlbSwkZXZlbnQpIDogJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cIm9iai53aWR0aCArICdlbSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7b2JqPy5kYXRlID8gKGl0ZW1bb2JqPy5rZXldIHwgZGF0ZTogJ2RkIE1NTSB5eXl5LCBISDptbScpIDogaXRlbVtvYmo/LmtleV19fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cIm9iai50eXBlPT09J211bHRpLXNlbGVjdCdcIiBbc3R5bGUud2lkdGhdPVwib2JqLndpZHRoICsgJ2VtJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGl0ZW1bb2JqLmtleV1cIj57e29wdGlvbi5uYW1lfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwib2JqLnR5cGUgPT09ICdkcm9wZG93bidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNoYW5nZWRdPVwiaXRlbVtvYmoua2V5ICsgJyxwcmV2S2V5VmFsJ10gJiYgaXRlbVtvYmoua2V5ICsgJyxwcmV2S2V5VmFsJ10gIT09IGl0ZW1bb2JqLmtleV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cIm9iai53aWR0aCArICdlbSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duIChvbkNoYW5nZSk9XCJpdGVtW29iai5rZXldID0gJGV2ZW50Py5vcmlnaW5hbEV2ZW50Py50YXJnZXQ/LmlubmVyVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwicHJvZmlsZXNMaXN0XCIgKm5nSWY9XCJvYmoudHlwZT09PSdkcm9wZG93bidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tpdGVtW29iai5rZXldfX1cIiBbbmdNb2RlbF09XCJpdGVtW29iai5rZXldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7b2JqLmtleSArICcnICsgcm93SW5kZXh9fVwiIHJlcXVpcmVkPVwidHJ1ZVwiIFthdXRvV2lkdGhdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbmV3SW5wdXQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHBCdXR0b24gdHlwZT1cImJ1dHRvblwiIGljb249XCJwaSBwaS1jaGVja1wiIGNsYXNzPVwidWktYnV0dG9uLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZE5ld0l0ZW0oaXRlbSlcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBwQnV0dG9uIHR5cGU9XCJidXR0b25cIiBpY29uPVwicGkgcGktdGltZXNcIiBjbGFzcz1cInVpLWJ1dHRvbi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZVJvdyhpdGVtKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb2JqIG9mIGl0ZW1PYmo7bGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFvYmouaGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwib2JqLnR5cGUhPT0nbXVsdGktc2VsZWN0J1wiIFtzdHlsZS53aWR0aF09XCJvYmoud2lkdGggKyAnZW0nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImF1dG9HZW5lcmF0ZUlkICYmIG9iai5rZXkgPT09IHVuaXFLZXk7ZWxzZSBub3RBdXRvR2VuZXJUZW1wXCI+e3tpdGVtW3VuaXFLZXldfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vdEF1dG9HZW5lclRlbXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAoa2V5dXAuZW50ZXIpPVwiYWRkTmV3SXRlbShpdGVtKVwiICpuZ0lmPVwib2JqLnR5cGUhPSdkcm9wLWRvd24nXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e29iai5rZXkgKyAnJyArIGluZGV4fX1cIiBwSW5wdXRUZXh0IFsobmdNb2RlbCldPVwiaXRlbVtvYmoua2V5XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7J1BsZWFzZSBFbnRlciAnICsgb2JqLnZhbHVlfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24gW29wdGlvbnNdPVwib2JqLnZhbHVlcyB8fCBwcm9maWxlc0xpc3RcIiAqbmdJZj1cIm9iai50eXBlPT09J2Ryb3AtZG93bidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e29iai5rZXkgKyAnJyArIHJvd0luZGV4fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eydQbGVhc2UgRW50ZXIgJyArIG9iai52YWx1ZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwidHJ1ZVwiIFsobmdNb2RlbCldPVwiaXRlbVtvYmoua2V5XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uTGFiZWxdPVwib2JqLnZhbHVlcz8ubGVuZ3RoID4gMCA/ICdsYWJlbCcgOiAncHJvZmlsZU5hbWUnXCIgW2F1dG9XaWR0aF09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbz1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwib2JqLnR5cGU9PT0nbXVsdGktc2VsZWN0J1wiIFtzdHlsZS53aWR0aF09XCJvYmoud2lkdGggKyAnZW0nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtbXVsdGlTZWxlY3QgZmlsdGVyPVwidHJ1ZVwiIG11bHRpcGxlPVwidHJ1ZVwiIGFwcGVuZFRvPVwiYm9keVwiIGNoZWNrYm94PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cIm9iai52YWx1ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW1bb2JqLmtleV1cIiBvcHRpb25MYWJlbD1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtbXVsdGlTZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI3Nob3dJbnB1dD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gcEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWNvbj1cInBpIHBpLWNoZWNrXCIgY2xhc3M9XCJ1aS1idXR0b24tc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidXBkYXRlSXRlbShpdGVtKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHBCdXR0b24gdHlwZT1cImJ1dHRvblwiIGljb249XCJwaSBwaS10aW1lc1wiIGNsYXNzPVwidWktYnV0dG9uLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZWRpdENhbmNlbChpdGVtKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb2JqIG9mIGl0ZW1PYmo7bGV0IGZpcnN0ID0gZmlyc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFvYmouaGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwidW5pcUtleSA9PT0gb2JqPy5rZXlcIiBbc3R5bGUud2lkdGhdPVwib2JqLndpZHRoICsgJ2VtJ1wiPnt7aXRlbVtvYmo/LmtleV19fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJ1bmlxS2V5ICE9PSBvYmo/LmtleSAmJiBvYmoudHlwZSE9PSdtdWx0aS1zZWxlY3QnXCIgW3N0eWxlLndpZHRoXT1cIm9iai53aWR0aCArICdlbSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKGtleXVwLmVudGVyKT1cInVwZGF0ZUl0ZW0oaXRlbSlcIiAqbmdJZj1cIm9iai50eXBlIT0nZHJvcC1kb3duJ1wiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e29iai5rZXkgKyAnJyArIHJvd0luZGV4fX1cIiBwSW5wdXRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3snUGxlYXNlIEVudGVyICcgKyBvYmoudmFsdWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbVtvYmoua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duIFtvcHRpb25zXT1cIm9iai52YWx1ZXMgfHwgcHJvZmlsZXNMaXN0XCIgKm5nSWY9XCJvYmoudHlwZT09PSdkcm9wLWRvd24nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2l0ZW1bb2JqLmtleV19fVwiIGlkPVwie3tvYmoua2V5ICsgJycgKyByb3dJbmRleH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtW29iai5rZXldXCIgcmVxdWlyZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbkxhYmVsXT1cIm9iai52YWx1ZXM/Lmxlbmd0aCA+IDAgPyAnbGFiZWwnIDogJ3Byb2ZpbGVOYW1lJ1wiIFthdXRvV2lkdGhdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbz1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtZHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwib2JqLnR5cGU9PT0nbXVsdGktc2VsZWN0J1wiIFtzdHlsZS53aWR0aF09XCJvYmoud2lkdGggKyAnZW0nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtbXVsdGlTZWxlY3QgZmlsdGVyPVwidHJ1ZVwiIG11bHRpcGxlPVwidHJ1ZVwiIGFwcGVuZFRvPVwiYm9keVwiIGNoZWNrYm94PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cIm9iai52YWx1ZXNcIiBbKG5nTW9kZWwpXT1cIml0ZW1bb2JqLmtleV1cIiBvcHRpb25MYWJlbD1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtbXVsdGlTZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvdHI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbjwvcC10YWJsZT5cbjxkaXYgY2xhc3M9XCJwLWNvbC0xMlwiIFtuZ0NsYXNzXT1cInsndGV4dC1yaWdodCc6IGJ0bkNvbnRlbnRzPy5sZW5ndGggPiAxLCAndGV4dC1jZW50ZXInOiBidG5Db250ZW50cz8ubGVuZ3RoID09PSAxfVwiXG4gICAgKm5nSWY9XCJidG5Db250ZW50cz8ubGVuZ3RoID4gMFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGJ0biBvZiBidG5Db250ZW50c1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLXt7YnRuLnN0eWxlQ2xhc3N9fSBidG4te3tidG4ud2lkdGh9fVwiIHBCdXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBsYWJlbD1cInt7YnRuLmJ0bk5hbWV9fVwiIChjbGljayk9XCJidG4uY2FuY2VsID8gY2FuY2VsQ2hlY2soKSA6IHNhdmVJdGVtcygpXCI+PC9idXR0b24+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjbm9EYXRhQXY+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG5vLWRhdGEtY29udGVudFwiPlxuICAgICAgICBObyBEYXRhIGF2YWlsYWJsZVxuICAgIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAubGluayB7XG4gICAgICAgIGNvbG9yOiAjMTE2ZmJmO1xuICAgIH1cbiAgICAudWktc3RhdGUtaGlnaGxpZ2h0IHtcbiAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNldC1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmNjMzM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEN1c3RvbURhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHJhZGlvU2VsZWN0ZWRWYWx1ZSA9ICcnO1xuICBwdWJsaWMgbWVudXM6IGFueTtcbiAgQElucHV0KCkgcHVibGljIHVuaXFLZXkgPSAnJztcbiAgQElucHV0KCkgcHVibGljIGF1dG9HZW5lcmF0ZUlkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBrZXlPcHRpb25hbCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgc2hvd1JhZGlvSW5Sb3dzID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93Q2hlY2tCb3ggPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIG5vQWN0aW9ucyA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlU2VsZWN0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBvbmx5RGVsZXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBzb3J0T3JkZXIgPSAxO1xuICBASW5wdXQoKSBwdWJsaWMgc29ydEtleTogc3RyaW5nID0gdGhpcy51bmlxS2V5O1xuICBASW5wdXQoKSBwdWJsaWMgaGlkZUhlYWRlckNoZWNrQm94ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBidG5Db250ZW50czogYW55ID0ge307XG4gIEBJbnB1dCgpIHB1YmxpYyBub0hlYWRlckRyb3Bkb3duID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNldCBzZWxlY3Rpb25DaGFuZ2UodmFsOiBhbnkpIHtcbiAgICB0aGlzLml0ZW1zID0gWy4uLnRoaXMuaXRlbXMuZmlsdGVyKHggPT4geFt0aGlzLnVuaXFLZXldKV07XG4gICAgdGhpcy5hZGROZXdJdGVtcyA9IFtdO1xuICAgIHRoaXMuZWRpdENhbmNlbCgpO1xuICB9XG4gIEBJbnB1dCgpIHNldCB0YWJsZUxpc3QodmFsOiBhbnkpIHtcbiAgICBpZiAodGhpcy5yb3dJbngpIHtcbiAgICAgIHRoaXMuZWRpdENhbmNlbCgpO1xuICAgICAgdGhpcy5yb3dJbnggPSAnJztcbiAgICB9XG4gICAgaWYgKHRoaXMubmV3SXRlbSkge1xuICAgICAgY29uc3QgbmV3SW54ID0gdGhpcy5hZGROZXdJdGVtcy5maW5kSW5kZXgoeCA9PiB4W3RoaXMudW5pcUtleV0gPT09IHRoaXMubmV3SXRlbSk7XG4gICAgICBjb25zdCBpdGVtSW54ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgoeCA9PiB4W3RoaXMudW5pcUtleV0gPT09IHRoaXMubmV3SXRlbSk7XG4gICAgICBkZWxldGUgdGhpcy5pdGVtc1tpdGVtSW54XS50ZW1wSWQ7XG4gICAgICB0aGlzLmFkZE5ld0l0ZW1zLnNwbGljZShuZXdJbngsIDEpO1xuICAgICAgdGhpcy5uZXdJdGVtID0gJyc7XG4gICAgfVxuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbLi4udGhpcy5hZGROZXdJdGVtcywgLi4udmFsXTtcbiAgICAgIHRoaXMuY2hvb3Nlbkl0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoeCA9PiB4LmNob3Nlbik7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIHNldCB0YWJsZUtleXNMaXN0KHZhbDogYW55KSB7XG4gICAgdGhpcy5pdGVtT2JqID0gdmFsO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHRhYmxlUHJvZmlsZUxpc3QodmFsOiBhbnkpIHtcbiAgICB0aGlzLnByb2ZpbGVzTGlzdCA9IHZhbDtcbiAgfVxuICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkVmFsdWVFbWl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHVibGljIGNvbmZpcm1BZGQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY29uZmlybVVwZGF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3RlZExpbmtFbWl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHVibGljIGNvbmZpcm1EZWxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VEaWFsb2c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgc2F2ZUNob29zZW5WYWx1ZXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0SW5mb0VtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIHJvd09iaiA9IHt9O1xuICBwdWJsaWMgZWRpdEl0ZW1zOiBhbnkgPSBbXTtcbiAgcHVibGljIGNsb25lZEl0ZW1zOiBhbnkgPSB7fTtcbiAgcHVibGljIGl0ZW1zOiBhbnkgPSBbXTtcbiAgcHVibGljIGl0ZW1PYmo6IGFueSA9IFtdO1xuICBwdWJsaWMgcm93SW54ID0gJyc7XG4gIHB1YmxpYyBhZGROZXdJdGVtczogYW55ID0gW107XG4gIHB1YmxpYyBuZXdJdGVtID0gJyc7XG4gIHB1YmxpYyBjaG9vc2VuSXRlbXM6IGFueVtdID0gW107XG4gIHB1YmxpYyBwcm9jZXNzZXM6IGFueTtcbiAgcHVibGljIHByb2ZpbGVzTGlzdDogYW55ID0gW107XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zb3J0S2V5ID0gdGhpcy5zb3J0S2V5IHx8IHRoaXMudW5pcUtleTtcbiAgICB0aGlzLnNvcnRPcmRlciA9IHRoaXMuc29ydE9yZGVyIHx8IDE7XG4gICAgdGhpcy5pdGVtT2JqLmZvckVhY2goeCA9PiB7XG4gICAgICB0aGlzLnJvd09ialt4LmtleV0gPSAnJztcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE5ld0l0ZW0oaXRlbTogYW55ID0ge30pIHtcbiAgICBpZiAoIWl0ZW1bdGhpcy51bmlxS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKiBjb25zdCBjaGVja0FsbEZpZWxkcyA9IHRoaXMuY2hlY2tFbXB0eUZpZWxkcyhpdGVtKTtcbiAgICBpZiAoIWNoZWNrQWxsRmllbGRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAqL1xuICAgIHRoaXMubmV3SXRlbSA9IGl0ZW1bdGhpcy51bmlxS2V5XTtcbiAgICAvKiBjb25zdCB2YWxpZFByb2ZpbGUgPSB0aGlzLmRyb3Bkb3duVmFsaWRhdGlvbihpdGVtKTtcbiAgICBjb25zdCB2YWxpZEVtYWlsID0gdGhpcy5lbWFpbFZhbGlkYXRpb24oaXRlbSk7XG4gICAgaWYgKCF2YWxpZEVtYWlsIHx8ICF2YWxpZFByb2ZpbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9ICovXG4gICAgdGhpcy5jb25maXJtQWRkLmVtaXQoeyBpdGVtIH0pO1xuICB9XG5cbiAgZmlsdGVyRHVwbGljYXRlcyhpdGVtLCBrZXksIGtleVNldDogc3RyaW5nID0gJycpIHtcbiAgICBsZXQgbm9EdXBsaWNhdGVzID0gW107XG4gICAgaXRlbS5mb3JFYWNoKHggPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB4W2tleV07XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgbm9EdXBsaWNhdGVzID0gWy4uLm5vRHVwbGljYXRlcywgLi4udmFsdWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vRHVwbGljYXRlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGZpbHRlcmVkRHVwbGljYXRlcyA9IEFycmF5LmZyb20obmV3IFNldChub0R1cGxpY2F0ZXMpKTtcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZER1cGxpY2F0ZXMubWFwKHggPT4ge1xuICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICBvYmpba2V5XSA9IHg7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZERhdGE7XG4gIH1cblxuICBlbWFpbFZhbGlkYXRpb24oaXRlbTogYW55ID0ge30pOiBib29sZWFuIHtcbiAgICBjb25zdCBpc0VtYWlsID0gdGhpcy5pdGVtT2JqLmZpbmQoeCA9PiB4LmVtYWlsKTtcbiAgICBpZiAoaXNFbWFpbCAmJiBpc0VtYWlsWydrZXknXSkge1xuICAgICAgY29uc3QgZW1haWxWYWwgPSBpdGVtW2lzRW1haWxbJ2tleSddXTtcbiAgICAgIGNvbnN0IGVtYWlsUGF0dGVybiA9IC9eW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDR9JC87XG4gICAgICBpZiAoIWVtYWlsUGF0dGVybi50ZXN0KGVtYWlsVmFsKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZHJvcGRvd25WYWxpZGF0aW9uKGl0ZW06IGFueSA9IHt9KTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNQcm9maWwgPSBpdGVtWydwcm9maWxlTmFtZSddO1xuICAgIGlmIChpc1Byb2ZpbCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZWRpdENhbmNlbCh1bmlxS2V5Pzogc3RyaW5nKSB7XG4gICAgY29uc3Qga2V5ID0gdW5pcUtleSA/IHVuaXFLZXlbdGhpcy51bmlxS2V5XSA6IHRoaXMucm93SW54O1xuICAgIGNvbnN0IHJvd1RvQ2FuY2VsID0gdGhpcy5lZGl0SXRlbXMuaW5kZXhPZihrZXkpO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgoeCA9PiB4W3RoaXMudW5pcUtleV0gPT09IGtleSk7XG4gICAgdGhpcy5lZGl0SXRlbXMuc3BsaWNlKHJvd1RvQ2FuY2VsLCAxKTtcbiAgICB0aGlzLml0ZW1zW2luZGV4XSA9IHsgLi4udGhpcy5jbG9uZWRJdGVtc1trZXldIH07XG4gICAgdGhpcy5jbG9uZWRJdGVtc1trZXldID0ge307XG4gIH1cblxuICB1cGRhdGVJdGVtKGl0ZW06IGFueSA9IHt9KSB7XG4gICAgdGhpcy5yb3dJbnggPSBpdGVtW3RoaXMudW5pcUtleV07XG4gICAgLyogY29uc3QgY2hlY2tBbGxGaWVsZHMgPSB0aGlzLmNoZWNrRW1wdHlGaWVsZHMoaXRlbSk7XG4gICAgaWYgKCFjaGVja0FsbEZpZWxkcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZFByb2ZpbGUgPSB0aGlzLmRyb3Bkb3duVmFsaWRhdGlvbihpdGVtKTtcbiAgICBjb25zdCB2YWxpZEVtYWlsID0gdGhpcy5lbWFpbFZhbGlkYXRpb24oaXRlbSk7XG4gICAgaWYgKCF2YWxpZEVtYWlsIHx8ICF2YWxpZFByb2ZpbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9ICovXG4gICAgdGhpcy5jb25maXJtVXBkYXRlLmVtaXQoaXRlbSk7XG4gIH1cblxuICBjaGVja0VtcHR5RmllbGRzKGl0ZW06IGFueSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoaXRlbSk7XG4gICAgY29uc3QgY2hlY2tFbXB0eSA9IHZhbHVlcy5pbmRleE9mKCcnKTtcbiAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhpdGVtKVtjaGVja0VtcHR5XTtcbiAgICBpZiAoY2hlY2tFbXB0eSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmVSb3coaXRlbSkge1xuICAgIGNvbnN0IG5ld0lueCA9IHRoaXMuYWRkTmV3SXRlbXMuZmluZEluZGV4KHggPT4geC50ZW1wSWQgPT09IGl0ZW0udGVtcElkKTtcbiAgICBjb25zdCBpdGVtSW54ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgoeCA9PiB4LnRlbXBJZCA9PT0gaXRlbS50ZW1wSWQpO1xuICAgIHRoaXMuYWRkTmV3SXRlbXMuc3BsaWNlKG5ld0lueCwgMSk7XG4gICAgdGhpcy5pdGVtcy5zcGxpY2UoaXRlbUlueCwgMSk7XG4gIH1cblxuICBlZGl0Um93SXRlbXMoaXRlbTogYW55ID0ge30pIHtcbiAgICBjb25zdCB1bmlxS2V5ID0gdGhpcy51bmlxS2V5O1xuICAgIHRoaXMuZWRpdEl0ZW1zLnB1c2goaXRlbVt1bmlxS2V5XSk7XG4gICAgY29uc3QgY2xvbmVkID0gdGhpcy5pdGVtcy5maW5kKHggPT4geFt1bmlxS2V5XSA9PT0gaXRlbVt1bmlxS2V5XSk7XG4gICAgdGhpcy5jbG9uZWRJdGVtc1tpdGVtW3VuaXFLZXldXSA9IHsgLi4uY2xvbmVkIH07XG4gIH1cblxuICBkZWxldGVJdGVtKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpcm1EZWxldGUuZW1pdChpZCk7XG4gIH1cblxuICBnZXROZXh0R3JvdXBJZCgpIHtcbiAgICBsZXQgbWF4R3JvdXBJZCA9IDA7XG4gICAgbGV0IG5leHRHcm91cElkID0gMDtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goeCA9PiB7XG4gICAgICBpZiAoIWlzTmFOKHhbdGhpcy51bmlxS2V5XSkpIHtcbiAgICAgICAgaWYgKG1heEdyb3VwSWQgPCB4W3RoaXMudW5pcUtleV0pIHtcbiAgICAgICAgICBtYXhHcm91cElkID0geFt0aGlzLnVuaXFLZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgbmV4dEdyb3VwSWQgPSArbWF4R3JvdXBJZCArIDE7XG4gICAgcmV0dXJuIG5leHRHcm91cElkO1xuICB9XG5cbiAgYWRkTmV3KCkge1xuICAgIGNvbnN0IG9iajogYW55ID0geyAuLi50aGlzLnJvd09iaiB9O1xuICAgIG9iai50ZW1wSWQgPSB0aGlzLml0ZW1zLmxlbmd0aCArIDE7XG4gICAgaWYgKHRoaXMuYXV0b0dlbmVyYXRlSWQpIHtcbiAgICAgIG9ialt0aGlzLnVuaXFLZXldID0gdGhpcy5nZXROZXh0R3JvdXBJZCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5rZXlPcHRpb25hbCkge1xuICAgICAgb2JqW3RoaXMudW5pcUtleV0gPSBvYmoudGVtcElkO1xuICAgIH1cbiAgICB0aGlzLmFkZE5ld0l0ZW1zLnVuc2hpZnQob2JqKTtcbiAgICB0aGlzLml0ZW1zLnVuc2hpZnQob2JqKTtcbiAgfVxuXG4gIHNlbGVjdFZhbHVlKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZUVtaXQuZW1pdCh0aGlzLnJhZGlvU2VsZWN0ZWRWYWx1ZSk7XG4gIH1cblxuICBzZWxlY3RJbmZvKHNldDogYW55LCBpdGVtOiBhbnkpIHtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB7IC4uLml0ZW0sIC4uLnNldCB9O1xuICAgIHRoaXMuc2VsZWN0SW5mb0VtaXQuZW1pdChzZWxlY3RlZEl0ZW0pO1xuICB9XG5cbiAgc2VsZWN0TGluayhzZWxlY3RlZEl0ZW06IGFueSA9IHt9LCAkZXZlbnQ6IGFueSA9IHt9KSB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkTGlua0VtaXQuZW1pdChzZWxlY3RlZEl0ZW0pO1xuICB9XG5cbiAgc2F2ZUl0ZW1zKCkge1xuICAgIHRoaXMuc2F2ZUNob29zZW5WYWx1ZXMuZW1pdCh0aGlzLmNob29zZW5JdGVtcyk7XG4gIH1cblxuICBjYW5jZWxDaGVjaygpIHtcbiAgICB0aGlzLmNsb3NlRGlhbG9nLmVtaXQodHJ1ZSk7XG4gIH1cblxufVxuIl19