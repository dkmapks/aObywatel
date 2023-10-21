import { Location } from "../../components/map/Map"

export enum PetitionSymbol {
    PETITION = 'PETITION',
    PETITION_MULTIPLE = 'PETITIONW',
}

export enum PetitionStatus {
    SENT = 'SENT',
    PENDING = "PENDING",
    DROPPED = "DROPPED",
}

export interface Petition {
    id: string,
    title: string,
    /**
     * End-user readable content.
     */
    description: string,
    /**
     * Actual law-complying content.
     */
    content: string,
    /**
     * Response of petition's destination.
     */
    response: string,
    /**
     * Whos to receive given paper. Usually some kind of office or bureau.
     */
    recipient: string,

    signedBy: string[],
    creationDate: number,
    
    status: PetitionStatus,

    author: string,
    authorId: string,

    tags?: string[],

    parliament?: {
        id: string,
        symbol: PetitionSymbol.PETITION | PetitionSymbol.PETITION_MULTIPLE,
    }
    targetSignatures?: number,

    location?: string,
    coordinates?: Location,

    endDate?: number,
    considerationResponse?: string,
}