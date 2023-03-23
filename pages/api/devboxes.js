import { fetchHostlist } from "@/utils/processFetcher";

const DEVHOSTS = ["ab", "c"]

export default async function handler(req, res){
    try {
        const result = await fetchHostlist(DEVHOSTS)
        res.status(200).json({ result })
    } catch (err) {
        res.status(5000).json({ error: "failed to get data" })
    }

}