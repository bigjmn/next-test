import { NodeSSH } from "node-ssh";
import {useState, useEffect} from 'react'

const hostconfig = {
    host: '137.184.229.22',
    username: 'root',
    port: 22,
    password: 'jessE7377n'  
  }
export const useFetch = () => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            const ssh = new NodeSSH()
            setError(null)
            setIsPending(true)
            try {
                await ssh.connect(hostconfig)
                const res = await ssh.execCommand('whoami')
                if (!res || !res.stdout){
                    throw new Error('could not get res')
                }
                setData(res.stdout)
                setIsPending(false)
            } catch (err) {
                setError(err.message)
                setIsPending(false)
            }
        })()
    }, [])

    return { data, isPending, error}

}