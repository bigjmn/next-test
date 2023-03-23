import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Card, Button } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleclick = () => {
    console.log('hello world')
  }
  return (
    <Card>
      <Button onClick={handleclick} colorScheme="purple">say it</Button>
    </Card>
  )
}
