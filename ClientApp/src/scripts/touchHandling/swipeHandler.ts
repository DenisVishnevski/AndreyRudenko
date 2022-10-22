let isHorizontalSwipe: boolean;
let horizontalSwipeLength: number;
let verticalSwipeLength: number;

export function swipeHandler(touchStartLocation: { x: number, y: number }, touchEndLocation: { x: number, y: number }) {
    isHorizontalSwipe = false;
    horizontalSwipeLength = Math.abs(touchStartLocation.x - touchEndLocation.x);
    verticalSwipeLength = Math.abs(touchStartLocation.y - touchEndLocation.y);

    if (horizontalSwipeLength > verticalSwipeLength) {
        isHorizontalSwipe = true;
    }
    if (horizontalSwipeLength > 40 || verticalSwipeLength > 40) {
        return fuswipeDirectionChecking(touchStartLocation, touchEndLocation)
    }
    return 0
}
function fuswipeDirectionChecking(touchStartLocation: { x: number }, touchEndLocation: { x: number }) {

    for (let index = 0; index < checkFunctionsArray.length; index++) {
        const direction = checkFunctionsArray[index](touchStartLocation, touchEndLocation);
        if (direction) {
            return direction
        }
    }
    return 0
}

const rightSwipe = (touchStartLocation: { x: number }, touchEndLocation: { x: number }) => {
    if (isHorizontalSwipe && touchStartLocation.x > touchEndLocation.x) {
        return 1
    }
    return 0
}
const leftSwipe = (touchStartLocation: { x: number }, touchEndLocation: { x: number }) => {
    if (isHorizontalSwipe && touchStartLocation.x < touchEndLocation.x) {
        return -1
    }
    return 0
}

const checkFunctionsArray = [rightSwipe, leftSwipe]