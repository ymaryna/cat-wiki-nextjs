const URL = 'https://api.thecatapi.com/v1'
const KEY =  'live_Pia5aSppQhkJGiuHLo8LfZmpMpaEL695fkjf5oJp2FWD6Lt5z3D58uNXbuqe4HXU'

export async function getCats(keyword) {
    const res = await fetch(`${URL}/breeds/search?q=${keyword}`, {
        method: 'get',
        headers: { 
          'x-api-key': 'live_Pia5aSppQhkJGiuHLo8LfZmpMpaEL695fkjf5oJp2FWD6Lt5z3D58uNXbuqe4HXU'
        }
    })
    const data = await res.json()
    return data
}

export async function getFavs() {
    const res = await fetch(`${URL}/breeds?limit=4`, {
        method: 'get',
        headers: { 
          'x-api-key': 'live_Pia5aSppQhkJGiuHLo8LfZmpMpaEL695fkjf5oJp2FWD6Lt5z3D58uNXbuqe4HXU'
        }
    })
    const data = await res.json()
    return data
}

export async function getImgs(id) {
    const res = await fetch(`${URL}/images/search?limit=8&breed_ids=${id}`, {
        method: 'get',
        headers: { 
          'x-api-key': 'live_Pia5aSppQhkJGiuHLo8LfZmpMpaEL695fkjf5oJp2FWD6Lt5z3D58uNXbuqe4HXU'
        }
    })
    const data = await res.json()
    return data
}

export async function getImg({id}) {
    const res = await fetch(`${URL}/images/${id}`)
    const data = await res.json()
    return data
}