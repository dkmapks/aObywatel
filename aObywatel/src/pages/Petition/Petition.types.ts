enum PetitionSymbol {
    PETITION = 'PETITION',
    PETITION_MULTIPLE = 'PETITIONW',
}

enum PetitionStatus {
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED',
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    CLOSED = 'CLOSED',
}

export interface Petition {
    id: string,
    title: string,
    description: string,
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
    endDate?: number,
    considerationResponse?: string,
}