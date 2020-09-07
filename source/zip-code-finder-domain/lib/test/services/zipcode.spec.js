"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const { ZipCode } = require('../../src/services/zipcode')
const zipcode_1 = require("../../src/services/zipcode");
test('creating invalid zip code object', () => {
    let zipCodeNonNumeric = zipcode_1.ZipCode.createNew('abcdefgh');
    let zipCodeLongLength = zipcode_1.ZipCode.createNew('999999999');
    let zipCodeShortLength = zipcode_1.ZipCode.createNew('9999999');
    let zipCodeShortUndefined = zipcode_1.ZipCode.createNew(undefined);
    expect(zipCodeNonNumeric.isValid()).toBe(false);
    expect(zipCodeLongLength.isValid()).toBe(false);
    expect(zipCodeShortLength.isValid()).toBe(false);
    expect(zipCodeShortUndefined.isValid()).toBe(false);
});
test('creating valid zip code object', () => {
    let zipCodeWithDash = zipcode_1.ZipCode.createNew('14020-525');
    let zipCodeWithoutDash = zipcode_1.ZipCode.createNew('14020525');
    expect(zipCodeWithDash.isValid()).toBe(true);
    expect(zipCodeWithoutDash.isValid()).toBe(true);
});
test('updating all characters with zeros', () => {
    let zipCode = zipcode_1.ZipCode.createNew('14020-525');
    while (zipCode.hasNextIndex()) {
        zipCode.updateCharacterWithZeroByIndex();
        zipCode.nextIndex();
    }
    expect(zipCode.isValid()).toBe(true);
    expect(zipCode.toString()).toBe('00000000');
});
test('updating last character with zero', () => {
    let zipCode = zipcode_1.ZipCode.createNew('14020-525');
    zipCode.updateCharacterWithZeroByIndex();
    expect(zipCode.isValid()).toBe(true);
    expect(zipCode.toString()).toBe('14020520');
});
//# sourceMappingURL=zipcode.spec.js.map