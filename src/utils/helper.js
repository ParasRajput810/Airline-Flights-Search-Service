
function datevalidation(arrivalDate , departuredate){
    let convertedArrivalDate = new Date(arrivalDate);
    let converteddeparturedate = new Date(departuredate);
    return convertedArrivalDate > converteddeparturedate;
}

module.exports = {datevalidation};