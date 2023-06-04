'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Info_Button from '../../components/info_button'

export default function Home() {
  return (
    <main className={styles.main}>
      <Info_Button />
    </main>
  )
}
