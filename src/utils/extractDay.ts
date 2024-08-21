const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const extractDayFromNum = (num : number) => {
    if (num < 7) return days[num];
    return '';
};

export default extractDayFromNum;
