import { validationResult, matchedData } from 'express-validator';
import MockData from '../database/MockData.mjs';

const roomData = MockData.MockRoom;
const roomType = ['A', 'B', 'C'];

export const resolveRoomById = (req, res, next) => {
    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(400).send('Invalid ID supplied');
    }
    const roomIndex = roomData.findIndex((room) => room.RoomID === parseInt(id));
    if (roomIndex === -1) {
        return res.status(404).send('Room not found');
    }

    req.roomIndex = roomIndex;
    next();
};

export const RoomController = {
    get: (req, res) =>{
        const { RoomID, RoomType, Price, RoomStatus } = req.query;
        let rooms = roomData;

        //check valid value
        if(RoomType && !roomType.includes(RoomType)) {
            return res.status(400).send('Invalid RoomType supplied');
        }
        if(RoomID && isNaN(RoomID)) {
            return res.status(400).send('Invalid RoomID supplied');
        }
        if(Price && isNaN(Price)) {
            return res.status(400).send('Invalid Price supplied');
        }
        if(RoomStatus && !['In Use', 'Empty'].includes(RoomStatus)) {
            return res.status(400).send('Invalid RoomStatus supplied');
        }
        
        //filter rooms
        if (RoomID) {
            rooms = rooms.filter((room) => room.RoomID === parseInt(RoomID));
        }
        if (RoomType) {
            rooms = rooms.filter((room) => room.RoomType === RoomType);
        }
        if (Price) {
            rooms = rooms.filter((room) => room.Price === parseInt(Price));
        }
        if (RoomStatus) {
            rooms = rooms.filter((room) => room.RoomStatus === RoomStatus);
        }        

        //return result
        if(rooms.length === 0) {
            return res.status(404).send('Room not found');
        }
        return res.status(200).send(rooms);    
    },

    post: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.array());
        }
        const data = matchedData(req);
        const newRoom = new MockData.Room(data.RoomID, data.RoomType, data.Price, data.RoomStatus, data.Des);
        roomData.push(newRoom);
        return res.status(201).send(newRoom);    
    },

    put: (req, res) => {
        const {body, roomIndex} = req;
        roomData[roomIndex] = body;
        return res.status(200).send(roomData[roomIndex]);
    },

    patch: (req, res) => {
        const {body, roomIndex} = req;
        roomData[roomIndex] = {...roomData[roomIndex], ...body};
        return res.status(200).send(roomData[roomIndex]);
    },

    delete: (req, res) => {
        const {roomIndex} = req;
        roomData.splice(roomIndex, 1);
        return res.status(204).send();
    }
}