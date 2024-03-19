import CourseLayout from '@/layouts/CourseLayout'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Course' })

export default function Page() {
  return (
      <CourseLayout/>
  )
}
