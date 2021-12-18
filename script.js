function fullYearall() {
    let date = new Date();
    let year = date.getUTCFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let fullYear = day + '/' + month + '/' + year;
    document.querySelector('#root').innerHTML = fullYear;

    function curenntDay() {
        let d = date.getDay() + 1;
        document.querySelector('#text').innerHTML = ConvertDays(d);
        // return d;
    }
    curenntDay()

    function ConvertDays(day) {
        if (day == 1)
            return 'Sunday';
        if (day == 2)
            return 'Monday';
        if (day == 3)
            return 'Tuesday';
        if (day == 4)
            return 'Wedensday';
        if (day == 5)
            return 'Thuresday';
        if (day == 6)
            return 'Friday';
        if (day == 7)
            return 'Saturday';

    }
}
fullYearall()

function ClockTime() {
    let date = new Date();
    let hours = date.getHours();
    let minuntes = date.getMinutes();
    let second = date.getSeconds();
    let Clock = hours + ':' + minuntes + ':' + second
    document.querySelector('#root2').innerHTML = Clock;
    setInterval(ClockTime, 1000);
}
ClockTime()