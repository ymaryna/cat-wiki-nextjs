import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCats, getImgs } from "@/services/catsApi";
import Dots from "@/components/specificCats/Dots";

export default function Cat() {
    const router = useRouter();
    const { catId } = router.query;
    const [cat, setCat] = useState()
    const [imgs, setImgs] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(catId) {
            getCats(catId)
            .then((cat) => {
                setCat(cat[0])
                getImgs(cat[0].id)
                .then(imgs => {
                    setImgs(imgs)
                    setLoading(false)
                })
            })

        }

    }, [catId])

    return (
        <div>
            <div className="container specific-cat">
                <div className="row">
                    {loading
                    ? <p>Loading</p> 
                    :
                    (
                    <>
                        <div className="col-lg-4 col-md-12 img-header">
                            <img className="w-100" src={cat.image.url} alt=""/>
                        </div>
                        <div className="col-lg-6 col-md-12 offset-md-1">
                            <h1>{cat.name}</h1>
                            <p>{cat.description}</p>
                            <div className="specifications">
                                <p className=""><b>Temperament:</b> {cat.temperament}</p>
                                <p className=""><b>Origin:</b> {cat.origin}</p>
                                <p className=""><b>Life Span:</b> {cat.life_span}</p>
                                <div className="">
                                    <div className="d-flex align-items-center justify-content-between text-dots">
                                        <p><b>Adaptability:</b></p>
                                        <div className="dots d-flex align-items-center">
                                            <Dots numberInfo={cat.adaptability}/>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between text-dots">
                                        <p><b>Affection level:</b></p>
                                        <div className="dots d-flex align-items-center">
                                            <Dots numberInfo={cat.affection_level}/>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between text-dots">
                                        <p><b>Child Friendly:</b></p>
                                        <div className="dots d-flex align-items-center">
                                            <Dots numberInfo={cat.child_friendly}/>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between text-dots">
                                        <p><b>Grooming:</b></p>
                                        <div className="dots d-flex align-items-center">
                                            <Dots numberInfo={cat.grooming}/>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between text-dots">
                                        <p><b>Intelligence:</b></p>
                                        <div className="dots d-flex align-items-center">
                                            <Dots numberInfo={cat.intelligence}/>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between text-dots">
                                        <p><b>Health issues:</b></p>
                                        <div className="dots d-flex align-items-center">
                                            <Dots numberInfo={cat.health_issues}/>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between text-dots">
                                        <p><b>Social needs:</b></p>
                                        <div className="dots d-flex align-items-center">
                                            <Dots numberInfo={cat.social_needs}/>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between text-dots">
                                        <p><b>Stranger friendly:</b></p>
                                        <div className="dots d-flex align-items-center">
                                            <Dots numberInfo={cat.stranger_friendly}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    )
                }
                </div>
                <div className="row d-flex justify-content-center">
                    <h2>Other photos</h2>
                    <div className="gallery row d-flex justify-content-center">
                        {loading 
                            ? <p>Loading</p> 
                            : imgs.map((image, index) => 
                                <img className="col-lg-3 col-md-3 col-sm-12 mt-4" key={index} src={image.url} alt=""/>
                            )}
                    </div>
                </div>
            </div>            
        </div>
    );
}