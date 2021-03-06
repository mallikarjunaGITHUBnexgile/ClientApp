import { AbstractControl, FormGroup } from "@angular/forms";

export function CustomValidators(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}



export function CheckingDate(date : string) {
    //throw new Error("Function not implemented.");
    const todaysDate=new Date();
    return date;
    
}

