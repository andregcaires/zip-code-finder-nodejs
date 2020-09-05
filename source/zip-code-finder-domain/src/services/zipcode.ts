export class ZipCode {

    private current: string;
    private valid: boolean;
    public readonly zipCodeLength: number = 8;

    private constructor(zipCode: string) {

        this.current = zipCode;
    }

    public static createNew(zipCode: string): ZipCode {

        return new ZipCode(zipCode).validate();
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

        return isNaN(parseInt(zipCode));
    }

    private removeDash(): void {

        this.current.replace('-', '');
    }

    public isValid(): boolean {

        return this.valid;
    }
}
