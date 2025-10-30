import { Instagram, Youtube, MessageCircle } from 'lucide-react'

export function ContactTheClub() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <section className='container py-10 md:py-16'>
        <h1 className='text-3xl md:text-5xl font-semibold tracking-tight'>
          Contact The Club
        </h1>

        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <a
            href='https://instagram.com/codeshack'
            target='_blank'
            rel='noreferrer'
            className='bg-muted rounded-md p-6 flex flex-col justify-between aspect-square hover:opacity-90 transition'
          >
            <Instagram className='w-10 h-10' />
            <div>
              <h3 className='text-xl font-medium'>Instagram</h3>
              <p className='text-muted-foreground'>Follow updates and events</p>
            </div>
          </a>

          <a
            href='https://youtube.com/@codeshack'
            target='_blank'
            rel='noreferrer'
            className='bg-muted rounded-md p-6 flex flex-col justify-between aspect-square hover:opacity-90 transition'
          >
            <Youtube className='w-10 h-10' />
            <div>
              <h3 className='text-xl font-medium'>YouTube</h3>
              <p className='text-muted-foreground'>Workshops and talks</p>
            </div>
          </a>

          <a
            href='https://wa.me/15555555555'
            target='_blank'
            rel='noreferrer'
            className='bg-muted rounded-md p-6 flex flex-col justify-between aspect-square hover:opacity-90 transition'
          >
            <MessageCircle className='w-10 h-10' />
            <div>
              <h3 className='text-xl font-medium'>WhatsApp</h3>
              <p className='text-muted-foreground'>Chat with the community</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  )
}


