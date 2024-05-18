import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Ignacio',
        lastname: 'Giacotto',
        address: {
            country: 'USA',
            city: 'New York',
            street: '123 Main St',
            number: 123
        }
    },
    company: {
        name: 'Acme',
        fiscalNumber: 3123123
    },
    items: [
        {
        id: 1,
        product: 'CPU Intel I9',
        price: 100,
        quantity: 1
        },
        {
        id: 2,
        product: 'CPU AMD 7800X',
        price: 200,
        quantity: 4
        },
        {
        id: 3,
        product: 'Monitor Asus',
        price: 400,
        quantity: 1
        },
    ]
}