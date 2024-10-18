import MockData from '../database/MockData.mjs';

const rentalData = MockData.MockRental;
const rentalDetailsData = MockData.MockRentalDetails;

function countCustomer(rentalID) {
    return rentalDetailsData.filter((rental) => rental.RentalID === rentalID).length;
}

export const resolveRentalById = (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(400).send('Invalid ID supplied');
    }
    const rentalIndex = rentalData.findIndex((rental) => rental.RentalID === parseInt(id));
    if (rentalIndex === -1) {
        return res.status(404).send('Rental not found');
    }

    return rentalIndex;
}

export const RentalController = {
    // get all rentals
    get: (req, res) => {
        const { RentalID, RoomID, RentalDate, CheckOutDate, Cost } = req.query;
        let rentals = rentalData;

        // check valid value
        if (RentalID && isNaN(RentalID)) {
            return res.status(400).send('Invalid RentalID supplied');
        }
        if (RoomID && isNaN(RoomID)) {
            return res.status(400).send('Invalid RoomID supplied');
        }
        if (Cost && isNaN(Cost)) {
            return res.status(400).send('Invalid Cost supplied');
        }

        // filter rentals
        if (RentalID) {
            rentals = rentals.filter((rental) => rental.RentalID === parseInt(RentalID));
        }
        if (RoomID) {
            rentals = rentals.filter((rental) => rental.RoomID === parseInt(RoomID));
        }
        if (RentalDate) {
            rentals = rentals.filter((rental) => rental.RentalDate === RentalDate);
        }
        if (CheckOutDate) {
            rentals = rentals.filter((rental) => rental.CheckOutDate === CheckOutDate);
        }
        if (Cost) {
            rentals = rentals.filter((rental) => rental.Cost === parseInt(Cost));
        }

        // return result
        if (rentals.length === 0) {
            return res.status(404).send('Rental not found');
        }
        return res.status(200).send(rentals);
    },

    // create a new rental
    post: (req, res) =>{
        const { RoomID, RentalDate, CheckOutDate, Cost } = req.body;
        if (!RoomID || !RentalDate || !CheckOutDate || !Cost) {
            return res.status(400).send('Invalid data supplied');
        }

        const rentalID = rentalData.length + 1;
        rentalData.push({
            RentalID: rentalID,
            RoomID: RoomID,
            RentalDate: RentalDate,
            CheckOutDate: CheckOutDate,
            Cost: Cost,
        });

        return res.status(201).send(rentalData);
    },

    // update a rental
    patch: (req, res) => {
        const {body, RentalIndex} = req;
        roomData[RentalIndex] = {...rentalData[RentalIndex], ...body};
        return res.status(200).send(rentalData[RentalIndex]);
    },

    // get number of customers in a room by rental ID
    getNumberOfCustomer: (req, res) => {
        const { id } = req.params;
        const rentalIndex = resolveRentalById(req, res);
        const numberOfCustomer = countCustomer(rentalData[rentalIndex].RentalID);
        return res.status(200).send(numberOfCustomer.toString());
    }
};