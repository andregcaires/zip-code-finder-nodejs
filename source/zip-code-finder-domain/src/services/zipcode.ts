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

    public updateCharacterWithZeroByIndex(index: number): void {

        /*
        this.current = this.current.substring(0, index) 
            + '0' 
            + this.current.substring(index + 1);
            */

        let temp = Array.from(this.current);
        temp[index] = '0';

        this.current = temp.join('');

    }

    private validate(): ZipCode {

        this.removeDash();

        this.isValidZipCode();

        return this;
    }

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
