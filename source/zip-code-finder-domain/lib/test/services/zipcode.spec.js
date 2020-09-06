"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zipcode_1 = require("../../src/services/zipcode");
test('creating invalid zip code object', function () {
    var zipCodeNonNumeric = zipcode_1.ZipCode.createNew('abcdefgh');
    var zipCodeLongLength = zipcode_1.ZipCode.createNew('999999999');
    var zipCodeShortLength = zipcode_1.ZipCode.createNew('9999999');
    var zipCodeShortUndefined = zipcode_1.ZipCode.createNew(undefined);
    expect(zipCodeNonNumeric.isValid()).toBe(false);
    expect(zipCodeLongLength.isValid()).toBe(false);
    expect(zipCodeShortLength.isValid()).toBe(false);
    expect(zipCodeShortUndefined.isValid()).toBe(false);
});
test('creating valid zip code object', function () {
    var zipCodeWithDash = zipcode_1.ZipCode.createNew('14020-525');
    var zipCodeWithoutDash = zipcode_1.ZipCode.createNew('14020525');
    expect(zipCodeWithDash.isValid()).toBe(true);
    expect(zipCodeWithoutDash.isValid()).toBe(true);
});
test('updating all characters with zeros', function () {
    var zipCode = zipcode_1.ZipCode.createNew('14020-525');
    var index = zipCode.zipCodeLength - 1;
    while (index >= 0) {
        zipCode.updateCharacterWithZeroByIndex(index);
        index--;
    }
    expect(zipCode.isValid()).toBe(true);
    expect(zipCode.toString()).toBe('00000000');
});
test('updating last character with zero', function () {
    var zipCode = zipcode_1.ZipCode.createNew('14020-525');
    var lastIndex = zipCode.zipCodeLength - 1;
    zipCode.updateCharacterWithZeroByIndex(lastIndex);
    expect(zipCode.isValid()).toBe(true);
    expect(zipCode.toString()).toBe('14020520');
});
//# sourceMappingURL=zipcode.spec.js.map