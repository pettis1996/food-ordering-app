import Link from "next/link"

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href={'#'}>ST PIZZA</Link>
        <nav className="flex gap-4">
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
          <Link href={''}>Login</Link>
        </nav>
      </header>
    </>
  )
}
