import Link from 'next/link'
import { useRouter } from 'next/router'
import { ComponentPropsWithoutRef, FunctionComponent } from 'react'
import classNames from 'classnames'
import { headerItems } from '~constants'

export const Header: FunctionComponent<ComponentPropsWithoutRef<'header'>> = () => {
  const { pathname } = useRouter()

  return (
    <header className="p-3 md:p-6 flex flex-col md:flex-row gap-3 md:gap-12 items-center bg-black-withOpacity">
      <span className="max-w-[225px] text-center md:text-left">
        <Link href="/" className="text-md font-semibold text-beige-light">
          STAR WARS PLANET MANAGEMENT SYSTEM
        </Link>
      </span>
      <ul className="justify-center flex gap-3 md:gap-6">
        {headerItems.map(({ title, href }) => (
          <li key={title}>
            <Link href={href} className="relative">
              <span
                className={classNames(
                  'md:text-md transition hover:opacity-100',
                  {
                    'opacity-60': pathname !== href
                  }
                )}
              >
                {title.toUpperCase()}
              </span>
              {pathname === href && (
                <span className="absolute -bottom-3.375 md:-bottom-8 inset-x-0 mx-auto bg-beige-light w-6.25 h-0.375"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
