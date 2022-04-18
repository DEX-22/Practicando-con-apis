<template>
    <b-container 
        class="border border-primary"
        id="contenedor" >
        <b-row 
            id="personajes_container"
            style="overflow-x:scroll;overflow-y:hidden; max-height:510px;" class="flex-nowrap">
            <b-col 
                v-for="(item,index) in items" 
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
                <template #first-text>
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
                </template>
        </b-pagination>
    </b-container>

</template>
<script>
import RickAndMortyService from '@/services/RickAndMorty.service'

export default{
    data(){return {
        items: [],
        pagination:{},
        firstPage: 'https://rickandmortyapi.com/api/character?page=1',
        lastPage: 'https://rickandmortyapi.com/api/character?page=42',

    }},
    async created(){
        let info = await RickAndMortyService.getPersons()
        this.items = info.results
        this.pagination = {...info.info}
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
#contenedor{
    width: 1600px;
    padding: 30px 40px;
    border-radius: 25px;
}
.personajes_container{
    width: 1598px;
}
</style>