import md5 from "md5"

export default function crateAuth() {
    const ts = new Date().getTime()
    const privateKey = "93b3f3a75a2459a83fb3b6e37e7e7e6f824bcc75"
    const publicKey = "3f2d37ed9461411101b2231a0e6c64c2"
    const hash = md5(ts.toString() + privateKey + publicKey)


    return {
        ts,
        apikey: publicKey,
        hash
    }
}