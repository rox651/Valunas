import Link from 'next/link'

interface navLink {
  name: string
  href: string
}

export const FooterNavLink = ({ item }: { item: navLink }) => {
  return (
    <div className="px-5 py-2">
      <Link href={item.href} className="text-base text-light-orchid-500 transition-colors  hover:text-light-orchid-900">
        {item.name}
      </Link>
    </div>
  )
}
