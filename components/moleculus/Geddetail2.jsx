import React from 'react'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Image from 'next/image'

function Geddetail2() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 pb-10">
      <div>
        <Heading level={4}>What is GED?</Heading>
        <Paragraph variant="paraAbout">The General Educational Development GED exam USA is a comprehensive assessment designed to measure the skills and knowledge typically acquired through four years of high school education. It serves as an alternative pathway for individuals who have not completed traditional high school education to earn a recognized high school equivalency credential.</Paragraph>
        <Heading level={5}>Key Features</Heading>
        <ul className="list-disc text-lg font-[400] leading-relaxed ml-[20px] mt-2 mb-2 text-[#d1d5db]">
          <li>American High School Qualification</li>
          <li>Equivalent to A-levels Intermediate FA/FSC/ICS/ICOM IB DP High School</li>
          <li>Recognised and Approved by IBCC Pakistan</li>
          <li>Pathway to higher education and recognised worldwide</li>
          <li>Self paced learning / Prepare in 3 months only</li>
          <li>Cost Effective as low as USD 320 only</li>
          <li>Flexible Schedule Weekend Classes ; Evening time to suit your pressing needs</li>
          <li>On-Campus and Online Classes</li>
          <li>Appear throughout the year for the Exam</li>
          <li>Accepted by LUMS UOL IVY League and Universities Worldwide</li>
        </ul>
        <Heading level={4}>GED Key Features</Heading>
        <Paragraph variant="paraAbout">The General Educational Development GED exam USA is a comprehensive assessment designed to measure the skills and knowledge typically acquired through four years of high school education. It serves as an alternative pathway for individuals who have not completed traditional high school education to earn a recognized high school equivalency credential.</Paragraph>
        <Heading level={5}>Subjects</Heading>
        <Paragraph variant="paraAbout">The GED exam covers four main subject areas</Paragraph>
        <ul className="list-disc text-lg font-[400] leading-relaxed ml-[20px] mt-2 mb-2 text-[#d1d5db]">
          <li>Mathematical Reasoning</li>
          <li>Reasoning Through Language Arts</li>
          <li>Science</li>
          <li>Social Studies</li>
        </ul>
        <Heading level={5}>Flexible Scheduling</Heading>
        <Paragraph variant="paraAbout">Candidates have the flexibility to schedule the exam at their convenience allowing for personalized preparation and readiness assessment.</Paragraph>
        <Heading level={5}>Cost-Effective</Heading>
        <Paragraph variant="paraAbout">Pursuing a GED certificate is more cost-effective compared to traditional high school education or other standardized tests.</Paragraph>
        <Heading level={5}>Career Advancement</Heading>
        <Paragraph variant="paraAbout">Many employers and numerous educational institutions recognize the GED certificate as evidence of foundational knowledge and skills enhancing job prospects and opening doors to higher education opportunities.</Paragraph>
        <Heading level={5}>Global Recognition</Heading>
        <Paragraph variant="paraAbout">The GED certificate is widely accepted by employers and educational institutions worldwide providing access to diverse opportunities across different industries and regions.</Paragraph>
        <Heading level={4}>GED Facts</Heading>
        <ul className="list-disc text-lg font-[400] leading-relaxed ml-[20px] mt-2 mb-2 text-[#d1d5db]">
          <li>Nearly all colleges and employers accept the GED credential</li>
          <li>There are over 20 million graduates and counting</li>
          <li>GED grads can earn on average 9000 more a year</li>
          <li>GED grads can enrol for higher education in Pakistan&#44; UK&#44; USA&#44; Australia&#44; Canada&#44; Dubai and many more</li>
        </ul>
      </div>
      <div className="flex gap-4 items-center max-w-2xl mx-auto my-16">
        <div>
          <Image
            className="rounded-[10px]"
            src="/assits/images/ged2.avif"
            alt="ged2"
            height={500}
            width={900}
          />
        </div>
        <Heading level={5}>Millions of people have passed the GED exam and gone on to college and better jobs. You can be one of them and Orbizone will help you every step of the way!</Heading>
      </div>
      <div className="flex gap-2 mb-8">
        <div className="mt-2">
          <Heading className="mb-4" level={4}>Why Choose GED?</Heading>
          <Heading level={5}>Flexibility</Heading>
          <Paragraph variant="paraAbout2">Study at your own pace and take the exam when you feel ready accommodating various life circumstances and commitments.</Paragraph>
          <Heading level={5}>Career Opportunities</Heading>
          <Paragraph variant="paraAbout2">Unlock better job opportunities and higher earning potential with a recognized high school equivalency credential.</Paragraph>
          <Heading level={5}>Pathway to Higher Education</Heading>
          <Paragraph variant="paraAbout2">Open doors to colleges universities and vocational programs enabling further academic and professional growth.</Paragraph>
          <Heading level={5}>Personal Achievement</Heading>
          <Paragraph variant="paraAbout2">Overcome challenges set and achieve goals and experience personal fulfilment and pride in obtaining a GED certificate.</Paragraph>
          <Heading level={5}>Ready to embark on your GED preparation journey?</Heading>
          <Paragraph variant="paraAbout2">Contact us on the provided details or click APPLY now to learn more about our expert guidance tailored study materials and personalized support to help you succeed in the GED exam.</Paragraph>
        </div>
        <div>
          <Image
            className="rounded-[10px]"
            src="/assits/images/ged3.avif"
            alt="ged3"
            height={1000}
            width={1400}
          />
        </div>
      </div>
      <div className="flex gap-4 mb-8">
        <div>
          <Image
            className="rounded-[10px]"
            src="/assits/images/ged4.avif"
            alt="ged4"
            height={500}
            width={1400}
          />
        </div>
        <div>
          <Heading level={4}>Why choose Orbizone Group for your GED preparation journey?</Heading>
          <Heading level={5}>Expert Guidance</Heading>
          <Paragraph variant="paraAbout1">Our team of seasoned education consultants and instructors brings a wealth of knowledge and experience to the table ensuring personalized support tailored to your unique needs.</Paragraph>
          <Heading level={5}>Comprehensive Resources</Heading>
          <Paragraph variant="paraAbout1">From meticulously crafted study materials to simulated practice exams we equip you with the tools necessary to excel in every aspect of the GED examination.</Paragraph>
        </div>
      </div>
      <div>
        <Heading level={5}>Holistic Approach</Heading>
        <Paragraph variant="paraAbout1">At Orbizone we recognize that success extends beyond mere academic achievement. Our holistic approach nurtures not only intellectual growth but also the development of essential life skills empowering you to thrive in an increasingly competitive world.</Paragraph>
        <Heading level={5}>Tailored Solutions</Heading>
        <Paragraph variant="paraAbout1">No two learners are alike which is why we take a personalized approach to every student's journey. Whether you are aiming to enhance your career prospects or pursue higher education our bespoke solutions are designed to help you reach your goals.</Paragraph>
        <Heading level={5}>Unwavering Support</Heading>
        <Paragraph variant="paraAbout1">From the initial consultation to the moment you receive your GED certificate our dedicated team stands by your side offering guidance encouragement and support every step of the way.</Paragraph>
        <Heading level={5}>So what are you waiting for!</Heading>
        <Paragraph variant="paraAbout1"> Click APPLY and embark on your GED journey with Orbizone Group of Companies and unlock a world of possibilities. Together let us transform aspirations into achievements and dreams into reality.</Paragraph>
      </div>
    </div>
  );
}

export default Geddetail2;
