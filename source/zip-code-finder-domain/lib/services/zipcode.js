"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCode = void 0;
class ZipCode {
    constructor(zipCode) {
        this.zipCodeLength = 8;
        this.current = zipCode;
        this.valid = false;
        this.index = this.zipCodeLength - 1;
    }
    static createNew(zipCode) {
        return new ZipCode(zipCode == null ? '' : zipCode)
            .validate();
    }
    // changes string to array in order to update an character
    updateCharacterWithZeroByIndex() {
        if (this.hasNextIndex()) {
            let temp = Array.from(this.current);
            temp[this.index] = '0';
            this.current = temp.join('');
        }
    }
    nextIndex() {
        if (this.hasNextIndex()) {
            this.index--;
        }
    }
    hasNextIndex() {
        return this.index >= 0;
    }
    // validate zip code and return object
    validate() {
        this.removeDash();
        this.isValidZipCode();
        return this;
    }
    // updates 'valid' property based on the current string
    isValidZipCode() {
        if (this.current.length == this.zipCodeLength && this.isNumeric(this.current)) {
            this.valid = true;
        }
        else {
            this.valid = false;
        }
    }
    isNumeric(zipCode) {
        return !isNaN(parseInt(zipCode));
    }
    removeDash() {
        this.current = this.current.replace('-', '');
    }
    isValid() {
        return this.valid;
    }
    toString() {
        return this.current;
    }
}
exports.ZipCode = ZipCode;
//# sourceMappingURL=zipcode.js.map