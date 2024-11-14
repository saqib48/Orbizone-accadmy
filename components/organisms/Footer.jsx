import React from 'react'
import Container from '../atoms/Container'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import Link from 'next/link'

function Footer() {
  return (
    <div className='bg-[#0C0C0C]'>
      <hr />
      <Container>
        <div className='mt-[50px]'>
          <div className='flex justify-between gap-[10%] pt-[5%]'>

            <div>
              <h3 className='text-white text-[26px] font-semibold'>Information</h3>
              <div className='grid gap-[10px] mt-[20px] text-white '>
                <Link href="/about" className='hover:text-[#6C757D]'>About Us</Link>
                <Link href="/courses" className='hover:text-[#6C757D]'>Courses</Link>
                <Link href="/ged" className='hover:text-[#6C757D]'>Privacy Policy</Link>
                <Link href="/blogs" className='hover:text-[#6C757D]'> Blogs</Link>
                <Link href="/team" className='hover:text-[#6C757D]'>Team</Link>
                <Link href="/contact" className='hover:text-[#6C757D]'>Contact</Link>
              </div>
            </div>
            <div>
              <h3 className='text-white text-[26px] font-semibold'>Contact Us</h3>
              <div className='text-white grid gap-[20px]  mt-[20px]'>
                <p>Orbizone, Mushki Shah Rd, near Ali Hospital <br /> Chiniot, Pakistan.</p>
                <p>Phone: (800) 123-4567</p>
                <p>Email: info@orbizone.com</p>
                <p> Mon/Fri-9:00/7:00</p>
              </div>
            </div>


            <div>
              <h3 className='text-white text-[26px] font-semibold'>Join Our Newsletter Now</h3>
              <div className='text-white grid gap-[10px] mt-[20px]'>
                <p>Stay updated with the latest insights and exclusive offers.<br /> Subscribe to our newsletter for expert tips, industry news,<br /> and more!.</p>
                <Input variant='five2' type='text' placeholder='Enter you email address here.....' />
                <Button variant="footer-button">Submit</Button>

              </div>
            </div>


          </div>
        </div>

      </Container>
      <div className='mt-[50px]'>
        <hr />
        <div className='text-white flex justify-center py-[30px]'>
          <p>© 2024 Edify College of IT. All Rights Reserved. </p>
        </div>
      </div>
    </div>

  )
}

export default Footer