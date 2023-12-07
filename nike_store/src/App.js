import React from 'react'
import Navbar from './Components/Navbar'
import {
  Hero,
  Footer,
  CustomerReviews,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality
} from './sections/index'
const App = () => {
  return (
    <main className='relative'>
      <Navbar />
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>

      <section className="padding">
        <SpecialOffers />
      </section>

      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>


      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>

      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App
