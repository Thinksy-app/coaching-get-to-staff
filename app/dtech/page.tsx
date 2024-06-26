import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import CollegeLayout from '@/layouts/CollegeLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Get to Staff x DTech' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors

  return (
      <CollegeLayout/>
  )
}
