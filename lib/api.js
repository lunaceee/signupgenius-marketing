import { gql } from "graphql-tag";
import client from "../lib/apolloClient"
import sanity from "../lib/sanity"
/*  ------------------------------ */
/*  Global Site Queries
/*  ------------------------------ */

export const tag = gql`
  query Tag($slug: String) {
    allTag(where: {slug: {current: {eq: $slug}}}){
      title
      slug {
        current
      }
      description
    }
  }
`

export const tags = gql`
  query Tags {
    allTag {
      title
      slug {
        current
      }
    }
  }
`

export const quotes = gql`
  query Quotes {
    allQuotes {
      title
      descriptionRaw
    }
  }
`

export const person = gql`
  query Person($slug: String){
    allPerson(where: {slug: {current: {eq: $slug}}}) {
      _type
      title
      slug{
        current
      }
      bioRaw
    }
  }
`

export const persons = gql`
  query Persons {
    allPerson {
      _type
      title
      slug {
        current
      }
      profilePicture {
        alt
        customRatio
        asset {
          url
        }
        crop {
          top
          bottom
          left
          right
        }
      }
      bioRaw
      isActive
      isEmployee
    }
  }
`
/** Site settings */
export const defaultSEOSettings = gql`
  query defaultSEOSetting{
    allSeoSettings {
      _type
      siteTitle
      metaTitle
      metaDesc
      shareTitle
      shareDesc
      shareGraphic {
        asset {
          title
          description
          size
          url
          altText
        }
      }
    }
  }
`

export const headerSettings = gql`
  query HeaderSettings {
    allHeaderSettings{
      _type
      menuDesktopLeft {
        title
        slug {
          current
        }
        items {
          ... on NavLink {
            title
            url
          }
          ... on NavDropdown {
            dropdownItems {
              ... on NavPage {
                title
                page {
                  ... on Page {
                    title
                    slug {
                      current
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const cookieConsent = gql`
  query CookieSettings {
    allCookieSettings {
      message
      link {
        ... on Page {
          title
          slug {
            current
          }
        }
      }
    }
  }
`

export const footerSettings = gql`
  query FooterSettings {
    allFooterSettings {
      blockTitle1
      blockMenu1 {
        title
        slug {
          current
        }
        items {
          ... on NavDropdown {
            title
            dropdownItems {
              ... on NavLink {
                title
                url
              }
              ... on NavPage {
                title
                page {
                  ... on Page {
                    title
                    slug {
                      current
                    }
                  }
                }
              }
            }
          }
        }
      }
      blockTitle2
      blockMenu2 {
        title
        slug {
          current
        }
        items {
          ... on NavDropdown {
            title
            dropdownItems {
              ... on NavLink {
                title
                url
              }
              ... on NavPage {
                title
                page {
                  ... on Page {
                    title
                    slug {
                      current
                    }
                  }
                }
              }
            }
          }
        }
      }
      blockTitle3
      blockMenu3 {
        title
        slug {
          current
        }
        items {
          ... on NavDropdown {
            title
            dropdownItems {
              ... on NavLink {
                title
                url
              }
              ... on NavPage {
                title
                page {
                  ... on Page {
                    title
                    slug {
                      current
                    }
                  }
                }
              }
            }
          }
        }
      }
      blockTitle4
      social {
        icon
        url
      }
      newsletter {
        apiNote
        apiID
        submit
        successMsgRaw
        errorMsgRaw
        termsRaw
      }
    }
  }
`

export const errorPageSettings = gql`
  query ErrorPageSettings {
    allErrorPage {
      modules {
        ... on Grid {
          size
          columns {
            ... on GridColumn {
              sizes {
                breakpoint
                width
                justify
                align
                start
              }
              blocks {
                ... on Accordions {
                  items {
                    title
                    contentRaw
                  }
                }
                ... on Freeform {
                  contentRaw
                  maxWidth
                  textAlign
                }
              }
            }
          }
        }
      }
    }
  }
