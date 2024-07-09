export const cookieConfig = { 
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60 // Una hora
}