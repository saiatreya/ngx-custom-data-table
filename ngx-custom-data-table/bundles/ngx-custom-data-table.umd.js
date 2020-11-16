(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('primeng/radiobutton'), require('primeng/table'), require('primeng/dropdown'), require('primeng/checkbox'), require('primeng/multiselect'), require('@angular/common'), require('@angular/forms'), require('primeng/tooltip'), require('primeng/button')) :
    typeof define === 'function' && define.amd ? define('ngx-custom-data-table', ['exports', '@angular/core', 'primeng/radiobutton', 'primeng/table', 'primeng/dropdown', 'primeng/checkbox', 'primeng/multiselect', '@angular/common', '@angular/forms', 'primeng/tooltip', 'primeng/button'], factory) :
    (global = global || self, factory(global['ngx-custom-data-table'] = {}, global.ng.core, global.radiobutton, global.table, global.dropdown, global.checkbox, global.multiselect, global.ng.common, global.ng.forms, global.tooltip, global.button));
}(this, (function (exports, core, radiobutton, table, dropdown, checkbox, multiselect, common, forms, tooltip, button) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            this.selectedValueEmit = new core.EventEmitter();
            this.confirmAdd = new core.EventEmitter();
            this.confirmUpdate = new core.EventEmitter();
            this.selectedLinkEmit = new core.EventEmitter();
            this.confirmDelete = new core.EventEmitter();
            this.closeDialog = new core.EventEmitter();
            this.saveChoosenValues = new core.EventEmitter();
            this.selectInfoEmit = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'ngx-custom-data-table',
                        template: "\n    <div class=\"p-col-12 margin-top-24\" *ngIf=\"!noActions && !onlyDelete\">\n    <button class=\"button-primary\" pButton type=\"button\" label=\"+ Add\"\n        (click)=\"addNew()\"></button>\n</div>\n<p-table #itemTable [sortField]=\"sortKey\" [sortOrder]=\"sortOrder\" [selectionMode]=\"enableSelection ? 'single' : ''\"\n    [(selection)]=\"choosenItems\" [rowHover]=\"true\" [value]=\"items\" [scrollable]=\"true\" scrollHeight=\"300px\"\n    class=\"items-table\" *ngIf=\"items?.length > 0;else noDataAv\"\n    (onRowSelect)=\"radioSelectedValue = $event;selectValue()\" (onRowUnselect)=\"radioSelectedValue='';selectValue()\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th *ngIf=\"showCheckBox\" style=\"width: 3em\"></th>\n            <th *ngIf=\"!noActions\">Actions</th>\n            <ng-container *ngFor=\"let obj of itemObj\">\n                <th *ngIf=\"!obj.hide && obj.type !== 'dropdown'\" [pSortableColumn]=\"obj.key\"\n                    [style.width]=\"obj.width + 'em'\">\n                    {{obj.value}} <p-sortIcon [field]=\"obj.key\"></p-sortIcon>\n                </th>\n                <th *ngIf=\"obj.type === 'dropdown'\" [innerHTML]=\"obj.value\"></th>\n            </ng-container>\n        </tr>\n        <tr>\n            <th *ngIf=\"showCheckBox\" style=\"width: 3em\">\n                <p-tableHeaderCheckbox *ngIf=\"!hideHeaderCheckBox\"></p-tableHeaderCheckbox>\n            </th>\n            <th *ngIf=\"!noActions\"></th>\n            <ng-container *ngFor=\"let obj of itemObj\">\n                <th *ngIf=\"!obj.hide && !noHeaderDropdown\" [style.width]=\"obj.width + 'em'\">\n                    <p-dropdown *ngIf=\"obj.type!=='multi-select'\" appendTo=\"body\" [filter]=\"true\"\n                        (onChange)=\"itemTable.filter($event.value ? $event.value[obj.key] : '', obj?.key, 'contains')\"\n                        [options]=\"filterDuplicates(items,obj.key, obj.keySet)\"\n                        placeholder=\"{{'Search By ' + obj.value}}\"\n                        [optionLabel]=\"obj.key\" [showClear]=\"true\">\n                    </p-dropdown>\n                </th>\n            </ng-container>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-item let-rowIndex=\"rowIndex\">\n        <tr class=\"text-center\" [pSelectableRow]=\"item\" [pSelectableRowDisabled]=\"item?.disableCheckbox\" *ngIf=\"item\">\n            <ng-container *ngIf=\"!item?.tempId;else newInput\">\n                <ng-container *ngIf=\"editItems.indexOf(item[uniqKey]) === -1;else showInput\">\n                    <td *ngIf=\"!noActions\">\n                        <p-radioButton class=\"radio-button\" *ngIf=\"showRadioInRows\" name=\"groupname\" [value]=\"item\"\n                            [(ngModel)]=\"radioSelectedValue\" (onClick)=\"selectValue()\"></p-radioButton>\n                        <button\n                            *ngIf=\"!onlyDelete\"\n                            pButton type=\"button\" icon=\"pi pi-pencil\" class=\"ui-button-info\"\n                            (click)=\"editRowItems(item)\"></button>\n                        <button pButton\n                            type=\"button\" icon=\"pi pi-trash\" class=\"ui-button-danger\"\n                            (click)=\"deleteItem(item[uniqKey])\"></button>\n                    </td>\n                    <td *ngIf=\"showCheckBox\" style=\"width: 3em\">\n                        <p-tableCheckbox [escape]=\"false\" [pTooltip]=\"item?.tooltipMsg\" [value]=\"item\"\n                            [disabled]=\"item?.disableCheckbox\">\n                        </p-tableCheckbox>\n                    </td>\n                    <ng-container *ngFor=\"let obj of itemObj\">\n                        <ng-container *ngIf=\"!obj.hide\">\n                            <td *ngIf=\"obj.keySet;else noSet\" [style.width]=\"obj.width + 'em'\">\n                                <div *ngFor=\"let set of item[obj?.key];let setInx = index;\" class=\"set-content\">\n                                    <span title=\"{{set}}\" class=\"ellipsis-content\">\n                                        {{set}}\n                                    </span>\n                                    <i title=\"Assignee info\" class=\"pi pi-info-circle\"\n                                        (click)=\"selectInfo(item[obj?.keySet][setInx],item)\"></i>\n                                </div>\n                            </td>\n                            <ng-template #noSet>\n                                <td [class.link]=\"obj.link\" *ngIf=\"obj.type!=='multi-select' && obj.type!=='dropdown'\"\n                                    (click)=\"obj?.action ? selectLink(item,$event) : ''\"\n                                    [style.width]=\"obj.width + 'em'\">\n                                    {{obj?.date ? (item[obj?.key] | date: 'dd MMM yyyy, HH:mm') : item[obj?.key]}}</td>\n                                <td *ngIf=\"obj.type==='multi-select'\" [style.width]=\"obj.width + 'em'\">\n                                    <div *ngFor=\"let option of item[obj.key]\">{{option.name}}</div>\n                                </td>\n                                <td *ngIf=\"obj.type === 'dropdown'\"\n                                    [class.changed]=\"item[obj.key + ',prevKeyVal'] && item[obj.key + ',prevKeyVal'] !== item[obj.key]\"\n                                    [style.width]=\"obj.width + 'em'\">\n                                    <p-dropdown (onChange)=\"item[obj.key] = $event?.originalEvent?.target?.innerText\"\n                                        [options]=\"profilesList\" *ngIf=\"obj.type==='dropdown'\"\n                                        placeholder=\"{{item[obj.key]}}\" [ngModel]=\"item[obj.key]\"\n                                        id=\"{{obj.key + '' + rowIndex}}\" required=\"true\" [autoWidth]=\"false\"\n                                        appendTo=\"body\">\n                                    </p-dropdown>\n                                </td>\n                            </ng-template>\n                        </ng-container>\n                    </ng-container>\n                </ng-container>\n            </ng-container>\n            <ng-template #newInput>\n                <td>\n                    <button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\"\n                        (click)=\"addNewItem(item)\"></button>\n                    <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"\n                        (click)=\"removeRow(item)\"></button>\n                </td>\n                <ng-container *ngFor=\"let obj of itemObj;let index = index\">\n                    <ng-container *ngIf=\"!obj.hide\">\n                        <td *ngIf=\"obj.type!=='multi-select'\" [style.width]=\"obj.width + 'em'\">\n                            <div *ngIf=\"autoGenerateId && obj.key === uniqKey;else notAutoGenerTemp\">{{item[uniqKey]}}\n                            </div>\n                            <ng-template #notAutoGenerTemp>\n                                <input (keyup.enter)=\"addNewItem(item)\" *ngIf=\"obj.type!='drop-down'\" type=\"text\"\n                                    id=\"{{obj.key + '' + index}}\" pInputText [(ngModel)]=\"item[obj.key]\"\n                                    placeholder=\"{{'Please Enter ' + obj.value}}\">\n                                <p-dropdown [options]=\"obj.values || profilesList\" *ngIf=\"obj.type==='drop-down'\"\n                                    id=\"{{obj.key + '' + rowIndex}}\"\n                                    placeholder=\"{{'Please Enter ' + obj.value}}\"\n                                    required=\"true\" [(ngModel)]=\"item[obj.key]\"\n                                    [optionLabel]=\"obj.values?.length > 0 ? 'label' : 'profileName'\" [autoWidth]=\"false\"\n                                    appendTo=\"body\">\n                                </p-dropdown>\n                            </ng-template>\n                        </td>\n                        <td *ngIf=\"obj.type==='multi-select'\" [style.width]=\"obj.width + 'em'\">\n                            <p-multiSelect filter=\"true\" multiple=\"true\" appendTo=\"body\" checkbox=\"true\"\n                                [options]=\"obj.values\"\n                                [(ngModel)]=\"item[obj.key]\" optionLabel=\"name\">\n                            </p-multiSelect>\n                        </td>\n                    </ng-container>\n                </ng-container>\n            </ng-template>\n            <ng-template #showInput>\n                <td>\n                    <button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\"\n                        (click)=\"updateItem(item)\"></button>\n                    <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"\n                        (click)=\"editCancel(item)\"></button>\n                </td>\n                <ng-container *ngFor=\"let obj of itemObj;let first = first\">\n                    <ng-container *ngIf=\"!obj.hide\">\n                        <td *ngIf=\"uniqKey === obj?.key\" [style.width]=\"obj.width + 'em'\">{{item[obj?.key]}}</td>\n                        <td *ngIf=\"uniqKey !== obj?.key && obj.type!=='multi-select'\" [style.width]=\"obj.width + 'em'\">\n                            <input (keyup.enter)=\"updateItem(item)\" *ngIf=\"obj.type!='drop-down'\" type=\"text\"\n                                id=\"{{obj.key + '' + rowIndex}}\" pInputText\n                                placeholder=\"{{'Please Enter ' + obj.value}}\"\n                                [(ngModel)]=\"item[obj.key]\">\n                            <p-dropdown [options]=\"obj.values || profilesList\" *ngIf=\"obj.type==='drop-down'\"\n                                placeholder=\"{{item[obj.key]}}\" id=\"{{obj.key + '' + rowIndex}}\"\n                                [(ngModel)]=\"item[obj.key]\" required=\"true\"\n                                [optionLabel]=\"obj.values?.length > 0 ? 'label' : 'profileName'\" [autoWidth]=\"false\"\n                                appendTo=\"body\">\n                            </p-dropdown>\n                        </td>\n                        <td *ngIf=\"obj.type==='multi-select'\" [style.width]=\"obj.width + 'em'\">\n                            <p-multiSelect filter=\"true\" multiple=\"true\" appendTo=\"body\" checkbox=\"true\"\n                                [options]=\"obj.values\" [(ngModel)]=\"item[obj.key]\" optionLabel=\"name\">\n                            </p-multiSelect>\n                        </td>\n                    </ng-container>\n                </ng-container>\n            </ng-template>\n        </tr>\n    </ng-template>\n</p-table>\n<div class=\"p-col-12\" [ngClass]=\"{'text-right': btnContents?.length > 1, 'text-center': btnContents?.length === 1}\"\n    *ngIf=\"btnContents?.length > 0\">\n    <ng-container *ngFor=\"let btn of btnContents\">\n        <button class=\"button-{{btn.styleClass}} btn-{{btn.width}}\" pButton type=\"button\"\n            label=\"{{btn.btnName}}\" (click)=\"btn.cancel ? cancelCheck() : saveItems()\"></button>\n    </ng-container>\n</div>\n<ng-template #noDataAv>\n    <div class=\"text-center no-data-content\">\n        No Data available\n    </div>\n</ng-template>\n  ",
                        styles: ["\n    .radio-button {\n      margin-right: 10px;\n    }\n    .link {\n        color: #116fbf;\n    }\n    .ui-state-highlight {\n        .link {\n            color: #fff;\n        }\n    }\n    .set-content {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        i {\n            font-size: 24px;\n            color: #ffcc33;\n        }\n    }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NgxCustomDataTableComponent.ctorParameters = function () { return []; };
        NgxCustomDataTableComponent.propDecorators = {
            uniqKey: [{ type: core.Input }],
            autoGenerateId: [{ type: core.Input }],
            keyOptional: [{ type: core.Input }],
            showRadioInRows: [{ type: core.Input }],
            showCheckBox: [{ type: core.Input }],
            noActions: [{ type: core.Input }],
            enableSelection: [{ type: core.Input }],
            onlyDelete: [{ type: core.Input }],
            sortOrder: [{ type: core.Input }],
            sortKey: [{ type: core.Input }],
            hideHeaderCheckBox: [{ type: core.Input }],
            btnContents: [{ type: core.Input }],
            noHeaderDropdown: [{ type: core.Input }],
            selectionChange: [{ type: core.Input }],
            tableList: [{ type: core.Input }],
            tableKeysList: [{ type: core.Input }],
            tableProfileList: [{ type: core.Input }],
            selectedValueEmit: [{ type: core.Output }],
            confirmAdd: [{ type: core.Output }],
            confirmUpdate: [{ type: core.Output }],
            selectedLinkEmit: [{ type: core.Output }],
            confirmDelete: [{ type: core.Output }],
            closeDialog: [{ type: core.Output }],
            saveChoosenValues: [{ type: core.Output }],
            selectInfoEmit: [{ type: core.Output }]
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
            { type: core.NgModule, args: [{
                        declarations: [NgxCustomDataTableComponent],
                        imports: [
                            radiobutton.RadioButtonModule,
                            table.TableModule,
                            tooltip.TooltipModule,
                            dropdown.DropdownModule,
                            checkbox.CheckboxModule,
                            multiselect.MultiSelectModule,
                            common.CommonModule,
                            forms.FormsModule,
                            button.ButtonModule
                        ],
                        exports: [NgxCustomDataTableComponent]
                    },] }
        ];
        return NgxCustomDataTableModule;
    }());

    exports.NgxCustomDataTableComponent = NgxCustomDataTableComponent;
    exports.NgxCustomDataTableModule = NgxCustomDataTableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-custom-data-table.umd.js.map
