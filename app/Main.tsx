import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div>
        <div className="flex items-center space-x-4 pb-8 pt-6 md:space-x-5">
          <Image
            src="/static/images/wizard.png"
            alt="avatar"
            width={100}
            height={100}
          />
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Your path to staff+
          </h1>
        </div>
        <div>
          <p className="text-lg leading-7">
          Our mission is to provide actionable steps that propel <strong>ambitious engineers</strong> towards a coveted promotion to Staff Software Engineer.

          <br /><br />

          <strong>📰 Weekly Newsletter:</strong> <br />

          Subscribe to our <Link href="/newsletter" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">weekly newsletter</Link> to receive actionable steps you can take <strong>today</strong> to work towards your promotion.


          <br /><br />

          <strong>🚀 Coaching:</strong><br />

          Need a plan tailored to you? Check out <Link href="/coaching" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" >Get to Staff coaching</Link> to meet regularly with Eden and create a personalized action plan for your next performance cycle.
          <br /><br />
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-base font-medium leading-6">
          <p className="text-lg leading-7">Subscribe for tips every Monday!</p>
          <iframe
            src="https://entreeden.substack.com/embed"
            width={480}
            height={150}
          ></iframe>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        {new Date(date).toLocaleDateString(siteMetadata.locale)}
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/newsletter/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
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
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/newsletter"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      <div className="flex justify-center text-base font-medium leading-6">
        <iframe
          src="https://entreeden.substack.com/embed"
          width={480}
          height={150}
        ></iframe>
      </div>
    </>
  )
}
