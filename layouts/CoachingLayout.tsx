"use client"

import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Link from '@/components/Link'


export function MyCalendar() {
    useEffect(()=>{
        (async function () {
        const cal = await getCalApi();
        cal.ns["initial-consultation-get-to-staff"]("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, [])
    return <Cal calLink="edeng/initial-consultation-get-to-staff"
        style={{width:"99%",height:"99%",overflow:"scroll"}}
        config={{layout: 'month_view'}}


    />;
};

export default function CoachingLayout() {

  return (
    <>
    <div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                coaching
            </h1>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                Performance review preparation for high performers
            </h2>

            <br />

            <p className="text-lg leading-7">
            If you want to become staff quickly you need to be very intentional with how you spend your time at work. Some of it is intuitive, some is not. <br /><br />

            In our coaching sessions we will plan out exactly what moves you need to make to get high ratings on your next performance review.

            </p>


        </div>

        <br /><br />

        <div>
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                Schedule your consultation today:
            </h2>

            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            <em>Issues viewing the calendar?&nbsp;
            <Link href="https://cal.com/edeng/initial-consultation-get-to-staff" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="All posts">
                Book directly here.</Link>
            </em>
            <br /><br />
          </p>
                <MyCalendar />
        </div>

        <br /><br />

        <div>
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                Pricing
            </h2>

            <p className="text-lg leading-7">
            • Free 45min initial consultation<br />
            • $500 per 1 hour session (recommended: weekly or bi-monthly)<br />
            • No minimum commitment (recommended: 3 months minimum)<br />

            </p>

        </div>

        <br /><br />

        <div className="flex flex-col justify-center items-center text-base font-medium leading-6">
          <p className="text-lg leading-7">Subscribe for tips every Monday!</p>
          <iframe
            src="https://entreeden.substack.com/embed"
            width={480}
            height={150}
          ></iframe>
        </div>

    </div>
    </>
  )
}
