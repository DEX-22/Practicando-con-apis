<template>
    <div>
        <loader 
        v-if="!visible"
            object="#ff9633" 
            color1="#ffffff" 
            color2="#17fd3d" 
            size="5" 
            speed="2" 
            bg="#343a40" 
            objectbg="#999793" 
            opacity="80" 
            name="spinning" />
        <center>
            <vue-apex-charts 
            v-if="visible"
            width="1000" 
            type="line" 
            :options="options" 
            :series="series"
        />
        </center>
               

    </div>
</template>
<script>
import DolarService from '@/services/Dolar.service'
/* import VueApexCharts from 'vue-apexcharts' */
/* import VueChartJs from 'vue-chartjs '
import { Line, mixins } from 'vue-chartjs'
const {reactiveProp} = mixins */

export default {
    components:{
        /* VueApexCharts */
    },
    data(){return{
        visible:false,
        pricesByMonth:[],
        options: {
        chart: {
                id: 'vuechart-example'
                },
        xaxis: {
                prices: []
                }
            },
        series: [{
            name: 'mes - año',
            data: []
        }]
        
    }},
    methods:{
        async getDollarByMonth(){
            let data = await DolarService.getDolarByMonth()
            this.pricesByMonth = data.data

        },
        async start(){
            await this.getDollarByMonth()
            this.pricesByMonth.map( el => {
                this.series[0].data.push(el.precio)
                this.options.xaxis.prices.push(el.mes)
            })
            
            this.visible = true
        }
    },
    async created(){
        await this.start()
    },
    mounted () {
        
  }
}
</script>