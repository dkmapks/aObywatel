import officesRaw from "./bp.json"
import ludnoscRaw from "./ludnosc.json"

export const offices = officesRaw.resultset.row.filter(r => {
    if (!r.name) return false
    const san = r.name.toLocaleLowerCase()
    return san.includes("starost") || san.includes("urząd") && (san.includes("gmin") || san.includes("miejs"))
}).map(r => ({
    name: r.name,
    url: r.url,
    place: r.place.toLowerCase(),
    ludnosc: ludnoscRaw.find(l => l.miasto.toLocaleLowerCase() === r.place.toLocaleLowerCase())?.ludnosc ?? undefined,
})).filter(r => r.ludnosc !== undefined)

console.log({ offices })