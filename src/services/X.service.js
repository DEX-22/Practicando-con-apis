import axios from '@/axios/index'


class XService{
    
    url =  'http://localhost:3001' 
    photos = [];
    somePhotos = [];

    async getPhotos(max = 100){
        const {data} = await axios.get(`${this.url}/photos`)

        this.photos = JSON.parse(data)

        this.photos.map(photo =>{
                    if(this.somePhotos >= max)
                        return 
                   
                   
                    this.somePhotos.push(photo)
               })

        return this.somePhotos
        
    }

}

export default new XService