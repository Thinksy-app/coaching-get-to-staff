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
                    Webinars
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

        <div className="divide-y divide-gray-200 dark:divide-gray-700 pb-2">
            <div>
                <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                    Resources
                </h1>
            </div>
        </div>


        <div className='pb-8'>
            <h1 className="font-bold text-xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-14">
            🗞️ Newsletter
            </h1>            

            <Link href="https://newsletter.gettostaff.com">
                <Image
                    className="flex justify-center items-center"
                    src="/static/images/newsletter.png"
                    alt="avatar"
                    width={800}
                    height={800}
                />
            </Link>


            <div className="flex flex-col justify-center items-center text-base font-medium leading-6 pt-8">
                <iframe
                    src="https://newsletter.gettostaff.com/embed"
                    width={300}
                    height={150}
                ></iframe>
            </div>        
        </div>            

        <div className='pb-8'>
            <h1 className="font-bold text-xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-14">
            🏅 Coaching
            </h1>

            <div className="relative bg-[#EEF3FF] flex justify-center items-center">
                <Image
                    src="/static/images/coaching-2.png"
                    alt="Performance review preparation for high performers"
                    width={500}
                    height={500}
                />
                <Link href="https://buy.stripe.com/8wM7vxblEbDz1lmdQZ" className="absolute bottom-0 left-1/3 transform -translate-x-1/2 -translate-y-1/2 h-10 w-20"></Link>
                <Link href="https://buy.stripe.com/9AQ2bd61k7nje8800a" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-20"></Link>
                <Link href="https://buy.stripe.com/6oE0359dw4b72pq9AL" className="absolute bottom-0 left-2/3 transform -translate-x-1/2 -translate-y-1/2 h-10 w-20"></Link>
            </div>

        </div>                     
    
    </div>
    </>
  )
}
