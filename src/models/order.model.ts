export interface Order {
    id: number;
    createedAt: string;
    address: string;
    receiver: string;
    contact: string;
    bookTitle: string;
    totalQuantity: number;
    totalPrice: number;
}