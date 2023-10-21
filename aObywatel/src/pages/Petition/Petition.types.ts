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
    title: string,
    description: string,
    signedBy: string[],
    targetSignatures: number,
    symbol: PetitionSymbol.PETITION
    | PetitionSymbol.PETITION_MULTIPLE,
    id: string,
    location?: string,
    creationDate: Date,
    endDate: Date,
    tags: string[],
    status: PetitionStatus,
}