/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import Image from '@/components/Image'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div>

      <div>
        <div className="flex items-center space-x-4 pb-8 pt-6 md:space-x-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Newsletter
          </h1>
        </div>
        <div>

          <p className='text-lg leading-7'>Hi, I'm Eden.</p>

          <br />

          <Image
            src="/static/images/it-me.webp"
            alt="avatar"
            width={500}
            height={100}
          />

          <br />

          <p className="text-lg leading-7">
            
            I’m the co-founder of <Link href="https://thinksy.app/" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Thinksy">Thinksy</Link> and have worked as an engineer at Slack, YouTube and Microsoft. I managed to get promoted up to <strong>Staff Engineer in 5 years</strong>.

            <br /> <br />

            I believe <strong>there is a formula to getting promoted quickly</strong> and you don’t have to trust people who say “it’ll come with time.” If you want to make it happen fast, you can.


            <br /> <br />
          </p>

          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            Okay what’s this newsletter about?
          </h2>

          <br />

          <p className="text-lg leading-7">
          I share tips and tricks of the trade. If you want to become staff quickly you need to be very intentional with how you spend your time at work. Some of it is intuitive, some is not. I share how I got there quickly and how you can, too.
          </p>

          <br /> <br />
        </div>

        <div className="flex flex-col justify-center items-center text-base font-medium leading-6">
          <p className="text-lg leading-7">Subscribe for tips every Monday!</p>
          <iframe
            src="https://newsletter.gettostaff.com/embed"
            width={300}
            height={150}
          ></iframe>
        </div>
      </div>

        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          <div>
            <ul>
              {displayPosts.map((post) => {
                const { path, date, title, summary, images } = post
                return (
                  <li key={path} className="py-5">
                    <article className="flex flex-col space-y-2 xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-3">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                              {title}
                            </Link>
                          </h2>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                        <div>
                            <Image
                                src={images}
                                alt="blog image"
                                width={500}
                                height={500}
                            />
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
