interface User {
    id: number,
    name: string,
    surname: string,
    patronymic: string,
    email: string,
    number: string
}

interface Company {
    id: number,
    name: string,
    legalAddress: string,
    city: string,
    logoName: string,
    logoID: number,
    sroScanName: string,
    sroID: number,
    userID: number
}

interface Employer {
    id: number,
    name: string,
    positionName: string,
    signatureID: number,
    companyID: number
}

interface License {
    id: number,
    name: string,
    userID: number,
    order: number,
    companyID: number
}

interface Equipment {
    id: number,
    name: string,
    serialNumber: string,
    verificationDate: string,
    verificationNumber: string,
    verificationScanName: string,
    verificationScanID: number,
    userID: number
}

interface Inspection {
    id: number,
    name?: string,
    startDate?: string,
    endDate?: string,
    address?: string,
    buildingType?: string,
    companyID?: number,
    mainPhotoName?: string,
    mainPhotoID?: number,
    status?: string,
    reportName?: string,
    script?: string,
    result?: string,
    categoriesCount?: number
}

interface InspectionFile {
    id: number,
    userID: number,
    name: string,
    type: string,
    inspectionID: number,
    creationDate: string
}

interface Categories {
    id: number,
    name: string,
    inspectionID: number,
    status: string,
    condition: string,
    recommendations: string,
    inspectedPhotoCount: number
}

interface Photos {
    userID: number,
    CategoryID: number,
    planID: number,
    place: string,
    date: string,
    url: URL,
    recommendation: string,
    defectsCoords: JSON,
    defectsEliminations: JSON,
    status: string
}

interface Plan {
    id: number,
    userID: number,
    name: string,
    inspectionID: number
}

export {User, Plan, Company, Photos, License, Employer, InspectionFile, Inspection, Equipment, Categories}
