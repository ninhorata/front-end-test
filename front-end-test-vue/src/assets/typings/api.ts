import type { AddressTyping } from "./general"
import type { CompanyDropdownListItemTyping, CompanyOnContactTyping, ContactTyping } from "./user"

// The API typings match the data structure from the backend; normally we will change the id for a full object
export interface ApiCompleteAddressTypeTyping extends AddressTyping {
    __typename: string
}

export interface ApiCompleteCompanyDropdownListItemTyping extends CompanyDropdownListItemTyping {
    __typename: string
}

export interface ApiCompleteCompanyOnVenueUsertTyping extends Omit<CompanyOnContactTyping, 'companyId'> {
    __typename: string
    company: ApiCompleteCompanyDropdownListItemTyping
}

export interface ApiCompleteContactTyping extends Omit<ContactTyping, 'address' | 'companyJobs'> {
    __typename: string
    address: ApiCompleteAddressTypeTyping | null
    companyJobs?: ApiCompleteCompanyOnVenueUsertTyping[]
}