`

export const redirectSettings = gql`
  query RedirectSettings {
    allRedirect {
      from
      to
      isPermanent
    }
  }
`
/** Post */
export const post = gql`
  query Post($slug: String) {
    allPost(where: {slug: {current: {eq: $slug}}}) {
      postThumbnail {
        alt
        asset {
          url
        }
      }
      title
      slug {
        current
      }
      _createdAt
      seo {
        metaDesc
        metaTitle
        shareTitle
        shareDesc
        shareGraphic {
          asset {
            label
            title
            description
            altText
            size
            source {
              url
            }
          }
        }
      }
      contentRaw
      blogPostTags {
        title
        slug {
          current
        }
        description
      }
      adBlockParent {
        adBlockText
        primaryCTAlabel
        primaryCTA {
          url
          page {
            slug {
              current
            }
          }
          isButton
          linkStyles {
            style
            buttonSize
          }
        }
        secondaryCTAlabel
        secondaryCTA {
          url
          page {
            slug {
              current
            }
          }
          isButton
          linkStyles {
            style
            buttonSize
          }
        }
      }
      relatedArticles {
        title
        slug {
          current
        }
      }
      relatedQuotes {
        title
        descriptionRaw
      }
    }
  }
`

/** Page */
export const page = gql`
  query Page($slug: String) {
    allPage(where: {slug: {current: {eq: $slug}}}) {
      title
      slug {
        current
      }
      modules {
        ... on DividerPhoto {
          photo {
            alt
            asset {
              url
              description
            }
            customRatio
          }
        }
        ... on Grid {
          size
          columns {
            sizes {
              breakpoint
              width
              justify
              align
              start
            }
            blocks {
              ... on Accordions {
                items {
                  title
                  contentRaw
                }
              }
              ... on Freeform {
                contentRaw
                maxWidth
                textAlign
              }
            }
          }
        }
        ... on Marquee {
          marqueeItems {
            simpleItem {
              text
            }
            marqueeFigure {
              customRatio
              alt
              asset {
                url
              }
              crop {
                top
                bottom
                left
                right
              }
            }
          }
        }
        ... on Hero {
          contentRaw
          bgType
          heroPhotos {
            mobilePhoto {
              alt
              asset {
                url
              }
              crop {
                top
                bottom
                left
                right
              }
            }
            desktopPhoto {
              alt
              asset {
                url
              }
              crop {
                top
                bottom
                left
                right
              }
            }
          }
          heroVideos {
            title
            id 
          }
        }
      }
      seo {
        metaTitle
        metaDesc
        shareTitle
        shareDesc
        shareGraphic {
          asset {
            url
          }
          crop {
            top
            bottom
            left
            right
          }
        }
      }
    }
  }
`


// Construct our "image meta" GROQ
export const imageMeta = `
  alt,
  asset,
  crop,
  customRatio,
  hotspot,
  "id": asset->assetId,
  "type": asset->mimeType,
  "aspectRatio": asset->metadata.dimensions.aspectRatio,
  "lqip": asset->metadata.lqip
`

// Construct our "portable text content" GROQ
export const ptContent = `
  ...,
  markDefs[]{
    ...,
    _type == "link" => {
      "url": @.url,
      "isButton": @.isButton,
      "styles": @.styles{style, isLarge, isBlock},
      "page":@.page->{"type": _type, "slug": slug.current}
    }
  },
  _type == "figure" => {
    ${imageMeta}
  }
