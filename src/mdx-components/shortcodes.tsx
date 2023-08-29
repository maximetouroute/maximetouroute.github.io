import { Link } from 'gatsby';
import { PhotoGrid } from '../bits/PhotoGrid/PhotoGrid';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ImageGrid } from './ImageGrid';
import { ImageCompare } from './ImageCompare';
import { ResponsiveIframe } from './ResponsiveIframe';
import { MdxImage } from './MdxImage';

// Provide common components here
export const SHORTCODES = {
  Link,
  MdxImage,
  ImageGrid,
  GatsbyImage,
  PhotoGrid,
  ImageCompare,
  ResponsiveIframe
}
