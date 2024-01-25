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

export function Testimonials() {
    return (
        <>
        <div className="min-w-screen flex items-center justify-center py-5">
            <div className="w-full border-t border-b px-5 py-16 md:py-4">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="-mx-3 md:flex items-start">
                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-lg  border border-gray-200 p-5  font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <Image width={38} height={38} src="/static/images/testimonials/micho.jpeg" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <Link href="https://www.linkedin.com/in/michel-perez-41790939/" className="text-secondary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Michel P. Linkedin"><h6 className="font-bold text-sm uppercase">Michel P.</h6></Link>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight">
                                        <span className="text-lg leading-none italic font-bold  mr-1">&ldquo;</span>
                                        Eden offers perspectives that are refreshingly unique, coupled with amazing suggestions on how to maximize impact in any given task or goal. <br /> <br />

                                        <strong>He has an exceptional ability to identify what's the best use of your time and the key elements to focus on.</strong> <br /> <br />

                                        Eden isn't just an excellent engineer; he's a career catalyst.
                                        <span className="text-lg leading-none italic font-bold  ml-1">"</span></p>
                                </div>
                            </div>
                            <div className="w-full mx-auto rounded-lg  border border-gray-200 p-5  font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <Image width={38} height={38} src="/static/images/testimonials/eduardo.jpeg" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                    <Link href="https://www.linkedin.com/in/eduardo-jcu/" className="text-secondary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Eudardo C. Linkedin"><h6 className="font-bold text-sm uppercase">Eduardo C.</h6></Link>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold  mr-1">&ldquo;</span>
                                    Over the years Eden has given me invaluable personal advice for handling different work situations - from working on promotion packets, all the way to considering new teams or opportunities.  <br /> <br />

                                    <strong>Eden has the great ability of understanding your situation and making personalized suggestions that fit your goals and help advance your career.</strong> <br /> <br />

                                    He is a very candid and pragmatic engineer that has helped me focus on the things that are ultimately important.
                                    <span className="text-lg leading-none italic font-bold  ml-1">"</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-lg  border border-gray-200 p-5  font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <Image width={38} height={38} src="/static/images/testimonials/caleb.jpeg" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <Link href="https://www.linkedin.com/in/calebghirmai/" className="text-secondary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Caleb G. Linkedin"><h6 className="font-bold text-sm uppercase">Caleb G.</h6></Link>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight">
                                        <span className="text-lg leading-none italic font-bold  mr-1">&ldquo;</span>
                                        Before Eden's career coaching, I struggled with technical and behavioral interviews. Eden planned a system for me that helped me revisit a variety of questions and traits employers seek in their candidates. <br /><br />

                                        <strong>Most importantly, he instilled a level of confidence in myself that made me truly believe I will become a great Software Engineer.</strong>
                                        {/* I highly recommend Eden's services because he is a great listener, empathetic, and provides practical advice that can be immediately applied in the technical field! */}
                                        <span className="text-lg leading-none italic font-bold  ml-1">"</span></p>
                                </div>
                            </div>
                            {/* <div className="w-full mx-auto rounded-lg  border border-gray-200 p-5  font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <Image width={38} height={38} src="/static/images/testimonials/emilio.jpeg" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <Link href="https://www.linkedin.com/in/emilioaurea/" className="text-secondary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Emilio A. Linkedin"><h6 className="font-bold text-sm uppercase">Emilio A.</h6></Link>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold  mr-1">&ldquo;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span className="text-lg leading-none italic font-bold  ml-1">"</span></p>
                                </div>
                            </div> */}
                        </div>

                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-lg  border border-gray-200 p-5  font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <Image width={38} height={38} src="/static/images/testimonials/jessica.jpeg" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                    <Link href="https://www.linkedin.com/in/jessica-livak/" className="text-secondary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Jessica L. Linkedin"><h6 className="font-bold text-sm uppercase">Jessica L.</h6></Link>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight">
                                        <span className="text-lg leading-none italic font-bold  mr-1">&ldquo;</span>
                                        Eden’s exceptional guidance and mentorship have been instrumental in helping me break through career obstacles and achieve my goals. <br /> <br />

                                        <strong>He has a talent for breaking down complex skills into practical, actionable steps, enabling me to have a clear path towards my goals.</strong> <br /> <br />

                                        Working with Eden has been a game-changer for my career, and I couldn’t be more grateful for his expertise and support.
                                        <span className="text-lg leading-none italic font-bold  ml-1">"</span></p>
                                </div>
                            </div>
                            {/* <div className="w-full mx-auto rounded-lg  border border-gray-200 p-5  font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <Image width={38} height={38} src="https://i.pravatar.cc/100?img=2" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase ">Kris Stanton.</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold  mr-1">&ldquo;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!<span className="text-lg leading-none italic font-bold  ml-1">"</span></p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default function CoachingLayout() {

  return (
    <>
    <div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Coaching
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

            <p className="text-lg leading-7 text-gray-500 dark:">
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

        <div>
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                Testimonials
            </h2>
            <Testimonials />
        </div>

        <br /><br />

        <div className="flex flex-col justify-center items-center text-base font-medium leading-6">
          <p className="text-lg leading-7">Subscribe for tips every Monday!</p>
          <iframe
            src="https://newsletter.gettostaff.com/embed"
            width={480}
            height={150}
          ></iframe>
        </div>

    </div>
    </>
  )
}
