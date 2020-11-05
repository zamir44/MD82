const {
    parseISO,
    format
} = require('date-fns/fp');

module.exports = {

    dateDisplay: (input) => {
        const formatter = format('MMM dd, yyyy');
        const date = input instanceof Date ? input : parseISO(input);
        return formatter(date);
    }

}