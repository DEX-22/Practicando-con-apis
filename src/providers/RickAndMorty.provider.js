import RickAndMortyService from '@/services/RickAndMorty.service'

class RickAndMortyProvider{


    async charactersProvider(){
        const data = await RickAndMortyService.getCharacters()
        const characters = data.results
        const pagination = data.info
        pagination.firstPage = 'https://rickandmortyapi.com/api/character?page=1'
        pagination.lastPage='https://rickandmortyapi.com/api/character?page=42'
        return {characters,pagination}
    }

}
export default new RickAndMortyProvider