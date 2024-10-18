export class Room{
    constructor(_RoomID, _RoomType, _Price, _Des){
        this.RoomID = _RoomID;
        this.RoomType = _RoomType;
        this.Price = _Price;
        this.Des = _Des;
    }
}

export const MockRoom = [
    {
        RoomID: 101,
        RoomType: 'A',
        Price: 150,
        Des: '',
    },
    {
        RoomID: 102,
        RoomType: 'B',
        Price: 170,
        Des: '',
    },
    {
        RoomID: 103,
        RoomType: 'C',
        Price: 200,
        Des: '',
    },
    {
        RoomID: 104,
        RoomType: 'A',
        Price: 150,
        Des: '',
    },
    {
        RoomID: 105,
        RoomType: 'B',
        Price: 170,
        Des: '',
    },
    {
        RoomID: 106,
        RoomType: 'C',
        Price: 200,
        Des: '',
    },
    {
        RoomID: 201,
        RoomType: 'A',
        Price: 150,
        Des: '',
    },
    {
        RoomID: 202,
        RoomType: 'B',
        Price: 170,
        Des: '',
    },
    {
        RoomID: 203,
        RoomType: 'C',
        Price: 200,
        Des: '',
    },
];

class Customer{
    constructor(_Name, _Phone, _CCCD, _Address){
        this.Name = _Name;
        this.Phone = _Phone;
        this.CCCD = _CCCD;
        this.Address = _Address;
    }
};

export const MockCustomer = [
    new Customer('Nguyen Van A', '0123456789', '066204006779', 'Ha Noi'),
    new Customer('Nguyen Van B', '0123456789', '066204006778', 'Ha Noi'),
    new Customer('Nguyen Van C', '0123456789', '066204006777', 'Ha Noi'),
];
