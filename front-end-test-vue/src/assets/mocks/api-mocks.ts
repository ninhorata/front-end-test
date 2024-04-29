/**
 * So basically this file will have a bunch of functions taking out IDs and replacing
 * them with the full object
 * Each function will use an IIFE to quickly deconstruct the given object and replace
 * some props with the desired data.
 */

import type { ApiCompleteAddressTypeTyping, ApiCompleteContactTyping } from "../typings/api";
import type { AddressTyping } from "../typings/general";
import type { ContactTyping } from "../typings/user";

export const createAddressObject = (address: AddressTyping | null): ApiCompleteAddressTypeTyping | null => {
    if (address) {
        return {
            ...address,
            __typename: 'Address',
        };
    }
    return null;
};

export const createContactObject = (contact: ContactTyping): ApiCompleteContactTyping => {
    const { address, invoiceIds, companyJobs, ...rest } = contact;
    return {
        ...rest,
        address: createAddressObject(address),
        companyJobs: [],
        __typename: 'Contact',
    };
};