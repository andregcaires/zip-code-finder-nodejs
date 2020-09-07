import { ZipCode } from '../../src/services/zipcode';

test('creating invalid zip code object', () => {

    let zipCodeNonNumeric = ZipCode.createNew('abcdefgh');
    let zipCodeLongLength = ZipCode.createNew('999999999');
    let zipCodeShortLength = ZipCode.createNew('9999999');
    let zipCodeShortUndefined = ZipCode.createNew(undefined);

    expect(zipCodeNonNumeric.isValid()).toBe(false);
    expect(zipCodeLongLength.isValid()).toBe(false);
    expect(zipCodeShortLength.isValid()).toBe(false);
    expect(zipCodeShortUndefined.isValid()).toBe(false);

});

test('creating valid zip code object', () => {

    let zipCodeWithDash = ZipCode.createNew('14020-525');
    let zipCodeWithoutDash = ZipCode.createNew('14020525');

    expect(zipCodeWithDash.isValid()).toBe(true);
    expect(zipCodeWithoutDash.isValid()).toBe(true);

});

test('updating all characters with zeros', () => {

    let zipCode = ZipCode.createNew('14020-525');

    while (zipCode.hasNextIndex()) {

        zipCode.updateCharacterWithZeroByIndex();
        
        zipCode.nextIndex();
    }

    expect(zipCode.isValid()).toBe(true);
    expect(zipCode.toString()).toBe('00000000');

});

test('updating last character with zero', () => {

    let zipCode = ZipCode.createNew('14020-525');

    zipCode.updateCharacterWithZeroByIndex();

    expect(zipCode.isValid()).toBe(true);
    expect(zipCode.toString()).toBe('14020520');

});
