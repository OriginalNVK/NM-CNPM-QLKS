import MockData from '../database/MockData.mjs';

const bookingData = MockData.MockBooking;
const bookingDetailsData = MockData.MockBookingDetails;

function countCustomer(BookingID) {
    return bookingDetailsData.filter((booking) => booking.BookingID === BookingID).length;
}

export const resolveBookingById = (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(400).send('Invalid ID supplied');
    }
    const bookingIndex = bookingData.findIndex((booking) => booking.BookingID === parseInt(id));
    if (bookingIndex === -1) {
        return res.status(404).send('booking not found');
    }

    return bookingIndex;
}

export const BookingController = {
    // get all bookings
    get: (req, res) => {
        const { BookingID, RoomID, BookingDate, CheckOutDate, Cost } = req.query;
        let bookings = bookingData;

        // check valid value
        if (BookingID && isNaN(BookingID)) {
            return res.status(400).send('Invalid BookingID supplied');
        }
        if (RoomID && isNaN(RoomID)) {
            return res.status(400).send('Invalid RoomID supplied');
        }
        if (Cost && isNaN(Cost)) {
            return res.status(400).send('Invalid Cost supplied');
        }

        // filter bookings
        if (BookingID) {
            bookings = bookings.filter((booking) => booking.BookingID === parseInt(BookingID));
        }
        if (RoomID) {
            bookings = bookings.filter((booking) => booking.RoomID === parseInt(RoomID));
        }
        if (BookingDate) {
            bookings = bookings.filter((booking) => booking.BookingDate === BookingDate);
        }
        if (CheckOutDate) {
            bookings = bookings.filter((booking) => booking.CheckOutDate === CheckOutDate);
        }
        if (Cost) {
            bookings = bookings.filter((booking) => booking.Cost === parseInt(Cost));
        }

        // return result
        if (bookings.length === 0) {
            return res.status(404).send('booking not found');
        }
        return res.status(200).send(bookings);
    },

    // create a new booking
    post: (req, res) =>{
        const { RoomID, BookingDate, CheckOutDate, Cost } = req.body;
        if (!RoomID || !BookingDate || !CheckOutDate || !Cost) {
            return res.status(400).send('Invalid data supplied');
        }

        const BookingID = bookingData.length + 1;
        bookingData.push({
            BookingID: BookingID,
            RoomID: RoomID,
            BookingDate: BookingDate,
            CheckOutDate: CheckOutDate,
            Cost: Cost,
        });

        return res.status(201).send(bookingData);
    },

    // update a booking
    patch: (req, res) => {
        const {body, bookingIndex} = req;
        roomData[bookingIndex] = {...bookingData[bookingIndex], ...body};
        return res.status(200).send(bookingData[bookingIndex]);
    },

    // get number of customers in a room by booking ID
    getNumberOfCustomer: (req, res) => {
        const { id } = req.params;
        const bookingIndex = resolvebookingById(req, res);
        const numberOfCustomer = countCustomer(bookingData[bookingIndex].BookingID);
        return res.status(200).send(numberOfCustomer.toString());
    }
};