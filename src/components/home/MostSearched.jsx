import { useEffect, useState } from 'react';
import Link from "next/link";
import { ArrowRight } from 'react-bootstrap-icons';
import { getFavs, getImg } from '@/services/catsApi';
import Image from 'next/image';

export default function MostSearched() {
  const [favs, setFavs] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFavs()
    .then(favs => {
      setFavs(favs)
      setLoading(false)
    })
    
  }, [])

  return (
    <section className="section most-search">
      <h6>Most Searched Breeds</h6>
      <hr/>
      <div className="d-flex justify-content-between align-items-end flex-sm-column flex-lg-row">
        <h2>66+ Breeds For you<br/>to discover</h2>
        <Link className="more d-flex align-items-center" href="/BestTen" state={{favs}}>SEE MORE <ArrowRight className="ms-2" color="#29150799" size={20}/></Link>
      </div>
      <div className="cats row d-flex justify-content-between">
        {loading
          ? <p>Loading...</p>
          : favs.map((cat, index) => 
              <Link href={`/cats/${cat.name}`} state={{cat}} key={index} className="col-lg-3 col-sm-6 cat">
                  <img src={cat.image.url} alt={cat.id}/>
                  <p>{cat.name}</p>
              </Link>
            )}
      </div>
  </section>
  );
}
