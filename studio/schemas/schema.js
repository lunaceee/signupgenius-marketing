// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


// Document types
import page from "./documents/page"

// Module types
import grid from './modules/grid'
import gridColumn from './modules/grid-column'
import gridSize from './modules/grid-size'
import hero from './modules/hero'
import marquee from './modules/marquee'
import dividerPhoto from './modules/divider-photo'
import newsletter from './modules/newsletter'
import collectionGrid from './modules/collection-grid'

// Block types
import freeform from './blocks/freeform'
import accordions from './blocks/accordions'

// Object types
import seo from './objects/seo'

// import navDropdown from './objects/nav-dropdown'
// import navPage from './objects/nav-page'
// import navLink from './objects/nav-link'
// import socialLink from './objects/social-link'

import simplePortableText from './objects/portable-simple'
import complexPortableText from './objects/portable-complex'

import accordion from './objects/accordion'
import figure from './objects/figure'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* ----------------- */
    /* 1: Document types */
    page,

    /* --------------- */
    /* 2: Module types */
    grid,
    gridColumn,
    gridSize,
    hero,
    marquee,
    dividerPhoto,
    newsletter,
    collectionGrid,

    /* -------------- */
    /* 3: Block types */
    freeform,
    accordions,

    /* ----------------------- */
    /* 4: Generic Object types */
    seo,

    simplePortableText,
    complexPortableText,

    accordion,
    figure,
  ]),
})
