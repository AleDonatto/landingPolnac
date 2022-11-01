const urlContent = "https://crm.polnac.com"
export default {
    async getPageHome({commit, state}){

        let pageData
        pageData = await this.$axios.$get(`${urlContent}/api/landing?populate[banner][populate]=%2A&populate[images][populate]=%2A&populate[featured][populate]=%2A&populate[testimonials][populate]=%2A&populate[tecnologies][populate]=%2A&populate[bgForm][populate]=%2A&populate[imgOffices][populate]=%2A`)

        /*if(state.lang === 'eng')
            //pageData = await this.$axios.get('${urlContent}/api/home?populate[banner][populate]=%2A&populate[featured][populate]=%2A&populate[tecOffices][populate]=%2A&populate[alliances][populate]=%2A&populate[blog][populate]=%2A&populate[appointment][populate]=%2A&populate[imgOffices][populate]=%2A&locale=en')
            pageData = await this.$axios.$get(`${urlContent}/api/landing?populate[banner][populate]=%2A&populate[images][populate]=%2A&populate[featured][populate]=%2A&populate[testimonials][populate]=%2A&populate[tecnologies][populate]=%2A&pupolate[bgForm][populate]=%2A`)
        else
            pageData = await this.$axios.$get(`${urlContent}/api/landing?populate[banner][populate]=%2A&populate[images][populate]=%2A&populate[featured][populate]=%2A&populate[testimonials][populate]=%2A&populate[tecnologies][populate]=%2A&pupolate[bgForm][populate]=%2A`)*/
        
        //console.log(pageData)
        commit('StateAssign', {pageHome: pageData.data.attributes})
    },
    async getAllProducts({commit, state}){

        let pageData 
        if(state.lang === 'eng')
            pageData = await this.$axios.get(`${urlContent}/api/products?populate[imgBanner][populate]=%2A&populate[imgMiniature][populate]=%2A&populate[imagesHead][populate]=%2A&populate[imgCarousel][populate]=%2A&populate[imagesBody][populate]=%2A&populate[typeProduct][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.get(`${urlContent}/api/products?populate[imgBanner][populate]=%2A&populate[imgMiniature][populate]=%2A&populate[imagesHead][populate]=%2A&populate[imgCarousel][populate]=%2A&populate[imagesBody][populate]=%2A&populate[typeProduct][populate]=%2A&locale=es-MX`)
        
        commit('StateAssign', {productos: pageData.data})
    },
}