`

// Construct our "product" GROQ
const product = `
  {
    "slug": slug.current,
    "id": productID,
    title,
    price,
    comparePrice,
    description,
    "photos": {
      "main": galleryPhotos[]{
        forOption,
        photos[]{
          ${imageMeta}
        }
      },
      "listing": listingPhotos[]{
        forOption,
        "default": listingPhoto{
          ${imageMeta}
        },
        "hover": listingPhotoHover{
          ${imageMeta}
        }
      },
    },
    inStock,
    lowStock,
    useGallery,
    surfaceOption,
    options[]{
      name,
      position,
      values[]
    },
    optionSettings[]{
      forOption,
      color
    },
    "variants": *[_type == "productVariant" && productID == ^.productID && wasDeleted != true && isDraft != true]{
      "id": variantID,
      title,
      price,
      comparePrice,
      inStock,
      lowStock,
      options[]{
        name,
        position,
        value
      },
      seo
    },
    "klaviyoAccountID": *[_type == "generalSettings"][0].klaviyoAccountID
  }
`

// Construct our "blocks" GROQ
export const blocks = `
  _type == 'freeform' => {
    _type,
    _key,
    content[]{
      ${ptContent}
    },
    textAlign,
    maxWidth
  },
  _type == 'accordions' => {
    _type,
    _key,
    items[]{
      "id": _key,
      title,
      content[]{
        ${ptContent}
      }
    }
  },
  _type == 'productCard' => {
    _type,
    _key,
    product->${product}
  }
`

// Construct our content "modules" GROQ
export const modules = `
  _type == 'grid' => {
    _type,
    _key,
    size,
    columns[]{
      sizes[]{
        breakpoint,
        width,
        justify,
        align,
        start
      },
      blocks[]{
        ${blocks}
      }
    }
  },
  _type == 'hero' => {
    _type,
    _key,
    content[]{
      ${ptContent}
    },
    bgType,
    photos{
      ...,
      mobilePhoto{
        ${imageMeta}
      },
      desktopPhoto{
        ${imageMeta}
      }
    },
    video{
      id,
      title
    }
  },
  _type == 'marquee' => {
    _type,
    _key,
    items[]{
      _type == 'simple' => {
        _type,
        text
      },
      _type == 'photo' => {
        _type,
        "photo": {
          ${imageMeta}
        }
      },
      _type == 'product' => {
        _type,
        _id,
        "product": *[_type == "product" && _id == ^ ._ref][0]${product}
      }
    },
    speed,
    reverse,
    pausable
  },
  _type == 'dividerPhoto' => {
    _type,
    _key,
    photo{
      ${imageMeta}
    }
  },
  _type == 'productHero' => {
    _type,
    _key,
  },
  _type == 'collectionGrid' => {
    _type,
    _key,
  }
`

// All Products
export const allProducts = (preview) => `
  *[_type == "product" && wasDeleted != true && isDraft != true${preview?.active ? ' && _id in path("drafts.**")' : ''
  }]${product} | order(title asc)
`

// Construct our "site" GROQ
const site = `
  "site": {
    "rootDomain": *[_type == "generalSettings"][0].siteURL,
    "cart": *[_type == "cartSettings"][0]{
      storeURL,
      message
    },
    "productCounts": [ {"slug": "all", "count": count(*[_type == "product"])} ] + *[_type == "collection"]{
      "slug": slug.current,
      "count": count(products)
    },
    "cookieConsent": *[_type == "cookieSettings"][0]{
      message,
      "link": link->{"type": _type, "slug": slug.current}
    },
    "header": *[_type == "headerSettings"][0]{
      "promo": *[_type == "promoSettings"][0]{
        display,
        text,
        "link": link->{"type": _type, "slug": slug.current}
      },
      menuDesktopLeft->{
        items[]{
          ${link},
          dropdownItems[]{
            ${link}
          },
          featured[]->${product}
        }
      },
      menuDesktopRight->{
        items[]{
          ${link},
          dropdownItems[]{
            ${link}
          },
          featured[]->${product}
        }
      },
      menuMobilePrimary->{
        items[]{
          ${link},
          dropdownItems[]{
            ${link}
          },
        }
      },
      menuMobileSecondary->{
        items[]{
          ${link},
          dropdownItems[]{
            ${link}
          },
        }
      }
    },
    "footer": *[_type == "footerSettings"][0]{
      "blocks": [
        {
          "title": blockTitle1,
          newsletter{
            "id": "footer",
            klaviyoListID,
            submit,
            successMsg[]{
              ${ptContent}
            },
            errorMsg[]{
              ${ptContent}
            },
            terms[]{
              ${ptContent}
            }
          }
        },
        {
          "title": blockTitle2,
          "menu": blockMenu2->{
            items[]{
              ${link}
            }
          }
        },
        {
          "title": blockTitle3,
          "menu": blockMenu3->{
            items[]{
              ${link}
            }
          }
        },
        {
          "title": blockTitle4,
          social[]{
            icon,
            url
          }
        }
      ]
    },
    "seo": *[_type == "seoSettings"][0]{
      siteTitle,
      metaTitle,
      metaDesc,
      shareTitle,
      shareDesc,
      shareGraphic
    },
  }
