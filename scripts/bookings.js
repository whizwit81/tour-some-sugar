import { getBookings, getBands, getVenues } from "./database.js"

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()


document.addEventListener (
    "click",
    (clickEvent) => {
        const bookingClicked = clickEvent.target

        if (bookingClicked.dataset.type === "bookings") {
            let bookedBandID= bookingClicked.dataset.bandid
        
            for (const band of bands) {
                if (parseInt(bookedBandID) === band.id){
                    window.alert(`${band.bandname} was formed in ${band.yearFormed}. They have ${band.memberCount} members and they're genre is ${band.genre}`)
                }

            }
        }
    }
)


//trying to find the venue for the show

const findVenue = (booking, allVenues) => {
    let showLocation = null

    for (const venue of venues) {
        if (venue.id === booking.venueID ) {
            showLocation = venue.name
        }
    }

    return showLocation
}

const findBand = (booking, allBands) => {
    let bookedBand = null

    for (const band of bands) {
        if (band.id === booking.bandID ) {
            bookedBand = band.bandname
        }
    }

    return bookedBand
}


// similar to orders
export const Bookings = () => {

   let bookingHTML = `<div>`

    for (const booking of bookings) {
        let band = findBand(booking, bands)
        let venue = findVenue(booking, venues)

        bookingHTML += `<div class = "bookings" data-type="bookings" data-bandid=${booking.bandID} >${band} are playing at ${venue} on ${booking.datebooked}</div>`
        
    }

    bookingHTML += `</div>`

    return bookingHTML
}

