"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Cismvm = class Cismvm extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        length: 3,
        id: 1,
        db2: { columnName: 'MVM', dataType: 'VAR', dataLength: 3, nullable: 'N' },
    }),
    __metadata("design:type", String)
], Cismvm.prototype, "mvm", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        length: 30,
        db2: { columnName: 'NAZEV', dataType: 'VARCHAR', dataLength: 30, dataPrecision: undefined, dataScale: 0, nullable: 'Y' },
    }),
    __metadata("design:type", String)
], Cismvm.prototype, "nazev", void 0);
Cismvm = __decorate([
    repository_1.model({ settings: { idInjection: false, db2: { schema: 'DB2INST1', table: 'CISMVM' } } }),
    __metadata("design:paramtypes", [Object])
], Cismvm);
exports.Cismvm = Cismvm;
//# sourceMappingURL=cismvm.model.js.map