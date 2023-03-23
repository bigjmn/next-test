// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NodeSSH } from "node-ssh"
import { NextResponse } from "next/server"
const host1 = {
  host: '137.184.229.22',
  username: 'root',
  port: 22,
  password: 'jessE7377n'
  

}
const thenget = async () => {
  const ssh = new NodeSSH()
  try {
    await ssh.connect(host1)
    const finalres = await ssh.execCommand('whoami', {cwd:'/'})
    console.log(finalres.stdout)
    return { name: finalres.stdout}

  } catch (e) {
    return e
    console.log(e)
  }
  
  
}

const dataget = async () => {
  const ssh = new NodeSSH()
  try {
    await ssh.connect(host1)
    const res = await ssh.execCommand('whoami')
    if (!res || res.stderr){
      throw new Error('could not get it')
    }
    return res.stdout

  } catch (err){
    return err
  }
}

export default async function handler(req, res) {
  try {
    const result = await thenget()
    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
