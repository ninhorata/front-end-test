import type { ApiCompleteContactTyping } from "../typings/api";
import type { CompanyOnContactTyping, ContactTyping, CompanyTyping } from "../typings/user";
import { VenueAddressMock, CompanyAddressMock, AddressMock, UserAddressMock } from "./address";
import { EventMocks } from "./event";

/* eslint-disable vue/max-len */
export const CompanyJobsMocks: CompanyOnContactTyping[] = [
    {
        companyId: 1,
        iri: '/api/company-job/1',
        jobTitle: 'Front office',
    },
    {
        companyId: 1,
        iri: '/api/company-job/2',
        jobTitle: 'Sales Manager',
    },
    {
        companyId: 2,
        iri: '/api/company-job/3',
        jobTitle: 'Developer',
    },
    {
        companyId: 1,
        iri: '/api/company-job/4',
        jobTitle: 'HR',
    },
];

export const Users: ContactTyping[] = [
    {
        iri: '/api/users/100',
        id: 100,
        constellId: '/api/constell-users/100',
        fullName: 'Fred Again...',
        displayName: 'Freddie',
        initials: 'SXM',
        email: 'mad@ona.com',
        phoneNumber: '68872901',
        phoneCountryPrefix: '+31',
        address: UserAddressMock,
        image: {
            iri: '/api/images/8745',
            id: 8745,
            alt: 'User Image',
            imageUrl:
                'https://storage.googleapis.com/restau/nius/5images/5fz-x-bobby-caroline_695.JPG',
            width: 2000,
            height: 1333,
        },
        coverImage: {
            iri: '/api/images/8746',
            id: 8746,
            alt: 'User Cover Image',
            imageUrl:
                'https://storage.googleapis.com/restau/nius/5images/5fz-x-bobby-caroline_695.JPG',
            width: 2000,
            height: 1333,
        },
        isFirstLogin: false,
        companyJobs: [CompanyJobsMocks[0]],
        isEmployee: false,
    },
    {
        iri: '/api/users/200',
        id: 200,
        constellId: '/api/constell-users/200',
        fullName: 'Madonna',
        displayName: 'Madonna',
        initials: 'M',
        email: 'mad@ona.com',
        phoneNumber: '68872901',
        phoneCountryPrefix: '+31',
        companyJobs: [],
        eventIds: [EventMocks[0].id],
        address: UserAddressMock,
        image: {
            iri: '/api/images/8745',
            id: 8745,
            alt: 'User Image',
            imageUrl:
                'https://storage.googleapis.com/restau/nius/5images/5fz-x-bobby-caroline_695.JPG',
            width: 2000,
            height: 1333,
        },
        coverImage: {
            iri: '/api/images/8746',
            id: 8746,
            alt: 'User Cover Image',
            imageUrl:
                'https://storage.googleapis.com/restau/nius/5images/5fz-x-bobby-caroline_695.JPG',
            width: 2000,
            height: 1333,
        },
        isFirstLogin: true,
        isEmployee: false,
    },
    {
        iri: '/api/users/300',
        id: 300,
        constellId: '/api/constell-users/300',
        fullName: 'Sasha Fierce',
        displayName: 'Sasha',
        initials: 'SF',
        companyJobs: [CompanyJobsMocks[0], CompanyJobsMocks[1]],
        email: 'mad@ona.com',
        phoneNumber: '68872901',
        phoneCountryPrefix: '+31',
        eventIds: [EventMocks[0].id],
        address: UserAddressMock,
        image: {
            iri: '/api/images/8745',
            id: 8745,
            alt: 'User Image',
            imageUrl:
                'https://storage.googleapis.com/restau/nius/5images/5fz-x-bobby-caroline_695.JPG',
            width: 2000,
            height: 1333,
        },
        coverImage: {
            iri: '/api/images/8746',
            id: 8746,
            alt: 'User Cover Image',
            imageUrl:
                'https://storage.googleapis.com/restau/nius/5images/5fz-x-bobby-caroline_695.JPG',
            width: 2000,
            height: 1333,
        },
        isFirstLogin: false,
        isEmployee: false,
    }, {
        iri: '/api/users/400',
        id: 400,
        constellId: '/api/constell-users/400',
        fullName: 'Jutard D`orial parce-que huit-neuf',
        displayName: 'Julien',
        companyJobs: [CompanyJobsMocks[2]],
        initials: 'JO',
        email: 'mad@ona.com',
        phoneNumber: '68872901',
        phoneCountryPrefix: '+31',
        eventIds: [EventMocks[0].id],
        address: UserAddressMock,
        image: {
            iri: '/api/images/8745',
            id: 8745,
            alt: 'User Image',
            imageUrl:
                'https://storage.googleapis.com/restau/nius/5images/5fz-x-bobby-caroline_695.JPG',
            width: 2000,
            height: 1333,
        },
        coverImage: {
            iri: '/api/images/8746',
            id: 8746,
            alt: 'User Cover Image',
            imageUrl:
                'https://storage.googleapis.com/restau/nius/5images/5fz-x-bobby-caroline_695.JPG',
            width: 2000,
            height: 1333,
        },
        isFirstLogin: false,
        isEmployee: false,
    }, {
        iri: '/api/users/500',
        id: 500,
        constellId: '/api/constell-users/500',
        displayName: 'Sydney',
        companyJobs: [],
        fullName: 'Sydney S. Sweeney',
        initials: 'SS',
        email: 'mad@ona.com',
        phoneNumber: '68872901',
        phoneCountryPrefix: '+31',
        eventIds: [EventMocks[0].id],
        address: UserAddressMock,
        image: {
            iri: '/api/images/8745',
            id: 8745,
            alt: 'User Image',
            imageUrl:
                'https://storage.googleapis.com/restau/nius/5images/5fz-x-bobby-caroline_695.JPG',
            width: 2000,
            height: 1333,
        },
        coverImage: {
            iri: '/api/images/8746',
            id: 8746,
            alt: 'User Cover Image',
            imageUrl:
                'https://storage.googleapis.com/restau/nius/5images/5fz-x-bobby-caroline_695.JPG',
            width: 2000,
            height: 1333,
        },
        isFirstLogin: false,
        isEmployee: false,
    }, {
        iri: '/api/users/600',
        id: 600,
        constellId: '/api/constell-users/600',
        fullName: 'Alex Jones',
        displayName: 'Alex',
        companyJobs: [],
        initials: 'AJ',
        email: 'mad@ona.com',
        phoneNumber: '68872901',
        phoneCountryPrefix: '+31',
        eventIds: [EventMocks[0].id],
        address: UserAddressMock,
        image: {
            iri: '/api/images/8745',
            id: 8745,
            alt: 'User Image',
            imageUrl:
                'https://storage.googleapis.com/restau/nius/5images/5fz-x-bobby-caroline_695.JPG',
            width: 2000,
            height: 1333,
        },
        coverImage: {
            iri: '/api/images/8746',
            id: 8746,
            alt: 'User Cover Image',
            imageUrl:
                'https://storage.googleapis.com/restau/nius/5images/5fz-x-bobby-caroline_695.JPG',
            width: 2000,
            height: 1333,
        },
        isFirstLogin: false,
        isEmployee: false,
    },
];

