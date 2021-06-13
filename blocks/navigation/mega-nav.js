import React, { useRef, useState, useEffect } from 'react'
import FocusTrap from 'focus-trap-react'
import { m } from 'framer-motion'
import { useRect } from '@reach/rect'
import cx from 'classnames'

import { useSiteContext, useToggleMegaNav } from '../../lib/context'
import { isBrowser } from '../../lib/helpers'
import { swipeAnim } from '../../lib/animate'

import Menu from './menu'
import { FiChevronDown } from 'react-icons/fi'

const MegaNavigation = ({ items = [], headerHeight }) => {
  const dropdowns = items.filter((item) => {
    return 'dropdownItems' in item
  })

  if (!dropdowns.length) return null

  const toggleMegaNav = useToggleMegaNav()
  const { meganav } = useSiteContext()
  const activeNav = useRef()
  const activeNavRect = useRect(activeNav, { observe: true })
  const [hasFocus, setHasFocus] = useState(false)

  const handleKeyup = (e) => {
    if (e.which === 27) {
      toggleMegaNav(false)
    }
  }

  useEffect(() => {
    if (isBrowser) {
      document.body.classList.toggle('overflow-hidden', meganav.isOpen)
    }
  }, [meganav.isOpen])

  return (
    <>
      <FocusTrap
        active={meganav.isOpen && hasFocus}
        focusTrapOptions={{ allowOutsideClick: true }}
      >
        <div
          ref={!meganav.isOpen ? activeNav : null}
          className="mega-nav"
          onKeyUp={(e) => handleKeyup(e)}
        >
          {dropdowns.map((dropdown, key) => {
            const isActive =
              meganav.isOpen && meganav.activeID === dropdown._key

            return (
              <div
                key={key}
                ref={isActive ? (ref) => (activeNav.current = ref) : null}
                id={`meganav-${dropdown._key}`}
                className={cx('mega-item', {
                  'is-active': isActive,
                })}
              >
                <div className="mega-item--outer">
                  <div className="mega-item--inner">
                    <m.div
                      initial="hide"
                      animate={isActive ? 'show' : 'hide'}
                      onAnimationComplete={() => setHasFocus(isActive)}
                      variants={swipeAnim}
                      className="mega-item--content"
                    >
                      <Menu
                        items={dropdown.dropdownItems}
                        hasFocus={hasFocus && isActive}
                        onClick={() => toggleMegaNav(false)}
                      />

                      {/* {dropdown.featured && (
                        <div className="mega-item--featured">
                          <div className="mega-item--featured-title">
                            <span>Featured</span>
                          </div>
                        </div>
                      )} */}
                    </m.div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </FocusTrap>
      <div
        className={cx('mega-nav--bg')}
        style={{
          '--h': meganav.isOpen ? activeNavRect?.height + headerHeight : 0,
          '--hpx': `${meganav.isOpen ? activeNavRect?.height + headerHeight : 0
            }px`,
        }}
      />

      <div className="mega-nav--border" />

      <div
        className={cx('mega-nav--backdrop', {
          'is-active': meganav.isOpen,
        })}
        onClick={() => toggleMegaNav(false)}
      />
    </>
  )
}

export const MegaDropdownButton = ({ title, id }) => {
  const toggleMegaNav = useToggleMegaNav()
  const { meganav } = useSiteContext()

  const isActive = meganav.activeID === id

  return (
    <button
      className={cx('mega-toggle', { 'is-open': isActive })}
      aria-expanded={isActive}
      aria-controls={`meganav-${id}`}
      onClick={() => toggleMegaNav(!isActive ? true : 'toggle', id)}
    >
      {title}
      <span className="mega-toggle--icon">
        {isActive ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg> :
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>}
      </span>
    </button>
  )
}

export default MegaNavigation
