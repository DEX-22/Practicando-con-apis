<template>

    <div>ASDJHAKSJDHJKHK
        <!-- {{ photos }} -->
        <ul v-for="(index,photo) in photos" :key="index">
            <li>
                {{photo}}
            </li>
        </ul>
    </div>

</template>

<script>

import XService from '@/services/X.service'

export default{
    name:'XComponent',
    data(){return {
        photos: [],
    }},
    methods:{
        async start(){
           const data = await XService.getAllPhotos()
           
            console.log( data)

        //    
        },
    },
    async created(){
        await this.start()
    }
}

</script>
