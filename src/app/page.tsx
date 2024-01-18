import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Logo from '../../public/logo.jpg'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={Logo} alt='logo'/>
      </div>
      <div className={styles.right}>
        <h1>What is goining on now</h1>
        <h2>Sign up now</h2>
        <Link href="/i/flow/signup" className={styles.signup}>Create Account</Link>
        <h3>Already signed?</h3>
        <Link href="/login" className={styles.login}>Login</Link>
      </div>
    </div>
  )
}
