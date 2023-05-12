import { ReactElement } from 'react'

interface SocialLink {
  name: string
  href: string
  Icon: ReactElement
}

export const FooterSocialLink = ({ item }: { item: SocialLink }) => {
  const { name, href, Icon } = item

  return (
    <a href={href} target="_blank" className=" text-light-orchid-500 transition-colors hover:text-light-orchid-900">
      <span className="sr-only">{name}</span>
      {Icon}
    </a>
  )
}
