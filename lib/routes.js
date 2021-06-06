// determine if current page is active or not
export const getActive = (isStatic, pageSlug, router) => {
  if (isStatic !== false) {
    return isStatic == router.pathname.replace(/^\//g, '')
  } else {
    const slugs = [].concat(router.query.slug)
    const currentPath = slugs
      ? slugs.join('/')
      : router.asPath.replace(/^\//g, '')
    return currentPath == pageSlug
  }
}

export const getStaticRoute = (name) => {
  switch (name) {
    case 'homePage':
      return ''
    case 'blog':
      return 'blog'
    case 'help':
      return 'help'
    case 'pricing':
      return 'pricing'
    case 'features':
      return 'features'
    case 'themes':
      return 'themes'
    case 'testimonials':
      return 'testimonials'
    case 'downloads':
      return 'downloads'
    case 'search':
      return 'search'
    case 'about':
      return 'about'
    case 'news':
      return 'news'
    case 'careers':
      return 'careers'
    case 'giving-back':
      return 'giving-back'
    case 'press-kit':
      return 'press-kit'
    case 'partners':
      return 'partners'
    case 'contact-sales':
      return 'contact-sales'
    default:
      return false
  }
}

export const getDynamicRoute = (name) => {
  switch (name) {
    default:
      return false
  }
}
