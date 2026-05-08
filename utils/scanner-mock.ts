export const Scanner = {
    addEventListener(type: 'scanned', cb: (scannedString: string) => void) {
        console.log('Added listener for scan')
        const intervalId = setInterval(() => {
            cb(randomBarCodeGenerator(16))
        }, 3000)

        return {
            cancel() {
                clearInterval(intervalId);
                console.log('Listening for scan is cancelled')
            }
        }
    }
}


function randomBarCodeGenerator(length: number) {
    const NUMBERS = '0123456789';

    let result = '';
    for(let i = 0; i < length; i++) {
        result += NUMBERS[Math.floor(Math.random() * NUMBERS.length)]
    }

    return result;
}