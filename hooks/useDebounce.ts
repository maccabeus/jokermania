import { Predicate } from "./useGetApiData";

const debounce = (waitTime: number = 1000, maxKeyStrokes: number = 3) => {

    let timerInterval: any = null;

    const debounceAction = (callback: Function, actionPredicate: Predicate) => {
        if (timerInterval) clearTimeout(timerInterval);

        if (actionPredicate && actionPredicate() === true) {
            timerInterval = setTimeout(() => {
                callback();
            }, waitTime);
        }
    }
    return debounceAction
}
const debounceOld = (waitTime: number = 2000, maxKeyStrokes: number = 3) => {

    let keyCount: number = 0;
    let timerInterval: any = null;

    const debounceAction = (callback: Function, actionPredicate: boolean = true) => {
        if (timerInterval) clearTimeout(timerInterval);
        keyCount += 1;
        console.log("key count", keyCount);
        if (actionPredicate) {
            timerInterval = setTimeout(() => {
                callback();
                /** reset keyCount */
                keyCount = 0;
                console.log("calling now count: ", keyCount);
            }, waitTime);
        }
    }
    return debounceAction
}

export default debounce;