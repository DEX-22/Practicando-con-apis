<template>
    <div>
        <vue-chart-js 

         />
    </div>
</template>
<script>
import DolarService from '@/services/Dolar.service'
import VueChartJs from 'vue-chartjs'
import { Line, mixins } from 'vue-chartjs'
const {reactiveProp} = mixins

export default {
    extends: Line,
    mixins: [reactiveProp],
    components:{
        VueChartJs
    },
    data(){return{
        pricesByMonth:{},
        
    }},
    methods:{
        async getDolarByMonth(){
            let data = await DolarService.getDolarByMonth()
            this.pricesByMonth = data.data
        },
    },
    async created(){
        await this.getDolarByMonth()
    },
    mounted () {
        
    this.renderChart({
      labels: this.pricesByMonth.mes,
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: this.pricesByMonth.precio
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>