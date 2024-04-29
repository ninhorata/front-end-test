import type { IriTyping, IdTyping, AddressTyping } from "./general"
import type { SpecialUserTyping } from "./user"

export interface StatusNoteMap {
    title: string
    subtitle: string
    content: string
    text: string
}

export interface StatusNotesTyping {
    REQUESTED: StatusNoteMap | null
    IN_OPTION: StatusNoteMap | null
    BOOKED: StatusNoteMap | null
    CANCELLED: StatusNoteMap | null
    PAST: StatusNoteMap | null
}

export interface AppointmentStatusNotesTyping {
    REQUESTED: StatusNoteMap | null
    MODIFIED: StatusNoteMap | null
    ACCEPTED: StatusNoteMap | null
}

export interface EventTypeTyping {
    iri: IriTyping
    id: IdTyping
    name: string
    abbreviation: string
    description: string
    isPublicEventType: boolean
    isAppointmentRequired: boolean
    isHighlighted: boolean
    email?: string
    phoneCountryPrefix: string
    phoneNumber: string
    guestTypeIds: IdTyping[]
    defaultGuestTypeId?: IdTyping
    specialUsers: SpecialUserTyping[]
    address: AddressTyping | null
    spaceIds: IdTyping[]
}

/** All translations for BEA should be put in EventTypeDetailTyping and not in EventTypeTyping. EventTypeTyping should be small enough to load relatively fast. **/
export interface EventTypeDetailTyping extends EventTypeTyping {
    pagesShown?: string[]
    statusNotes?: StatusNotesTyping
    appointmentStatusNotes?: AppointmentStatusNotesTyping
    primaryColor?: string
    secondaryColor?: string
    order?: number
}

export interface EventTyping {
    iri: IriTyping
    id: IdTyping
    name: string
    reference: string
    eventTypeId: IdTyping
    managerId?: IdTyping
    mainBookerId: IdTyping
    companyId?: IdTyping
    specialUsers: SpecialUserTyping[] | null
    bookedQuote: number | null
    quotes: number[] | null
    order?: number
}
