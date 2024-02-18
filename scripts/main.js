import { Venues } from "./venues.js"
import { Bands } from "./bands.js"
import { Bookings } from "./bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<div class = "title">
<h1>Tour Some Sugar</h1>
</div>

    <section class="bookings">
        <h2>Bookings</h2>
        ${Bookings()}
    </section>

    <div class= "venue_band">   
        <section class="venues">
            <h2>Venues</h2>
            ${Venues()}
        </section>


        <section class="bands">
            <h2>Bands</h2>
            ${Bands()}
            </section>
    </div>       

`

mainContainer.innerHTML = applicationHTML