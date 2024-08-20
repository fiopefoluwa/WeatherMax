const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const extractDayFromNum = (num) => {
    if (num < 7) return days[num];
    return '';
};

export default extractDayFromNum;
