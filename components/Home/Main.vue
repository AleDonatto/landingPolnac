<template>
    <div>
        <div v-if="pageHome !== null">

            <div class="" v-if="pageHome.showBanner === true">
                <v-carousel v-model="model" :height="windowSize > 1129 ? '560' : '690' " hide-delimiter-background show-arrows-on-hover cycle >
                    <v-carousel-item v-for="(color, index ) in pageHome.banner" :key="index">
                    <!--<v-carousel-item v-for="(color, index ) in 1" :key="index">-->
                        <!--:class="{'bg-img' : index !== 2}"-->
                        <v-sheet tile class="bg-img" :class="windowSize > 1129 ? 'size-bg' : 'size-bg-mb'" :style="{ backgroundImage: `linear-gradient(to right, rgba(46, 46, 101, 0.7), rgba(119, 61, 189, 0.7)),url(${basePathApiUrl + color.image.data[0].attributes.url })` }">
                            <video :src="basePathApiUrl + color.image.data[0].attributes.url" autoplay="true" controls muted="muted" loop="true" v-if="color.image.data[0].attributes.name.includes('.mp4')" :class="{'size-video' : windowSize > 1129, 'size-video-mb': windowSize < 1129}"
                                :style="{ backgroundImage: `linear-gradient(to right, rgba(46, 46, 101, 0.7), rgba(119, 61, 189, 0.7))` }"></video>
                            <v-container>
                                <v-row >
                                    <v-col cols="12" xl="8" md="6" sm="12" xs="12" class="py-10 my-10" align="star">
                                        <h1 class="font-archivo font-title pa-5 text-video">
                                            <!--<mark class="text-mark white--text">{{ $t('home.portafolio') }}</mark>-->
                                            <span v-html="color.title" class=""></span>
                                        </h1>

                                        <div class="subtitle-1 white--text mt-3 pa-5 text-video" :class="{'text-left': windowSize > 1129, 'text-center': windowSize < 1129}" v-html="color.subtitle"></div>

                                        <div class="d-flex" :class="{'justify-center': windowSize < 1129, 'justify-start ml-5 mb-10': windowSize > 1129}">
                                            <v-btn rounded class="rounded-xl px-10 py-5 black--text body-1 text-none primary-color" @click="chatWhatsapp">
                                                <v-icon class="mr-2" dark>mdi-whatsapp</v-icon> (55) 2585 2650
                                            </v-btn>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xl="4" lg="6" md="6"></v-col>
                                </v-row>
                            </v-container>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </div>
        </div>

        <div v-if="pageHome === null">
            <v-sheet class="pa-3">
                <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
            </v-sheet>
        </div>
        <div v-else>

            <section v-if="pageHome.showDescription === true">
                <v-container class="">
                    <div class="my-10 mx-10">
                        <v-row justify="center">
                            <v-col cols="12" xl="9" class="">
                                <v-row>
                                    <v-col md="6" sm="12" xs="12" align-self="center" align="center">
                                        <div class="font-archivo font-title text-left" :class="{'headline': windowSize < 1129, 'display-1': windowSize > 1129}" v-html="pageHome.txtPolnac"></div>

                                        <iframe class="rounded-lg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="310" type="text/html" 
                                            :src="pageHome.linkVideo" v-if="windowSize < 1129">
                                        </iframe>

                                        <div class="text-body-all my-5 text-left">
                                            <p v-html="pageHome.txtDescriptionPolnac"></p>
                                        </div>

                                    </v-col>
                                    <v-col md="6" sm="12" xs="5" class="" align="center" v-if="windowSize > 1129">
                                        <iframe class="rounded-lg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="310" type="text/html" 
                                            :src="pageHome.linkVideo">
                                        </iframe>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </div>
                </v-container>
            </section>

            <section v-if="pageHome.showFeatured === true">
                <div class="mt-10 mb-16">
                    <h1 class="font-archivo font-size-40 font-weight-bold text-center my-10" v-html="pageHome.txtTitleFeatured"></h1>
                    <v-row  v-if="windowSize > 1129 && this.pageHome.featured !== null">
                        <v-col xl="3" md="3" sm="12" xs="12" class="pa-0" v-for="(item, index) in this.pageHome.featured.slice(0,4)" :key="index">
                            <v-hover v-slot="{ hover }" class="des-1" :style="{ backgroundImage: `linear-gradient(rgba(46, 46, 101, 0.8), rgba(119, 61, 189, 0.8)),url(${basePathApiUrl + item.images.data[0].attributes.url })` }">
                                <v-card class="shadow-out">
                                    <v-img src="" style="height:307px" alt="pruebas">
                                        <v-expand-transition class="size-box" style="height:100%;">
                                            
                                            <div v-if="hover" class="transition-fast-in-fast-out bg-color-hover" style="height: 100%;">
                                                <div class="bg-color-hover pa-5">
                                                    <h4 class="font-size-20 white--text text-img">{{item.title}}</h4>
                                                    <div class="white--text mt-1" v-html="item.description"></div>
                                                </div>
                                            </div>
                                        </v-expand-transition>
                                    </v-img>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                    <v-row v-else-if="windowSize < 1129 && this.pageHome.featured !== null">
                        <v-col cols="12">
                            <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
                                <v-carousel-item v-for="(item, index) in this.pageHome.featured" :key="'d' + item.id + index">
                                    <v-sheet height="100%">
                                        <v-hover v-slot="{ hover }" class="des-1" :style="{ backgroundImage: `linear-gradient(rgba(46, 46, 101, 0.8), rgba(119, 61, 189, 0.8)),url(${basePathApiUrl + item.images.data[0].attributes.url })` }">
                                            <v-card class="shadow-out">
                                                <v-img src="" style="height:307px" alt="pruebas">
                                                    <v-expand-transition class="size-box" style="height:100%;">
                                                        
                                                        <div v-if="hover" class="transition-fast-in-fast-out bg-color-hover" style="height: 100%;">
                                                            <div class="bg-color-hover pa-5">
                                                                <h4 class="font-size-20 white--text text-img">{{item.title}}</h4>
                                                                <div class="white--text mt-1" v-html="item.description"></div>
                                                            </div>
                                                        </div>
                                                    </v-expand-transition>
                                                </v-img>
                                            </v-card>
                                        </v-hover>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                        </v-col>
                    </v-row>
                    <div class="d-flex justify-center my-10">
                    </div>
                </div>
            </section>

            <section v-if="pageHome.showTestimonials === true">
                <div class="bg-testimonios mb-10">
                    <div class="mt-10">
                        <h1 class="font-archivo font-size-40 font-weight-bold white--text text-center mt-10 mb-10 pt-7">{{ pageHome.txtTitleTestimonials }}</h1>
                    </div>
                    <v-row v-if="windowSize > 1129">
                        <v-sheet class="mx-auto bg-testimonios mb-10" max-width="97%">
                            <v-slide-group v-model="model" class="pa-4" show-arrows>
                                <v-slide-item v-for="(testim, i) in pageHome.testimonials" :key="'t'+i">
                                    <v-card class="my-2 mx-5" height="330" width="440" :color="i % 2 === 0 ? 'white': 'rgba(9, 187, 174, 1)'">
                                        <v-card-text>
                                            <p class="font-archivo font-size-24 text-uppercase text-center font-weight-bold mt-2" :class="{'text-color-testimonios': i % 2 === 0, 'black--text': i % 2 !== 0 }">
                                                {{ testim.Company }}
                                            </p>
                                            <p class="font-archivo font-size-20 ma-0 font-weight-bold text-center" :class="{'text-color-testimonios': i % 2 === 0, 'black--text': i % 2 !== 0 }">
                                                {{testim.Name }}
                                            </p>
                                            <p class="ma-0 text-center" :class="{'text-color-testimonios': i % 2 === 0, 'black--text': i % 2 !== 0 }">{{ testim.Ocupation }}</p>
                                            <div class="text--primary text-center">
                                                <v-icon :color="i % 2 === 0 ? 'rgba(9, 187, 174, 1)': 'white'">mdi-star</v-icon>
                                                <v-icon :color="i % 2 === 0 ? 'rgba(9, 187, 174, 1)': 'white'">mdi-star</v-icon>
                                                <v-icon :color="i % 2 === 0 ? 'rgba(9, 187, 174, 1)': 'white'">mdi-star</v-icon>
                                                <v-icon :color="i % 2 === 0 ? 'rgba(9, 187, 174, 1)': 'white'">mdi-star</v-icon>
                                            </div>
                                            <div class="mt-2 text-center" v-html="testim.Message"></div>
                                        </v-card-text>
                                        <v-card-actions>
                                        </v-card-actions>
                                    </v-card>
                                </v-slide-item>
                            </v-slide-group>
                        </v-sheet>
                    </v-row>
                    <v-row v-if="windowSize < 1129">
                        <v-carousel :show-arrows="false" hide-delimiter-background class="mt-5 mb-16" height="380">
                            <v-carousel-item v-for="(item,i) in pageHome.testimonials" :key="i" >
                                <v-card class="my-2 mx-4" height="300" :color="i % 2 === 0 ? 'white': 'rgba(9, 187, 174, 1)'">
                                    <v-card-text>
                                        <p class="font-archivo font-size-24 text-uppercase text-center font-weight-bold mt-2 " :class="{'text-color-testimonios': i % 2 === 0, 'black--text': i % 2 !== 0 }">
                                            {{ item.Company }}
                                        </p>
                                        <p class="font-archivo font-size-20 ma-0 font-weight-bold text-center" :class="{'text-color-testimonios': i % 2 === 0, 'black--text': i % 2 !== 0 }">
                                            {{item.Name }}
                                        </p>
                                        <p class="ma-0 text-center" :class="{'text-color-testimonios': i % 2 === 0, 'black--text': i % 2 !== 0 }">{{ item.Ocupation }}</p>
                                        <div class="text--primary text-center">
                                            <v-icon :color="i % 2 === 0 ? 'rgba(9, 187, 174, 1)': 'white'">mdi-star</v-icon>
                                            <v-icon :color="i % 2 === 0 ? 'rgba(9, 187, 174, 1)': 'white'">mdi-star</v-icon>
                                            <v-icon :color="i % 2 === 0 ? 'rgba(9, 187, 174, 1)': 'white'">mdi-star</v-icon>
                                            <v-icon :color="i % 2 === 0 ? 'rgba(9, 187, 174, 1)': 'white'">mdi-star</v-icon>
                                        </div>
                                        <div class="mt-2 text-center" v-html="item.Message"></div>
                                    </v-card-text>
                                    <v-card-actions>
                                    </v-card-actions>
                                </v-card>
                                    
                            </v-carousel-item>
                        </v-carousel>
                    </v-row>
                        
                    <!---<v-carousel :show-arrows="false" hide-delimiter-background class="mt-5 mb-16" height="600">
                        <v-carousel-item v-for="(item,i) in pageHome.testimonials" :key="i" >
                            
                            <v-row justify="center" class="mx-5" v-if="windowSize > 1129">
                                <v-col cols="12" lg="4" md="4" sm="12" xs="12" align="center" align-self="center">
                                    <v-card class="my-2" height="300" color="white">
                                        <v-card-text>
                                            <p class="font-archivo font-size-24 text-uppercase text-center font-weight-bold mt-2 text-color-testimonios">
                                                CHIAPLAST
                                            </p>
                                            <p class="font-archivo font-size-20 ma-0 font-weight-bold text-center text-color-testimonios">
                                                Mar??a Luisa Hern??ndez V??squez
                                            </p>
                                            <p class="ma-0 text-center text-color-testimonios">Gerente de Compras</p>
                                            <div class="text--primary text-center">
                                                <v-icon color="#19D3C5">mdi-star</v-icon>
                                                <v-icon color="#19D3C5">mdi-star</v-icon>
                                                <v-icon color="#19D3C5">mdi-star</v-icon>
                                                <v-icon color="#19D3C5">mdi-star</v-icon>
                                            </div>
                                            <p class="mt-2 text-center">
                                                ???Se ha consolidado una estrecha relaci??n comercial con POLNAC, ya que nos han ofrecido precios atractivos, 
                                                calidad en materiales y puntualidad en las entregas, y esto, a su vez, nos ha permitido optimizar nuestros 
                                                procesos y ser m??s competitivos en el mercado???.
                                            </p>
                                        </v-card-text>
                                        <v-card-actions>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" lg="4" md="4" sm="12" xs="12" align="center" align-self="center">
                                    <v-card class=" my-2" height="330" color="rgba(9, 187, 174, 1)">
                                        <v-card-text>
                                            <p class="font-archivo font-size-24 text-uppercase text-center font-weight-bold mt-2 black--text" >
                                                Criser
                                            </p>
                                            <p class="font-archivo font-size-20 ma-0 font-weight-bold text-center black--text">
                                                Juan Carlos Aguirre Palomo
                                            </p>
                                            <p class="ma-0 text-center black--text">Jefe de Planeaci??n y Compras</p>
                                            <div class="text--primary text-center">
                                                <v-icon color="white" >mdi-star</v-icon>
                                                <v-icon color="white">mdi-star</v-icon>
                                                <v-icon color="white">mdi-star</v-icon>
                                                <v-icon color="white">mdi-star</v-icon>
                                            </div>
                                            <p class="mt-2 text-center">
                                                ???Agradecemos mucho su apertura para negociar cualquier tema comercial y de log??stica, 
                                                as?? como su apoyo en urgencias y b??squeda de nuevos materiales. Siempre buscando aportar 
                                                soluciones y atentos a las recomendaciones para mejorar su servicio???.
                                            </p>
                                        </v-card-text>
                                        <v-card-actions>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" lg="4" md="4" sm="12" xs="12" align="center" align-self="center">
                                    <v-card class="my-2" height="300" color="white">
                                        <v-card-text>
                                            <p class="font-archivo font-size-24 text-uppercase text-center font-weight-bold mt-2 text-color-testimonios">
                                                {{ windowSize > 1390 ?  'Pl??sticos T??cnicos Mexicanos' : ' P T M ' }}
                                            </p>
                                            <p class="ma-0 font-archivo font-size-20 font-weight-bold text-center text-color-testimonios">
                                                Jos?? Juan Reyes Ch??vez
                                            </p>
                                            <p class="ma-0 text-center text-color-testimonios">Comprador</p>
                                            <div class="text--primary text-center">
                                                <v-icon color="#19D3C5">mdi-star</v-icon>
                                                <v-icon color="#19D3C5">mdi-star</v-icon>
                                                <v-icon color="#19D3C5">mdi-star</v-icon>
                                                <v-icon color="#19D3C5">mdi-star</v-icon>
                                            </div>
                                            <p class="mt-2 text-center">
                                                ???En POLNAC hemos encontrado soluciones pr??cticas para las necesidades de nuestra compa????a, 
                                                inmediata respuesta y variedad en productos, as?? como un amplio conocimiento t??cnico que nos 
                                                ha permitido ser m??s eficientes en nuestros procesos y costos???.
                                            </p>
                                        </v-card-text>
                                        <v-card-actions>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                            </v-row>

                            <v-row v-if="windowSize < 1129 ">
                                <v-col cols="12" align="center" align-self="center">
                                    <v-card class="mx-5 my-2" height="330" color="rgba(9, 187, 174, 1)">
                                        <v-card-text>
                                            <p class="text-h5 text-uppercase text-center font-weight-bold mt-5 black--text" >
                                                Criser
                                            </p>
                                            <p class="ma-0 text-h6 text-center black--text">
                                                Juan Carlos Aguirre Palomo
                                            </p>
                                            <p class="ma-0 text-center black--text">Jefe de Planeaci??n y Compras</p>
                                            <div class="text--primary text-center">
                                                <v-icon color="white" >mdi-star</v-icon>
                                                <v-icon color="white">mdi-star</v-icon>
                                                <v-icon color="white">mdi-star</v-icon>
                                                <v-icon color="white">mdi-star</v-icon>
                                            </div>
                                            <p class="mt-2 text-center">
                                                ???Agradecemos mucho su apertura para negociar cualquier tema comercial y de log??stica, 
                                                as?? como su apoyo en urgencias y b??squeda de nuevos materiales. Siempre buscando aportar 
                                                soluciones y atentos a las recomendaciones para mejorar su servicio???.
                                            </p>
                                        </v-card-text>
                                        <v-card-actions>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                            </v-row>

                        </v-carousel-item>
                    </v-carousel>-->
                </div>
            </section>

            <section v-if="pageHome.showTecnologies === true">
                <v-container>
                    <v-row justify="center">
                        <v-col cols="12" xl="9" lg="12" md="12">
                            <v-row justify="center" class="mt-10 mx-2">
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12" align="center">
                                    <div class="display-2 text-left" v-html="pageHome.txtCompany"></div>

                                    <div class="text-body-all mt-2 text-justify" v-html="pageHome.txtDescriptionCompany"></div>
                                </v-col>
                                <v-col lg="6" md="6" sm="12" xs="12" align="center">
                                    <v-img :src="basePathApiUrl + pageHome.imgOffices.data.attributes.url" contain max-height="450" max-width="450" alt="sucursales"></v-img>
                                </v-col>
                                <v-col v-if="windowSize < 1129">
                                    <div class="text-body-all text-justify" v-html="pageHome.txtOffices"></div>
                                </v-col>
                            </v-row>
                            <v-row :class="{'max-5': windowSize>1129 }">
                                
                                <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-for="(item, index) in pageHome.tecnologies.slice(0,2)" :key="index">                                
                                    <h1 class="text-map font-weight-bold text-center" :class="{'display-1': windowSize>1129, 'text-h4': windowSize < 1129}" v-html="item.title"></h1>
                                    <div class="text-body-all text-center" v-html="item.description"></div>
                                </v-col>
                                <v-col lg="6" md="6" sm="12" xs="12" v-if="windowSize > 1129">
                                    <div class="text-body-all text-left" v-html="pageHome.txtOffices"></div>
                                </v-col>
                            </v-row>

                            <v-row justify="center" class="mx-5">
                                <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" v-for="(item, index) in pageHome.tecnologies.slice(2, 8)" :key="index">
                                    <v-img :src="basePathApiUrl + item.image.data.attributes.url " contain max-height="70"></v-img>
                                    <div class="text-body-all text-center mt-2" v-html="item.description"></div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    
                </v-container>
            </section>

            <section v-if="pageHome.showForm === true">
                <div class="mt-10 bg-form" :style="{ backgroundImage: `url(${basePathApiUrl + pageHome.bgForm.data.attributes.url })` }">
                    <v-container>
                        <v-form @submit.prevent="">
                            <v-row justify="center" class="mt-10">
                                <v-col cols="12">
                                    <h1 class="text-center font-size-34 white--text font-archivo">{{pageHome.txtTitleForm}}</h1>
                                </v-col>
                            </v-row>
                            <v-row justify="center" class="mt-6 mb-16">
                                <v-col cols="12" lg="6" md="6">
                                    <v-text-field solo rounded label="Nombre Completo" class="" :rules="[rules.required]"></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" md="6">
                                    <v-text-field solo rounded label="Cargo" class="" :rules="[rules.required]"></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="6" md="6">
                                    <v-text-field solo rounded label="RFC" class="" :rules="[rules.required]"></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" md="6">
                                    <v-text-field solo rounded label="Raz??n social" class="" :rules="[rules.required]"></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="6" md="6">
                                    <v-text-field solo rounded label="Correo electr??nico" type="email" class="" :rules="[rules.required, rules.email]"></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" md="6">
                                    <v-text-field solo rounded label="Tel??fono" class=""></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="6" md="6">
                                    <v-text-field solo rounded label="Celular" class=""></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" md="6">
                                    <v-select solo rounded label="Pa??s" class="" :rules="[rules.required]"></v-select>
                                </v-col>

                                <v-col cols="12" lg="6" md="6">
                                    <v-select solo rounded label="Estado" class="" :rules="[rules.required]"></v-select>
                                </v-col>
                                <v-col cols="12" lg="6" md="6">
                                    <v-select solo rounded label="Ciudad" class="" :rules="[rules.required]"></v-select>
                                </v-col>

                                <v-col cols="12" lg="6" md="6">
                                    <v-select solo rounded label="Producto de inter??s" class="" :rules="[rules.required]"></v-select>
                                </v-col>
                                <v-col cols="12" lg="6" md="6">
                                    <v-text-field solo rounded label="Promedio de consumo de toneladas al mes" class="" :rules="[rules.required]"></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="6" md="6">
                                    <v-textarea solo rounded label="Cu??ntanos brevemente qu?? deseas consultar con nosotros." class=""></v-textarea>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" align="start">
                                    <div class="d-flex justify-start">
                                        <v-checkbox label="Aceptar" color="#19D3C5" :rules="[rules.required]" dark></v-checkbox>
                                        <a href="/terms/Aviso_de_Privacidad_POLNAC_abril_2022.pdf" target="_blank" class="pl-1 mt-5 white--text">Aviso de Privacidad</a>
                                    </div>
                                    <v-btn block color="#19D3C5" class="py-6 px-4 rounded-xl text-none text-center d-flex justify-space-between">
                                        <span class="text-center">Enviar</span>
                                    </v-btn>
                                </v-col>

                            </v-row>
                        </v-form>
                    </v-container>
                </div>
            </section>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data(){
        return {
            model: 2,
            rules: {
                required: (value) => !!value || "Required.",
                min: (v) => v.length >= 8 || "Min 8 characters",
                email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            },
        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize','pageHome', 'basePathApiUrl', 'productos'])
    },
    methods: {
        chatWhatsapp(){
            window.open('https://wa.me/525525852650')
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');

.bg-img{
    /*background-image: linear-gradient(to right, rgba(46, 46, 101, 0.7), rgba(119, 61, 189, 0.7)),url('../../static/bg-carousel-1.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 590px;
}

.bg-form{
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}

.font-title{
    /*font-family: 'Archivo' !important;*/
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0px;
}
.letters{
    color: #E0E621;
}

video{
    position: absolute;
    left: 0;
    top: 0;
} 

.size-video{
    width: 100%;
}

.size-video-mb{
    height: 100%;
}

.text-video{
    position: relative;
    overflow: hidden;
}


.des-1{
    /*background-image: url('../../static/destacados-1.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 300px;
    width: 600px;
}
.text-img{
    margin-top: 5vh;
}
.bg-testimonios{
    background-image: linear-gradient(rgba(61, 124, 201, 0.7), rgba(101, 93, 198,0.7)), url('../../static/testimonios.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
}
.font-title{
    /*font-family: 'Archivo' !important;*/
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0px;
}

.letters{
    color: #E0E621
}
.text-color-testimonios{
    color: #655DC6;
}

.text-map{
    color: #773DBD;
}

.text-teal{
    color: #19D3C5
}
.shadow-out{
    box-shadow: none !important;
}
.size-box{
    height: 300px;
    width: 100%;
}

.bg-color-hover{
    background-color: rgba(119, 61, 189, 0.6);
}
</style>