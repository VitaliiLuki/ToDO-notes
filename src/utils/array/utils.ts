/**
 * gets the biggest id in array
 * @param arr 
 * @param lvlDeep 
 */
export const getBiggestId = <T>(arr: Array<{id: number}>, lvlDeep?: number) => {
    let theBiggestNumber: number | undefined = undefined;
    for (let i = 0; i < arr.length; i++) {
        if (!theBiggestNumber) 
            {theBiggestNumber = arr[i].id;}

        else {
            theBiggestNumber = theBiggestNumber > arr[i].id ? theBiggestNumber : arr[i].id;
        }
    }

    return theBiggestNumber;
};