import { mount } from '@vue/test-utils'
import RickAndMortyProvider from '@/providers/RickAndMorty.provider'
import App from '@/App.vue'

var wrapper = mount(App)
var vm = wrapper.vm


describe('Probar que se cambió la propiedad changeTest ', () => {

  test('should click a button', () => {

  const lastValue = vm.changeTest

  wrapper.find('button').trigger('click')

  expect(wrapper.vm.changeTest).toBe(lastValue+1)

})

})






