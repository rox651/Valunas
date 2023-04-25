import Link from 'next/link'
import { MouseEventHandler } from 'react'

interface headerLink {
  name: string
  href: string
}

const HeaderLink = ({ link, closeNavBar }: { link: headerLink; closeNavBar: MouseEventHandler }) => {
  const { name, href } = link
  return (
    <Link
      className="underline-link font-semibold text-white hover:text-white lg:font-normal lg:text-black lg:hover:text-light-orchid-500"
      href={href}
      onClick={closeNavBar}
    >
      {name}
    </Link>
  )
}

export default HeaderLink
