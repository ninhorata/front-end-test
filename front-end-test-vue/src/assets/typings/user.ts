import type { IriTyping, IdTyping, UuidTyping, AddressTyping, ImageTyping, NoteTyping } from "./general"

// Not exported because used to create other typings, should not be used on its own
interface VenueUserBasicTyping {
    iri: IriTyping
    id: IdTyping
    fullName: string
    displayName: string
    initials: string
    email: string
    phoneCountryPrefix?: string
    phoneNumber?: string
}

// Not exported because used to create other typings, should not be used on its own
interface UserTyping extends VenueUserBasicTyping {
    iri: IriTyping
    id: IdTyping
    constellId: UuidTyping
    fullName: string
    displayName: string
    isEmployee: boolean
    initials: string
    address: AddressTyping | null
    image?: ImageTyping | null
    coverImage?: ImageTyping | null
    isFirstLogin?: boolean
    order?: number
}

export interface TeamMemberTyping extends UserTyping {
    functionName?: string
    teamIds: IdTyping[]
}

export interface ContactTyping extends UserTyping {
    invoiceIds?: IdTyping[]
    companyJobs?: CompanyOnContactTyping[]
    eventIds?: IdTyping[]
    createdAt?: string
}

export type TeamMemberDropdownListItemTyping = VenueUserBasicTyping;
export type ContactDropdownListItemTyping = VenueUserBasicTyping;

export interface SpecialUserTyping {
    iri: IriTyping
    id: IdTyping
    name: string
    isRequiredForEvent: boolean
    venueUserIds: IdTyping[]
}

// This type is only for diaply the teams minimal required information and to avoid infinet loops woth teamMembers taht have teamIds
export interface TeamTyping {
    iri: IriTyping
    id?: IdTyping
    name: string
    abbreviation?: string
    color?: string
}

export interface TeamDetailTyping extends TeamTyping {
    teamMemberIds: IdTyping[]
    image?: ImageTyping | null
}

// Not exported because used to create other typings, should not be used on its own
interface CompanyBasicTyping {
    iri: IriTyping
    id: IdTyping
    name: string
    legalName: string
    logo?: string
}

export interface CompanyTyping extends CompanyBasicTyping {
    email: string
    phoneCountryPrefix: string
    phoneNumber: string
    address: AddressTyping | null
    eventIds?: IdTyping[]
    venueUserCompany?: ContactOnCompanyTyping[]
    branchIds?: IdTyping[]
}

export type CompanyDropdownListItemTyping = CompanyBasicTyping;

// These 2 types are needed to make use of the VenueUserCompany joint table type backend made and to avoid looping
interface VenueUserCompanyTyping {
    iri: IriTyping
    jobTitle?: string
}

export interface CompanyOnContactTyping extends VenueUserCompanyTyping {
    companyId: IdTyping
}

export interface ContactOnCompanyTyping extends VenueUserCompanyTyping {
    contactId: IdTyping
}
