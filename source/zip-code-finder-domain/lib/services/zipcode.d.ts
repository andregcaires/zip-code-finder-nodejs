export declare class ZipCode {
    private current;
    private valid;
    private index;
    readonly zipCodeLength: number;
    private constructor();
    static createNew(zipCode?: string): ZipCode;
    updateCharacterWithZeroByIndex(): void;
    nextIndex(): void;
    hasNextIndex(): boolean;
    private validate;
    private isValidZipCode;
    private isNumeric;
    private removeDash;
    isValid(): boolean;
    toString(): string;
}
//# sourceMappingURL=zipcode.d.ts.map