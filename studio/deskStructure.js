import S from '@sanity/desk-tool/structure-builder'

import EyeIcon from 'part:@sanity/base/eye-icon'
import EditIcon from 'part:@sanity/base/edit-icon'

import {
  FiGift,
  FiAnchor,
  FiHome,
  FiSettings,
  FiGlobe,
  FiAlertOctagon,
  FiMenu,
  FiNavigation,
  FiRepeat,
  FiTag,
  FiCheckSquare,
  FiFileText,
  FiUsers,
  FiSmile,
  FiPrinter,
  FiFolder,
  FiAward,
  FiDollarSign,
  FiBox,
  FiLinkedin,
  FiTv,
} from 'react-icons/fi'

import SeoPreview from './components/previews/seo/seo-preview'

const localURL = 'http://localhost:3000'
const previewURL =
  window.location.hostname === localURL

const hiddenDocTypes = (listItem) =>
  ![
    'homePage',
    'errorPage',
    'page',
    'landingPage',
    'post',
    'person',

    'cookieSettings',
    'promoSettings',
    'headerSettings',
    'footerSettings',
    'seoSettings',
    'quotes',
    'tag',

    'menu',
    'redirect',
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Website')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Cookie Consent')
                .child(
                  S.editor()
                    .id('cookieSettings')
                    .schemaType('cookieSettings')
                    .documentId('cookieSettings')
                )
                .icon(FiCheckSquare),
              S.listItem()
                .title('Default SEO / Share')
                .child(
                  S.editor()
                    .id('seoSettings')
                    .schemaType('seoSettings')
                    .documentId('seoSettings')
                )
                .icon(FiGlobe),
              S.listItem()
                .title('Promo Bar')
                .child(
                  S.editor()
                    .id('promoSettings')
                    .schemaType('promoSettings')
                    .documentId('promoSettings')
                )
                .icon(FiGift),
              S.listItem()
                .title('Header')
                .child(
                  S.editor()
                    .id('headerSettings')
                    .schemaType('headerSettings')
                    .documentId('headerSettings')
                )
                .icon(FiNavigation),
              S.listItem()
                .title('Footer')
                .child(
                  S.editor()
                    .id('footerSettings')
                    .schemaType('footerSettings')
                    .documentId('footerSettings')
                )
                .icon(FiAnchor),
              S.listItem()
                .title('Error Page')
                .child(
                  S.editor()
                    .id('errorPage')
                    .schemaType('errorPage')
                    .documentId('errorPage')
                )
                .icon(FiAlertOctagon),

              S.listItem()
                .title('Menus')
                .child(S.documentTypeList('menu').title('Menus'))
                .icon(FiMenu),
              S.listItem()
                .title('Redirects')
                .child(S.documentTypeList('redirect').title('Redirects'))
                .icon(FiRepeat),
            ])
        )
        .icon(FiSettings),
      S.divider(),


      // Pages
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Landing pages')
                .schemaType('landingPage')
                .child(
                  S.documentTypeList('landingPage')
                    .title('Landing pages')
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('landingPage')
                        .views([
                          S.view.form().icon(EditIcon),
                          S.view
                            .component(SeoPreview)
                            .options({ previewURL })
                            .icon(EyeIcon)
                            .title('SEO Preview'),
                        ])
                    )
                ).icon(FiFolder),
              S.listItem()
                .title('Home')
                .child(
                  S.document()
                    .title('Home Page')
                    .id('homePage')
                    .documentId('homePage')
                    .schemaType('homePage')
                    .views([
                      S.view.form().icon(EditIcon),
                      S.view
                        .component(SeoPreview)
                        .options({ previewURL })
                        .icon(EyeIcon)
                        .title('SEO Preview'),
                    ])
                )
                .icon(FiHome),
              S.listItem()
                .title('Help')
                .child(
                  S.editor()
                    .id('help')
                    .schemaType('page')
                    .documentId('help')
                )
                .icon(FiPrinter),
              S.listItem()
                .title('Careers')
                .child(
                  S.editor()
                    .id('careers')
                    .documentId('careers')
                    .schemaType('page')
                )
                .icon(FiLinkedin),
              S.listItem()
                .title('About')
                .child(
                  S.editor()
                    .id('about')
                    .schemaType('page')
                    .documentId('about')
                )
                .icon(FiSmile),
              S.listItem()
                .title('Pricing')
                .child(
                  S.editor()
                    .id('pricing')
                    .schemaType('page')
                    .documentId('pricing')
                )
                .icon(FiDollarSign),
              S.listItem()
                .title('Features')
                .child(
                  S.editor()
                    .id('features')
                    .schemaType('page')
                    .documentId('features')
                )
                .icon(FiBox),
              S.listItem()
                .title('Testimonial')
                .child(
                  S.editor()
                    .id('testimonial')
                    .schemaType('page')
                    .documentId('testimonial')
                )
                .icon(FiAward),
              S.listItem()
                .title('Press kit')
                .child(
                  S.editor()
                    .id('presskit')
                    .schemaType('page')
                    .documentId('presskit')
                )
                .icon(FiTv),
              S.listItem()
                .title('Terms and conditions')
                .child(
                  S.editor()
                    .id('termsandconditions')
                    .schemaType('page')
                    .documentId('termsandconditions')
                )
                .icon(FiFileText),
            ]),
        ).icon(FiFolder),
      S.divider(),
      // Posts
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('Posts')
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('post')
                .views([
                  S.view.form().icon(EditIcon),
                  S.view
                    .component(SeoPreview)
                    .options({ previewURL })
                    .icon(EyeIcon)
                    .title('SEO Preview'),
                ])
            )
        ).icon(FiFolder),
      S.divider(),
      S.listItem()
        .title('Persons')
        .schemaType('person')
        .child(
          S.documentTypeList('person')
            .title('Persons')
        ).icon(FiUsers),
      S.divider(),
      S.listItem()
        .title('Tags')
        .child(S.documentTypeList('tag').title('Tags'))
        .icon(FiTag),
      S.divider(),
      S.listItem()
        .title('Quotes')
        .child(S.documentTypeList('quotes').title('Quotes'))
        .icon(FiFileText),
      S.divider(),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
