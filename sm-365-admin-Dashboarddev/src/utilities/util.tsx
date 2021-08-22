export const randomString = (len: number, charSet: string) => {
    charSet = charSet || 'abcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}

export const getWindowDimensions = () => {
    const hasWindow = typeof window !== 'undefined';
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
        width,
        height,
    };
}