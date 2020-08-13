const axios = require('axios')
const header = require('./header.json')

const getLugarLatLong = async (direccion) => {

  const encodeUrl = encodeURI(direccion)
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    timeout: 1000,
    headers: header
  });
  
  const resp = await instance.get()
  if (resp.data.Results.length === 0){
    throw new Error(`No hay resultados para ${direccion}`)
  }

  const data = resp.data.Results[0]
  const name = data.name
  const lat = data.lat
  const lon = data.lon

    return {
      name,
      lat,
      lon
    }

}

module.exports = {
  getLugarLatLong
}