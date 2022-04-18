import axios from 'axios'

class RickAndMortyService{
    
    url = () => { return 'https://rickandmortyapi.com/api' }

    async getCharacters(){
        let data = await axios.get(`${this.url()}/character?limit=10`)
        return data.data
    }

}

export default new RickAndMortyService