"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCode = void 0;
var ZipCode = /** @class */ (function () {
    function ZipCode(zipCode) {
        this.zipCodeLength = 8;
        this.current = zipCode;
        this.valid = false;
    }
    ZipCode.createNew = function (zipCode) {
        return new ZipCode(zipCode == null ? '' : zipCode)
            .validate();
    };
    // changes string to array in order to update an character
    ZipCode.prototype.updateCharacterWithZeroByIndex = function (index) {
        var temp = Array.from(this.current);
        temp[index] = '0';
        this.current = temp.join('');
    };
    // validate zip code and return object
    ZipCode.prototype.validate = function () {
        this.removeDash();
        this.isValidZipCode();
        return this;
    };
    // updates 'valid' property based on the current string
    ZipCode.prototype.isValidZipCode = function () {
        if (this.current.length == this.zipCodeLength && this.isNumeric(this.current)) {
            this.valid = true;
        }
        else {
            this.valid = false;
        }
    };
    ZipCode.prototype.isNumeric = function (zipCode) {
        return !isNaN(parseInt(zipCode));
    };
    ZipCode.prototype.removeDash = function () {
        this.current = this.current.replace('-', '');
    };
    ZipCode.prototype.isValid = function () {
        return this.valid;
    };
    ZipCode.prototype.toString = function () {
        return this.current;
    };
    return ZipCode;
}());
exports.ZipCode = ZipCode;
//# sourceMappingURL=zipcode.js.map