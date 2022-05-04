export const getTimefromDate = (date: Date): string => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    return secondsToHmsFrench(diff / 1000);
}

function secondsToHmsFrench(d: number) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " heure " : " heures ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " seconde" : " secondes") : "";
    return hDisplay + mDisplay + sDisplay;
}

export function secondsToHms(d: number) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 9 ? h : (h > 0 ? '0' + h : '00');
    var mDisplay = m > 0 ? m : (m > 0 ? '0' + m : '00');
    var sDisplay = s > 0 ? s : (s > 0 ? '0' + s : '00');
    return hDisplay + ':' + mDisplay + ':' + sDisplay;
}