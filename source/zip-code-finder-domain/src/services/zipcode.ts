export class ZipCode {

    private current: string;
    private valid: boolean;
    public readonly zipCodeLength: number = 8;

    private constructor(zipCode: string) {

        this.current = zipCode;
        this.valid = false;
    }

    public static createNew(zipCode?: string): ZipCode {

        return new ZipCode(zipCode == null ? '' : zipCode)
            .validate();
    }

    // changes string to array in order to update an character
    public updateCharacterWithZeroByIndex(index: number): void {

        let temp = Array.from(this.current);
        temp[index] = '0';

        this.current = temp.join('');

    }

    // validate zip code and return object
    private validate(): ZipCode {

        this.removeDash();

        this.isValidZipCode();

        return this;
    }

    // updates 'valid' property based on the current string
    private isValidZipCode(): void {

        if (this.current.length == this.zipCodeLength && this.isNumeric(this.current)) {

            this.valid = true;

        } else {

            this.valid = false;
        }
    }

    private isNumeric(zipCode: string): boolean {

        return !isNaN(parseInt(zipCode));
    }

    private removeDash(): void {

        this.current = this.current.replace('-', '');
    }

    public isValid(): boolean {

        return this.valid;
    }

    public toString(): string {
        
        return this.current;
    }
}
