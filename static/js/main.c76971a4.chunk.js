(window.webpackJsonpmarket=window.webpackJsonpmarket||[]).push([[0],{27:function(e,t,n){},341:function(e,t,n){e.exports=n(411)},346:function(e,t,n){},351:function(e,t,n){},375:function(e,t,n){},378:function(e,t,n){},379:function(e,t,n){},380:function(e,t,n){},381:function(e,t,n){},392:function(e,t,n){},411:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(39),o=n.n(c),i=(n(346),n(8)),l=n(9),s=n(13),u=n(12),d=n(14),p=n(10),m=n(24),f=n(25),y=n(17),v=(n(351),n(27),n(352),n(5)),h=Object(v.g)(Object(v.h)(String),Object(v.n)("."),v.f),E=Object(v.a)([v.i,v.j]),b=Object(v.c)(E),g=Object(v.m)(b),k=(Object(v.d)((function(e,t){return g(h(e),t)})),Object(v.d)((function(e,t){return Object(v.l)(h(e),t)})),function(){throw Error("You have to provide an actionType")}),C=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k(),t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Object(v.i)(n)?Object(v.k)(0):Object(v.e)(v.o);return function(){for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];var o=Object(v.i)(n)&&Object(v.i)(r)?{}:{payload:a(r,n)},i=Object(v.b)("type",e,o);return i}},O="GET_PRAYER_TIME_REQUEST",j="GET_PRAYER_TIME_BY_CITY_REQUEST",I=C(O,"city","country","method","month","year"),P=(C("GET_PRAYER_TIME_REQUEST_ERROR","error"),C("GET_PRAYER_TIME_REQUEST_SUCCESS"),C(j,"city")),S=C("GET_PRAYER_TIME_BY_CITY_REQUEST_ERROR","error"),T=C("GET_PRAYER_TIME_BY_CITY_REQUEST_SUCCESS"),B=(n(374),n(375),n(41)),N=n(115),D=n.n(N),R=(n(378),n(23));n(379);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderPrice=function(){var e=n.props,t=e.color,r=e.isOldPrice,c=e.price.toString().split("."),o=c[0],i=c[1],l={color:t,margin:0},s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(R.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l,{textDecoration:"line-through"});return r?a.a.createElement("div",{className:"priceBlock"},a.a.createElement("h3",{style:s},o," "),a.a.createElement("h6",{style:s},i),a.a.createElement("h3",{style:s}," DH")):a.a.createElement("div",{className:"priceBlock"},a.a.createElement("h2",{style:l},o," "),a.a.createElement("h5",{style:l},i),a.a.createElement("h2",{style:l}," DH"))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.price;return E(e)?null:this.renderPrice()}}]),t}(r.Component);function M(e){return{type:"SELECT_PRODUCT",payload:e}}function A(e){return{type:"UNSELECT_PRODUCT",payload:e}}function x(){return{type:"UNSELECT_ALL_PRODUCTS",payload:null}}w.defaultProps={isOldPrice:!1,color:"black",price:0};var U=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderOldPrice=function(){var e=n.props.product,t=e.oldPrice,r=e.price;return E(t)||0===t?null:t<=r?null:a.a.createElement(w,{color:"grey",isOldPrice:!0,price:t})},n.renderPrice=function(){var e=n.props.product.price;return a.a.createElement(w,{color:"red",price:e})},n.renderTitle=function(){var e=n.props.product.title;return a.a.createElement("h2",{style:{margin:"0px"}},e.toUpperCase())},n.renderRating=function(){var e=n.props.product.rating;return a.a.createElement("div",null,a.a.createElement(D.a,{name:"rate1",starCount:5,value:e}))},n.renderDescription=function(){var e=n.props.product.description;return e?a.a.createElement(B.CollapsibleComponent,{className:"description"},a.a.createElement(B.CollapsibleHead,{className:"collapsibleHead"},"Voir le descriptif complet"),a.a.createElement(B.CollapsibleContent,{className:"collapsibleContent"},a.a.createElement("p",null,e))):null},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.product,n=t.alt,r=t.src;return E(r)?null:a.a.createElement("div",{className:"Product"},a.a.createElement("div",{style:{width:"100%"}},a.a.createElement("div",{style:{display:"inline-flex",flexFlow:"row wrap"}},a.a.createElement("div",null,this.renderTitle(),a.a.createElement("img",{src:r,alt:n,className:"imageCSS"}),this.renderRating()),a.a.createElement("div",null,a.a.createElement("div",{style:{display:"inline-grid"}},this.renderOldPrice(),this.renderPrice()),a.a.createElement("div",{className:"descriptionContainer"},this.renderDescription()),a.a.createElement("div",{onClick:function(){return e.props.selectProduct(t)}},a.a.createElement("div",{className:"addButton"},"Ajouter au panier"))))),a.a.createElement("hr",null))}}]),t}(r.Component);U.defaultProps={product:{alt:"",description:"",oldPrice:0,price:0,productId:0,rating:3,src:"",title:""}};var L=Object(m.b)((function(e){return{basketProducts:e.basketProducts}}),(function(e){return Object(p.b)({selectProduct:M},e)}))(U),H=n(65),Y=n.n(H),F=n(66),G=n.n(F),q=n(67),Q=n.n(q),z=n(68),V=n.n(z),J=n(69),K=n.n(J);var W=function(e,t){switch(t){case X.fr:return e.fr;case X.ar:return e.ar;default:return e.en}},X={ar:"ar",fr:"fr",en:"en"},Z=function(){return(new Date).getUTCFullYear()},$={ar:"\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629 \xa9 ".concat(Z()),fr:"\xa9 Tous droits r\xe9serv\xe9s - ".concat(Z()),en:"Copyright  ".concat(Z()," \xa9 All Rights Reserved")},ee=[{productId:1,price:5299.99,rating:3,title:"NIKON D5300 Noir",src:Y.a,alt:Y.a,description:"NIKON D5300 Noir + AF-P 18-55VR Appareil photo reflex - Capteur CMOS format DX 24.2 M\xe9gapixels - \xc9cran orientable 8,1 cm (3,2 pouces) - Wi-Fi et GPS int\xe9gr\xe9s - Processeur EXPEED 4 - Sensibilit\xe9 \xe9lev\xe9e (jusqu\u2019\xe0 12 800 ISO) - Vid\xe9os en Full HD - Support d\u2018enregistrement: Cartes m\xe9moire SD / SDHC et SDXC compatibles UHS-I - USB Hi-Speed - Sortie vid\xe9o: NTSC, PAL - Sortie mini HDMI (type C)"},{productId:2,oldPrice:2699.99,price:2499.99,rating:4,title:"Huawei p20 lite",src:V.a,alt:V.a,description:"Le Huawei P20 Lite est un smartphone \xe9quip\xe9 d'un \xe9cran bord \xe0 bord de 5,84 pouces au format 19/9. Fonctionnant avec Android 8 et la surcouche EMUI 8, il embarque le processeur Kirin 659 coupl\xe9 \xe0 4 Go de m\xe9moire vive et 64 Go d'espace de stockage extensible. C\xf4t\xe9 photo, il dispose d'un double module principal (16 Mpix + 2 Mpix) et pour les selfies d'un capteur de 16 Mpix. "},{productId:3,oldPrice:2009.99,price:1539.99,rating:4.9,title:"Drone falcon",src:G.a,alt:G.a,description:"Le R-FALCON se r\xe9invente avec une nouvelle version du mod\xe8le phare de PNJ. D\xe9couvrez le R-Falcon FHD maintenant \xe9quip\xe9 d\u2019une cam\xe9ra grand angle Full HD."},{productId:4,oldPrice:13959.99,price:13718.99,rating:2,title:"Hp envy",src:K.a,alt:K.a,description:"HP ENVY Notebook 17-ae001nk: Processeur Intel Core i7-7500U (2,7 GHz jusqu\u2019\xe0 3,5 GHz, 4 Mo de m\xe9moire cache, 2 c\u0153urs), M\xe9moire Vive 16Go, Disque Dur 1To SATA+ 128 Go SSD, Carte graphique NVIDIA GeForce 940MX 4 Go, Ecran 17,3 pouces FHD (1 920 x 1080), Intel 802.11ac et Bluetooth 4.2, 1 port USB 3.1 Type-C 1e g\xe9n\xe9ration (transfert de donn\xe9e), DP1.2; 3 ports USB 3.1 1e g\xe9n\xe9ration ; 1 port HDMI; 1 port RJ-45; 1 prise combin\xe9e casque/microphone, 1 lecteur de cartes multim\xe9dias SD multiformat, Windows 10 Famille 64, GARANTIE 1 AN"},{productId:5,oldPrice:2399.99,price:2199.99,rating:1,title:"HP Z420",src:Q.a,alt:Q.a,description:"La performance que vous souhaitez. La valeur dont vous avez besoin. Le HP Z420 vous promet l\u2019extensibilit\xe9 professionnelle dans le format d\u2019une mini-tour accessible sans outils, le tout pour un prix d\xe9fiant toute concurrence. Muni d\u2019un maximum de 8 processeurs discrets, de la plus r\xe9cente technologie de traitement et la puissance d\u2019E/S d\u2019IntelMD, et de la plus r\xe9cente technologie graphique provenant des chefs de file du domaine, le station de travail HP Z420 a toute la puissance dont vous avez besoin pour faire le travail."}],te=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,E(ee)?null:ee.map((function(e){return E(e)?null:a.a.createElement(L,{product:e,key:e.productId})})))}}]),t}(r.Component),ne=n(413),re=(n(380),n(70)),ae=n.n(re),ce=n(71),oe=n.n(ce),ie=n(72),le=n.n(ie),se=n(73),ue=n.n(se),de=n(74),pe=n.n(de),me=n(75),fe=n.n(me),ye=n(76),ve=n.n(ye),he=n(77),Ee=n.n(he),be=n(78),ge=n.n(be),ke=n(79),Ce=n.n(ke),Oe=n(80),je=n.n(Oe),Ie=(n(381),n(81)),Pe=n.n(Ie),Se=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderBasketItem=function(e){var t=e.productId,r=e.count,c=e.src,o=e.alt,i=(e.price*r).toFixed(2);return a.a.createElement("div",{className:"BasketItem",key:t},a.a.createElement("div",{className:"BasketImage"},a.a.createElement("img",{className:"BasketItemImage",src:c,alt:o})),a.a.createElement("div",null,a.a.createElement("div",{className:"BasketCounter"},r>1?a.a.createElement("div",{className:"BasketOperation",onClick:function(){return n.props.unselectProduct(e)}},"-"):a.a.createElement("div",{className:"BasketItemTrash",onClick:function(){window.confirm("\xeates-vous s\xfbr de vouloir supprimer cet \xe9l\xe9ment ?")&&n.props.unselectProduct(e)}},a.a.createElement("div",null,a.a.createElement("img",{className:"MenuItemIcon",src:Pe.a,alt:Pe.a}),a.a.createElement("span",{className:"icon-bin"}))),a.a.createElement("div",{className:"BasketCount"},r),a.a.createElement("div",{className:"BasketOperation",onClick:function(){return n.props.selectProduct(e)}},"+"),a.a.createElement("div",{className:"BasketItemPrice"},i," DH")),a.a.createElement("hr",null)))},n.getTotalPrice=function(){var e=n.props.basketProducts,t=0;return e.forEach((function(e){t+=e.count*e.price})),t.toFixed(2)},n.handleCancelClick=function(){n.props.unselectAllProducts(),n.props.onCloseBasket()},n.renderBasketItems=function(){var e=n.props.basketProducts;return a.a.createElement("div",{className:"Basket"},E(e)?null:e.map((function(e){return n.renderBasketItem(e)})),a.a.createElement("div",{className:"BasketTotalPrice"},"Prix total :",a.a.createElement("div",{className:"TotalPrice"},n.getTotalPrice()," DH")),a.a.createElement(y.b,{to:"/basket",onClick:function(){return n.props.onCloseBasket()}},a.a.createElement("div",{className:"BasketCheck"},"Valider la commande")),a.a.createElement("div",{className:"BasketCancelation",onClick:function(){return n.handleCancelClick()}},"Annuler la commande"))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.displayBasket?a.a.createElement("div",{className:"BasketContainer"},this.renderBasketItems()):null}}]),t}(r.Component);Se.defaultProps={displayBasket:!1,onCloseBasket:function(){}};var Te=Object(m.b)((function(e){return{basketProducts:e.basketProducts}}),(function(e){return Object(p.b)({selectProduct:M,unselectProduct:A,unselectAllProducts:x},e)}))(Se),Be=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleDisplayBasket=function(){n.setState((function(){return{isBasketDisplayed:!n.state.isBasketDisplayed}})),n.props.onOpenBasket()},n.state={isBasketDisplayed:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderContent",value:function(){var e=this,t=this.props,n=t.displaySideMenu,r=t.isConnected;return a.a.createElement(ne.a,{key:"swipeLine",in:n,timeout:200,unmountOnExit:!0,classNames:"Overlayer"},a.a.createElement("div",{className:"MenuContent"},a.a.createElement("div",null,a.a.createElement("div",{className:"CloseContainer"},a.a.createElement("img",{className:"close",src:ue.a,alt:ue.a,onClick:function(){return e.props.onClose()}})),a.a.createElement("div",{className:"MenuItems"},a.a.createElement(y.b,{to:"/",onClick:function(){return e.props.onClose()}},a.a.createElement("div",{className:"MenuItem"},a.a.createElement("img",{className:"MenuItemIcon",src:oe.a,alt:oe.a}),"Accueil")),a.a.createElement(y.b,{to:"/categories",onClick:function(){return e.props.onClose()}},a.a.createElement("div",{className:"MenuItem"},a.a.createElement("img",{className:"MenuItemIcon",src:fe.a,alt:fe.a}),"Toutes les cat\xe9gories")),a.a.createElement("hr",null),a.a.createElement(y.b,{to:"/orders",onClick:function(){return e.props.onClose()}},a.a.createElement("div",{className:"MenuItem"},a.a.createElement("img",{className:"MenuItemIcon",src:ge.a,alt:ge.a}),"Mes commandes")),a.a.createElement(y.b,{to:"/myAccount",onClick:function(){return e.props.onClose()}},a.a.createElement("div",{className:"MenuItem"},a.a.createElement("img",{className:"MenuItemIcon",src:je.a,alt:je.a}),"Mon compte")),a.a.createElement("hr",null),a.a.createElement(y.b,{to:"/legalNotice",onClick:function(){return e.props.onClose()}},a.a.createElement("div",{className:"MenuItem"},a.a.createElement("img",{className:"MenuItemIcon",src:ae.a,alt:ae.a}),"Mentions l\xe9gales")),r?a.a.createElement(y.b,{to:"/connect",onClick:function(){return e.props.onClose()}},a.a.createElement("div",{className:"MenuItem"},a.a.createElement("img",{className:"MenuItemIcon",src:ve.a,alt:ve.a}),"Se connecter")):a.a.createElement(y.b,{to:"/disconnect",onClick:function(){return e.props.onClose()}},a.a.createElement("div",{className:"MenuItem"},a.a.createElement("img",{className:"MenuItemIcon",src:Ee.a,alt:Ee.a}),"Se d\xe9connecter"))))))}},{key:"render",value:function(){var e=this,t=this.props,n=t.displayBasket,r=t.onClose;return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"MenuContainer"},a.a.createElement("img",{className:"Image1",src:Ce.a,alt:Ce.a,onClick:function(){return r()}}),a.a.createElement(y.b,{className:"Title",to:"/"},"MARKET"),a.a.createElement("img",{className:"Image2",src:pe.a,alt:pe.a}),a.a.createElement("img",{className:"Image3",src:le.a,alt:le.a,onClick:function(){return e.handleDisplayBasket()}})),a.a.createElement(Te,{onCloseBasket:function(){return e.handleDisplayBasket()},displayBasket:n}),a.a.createElement("div",null,this.renderContent()))}}]),t}(r.Component);Be.defaultProps={displaySideMenu:!1,displayBasket:!1,isConnected:!0,onClose:function(){},onOpenBasket:function(){}};var Ne=n(32),De=(n(392),n(84)),Re=n.n(De),_e=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={value:""},n.handleChange=n.handleChange.bind(Object(Ne.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(Ne.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"textContainer"},a.a.createElement("img",{className:"img",src:Re.a,alt:Re.a}),a.a.createElement("input",{className:"input",type:"text",value:this.state.value,onChange:this.handleChange,onClick:this.props.onSearchClick}))),a.a.createElement("input",{style:{display:"none"},type:"submit",value:"Submit"}))}}]),t}(r.Component);_e.defaultProps={onSearchClick:function(){}};var we=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){var t=n.props,r=t.country,a=t.getPrayerTime,c=new Date;if(E(e))return null;a(e.key,r.key,2,c.getMonth()+1,c.getFullYear())},n.handleDisplayMenu=function(){n.handleCloseAll(),n.setState((function(){return{isMenuDisplayed:!n.state.isMenuDisplayed,isBasketDisplayed:!1}})),n.handleDisplayBlackBackground(!n.state.isMenuDisplayed)},n.handleDisplayBasket=function(){n.handleCloseAll(),n.setState((function(){return{isBasketDisplayed:!n.state.isBasketDisplayed,isMenuDisplayed:!1}})),n.handleDisplayBlackBackground(!n.state.isBasketDisplayed)},n.handleDisplayBlackBackground=function(e){n.setState((function(){return{isBlackBackgroundDisplayed:e}}))},n.handleCloseAll=function(){n.setState((function(){return{isMenuDisplayed:!1,isBlackBackgroundDisplayed:!1,isBasketDisplayed:!1}}))},n.renderHeader=function(){return a.a.createElement("header",{className:"App-header"},a.a.createElement(Be,{displaySideMenu:n.state.isMenuDisplayed,displayBasket:n.state.isBasketDisplayed,onClose:n.handleDisplayMenu,onOpenBasket:n.handleDisplayBasket}),a.a.createElement(_e,{onSearchClick:n.handleCloseAll}))},n.renderFooter=function(){var e=n.props.culture;return a.a.createElement("footer",null,a.a.createElement("div",{className:"copyright"},W($,e)))},n.renderBaskettBody=function(){return a.a.createElement("h2",null,"Basket")},n.renderDisconnectBody=function(){return a.a.createElement("h2",null,"Se d\xe9connecter")},n.renderConnectBody=function(){return a.a.createElement("h2",null,"Se connecter")},n.renderLegalNoticeBody=function(){return a.a.createElement("h2",null,"Mentions l\xe9gales")},n.renderMyAccountBody=function(){return a.a.createElement("h2",null,"Mon compte")},n.renderOrdersBody=function(){return a.a.createElement("h2",null,"Mes commandes")},n.renderCategoriesBody=function(){return a.a.createElement("h2",null,"Toutes les cat\xe9gories")},n.renderHomeBody=function(){return a.a.createElement("div",{className:"App-Container"},a.a.createElement("div",{className:"App-block"},a.a.createElement(te,null)))},n.renderRoute=function(e,t,r,c){var o=n.state.isBlackBackgroundDisplayed;return a.a.createElement(f.a,{path:e},a.a.createElement("div",{className:"App"},t?n.renderHeader():null,a.a.createElement("div",{className:o?"BlackBackground":"",onClick:o?function(){return n.handleCloseAll()}:void 0},a.a.createElement("div",{className:o?"App-body disabledbutton":"App-body"},a.a.createElement("div",null,r))),c?n.renderFooter():null))},n.state={isBlackBackgroundDisplayed:!1,isMenuDisplayed:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(y.a,null,a.a.createElement(f.c,null,this.renderRoute("/basket",!0,this.renderBaskettBody(),!0),this.renderRoute("/disconnect",!0,this.renderDisconnectBody(),!0),this.renderRoute("/connect",!0,this.renderConnectBody(),!0),this.renderRoute("/legalNotice",!0,this.renderLegalNoticeBody(),!0),this.renderRoute("/myAccount",!0,this.renderMyAccountBody(),!0),this.renderRoute("/orders",!0,this.renderOrdersBody(),!0),this.renderRoute("/categories",!0,this.renderCategoriesBody(),!0),this.renderRoute("/",!0,this.renderHomeBody(),!0)))}}]),t}(r.Component);we.defaultProps={culture:X.ar};var Me=Object(m.b)((function(e){return{prayerTimeInformations:e.prayerTimeInformations,city:e.activeCity,country:e.activeCountry,culture:e.activeCulture}}),(function(e){return{getPrayerTime:Object(p.b)(I,e),getPrayerTimeByCity:Object(p.b)(P,e)}}))(we);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=n(20),xe=n.n(Ae),Ue=n(21),Le=n(117),He=n.n(Le),Ye=function(){function e(t){var n=this;Object(i.a)(this,e),this.addRequestInterceptor=function(e){return n.client.interceptors.request.use(e.fulfilled,e.rejected)},this.addResponseInterceptor=function(e){return n.client.interceptors.response.use(e.fulfilled,e.rejected)},this.client=He.a.create({baseURL:t.baseUrl,headers:t.headers,timeout:t.timeout||0,withCredentials:t.withCredentials||!1}),e.requestInterceptors.forEach((function(e){return n.addRequestInterceptor(e)})),e.responseInterceptors.forEach((function(e){n.addResponseInterceptor(e)}))}return Object(l.a)(e,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.client.get(e,{headers:t})}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.client.post(e,t,{headers:n})}},{key:"put",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.client.put(e,t,{headers:n})}},{key:"patch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.client.patch(e,t,{headers:n})}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.client.delete(e,{headers:t})}},{key:"request",value:function(e){return this.client.request(e)}}]),e}();function Fe(e){return new Ye(e)}Ye.requestInterceptors=[],Ye.responseInterceptors=[];var Ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Fe({baseUrl:e,withCredentials:!1,timeout:3e4,headers:Object.assign({},t)});return{getPrayerTimeByCountryAndCity:function(e,t,r,a,c){var o="/v1/calendarByCity?city=".concat(e,"&country=").concat(t,"&method=").concat(r,"&month=").concat(a,"&year=").concat(c);return n.get(o)},getPrayerTimeByCity:function(e){var t="/v2/times/today.json?city=".concat(e);return n.get(t)}}},qe="http://api.aladhan.com",Qe="https://api.pray.zone",ze=xe.a.mark(Ve);function Ve(e){var t,n,r,a,c;return xe.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,o.prev=1,n=t.city,r=Ge(Qe),o.next=6,Object(Ue.a)(r.getPrayerTimeByCity,n);case 6:return a=o.sent,c=a.data,o.next=10,Object(Ue.b)(T(c));case 10:o.next=17;break;case 12:return o.prev=12,o.t0=o.catch(1),console.log(o.t0),o.next=17,Object(Ue.b)(S(o.t0.toString()));case 17:case"end":return o.stop()}}),ze,null,[[1,12]])}var Je=xe.a.mark(Ke);function Ke(e){var t,n,r,a,c,o,i,l,s;return xe.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,u.prev=1,n=t.city,r=t.country,a=t.method,c=t.month,o=t.year,i=Ge(qe),u.next=6,Object(Ue.a)(i.getPrayerTimeByCountryAndCity,n,r,a,c,o);case 6:return l=u.sent,s=l.data,u.next=10,Object(Ue.b)(T(s));case 10:u.next=17;break;case 12:return u.prev=12,u.t0=u.catch(1),console.log(u.t0),u.next=17,Object(Ue.b)(S(u.t0.toString()));case 17:case"end":return u.stop()}}),Je,null,[[1,12]])}var We=xe.a.mark(Ze),Xe=xe.a.mark($e);function Ze(){return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.c)(j,Ve);case 2:case"end":return e.stop()}}),We)}function $e(){return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.c)(O,Ke);case 2:case"end":return e.stop()}}),Xe)}var et=n(118);function tt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function nt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?tt(n,!0).forEach((function(t){Object(R.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var rt=function(e,t){var n=e,r=n.find((function(e){return e.productId===t.productId}));if(r)n=n.map((function(e){return e.productId===t.productId?nt({},e,{count:r.count+1}):e}));else{var a=nt({},t,{count:1});n.push(a)}return n},at=function(e,t){var n=[];return t.count>1?n=e.map((function(e){return e.productId===t.productId?nt({},e,{count:t.count-1}):e})):e.forEach((function(e){return e.productId!==t.productId?n.push(e):null})),n},ct=[{value:1,country_id:1,key:"Rabat",label:"\u0627\u0644\u0631\u0628\u0627\u0637"},{value:2,country_id:2,key:"Algeria",label:"\u0627\u0644\u062c\u0632\u0627\u0626\u0631"},{value:3,country_id:3,key:"Tunisia",label:"\u062a\u0648\u0646\u0633"},{value:4,country_id:4,key:"Nouakchott",label:"\u0646\u0648\u0627\u0643\u0634\u0648\u0637"},{value:5,country_id:5,key:"Tripoli",label:"\u0637\u0631\u0627\u0628\u0644\u0633"},{value:6,country_id:6,key:"Cairo",label:"\u0627\u0644\u0642\u0627\u0647\u0631\u0629"},{value:7,country_id:7,key:"Doha",label:"\u0627\u0644\u062f\u0648\u062d\u0629"},{value:8,country_id:8,key:"Mecca",label:" \u0645\u0643\u0629 \u0627\u0644\u0645\u0643\u0631\u0645\u0629"},{value:9,country_id:1,key:"Casablanca",label:"\u0627\u0644\u062f\u0627\u0631 \u0627\u0644\u0628\u064a\u0636\u0627\u0621"},{value:10,country_id:1,key:"Fes",label:"\u0641\u0627\u0633"},{value:11,country_id:2,key:"Ouahran",label:"\u0648\u0647\u0631\u0627\u0646"},{value:12,country_id:1,key:"Tangier",label:"\u0637\u0646\u062c\u0629"}];function ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function it(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ot(n,!0).forEach((function(t){Object(R.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ot(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var lt={prayerTimeInformations:{informations:null,fetchingStatus:"Success"}},st=Object(p.c)({countries:function(){return[{value:1,key:"Morocco",label:"\u0627\u0644\u0645\u063a\u0631\u0628"},{value:2,key:"Algeria",label:"\u0627\u0644\u062c\u0632\u0627\u0626\u0631"},{value:3,key:"Tunisia",label:"\u062a\u0648\u0646\u0633"},{value:4,key:"Mauritania",label:"\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627"},{value:5,key:"Libya",label:"\u0644\u064a\u0628\u064a\u0627"},{value:6,key:"Egypt",label:"\u0645\u0635\u0631"},{value:7,key:"Qatar",label:"\u0642\u0637\u0631"},{value:8,key:"Saudia",label:"\u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629"}]},activeCountry:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_COUNTRY":return t.payload;default:return e}},cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CITIES":return t.payload;default:return e}},activeCity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CITY":return t.payload;default:return e}},prayerTimeInformations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return it({},e,{prayerTimeInformations:it({},e.prayerTimeInformations,{fetchingStatus:"Loading"})});case"GET_PRAYER_TIME_REQUEST_ERROR":return it({},e,{prayerTimeInformations:it({},e.prayerTimeInformations,{fetchingStatus:"Error"})});case"GET_PRAYER_TIME_REQUEST_SUCCESS":return it({},e,{prayerTimeInformations:it({},e.prayerTimeInformations,{informations:t.payload,fetchingStatus:"Success"})});case j:return it({},e,{prayerTimeInformations:it({},e.prayerTimeInformations,{fetchingStatus:"Loading"})});case"GET_PRAYER_TIME_BY_CITY_REQUEST_ERROR":return it({},e,{prayerTimeInformations:it({},e.prayerTimeInformations,{fetchingStatus:"Error"})});case"GET_PRAYER_TIME_BY_CITY_REQUEST_SUCCESS":return it({},e,{prayerTimeInformations:it({},e.prayerTimeInformations,{informations:t.payload,fetchingStatus:"Success"})});default:return e}},cultures:function(){return[{value:"ar",label:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"},{value:"fr",label:"Fran\xe7ais"},{value:"en",label:"English"}]},activeCulture:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CULTURE":return t.payload;default:return e}},basketProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_PRODUCT":return rt(e,t.payload);case"UNSELECT_PRODUCT":return at(e,t.payload);case"UNSELECT_ALL_PRODUCTS":return[];default:return e}}}),ut=Object(et.a)(),dt=Object(p.a)(ut)(p.e)(st);o.a.render(a.a.createElement(m.a,{store:dt},a.a.createElement(Me,null)),document.getElementById("root")),ut.run(Ze),ut.run($e),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,t,n){e.exports=n.p+"static/media/nikon-d7500.8225c1b0.jpg"},66:function(e,t,n){e.exports=n.p+"static/media/drone-r-falcon.38fcc139.jpg"},67:function(e,t,n){e.exports=n.p+"static/media/hp.4c7d04c8.jpg"},68:function(e,t,n){e.exports=n.p+"static/media/huawei-p20-lite.7b2c7410.png"},69:function(e,t,n){e.exports=n.p+"static/media/hp-envy.a0ef0dbf.jpg"},70:function(e,t,n){e.exports=n.p+"static/media/at-sign.006caf8b.svg"},71:function(e,t,n){e.exports=n.p+"static/media/home.55644be0.svg"},72:function(e,t,n){e.exports=n.p+"static/media/shopping.d03a9e65.svg"},73:function(e,t,n){e.exports=n.p+"static/media/x.8338a172.svg"},74:function(e,t,n){e.exports=n.p+"static/media/log-in.d1e3551d.svg"},75:function(e,t,n){e.exports=n.p+"static/media/list.156e6dca.svg"},76:function(e,t,n){e.exports=n.p+"static/media/login.6c3aec23.svg"},77:function(e,t,n){e.exports=n.p+"static/media/logout.8d509764.svg"},78:function(e,t,n){e.exports=n.p+"static/media/shopping-bag.dd75d800.svg"},79:function(e,t,n){e.exports=n.p+"static/media/menu.16f6ff69.svg"},80:function(e,t,n){e.exports=n.p+"static/media/user.ed52f187.svg"},81:function(e,t,n){e.exports=n.p+"static/media/trash.aabbbaf1.svg"},84:function(e,t,n){e.exports=n.p+"static/media/search.598b815f.svg"}},[[341,1,2]]]);
//# sourceMappingURL=main.c76971a4.chunk.js.map