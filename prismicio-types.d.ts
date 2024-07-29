// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HeropageDocumentDataSlicesSlice = HeroSliceSlice;

/**
 * Content for HeroCarousel documents
 */
interface HeropageDocumentData {
  /**
   * image field in *HeroCarousel*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: heropage.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * CTA link field in *HeroCarousel*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: heropage.cta_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * Heading field in *HeroCarousel*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heropage.Heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  Heading: prismic.KeyTextField;

  /**
   * description field in *HeroCarousel*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heropage.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Slice Zone field in *HeroCarousel*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: heropage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HeropageDocumentDataSlicesSlice> /**
   * Meta Title field in *HeroCarousel*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: heropage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *HeroCarousel*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: heropage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *HeroCarousel*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: heropage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * HeroCarousel document from Prismic
 *
 * - **API ID**: `heropage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeropageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeropageDocumentData>,
    "heropage",
    Lang
  >;

interface HerosliceDocumentData {}

/**
 * HeroSlice document from Prismic
 *
 * - **API ID**: `heroslice`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HerosliceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HerosliceDocumentData>,
    "heroslice",
    Lang
  >;

export type AllDocumentTypes = HeropageDocument | HerosliceDocument;

/**
 * Primary content in *HeroSlice → Default → Primary*
 */
export interface HeroSliceSliceDefaultPrimary {
  /**
   * image field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Heading field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * description field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for HeroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroSlice*
 */
type HeroSliceSliceVariation = HeroSliceSliceDefault;

/**
 * HeroSlice Shared Slice
 *
 * - **API ID**: `hero_slice`
 * - **Description**: HeroSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSlice = prismic.SharedSlice<
  "hero_slice",
  HeroSliceSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HeropageDocument,
      HeropageDocumentData,
      HeropageDocumentDataSlicesSlice,
      HerosliceDocument,
      HerosliceDocumentData,
      AllDocumentTypes,
      HeroSliceSlice,
      HeroSliceSliceDefaultPrimary,
      HeroSliceSliceVariation,
      HeroSliceSliceDefault,
    };
  }
}
