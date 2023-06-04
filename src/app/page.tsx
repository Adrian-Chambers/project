'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Info_Button from '../../components/info_button'
import Info_Button_Click from '../../components/info_button_click'


export default function Home() {
  return (
    <main className={styles.main}>
      <Info_Button />
      <Info_Button_Click />
    </main>
  )
}
