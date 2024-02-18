const database = {
bands: [{
        id: 1,
        bandname: "The Funky Monkeys",
        memberCount: 4,
        genre: "Funk",
        yearFormed: 2005
    },
    {
        id: 2,
        bandname: "Banana Splitz",
        memberCount: 3,
        genre: "Pop",
        yearFormed: 2010
    },
    {
        id: 3,
        bandname: "The Polka Dots",
        memberCount: 5,
        genre: "Polka",
        yearFormed: 1998
    },
    {
        id: 4,
        bandname: "Screaming Pineapples",
        memberCount: 6,
        genre: "Rock",
        yearFormed: 1987
    },
    {
        id: 5,
        bandname: "The Quirky Quokkas",
        memberCount: 4,
        genre: "Indie",
        yearFormed: 2015
    }
],

venues: [{
    id: 1,
    name:"Groovy Hall",
    address:"123 funky street",
    sqft: 5000,
    maxoccupancy: 300
}, {
    id: 2,
    name:"Rockin' Arena",
    address:"456 Guitar Avenue",
    sqft: 10000,
    maxoccupancy: 800
}, {
    id: 3,
    name:"The Git-ar",
    address:"456 Git-ar Avenue",
    sqft: 8000,
    maxoccupancy: 600
}],

bookings: [{
    bookingID: 1,
    bandID: 5,
    venueID: 1,
    datebooked: "Jan 1, 2025"
},{
    bookingID: 2,
    bandID: 4,
    venueID: 1,
    datebooked: "Jan 1, 2025"
},{
    bookingID: 3,
    bandID: 3,
    venueID: 2,
    datebooked: "Jan 2, 2025"    
},{
    bookingID: 4,
    bandID: 2,
    venueID: 3,
    datebooked: "Jan 2, 2025"
},{
    bookingID: 5,
    bandID: 1,
    venueID: 3,
    datebooked: "Jan 3, 2025"      
},{
    bookingID: 6,
    bandID: 2,
    venueID: 3,
    datebooked: "Jan 3, 2025"
},{
    bookingID: 7,
    bandID: 1,
    venueID: 1,
    datebooked: "Jan 3, 2025"
},{
    bookingID: 8,
    bandID: 3,
    venueID: 1,
    datebooked: "Jan 4, 2025"              

}]
}



export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

