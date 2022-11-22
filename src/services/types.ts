export interface LoginData {
    email: string,
    password: string
}

export interface SignInData {
    firstName: string
    lastName: string
    email: string,
    password: string,
    phoneNumber: string
    role: string

}
export interface RefreshToken {
    refreshToken: string | null,
}

export interface Address {
    lat: string
    lng: string
}
