export declare class ZipCode {
    private current;
    private valid;
    readonly zipCodeLength: number;
    private constructor();
    static createNew(zipCode?: string): ZipCode;
    updateCharacterWithZeroByIndex(index: number): void;
    private validate;
    private isValidZipCode;
    private isNumeric;
    private removeDash;
    isValid(): boolean;
    toString(): string;
}
//# sourceMappingURL=zipcode.d.ts.map