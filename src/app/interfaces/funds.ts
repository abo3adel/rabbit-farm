export default interface Funds {
    src: string; // sell | buy
    type: string;
    seller: string;
    value: number;
    weight: number;
    date: string;
    info?: string;
    count?: number;
    sum?: boolean;
}