import {Product} from '@prisma/client'

export type product = {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    views: number;
    images: string[];
    categoryId: number;
}