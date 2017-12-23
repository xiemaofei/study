import axios from 'axios'
import Mockadapter from 'axios-mock-adapter'
import mocks from './data/slider'
import video from './data/video'
import citylist from './data/city'
import cityInfolist from './data/cityInfo'
import shoplist from './data/shop'
export default {
  bootstrap () {
    const mock = new Mockadapter(axios)
    mock.onGet('/api/login').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, mocks.slider])
      })
    })
    mock.onGet('/renderCity').reply((config) => {
      let cname = config.params.cname
      cityInfolist.eatlist.map((v) => {
        return (v.cname = cname)
      })
      return new Promise((resolve, reject) => {
        resolve([200, cityInfolist])
      })
    })
    mock.onGet('/getCityList').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, citylist])
      })
    })
    mock.onGet('/shop').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, shoplist.shopList])
      })
    })
    mock.onPost('/login').reply((config) => {
      let username = JSON.parse(config.data).username
      return new Promise((resolve, reject) => {
        resolve([200, {code: 0, username: username}])
      })
    })
    mock.onGet('/getVideoInfo').reply((config) => {
      let vid = config.params.vid
      let nDate = video.videoList.filter((v) => {
        if (v.vid === Number(vid)) {
          return v
        }
      })
      if (!nDate[0]) {
        nDate[0] = video.videoList[0]
      }
      return new Promise((resolve, reject) => {
        resolve([200, nDate])
      })
    })
  }
}
