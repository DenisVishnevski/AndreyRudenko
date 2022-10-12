import { swipeHandler } from "./swipeHandler";

let touchStartLocation: { x: number, y: number };
let touchEndLocation: { x: number, y: number };


export const handleTouchStart = (event: any) => {
    touchStartLocation = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
    };
}
export const handleTouchEnd = (event: any) => {
    touchEndLocation = {
        x: event.changedTouches[0].clientX,
        y: event.changedTouches[0].clientY
    };
    return swipeHandler(touchStartLocation, touchEndLocation);
}