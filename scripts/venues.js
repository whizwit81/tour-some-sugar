import { getBands, getBookings, getVenues } from "./database.js"

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()



document.addEventListener(
    "click",
    (clickEvent) => {
        const venueClicked = clickEvent.target
            const bandArray =  []

            if (venueClicked.dataset.type === "venue"){

            const venueId = venueClicked.dataset.id
            
            for (const booking of bookings) {
                if ( parseInt(venueId) === booking.venueID) {
                    const neededBandID = booking.bandID

                    for(const band of bands) {
                        if (neededBandID === band.id){
                        bandArray.push(band.bandname)
                    }
                    
                    
                }
            }
        }    
        window.alert(`This venue has the following bands booked: ${bandArray}`)
    }
}
)








export const Venues = () => {
    let html = "<div>"

    for (const venue of venues) {
        html += `<div class ="venue" data-type="venue" data-id="${venue.id}" data-venuename="${venue.name}">${venue.name}</div>`
    }

    html += "</div>"
    
    return html
}
    
