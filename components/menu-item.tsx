import Link from 'next/link'

interface MenuItemProps {
  label: string
  href: string
  target?: string
  rel?: string
}

export default function MenuItem({ label, href, target, rel }: MenuItemProps) {
  return (
    <li className={label === 'Home' ? 'bg-[#6498B6] p-2' : ''}>
      <Link href={href} target={target} rel={rel} className="">
        {label}
      </Link>
    </li>
  )
}

