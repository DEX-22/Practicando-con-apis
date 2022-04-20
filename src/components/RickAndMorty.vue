<template>
    <b-container 
        class=" bg-gradient"
        id="contenedor" >
        <b-row 
            id="personajes_container"
            style="" class="flex-nowrap">
            
            <b-col 
                v-for="(item,index) in characters" 
                :key="index"
                >
                <b-card 
                    :title="item.name"
                    :img-src="item.image"
                    :img-alt="item.name"
                    style="max-width: 20rem; min-width: 15rem;"
                    class="mb-2"
                    >
                    <b-card-body>
                        <b-card-text>
                            <ul>
                                <li>Origin: {{item.origin.name}}</li>
                                <li>Specie: {{item.species}}</li>
                                <li>Gender: {{item.gender}}</li>
                            </ul>
                        </b-card-text>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-pagination
            class="mt-3"
            v-model="pagination.currentPage"
            :total-rows="pagination.count"
            :per-page="20"
            pills>
                <!-- <template #first-text>
                    <a :href="firstPage"> First </a> 
                </template>
                <template #prev-text>
                     <a :href="pagination.prev"> First </a> 
                </template>
                <template #next-text>
                     <a :href="pagination.next"> Last </a> 
                </template>
                <template #last-text>
                     <a :href="lastPage"> Last </a> 
                </template>-->
        </b-pagination>
    </b-container>

</template>
<script>
import RickAndMortyProvider from '@/providers/RickAndMorty.provider'
export default{
    data(){return {
        items: [],
        pagination:{},
        characters:[],
    }},
    methods:{
        async start(){
           const characters_pagination = await RickAndMortyProvider.charactersProvider()
            this.pagination = characters_pagination.pagination
            this.characters = characters_pagination.characters

        },
    },
    async created(){
        await this.start()
    }
}
</script>
<style>
ul{
    list-style:none;
}
li{
    text-align:left;
}
.card-body{
    padding:0 !important;
    margin-top:10px !important;
}
.bg-gradient{
    background-color: #52ACFF;
background-image: linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%);

}
#contenedor{
    width: 1600px;
    padding: 30px 40px;
    border-radius: 25px;
}
#personajes_container{
    background-color: transparent;
    overflow-x:scroll;
    overflow-y:hidden; 
    max-height:510px;
    padding-top: 20px;
}
</style>