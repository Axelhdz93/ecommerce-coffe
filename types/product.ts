export type ProductType = {
    id: number;
    documentId: string; // En Strapi v5, documentId es un string identificador único.
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeature: boolean;
    taste: string;
    origin: string;
    price: number;
    
    images: {
        id: number;
        documentId: string;
        url: string;
        alternativeText?: string; 
    }[]; 
    
    category: {
        id: number;
        documentId: string;
        slug: string;
        categoryName: string;
    } | null; // Puede ser null si el producto no tiene categoría asignada
};
