import { AbstractControl, ValidatorFn } from "@angular/forms";

export function FirstLetterUppercase() : ValidatorFn {
    return (control: AbstractControl) => {
        const value = <string>control.value;
        if(!value) return;
        if(value.length == 0) return;

        const firstLetter = value[0];
        if(firstLetter !== firstLetter.toUpperCase()){
            return {
                FirstLetterUppercase: {
                    message:'The first Letter must be uppercase'
                }
            }
        }

        return;
    }
}