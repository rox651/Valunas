import { ReactElement } from 'react'

interface SocialLink {
  name: string
  href: string
  Icon: ReactElement
}

export const FooterSocialLink = ({ item }: { item: SocialLink }) => {
  const { name, href, Icon } = item

  return (
    <a
      href={item.href}
      target="_blank"
      className=" text-light-orchid-500 transition-colors hover:text-light-orchid-900"
    >
      <span className="sr-only">{item.name}</span>
      {Icon}
    </a>
  )
}
