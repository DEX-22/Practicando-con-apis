import axios from 'axios'


class DolarService{
    async getDolarByMonth(){
        const url = 'http://localhost:3000/dollar/month'
        let data = await axios.get(url)
        return data
    }
}

export default new DolarService
