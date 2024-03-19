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
                Course
            </h1>
            </div>
        </div>

        <div>
            {/* <h2 className="text-2xl font-bold leading-8 tracking-tight">
                Performance review preparation for high performers
            </h2> */}

            <div className="flex justify-center items-center">
                <a href="https://maven.com/forms/005230">
                    <Image
                        src="/static/images/course/1.svg"
                        alt="Landing your first role at a top tier tech company"
                        width={1023}
                        height={390}
                    />         
                </a>         
            </div>  

            <div className="flex justify-center items-center">
                <Image
                    src="/static/images/course/2.svg"
                    alt="Who this course is a good fit for"
                    width={1023}
                    height={390}
                />                            
            </div>  

            <div className="flex justify-center items-center">
                <Image
                    src="/static/images/course/3.svg"
                    alt="What we will cover"
                    width={1023}
                    height={390}
                />                                
            </div>                          
        </div>
      

    </div>
    </>
  )
}
