import type { AddressTyping } from "../typings/general";

export const AddressMock: AddressTyping = {
    iri: '/api/user_address/1',
    id: 1,
    addressLineOne: 'Fake Street 1',
    addressLineTwo: 'Apt up',
    city: 'Amsterdam',
    country: 'NL',
    postalCode: '1010TD',
    state: null,
};

export const UserAddressMock: AddressTyping = {
    iri: '/api/user_address/1',
    id: 1,
    addressLineOne: 'Fake Street 1',
    addressLineTwo: 'Apt up',
    city: 'Amsterdam',
    country: 'NL',
    postalCode: '1010TD',
    state: null,
};

export const CompanyAddressMock: AddressTyping = {
    iri: '/api/company_address/1',
    id: 1,
    addressLineOne: 'Fake Street 1',
    addressLineTwo: 'Apt up',
    city: 'Amsterdam',
    country: 'NL',
    postalCode: '1010TD',
    state: null,
};

export const VenueAddressMock: AddressTyping = {
    iri: '/api/venue_address/1',
    id: 1,
    addressLineOne: 'Brouwersgraacht 28',
    city: 'Amsterdam',
    country: 'NL',
    postalCode: '1010TD',
    state: null,
};
