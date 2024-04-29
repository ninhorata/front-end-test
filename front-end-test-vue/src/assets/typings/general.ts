export type IriTyping = string;
export type UuidTyping = string
export type IdTyping = number;

// Also makes nested object Partial
export type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object | undefined
    ? RecursivePartial<T[P]>
    : T[P];
};

// Make DeepReadonly type writable again
export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

// Paginated content in GraphQl
export interface PaginatedGql<T> {
    edges: ({ node: T, cursor?: string } | null)[] | null
    pageInfo: {
        endCursor?: string
        hasNextPage: boolean
        hasPreviousPage: boolean
        startCursor?: string
    }
    totalCount: number
}

export interface ConfigTyping {
    uri: string;
    email: string;
    authTokenUrl: string;
    refreshTokenUrl: string;
    password: string;
    organisationIri: string;
}

export interface ImageTyping {
    iri: IriTyping
    id: IdTyping | null;
    imageUrl: string;
    width: number;
    height: number;
    alt?: string;
    highlight?: boolean;
}

export interface LogoTyping {
    light: ImageTyping;
    dark: ImageTyping;
}

export interface NoteTyping {
    iri: IriTyping;
    id: IdTyping
    title: string
    content: string;
    toUser: IdTyping[];
    toTeam: IdTyping[];
    toSpecialUser: IdTyping[];
    from: string;
}

export interface DateTyping {
    date: string;
    isCurrentMonth: boolean;
}

export interface AddressTyping {
    iri: IriTyping
    id: IdTyping
    country: string
    state: string | null
    city: string
    postalCode: string
    addressLineOne: string
    addressLineTwo?: string
}

export interface PageTyping {
    name: string;
    heroImage: ImageTyping | null;
    footerImage: ImageTyping | null;
}

export interface NotificationTyping {
    iri: IriTyping;
    id: IdTyping;
    usersMentioned: IdTyping[]
    created: string;
    title: string;
    description: string;
    status: string
}

export interface TextNoteTyping {
    iri: IriTyping;
    id: IdTyping;
    content: string
}
