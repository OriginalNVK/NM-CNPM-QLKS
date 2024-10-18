class Room{
    constructor(_RoomID, _RoomType, _Price, _RoomStatus, _Des){
        this.RoomID = _RoomID;
        this.RoomType = _RoomType;
        this.Price = _Price;
        this.RoomStatus = _RoomStatus;
        this.Des = _Des;
    }
};

class Customer{
    constructor(CustomerID, CustomerName, Addess, CitizenCard, Type){
        this.CustomerID = CustomerID;
        this.CustomerName = CustomerName;
        this.Addess = Addess;
        this.CitizenCard = CitizenCard;
        this.Type = Type;
    }
};

class Invoice{
    constructor(InvoiceID, TotalCost, Representator){
        this.InvoiceID = InvoiceID;
        this.TotalCost = TotalCost;
        this.Representator = Representator;
    }
};

class InvoiceDetails{
    constructor(InvoiceID, RentalID){
        this.InvoiceID = InvoiceID;
        this.RentalID = RentalID;
    }
};

class Rental{
    constructor(RentalID, RoomID, RentalDate, CheckOutDate, Cost){
        this.RentalID = RentalID;
        this.RoomID = RoomID;
        this.RentalDate = RentalDate;
        this.CheckOutDate = CheckOutDate;
        this.Cost = Cost;
    }
};

class RentalDetails{
    constructor(RentalID, CustomerID){
        this.RentalID = RentalID;
        this.CustomerID = CustomerID;
    }
};

const MockRoom = [
    {
        RoomID: 101,
        RoomType: 'A',
        Price: 150,
        RoomStatus: 'In Use',
        Des: '',
    },
    {
        RoomID: 102,
        RoomType: 'B',
        Price: 170,
        RoomStatus: 'In Use',
        Des: '',
    },
    {
        RoomID: 103,
        RoomType: 'C',
        Price: 200,
        RoomStatus: 'Empty',
        Des: '',
    },
    {
        RoomID: 104,
        RoomType: 'A',
        Price: 150,
        RoomStatus: 'Empty',
        Des: '',
    },
    {
        RoomID: 105,
        RoomType: 'B',
        Price: 170,
        RoomStatus: 'Empty',
        Des: '',
    },
    {
        RoomID: 106,
        RoomType: 'C',
        Price: 200,
        RoomStatus: 'Empty',
        Des: '',
    },
    {
        RoomID: 201,
        RoomType: 'A',
        Price: 150,
        RoomStatus: 'Empty',
        Des: '',
    },
    {
        RoomID: 202,
        RoomType: 'B',
        Price: 170,
        RoomStatus: 'Empty',
        Des: '',
    },
    {
        RoomID: 203,
        RoomType: 'C',
        Price: 200,
        RoomStatus: 'In Use',
        Des: '',
    },
];

const MockCustomer = [
    {
        CustomerID: 1,
        CustomerName: 'Huy',
        Addess: 'bcons bee, Binh Duong',
        CitizenCard: '066204006779',
        Type: 'dosmetic',
    },
    {
        CustomerID: 2,
        CustomerName: 'Ty',
        Addess: 'KTX khu B, Thu Duc',
        CitizenCard: '066204006778',
        Type: 'dosmetic',
    },
    {
        CustomerID: 3,
        CustomerName: 'Trinh',
        Addess: 'Quan 10, HCM',
        CitizenCard: '066204006777',
        Type: 'dosmetic',
    },
    {
        CustomerID: 4,
        CustomerName: 'Lebron James',
        Addess: 'Los Angeles, USA',
        CitizenCard: '',
        Type: 'Foreign',
    }
];

const MockInvoice = [
    {
        InvoiceID: 1,
        TotalCost: 300,
        Representator: 1,
    },
    {
        InvoiceID: 2,
        TotalCost: 510,
        Representator: 2,
    },
];

const MockInvoiceDetails = [
    {
        InvoiceID: 1,
        RentalID: 1,
    },
    {
        InvoiceID: 2,
        RentalID: 2,
    },
]

const MockRental = [
    {
        RentalID: 1,
        RoomID: 101,
        RentalDate: '2024-10-15',
        CheckOutDate: '2024-10-16',
        Cost: 300,
    },
    {
        RentalID: 2,
        RoomID: 102,
        RentalDate: '2024-10-15',
        CheckOutDate: '2024-10-16',
        Cost: 340,
    }
];

const MockRentalDetails = [
    {
        RentalID: 1,
        CustomerID: 1,
    },
    {
        RentalID: 1,
        CustomerID: 3,
    },
    {
        RentalID: 2,
        CustomerID: 2,
    },
    {
        RentalID: 2,
        CustomerID: 4,
    }
];

const MockData = {
    Room,
    Customer,
    Invoice,
    InvoiceDetails,
    Rental,
    RentalDetails,
    MockRoom,
    MockCustomer,
    MockInvoice,
    MockInvoiceDetails,
    MockRental,
    MockRentalDetails,
};

export default MockData;