import formatDistanceToNow from "date-fns/formatDistanceToNow";

export const numberWithCommas = (number) => {
    return number?.toLocaleString('en-US');
};

export const sliceWordAndAddEllipse = (word) => {
    if (word?.length <= 15) {
        return word;
    } else {
        return word?.slice(0, 15) + "....";
    }
}

export const formatTimeDifference = (dateString) => {
    const createdAtDate = new Date(dateString);
    let timeDifference = formatDistanceToNow(createdAtDate, { addSuffix: true });

    timeDifference = timeDifference.replace(/^about\s+/i, '');

    return timeDifference;
    // return formatDistanceToNow(createdAtDate, { addSuffix: true });
}  

export const formatStartDate = (startDate) => {
    const [year, month] = startDate.split('-');
    const formattedDate = new Date(`${year}-${month}-01`);
    
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    return `${monthNames[formattedDate.getMonth()]} ${formattedDate.getFullYear()}`;
};  

export const months = [
    { name: 'January', number: '01' },
    { name: 'February', number: '02' },
    { name: 'March', number: '03' },
    { name: 'April', number: '04' },
    { name: 'May', number: '05' },
    { name: 'June', number: '06' },
    { name: 'July', number: '07' },
    { name: 'August', number: '08' },
    { name: 'September', number: '09' },
    { name: 'October', number: '10' },
    { name: 'November', number: '11' },
    { name: 'December', number: '12' },
];