`

/*  ------------------------------ */
/*  Sanity API Functions
/*  ------------------------------ */

// Fetch all dynamic docs
export async function getAllDocSlugs(doc) {
  const data = await getSanityClient().fetch(
    `*[_type == "${doc}"]{ "slug": slug.current }`
  )
  return data
}

// Fetch all our page redirects
export async function getAllRedirects() {
  const data = await getSanityClient().fetch(
    `*[_type == "redirect"]{ from, to }`
  )
  return data
}

// Fetch a static page with our global data
export async function getStaticPage(pageData, preview) {
  const query = `
  {
    "page": ${pageData},
    ${site}
  }
  `

  const data = await getSanityClient(preview).fetch(query)

  return data
}

// Fetch a specific dynamic page with our global data
export async function getPage(slug, preview) {
  const slugs = [`/${slug}`, slug, `/${slug}/`]

  const query = `
    {
      "page": *[_type == "page" && slug.current in ${JSON.stringify(
    slugs
  )}] | order(_updatedAt desc)[0]{
        hasTransparentHeader,
        modules[]{
          ${modules}
        },
        seo
      },
      ${site}
    }
    `

  const data = await getSanityClient(preview).fetch(query)

  return data
}

// Fetch a specific product with our global data
export async function getProduct(slug, preview) {
  const query = `
    {
      "page": *[_type == "product" && slug.current == "${slug}" && wasDeleted != true && isDraft != true] | order(_updatedAt desc)[0]{
        hasTransparentHeader,
        modules[]{
          ${modules}
        },
        "product": ${product},
        seo
      },
      ${site}
    }
  `

  const data = await getSanityClient(preview).fetch(query)

  return data
}

// Fetch a specific collection with our global data
export async function getCollection(slug, preview) {
  const query = `
    {
      "page": *[_type == "collection" && slug.current == "${slug}"] | order(_updatedAt desc)[0]{
        hasTransparentHeader,
        modules[]{
          ${modules}
        },
        products[wasDeleted != true && isDraft != true${preview?.active ? ' && _id in path("drafts.**")' : ''
    }]->${product},
        seo
      },
      ${site}
    }
  `

  const data = await getSanityClient(preview).fetch(query)

  return data
}

// SendGrid Post function, used by our API route (so we don't expose our API key)
export async function postEmail(apiKey, data) {
  const {
    formName = 'Contact Form',
    fromAddress,
    notificationEmails,
    templateID,
    name,
    email,
    subject,
    message,
  } = data

  const toAddresses = notificationEmails.map((email) => ({
    email: email,
  }))

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    data: {
      personalizations: [
        {
          to: toAddresses,
          subject: subject,
          dynamic_template_data: {
            formName: formName,
            name: name,
            email: email,
            subject: subject,
            message: message,
          },
        },
      ],
      from: {
        email: fromAddress,
      },
      template_id: templateID,
    },
    url: 'https://api.sendgrid.com/v3/mail/send',
  }

  const post = await axios(options)
    .then((response) => {
      console.log('SendGrid Success')
      return response
    })
    .catch((err) => {
      console.log('SendGrid Failed')
      return err.response
    })

  return post
}
