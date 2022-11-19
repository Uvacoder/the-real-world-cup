type FlagMap = {
    [keyof: string]: string
}
const flagMap: FlagMap = {
    "QAT": "🇶🇦",
    "ECU": "🇪🇨",
    "SEN": "🇸🇳",
    "NED": "🇳🇱",
    "ENG": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "IRN": "🇮🇷",
    "WAL": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "USA": "🇺🇸",
    "ARG": "🇦🇷",
    "KSA": "🇸🇦",
    "MEX": "🇲🇽",
    "POL": "🇵🇱",
    "FRA": "🇫🇷",
    "DEN": "🇩🇰",
    "TUN": "🇹🇳",
    "AUS": "🇦🇺",
    "ESP": "🇪🇸",
    "GER": "🇩🇪",
    "JPN": "🇯🇵",
    "CRC": "🇨🇷",
    "BEL": "🇧🇪",
    "CAN": "🇨🇦",
    "MAR": "🇲🇦",
    "CRO": "🇭🇷",
    "BRA": "🇧🇷",
    "SRB": "🇷🇸",
    "SUI": "🇨🇭",
    "CMR": "🇨🇲",
    "POR": "🇵🇹",
    "GHA": "🇬🇭",
    "URU": "🇺🇾",
    "KOR": "🇰🇷"
}

export function countryToFlag(country: string): string {
    return flagMap[country] ?? "🏳"
}