import { Inter } from 'next/font/google'
import { cat1, cat2, cat3, cat4, img1, img2, img3 } from '../assets'
import Image from 'next/image';
import HeadHTML from '@/components/home/HeadHTML';
import Header from '@/components/home/Header';
import MostSearched from '@/components/home/MostSearched';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <HeadHTML />
      <Header />
      <MostSearched />
      <section className="section why-have-cats">
        <div className="d-flex row">
          <div className="d-flex flex-column justify-content-center col-lg-5 col-md-12">
            <hr />
            <h2>Why should you<br/>have a cat?</h2>
            <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
          </div>
          <div className="d-flex col-lg-7 col-md-12">
            <div className="d-flex flex-column align-items-end">
              <Image src={img2} alt="image2"/>
              <Image src={img1} alt="image1"/>
            </div>
            <div>
              <Image src={img3} alt="image3"/>
            </div>
          </div>
      </div>
      </section>
        
      
    </>
  )
}
