"use client"

import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Link from '@/components/Link'

export default function CourseLayout() {

  return (
    <>
    <div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Get to Staff x DTech
            </h1>
            </div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700 pb-2">
            <div>
                <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                    💻 Upcoming Webinars
                </h1>
            </div>
        </div>

        <div className='pb-8'>
            <h1 className="font-bold text-xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-14">
                🌟 Ace your interview at a top tier tech company
            </h1>            
            <p className='leading-7'>Wed April 3, 2023 @ 5:30pm PT / 8:30pm ET</p>
            <p className='leading-7'>
                Hosted by <Link href="https://www.linkedin.com/in/edenghirmai/" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">Eden</Link> & <Link href="https://www.linkedin.com/in/calli-fuchigami-582a9456/" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">Calli</Link>
            </p>
        </div>

        <div className='pb-8'>
            <h1 className="font-bold text-xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-14">
              🌟 How to Fast Track Your Promotion to Senior+
            </h1>            
            <p className='leading-7'>Tues April 16, 2023 @ 5:30pm PT / 8:30pm ET</p>
            <p className='leading-7'>
                Hosted by <Link href="https://www.linkedin.com/in/edenghirmai/" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">Eden</Link> & <Link href="https://www.linkedin.com/in/calli-fuchigami-582a9456/" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">Calli</Link>
            </p>
        </div>  

        <hr className='pb-4' />              

        <div className='pb-8 flex flex-col md:flex-row'>
            <div className="md:mr-4">
                <h1 className="font-bold text-xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-14">
                🗞️ Newsletter
                </h1>            

                <div className="relative flex justify-center items-center">
                    <Link href="https://newsletter.gettostaff.com">
                        <Image
                            src="/static/images/newsletter.png"
                            alt="avatar"
                            width={800}
                            height={800}
                        />
                    </Link>
                </div>

                <div className="flex flex-col justify-center items-center text-base font-medium leading-6 pt-8">
                    <iframe
                        src="https://newsletter.gettostaff.com/embed"
                        width={300}
                        height={150}
                    ></iframe>
                </div>        

            </div>

            <div className="md:ml-4">
                    <h1 className="font-bold text-xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-14">
                        🤫 Private community
                    </h1>

                    <p className="border border-black md:text-xl p-6">
                        The journey to staff comes with sporadic and extremely specific problems that are hard to solve on your own. <br /> <br />

                        Without other like minded people to talk to, it’s easy to get trapped in analysis paralysis. <br /> <br />

                        So we decided to open up a community exclusive to our paid Get to Staff subscribers. ❤️‍🔥 <br /> <br />

                        Just select any paid plan when you <Link className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="http://newsletter.gettostaff.com/subscribe">subscribe</Link> and you’ll be automatically added to the Slack channel 🪄
                    </p>

            </div>    

        </div>

        <div className='pb-8'>
            <h1 className="font-bold text-xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-14">
            🏅 Coaching
            </h1>

            <p>
                Use code "DTech100" for $100 off a single session <br/><br/>
                Schedule now at <Link className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/coaching">gettostaff.com/coaching</Link>
            </p>
        </div>                     
    
    </div>
    </>
  )
}
