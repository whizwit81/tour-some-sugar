import { getBands, getBookings, getVenues } from "./database.js"

const bands = getBands()


export const Bands = () => {
    
    let bandHTML = "<div>"
    
    for (const band of bands) {
        bandHTML += `<div class = "band" data-type="band" data-bandID="${band.id}">${band.bandname}</div>`
    }
    
    bandHTML += "</div>"
    return bandHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const bandClicked = clickEvent.target
        
        if (bandClicked.dataset.type === "band"){
            
            const bandId = bandClicked.dataset.bandid
            
            
            let venueNames = []

            const venues = getVenues()
            const bookings = getBookings()
            
            for (const booking of bookings) {
                if ( parseInt(bandId) === booking.bandID) {
                    const bookingVenue = venues.find(venue =>venue.id === booking.venueID)
                        venueNames.push(bookingVenue.name)

                    
                }
            }
            window.alert(`This venue has the following bands booked: ${venueNames}`)
        }    
    }
)