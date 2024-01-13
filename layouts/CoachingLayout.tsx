"use client"

import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

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
                Schedule your consultation today:
            </h2>
                <MyCalendar />
        </div>

    </div>
    </>
  )
}
