export const clamp = (min: any, num: any, max: any) => Math.min(Math.max(num, min), max);

let actualslideWidth: any = 0;

export default function calcSlideWidth() {
    for (let index = 0; index < checkFunctionsArray.length; index++) {
        const value = checkFunctionsArray[index]();
        if (value) {
            actualslideWidth = value;
            return value
        }
    }
    return actualslideWidth
};

const desktop = () => {
    if (window.innerWidth >= 1090) {
        return clamp (340, window.innerWidth * 0.252, 480)
    }
    return false
}
const tablet = () => {
    if (window.innerWidth >= 768) {
        return window.innerWidth * 0.325
    }
    return false
}
const bigPhone = () => {
    if (window.innerWidth >= 480) {
        return window.innerWidth * 0.475
    }
    return false
}
const phone = () => {
    if (window.innerWidth < 480) {
        return window.innerWidth * 0.93
    }
    return false
}

const checkFunctionsArray = [desktop, tablet, bigPhone, phone]