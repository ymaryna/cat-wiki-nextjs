import { getFavs } from "@/services/catsApi"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function BestTen() {
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
        <>
            <div className="top-ten container">
                <h1>Top 10 most searched breeds</h1>
                {loading
                    ? <p>Loading</p>
                    : favs.map((cat, index) =>
                    <Link href={`/cats/${cat.name}`} key={index} className="top row">
                        <img className="col-md-2" src={cat.image.url} alt=""/>
                        <div className="col-md-8 ms-4 text">
                            <h2>{index+1}. {cat.name}</h2>
                            <p>{cat.description}</p>
                        </div>
                    </Link>
                    )            
                }
            </div>
        </>
    )
}