export const ContactUserMocks: ContactTyping[] = [
    ...Users.map(user => ({
        ...user
    })),
];

export const CompanyBranchesMock: CompanyTyping[] = [
    {
        iri: '/api/companies/5',
        id: 5,
        name: 'Bunq',
        legalName: 'Bunq',
        eventIds: EventMocks.map(event => event.id),
        venueUserCompany: [],
        branchIds: [],
        email: 'company1@company.com',
        phoneNumber: '68872901',
        phoneCountryPrefix: '+31',
        logo: '../assets/images/constell-logo-dark.svg',
        address: VenueAddressMock,
    },
];

export const CompanyMocks: CompanyTyping[] = [
    {
        iri: '/api/companies/1',
        id: 1,
        name: 'ING Amsterdam',
        legalName: 'ING Amsterdam',
        eventIds: EventMocks.map(event => event.id),
        venueUserCompany: [],
        branchIds: [CompanyBranchesMock[0].id],
        email: 'company1@company.com',
        phoneNumber: '68872901',
        phoneCountryPrefix: '+31',
        logo: '../assets/images/constell-logo-dark.svg',
        address: VenueAddressMock,
    },
    {
        iri: '/api/companies/2',
        id: 2,
        name: 'ING Rotterdam',
        legalName: 'ING Rotterdam',
        eventIds: EventMocks.map(event => event.id),
        venueUserCompany: [],
        branchIds: [],
        email: 'company2@company.com',
        phoneNumber: '68872901',
        phoneCountryPrefix: '+31',
        logo: '../assets/images/constell-logo-dark.svg',
        address: CompanyAddressMock,
    },
];

export const ApiContactMock: ApiCompleteContactTyping[] = [...Users].map(user => {
    const {
        address,
        companyJobs,
        ...rest
    } = user;

    return {
        ...rest,
        __typename: 'Contact',
        companyJobs: [
            {
                __typename: '',
                company: {
                    iri: '/api/companies/1',
                    id: 1,
                    name: 'ING Amsterdam',
                    legalName: 'ING Amsterdam',
                    logo: '../assets/images/constell-logo-dark.svg',
                },
            },
        ],
        address: {
            __typename: '',
            ...AddressMock,
        },
    } as ApiCompleteContactTyping;
});
/* eslint-enable vue/max-len */
