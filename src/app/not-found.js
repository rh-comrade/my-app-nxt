import Link from 'next/link'
 
export default function NotFoundFun() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/home">Return Home</Link>
    </div>
  )
}