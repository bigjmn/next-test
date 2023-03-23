const configify = (hostname) => {
    return {
        host: "abc",
        username: "adg",
        password: "bhal"
    }
}

const fetchHostlist = async (hostlist) => {
    const res = await Promise.all(hostlist.map(x => processFetch(x)))
    const envDict = Object.fromEntries(res.filter(b => (b !== undefined)).map(r => [r.hostname, r.procstats]))
}

const processFetch = async (abc) => {

}

export { fetchHostlist }