

import Vue from "vue"
import VueRouter from "vue-router"


// Import styles tools
import Buefy from "buefy"

// Import shared tools, components & modules
import NavbarComponent from "App/shared/Navbar.vue"


// Import CSS files (order is important)
import 'buefy/dist/buefy.css'




export default (components, routes) => {

    Vue.use(Buefy)

    Vue.component("NavbarComponent", NavbarComponent)

    const built = {
        components: {
            ... components,
            ... {
                "navbar-component": NavbarComponent
            }
        },
    }

    if(routes){
        Vue.use(VueRouter)

        built["router"] = new VueRouter({ routes })
    }
        
    

    document.addEventListener("DOMContentLoaded", function() {
        let app = new Vue(built)
        app.$mount("#app")
    });
}

