import raw from "./bp.json"

export const offices = raw.resultset.row.filter(r => {
    if (!r.name) return false
    const san = r.name.toLocaleLowerCase()
    return san.includes("urząd") && (san.includes("gminy") || san.includes("miasta"))
}).map(r => ({
    name: r.name,
    url: r.url,
}))

offices.sort((a, b) => a.name.localeCompare(b.name))

console.log(offices)