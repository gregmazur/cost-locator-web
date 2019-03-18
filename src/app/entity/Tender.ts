export class Tender {
    id: string;
    procurementMethod: string;
    status: string;
    owner: string;
    description: string;
    title: string;
    tenderID: string;
    date: string;
    dateModified: string;

    currency: string;
    amount: number;
    valueAddedTaxIncluded: boolean;

    mfo: string;
    officeName: string;
}