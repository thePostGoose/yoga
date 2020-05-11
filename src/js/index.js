//styles
import '../css/bootstrap-grid.min.css'
import '../css/style.less'
//img
import '../img/bg.jpg'
import '../img/letter.png'
import '../img/main_bg.jpg'
import '../img/massage.jpg'
import '../img/modal.jpg'
import '../img/slider_1.jpg'
import '../img/slider_2.jpg'
import '../img/slider_3.jpg'
import '../img/slider_4.jpg'
import '../img/sunrise.jpg'
import '../img/sunset.jpg'
import '../img/yoga.jpg'
import '../logo/facebook-logo.svg'
import '../logo/instagram-social-network-logo-of-photo-camera.svg'
import '../logo/left-arrow.svg'
import '../logo/pinterest-logo.svg'
import '../logo/right-arrow.svg'
import '../logo/twitter-logo-silhouette.svg'
//fonts
import '../fonts/RobotoSlab-Bold.ttf'
import '../fonts/RobotoSlab-Light.ttf'
import '../fonts/RobotoSlab-Regular.ttf'

//moduls
import calculatorPriceCommonPage from './calculator'
import postFormsCommonPage from './forms'
import popupCommonPage from './popup'
import sliderCommonPage from './slider'
import switchigTabs from './switching-tabs'
import timerCommonPage from './timer'

window.addEventListener('DOMContentLoaded', () => {
    switchigTabs()
    calculatorPriceCommonPage()
    postFormsCommonPage()
    popupCommonPage()
    sliderCommonPage()
    timerCommonPage()
})
