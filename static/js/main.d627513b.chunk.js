(window.webpackJsonpmarket=window.webpackJsonpmarket||[]).push([[0],{19:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/nikon-d7500.8225c1b0.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/drone-r-falcon.c36402d4.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/huawei-p20-lite.7b2c7410.png"},27:function(e,t,a){e.exports=a.p+"static/media/hp-envy.a0ef0dbf.jpg"},331:function(e,t,a){e.exports=a(396)},336:function(e,t,a){},341:function(e,t,a){},365:function(e,t,a){},371:function(e,t,a){},372:function(e,t,a){},373:function(e,t,a){},374:function(e,t,a){},377:function(e,t,a){},396:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),i=a.n(c),o=(a(336),a(7)),s=a(8),l=a(10),u=a(9),d=a(11),p=a(12),m=a(23),f=(a(341),a(19),a(342),a(4)),v=Object(f.g)(Object(f.h)(String),Object(f.n)("."),f.f),y=Object(f.a)([f.i,f.j]),h=Object(f.c)(y),E=Object(f.m)(h),b=(Object(f.d)((function(e,t){return E(v(e),t)})),Object(f.d)((function(e,t){return Object(f.l)(v(e),t)})),function(){throw Error("You have to provide an actionType")}),g=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b(),t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=Object(f.i)(a)?Object(f.k)(0):Object(f.e)(f.o);return function(){for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];var i=Object(f.i)(a)&&Object(f.i)(n)?{}:{payload:r(n,a)},o=Object(f.b)("type",e,i);return o}},k="GET_PRAYER_TIME_REQUEST",O="GET_PRAYER_TIME_BY_CITY_REQUEST",C=g(k,"city","country","method","month","year"),I=(g("GET_PRAYER_TIME_REQUEST_ERROR","error"),g("GET_PRAYER_TIME_REQUEST_SUCCESS"),g(O,"city")),j=g("GET_PRAYER_TIME_BY_CITY_REQUEST_ERROR","error"),P=g("GET_PRAYER_TIME_BY_CITY_REQUEST_SUCCESS"),S=(a(364),a(365),a(38)),T=a(105),B=a.n(T),N=(a(371),a(22));a(372);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var _=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderPrice=function(){var e=a.props,t=e.color,n=e.isOldPrice,c=e.price.toString().split("."),i=c[0],o=c[1],s={color:t,margin:0},l=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach((function(t){Object(N.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},s,{textDecoration:"line-through"});return n?r.a.createElement("div",{className:"priceBlock"},r.a.createElement("h3",{style:l},i," "),r.a.createElement("h6",{style:l},o),r.a.createElement("h3",{style:l}," DH")):r.a.createElement("div",{className:"priceBlock"},r.a.createElement("h2",{style:s},i," "),r.a.createElement("h5",{style:s},o),r.a.createElement("h2",{style:s}," DH"))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.price;return y(e)?null:this.renderPrice()}}]),t}(n.Component);function w(e){return{type:"SELECT_PRODUCT",payload:e}}_.defaultProps={isOldPrice:!1,color:"black",price:0};var R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderOldPrice=function(){var e=a.props.product,t=e.oldPrice,n=e.price;return y(t)||0===t?null:t<=n?null:r.a.createElement(_,{color:"grey",isOldPrice:!0,price:t})},a.renderPrice=function(){var e=a.props.product.price;return r.a.createElement(_,{color:"red",price:e})},a.renderTitle=function(){var e=a.props.product.title;return r.a.createElement("h4",{style:{margin:"0px"}},e.toUpperCase())},a.renderRating=function(){var e=a.props.product.rating;return r.a.createElement("div",null,r.a.createElement(B.a,{name:"rate1",starCount:5,value:e}))},a.renderDescription=function(){var e=a.props.product.description;return e?r.a.createElement(S.CollapsibleComponent,{className:"description"},r.a.createElement(S.CollapsibleHead,{className:"collapsibleHead"},"Voir le descriptif complet"),r.a.createElement(S.CollapsibleContent,{className:"collapsibleContent"},r.a.createElement("p",null,e))):null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.basketProducts,c=a.alt,i=a.src;return console.log(n),y(i)?null:r.a.createElement("div",{className:"Product"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{style:{display:"inline-flex",flexFlow:"row wrap"}},r.a.createElement("div",null,this.renderTitle(),r.a.createElement("img",{src:i,alt:c,className:"imageCSS"}),this.renderRating()),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"inline-grid"}},this.renderOldPrice(),this.renderPrice()),r.a.createElement("div",null,this.renderDescription())))),r.a.createElement("div",{onClick:function(){return e.props.selectProduct(a)}},r.a.createElement("div",{className:"addButton"},"Ajouter au panier")),r.a.createElement("hr",null))}}]),t}(n.Component);R.defaultProps={product:{alt:"",description:"",oldPrice:0,price:0,productId:0,rating:3,src:"",title:""}};var M=Object(m.b)((function(e){return{basketProducts:e.basketProducts}}),(function(e){return Object(p.b)({selectProduct:w},e)}))(R),x=a(24),A=a.n(x),U=a(25),H=a.n(U),Y=a(61),F=a.n(Y),G=a(26),L=a.n(G),q=a(27),Q=a.n(q);var z=function(e,t){switch(t){case V.fr:return e.fr;case V.ar:return e.ar;default:return e.en}},V={ar:"ar",fr:"fr",en:"en"},J=function(){return(new Date).getUTCFullYear()},K={ar:"\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629 \xa9 ".concat(J()),fr:"\xa9 Tous droits r\xe9serv\xe9s - ".concat(J()),en:"Copyright  ".concat(J()," \xa9 All Rights Reserved")},W=[{productId:1,oldPrice:2699.99,price:2499.99,rating:4,title:"Huawei p20 lite",src:L.a,alt:L.a,description:"Le Huawei P20 Lite est un smartphone \xe9quip\xe9 d'un \xe9cran bord \xe0 bord de 5,84 pouces au format 19/9. Fonctionnant avec Android 8 et la surcouche EMUI 8, il embarque le processeur Kirin 659 coupl\xe9 \xe0 4 Go de m\xe9moire vive et 64 Go d'espace de stockage extensible. C\xf4t\xe9 photo, il dispose d'un double module principal (16 Mpix + 2 Mpix) et pour les selfies d'un capteur de 16 Mpix. "},{productId:2,price:5299.99,rating:3,title:"NIKON D5300 Noir",src:A.a,alt:A.a,description:"NIKON D5300 Noir + AF-P 18-55VR Appareil photo reflex - Capteur CMOS format DX 24.2 M\xe9gapixels - \xc9cran orientable 8,1 cm (3,2 pouces) - Wi-Fi et GPS int\xe9gr\xe9s - Processeur EXPEED 4 - Sensibilit\xe9 \xe9lev\xe9e (jusqu\u2019\xe0 12 800 ISO) - Vid\xe9os en Full HD - Support d\u2018enregistrement: Cartes m\xe9moire SD / SDHC et SDXC compatibles UHS-I - USB Hi-Speed - Sortie vid\xe9o: NTSC, PAL - Sortie mini HDMI (type C)"},{productId:3,oldPrice:2009.99,price:1539.99,rating:4.9,title:"Drone falcon",src:H.a,alt:H.a,description:"Le R-FALCON se r\xe9invente avec une nouvelle version du mod\xe8le phare de PNJ. D\xe9couvrez le R-Falcon FHD maintenant \xe9quip\xe9 d\u2019une cam\xe9ra grand angle Full HD."},{productId:4,oldPrice:13959.99,price:13718.99,rating:2,title:"Hp envy",src:Q.a,alt:Q.a,description:"HP ENVY Notebook 17-ae001nk: Processeur Intel Core i7-7500U (2,7 GHz jusqu\u2019\xe0 3,5 GHz, 4 Mo de m\xe9moire cache, 2 c\u0153urs), M\xe9moire Vive 16Go, Disque Dur 1To SATA+ 128 Go SSD, Carte graphique NVIDIA GeForce 940MX 4 Go, Ecran 17,3 pouces FHD (1 920 x 1080), Intel 802.11ac et Bluetooth 4.2, 1 port USB 3.1 Type-C 1e g\xe9n\xe9ration (transfert de donn\xe9e), DP1.2; 3 ports USB 3.1 1e g\xe9n\xe9ration ; 1 port HDMI; 1 port RJ-45; 1 prise combin\xe9e casque/microphone, 1 lecteur de cartes multim\xe9dias SD multiformat, Windows 10 Famille 64, GARANTIE 1 AN"},{productId:5,oldPrice:2399.99,price:2199.99,rating:1,title:"HP Z420",src:F.a,alt:F.a,description:"La performance que vous souhaitez. La valeur dont vous avez besoin. Le HP Z420 vous promet l\u2019extensibilit\xe9 professionnelle dans le format d\u2019une mini-tour accessible sans outils, le tout pour un prix d\xe9fiant toute concurrence. Muni d\u2019un maximum de 8 processeurs discrets, de la plus r\xe9cente technologie de traitement et la puissance d\u2019E/S d\u2019IntelMD, et de la plus r\xe9cente technologie graphique provenant des chefs de file du domaine, le station de travail HP Z420 a toute la puissance dont vous avez besoin pour faire le travail."}],X=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,y(W)?null:W.map((function(e){return y(e)?null:r.a.createElement(M,{product:e,key:e.productId})})))}}]),t}(n.Component),Z=a(398),$=(a(373),a(62)),ee=a.n($),te=a(63),ae=a.n(te),ne=a(64),re=a.n(ne),ce=a(65),ie=a.n(ce),oe=a(66),se=a.n(oe),le=a(67),ue=a.n(le),de=a(68),pe=a.n(de),me=a(69),fe=a.n(me),ve=a(70),ye=a.n(ve),he=a(71),Ee=a.n(he),be=a(72),ge=a.n(be),ke=(a(374),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleOperation=function(e,t){var n=a.state.BasketProducts;"+"===t&&n.map((function(t){return t.ProductId===e?t.Count=t.Count+1:t})),"-"===t&&n.map((function(t){return t.ProductId===e?t.Count=t.Count-1:t})),a.setState((function(){return{BasketProducts:n}}))},a.spliceOperation=function(e){var t=a.state.BasketProducts;t.splice(e,1),a.setState((function(){return{BasketProducts:t}}))},a.renderBasketItem=function(e,t){var n=e.ProductId,c=e.Count,i=e.Src,o=e.Alt,s=(e.Price*c).toFixed(2);return r.a.createElement("div",{className:"BasketItem",key:n},r.a.createElement("div",{className:"BasketImage"},r.a.createElement("img",{className:"BasketItemImage",src:i,alt:o})),r.a.createElement("div",null,r.a.createElement("div",{className:"BasketCounter"},c>1?r.a.createElement("div",{className:"BasketOperation",onClick:function(){return a.handleOperation(n,"-")}},"-"):r.a.createElement("div",{className:"BasketItemTrash",onClick:function(){window.confirm("Are you sure you wish to delete this item?")&&a.spliceOperation(t)}},r.a.createElement("div",null,r.a.createElement("span",{className:"icon-bin"}))),r.a.createElement("div",{className:"BasketCount"},c),r.a.createElement("div",{className:"BasketOperation",onClick:function(){return a.handleOperation(n,"+")}},"+"),r.a.createElement("div",{className:"BasketItemPrice"},s," DH")),r.a.createElement("hr",null)))},a.getTotalPrice=function(){var e=a.state.BasketProducts,t=0;return e.forEach((function(e,a){t+=e.Count*e.Price})),t.toFixed(2)},a.renderBasketItems=function(){var e=a.state.BasketProducts;return y(e)?null:r.a.createElement("div",{className:"Basket"},e.map((function(e,t){return a.renderBasketItem(e,t)})),r.a.createElement("div",{className:"BasketTotalPrice"},"Prix total :",r.a.createElement("div",{className:"TotalPrice"},a.getTotalPrice()," DH")),r.a.createElement("div",{className:"BasketCheck"},"Valider la commande"),r.a.createElement("div",{className:"BasketCancelation"},"Annuler la commande"))},a.state={BasketProducts:[{ProductId:1,Count:1,Src:Q.a,Alt:Q.a,Price:13718.99},{ProductId:2,Count:2,Src:H.a,Alt:H.a,Price:1539.99},{ProductId:3,Count:1,Src:L.a,Alt:L.a,Price:2499.99},{ProductId:4,Count:2,Src:A.a,Alt:A.a,Price:5299.99}]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.displayBasket?r.a.createElement("div",{className:"BasketContainer"},this.renderBasketItems()):null}}]),t}(n.Component));ke.defaultProps={displayBasket:!1};var Oe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleDisplayBasket=function(){a.setState((function(){return{isBasketDisplayed:!a.state.isBasketDisplayed}})),a.props.onOpenBasket()},a.state={isBasketDisplayed:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderContent",value:function(){var e=this,t=this.props,a=t.displaySideMenu,n=t.isConnected;return r.a.createElement(Z.a,{key:"swipeLine",in:a,timeout:200,unmountOnExit:!0,classNames:"Overlayer"},r.a.createElement("div",{className:"MenuContent"},r.a.createElement("div",null,r.a.createElement("div",{className:"CloseContainer"},r.a.createElement("img",{className:"close",src:ie.a,alt:ie.a,onClick:function(){return e.props.onClose()}})),r.a.createElement("div",{className:"MenuItems"},r.a.createElement("div",{className:"MenuItem"},r.a.createElement("img",{className:"MenuItemIcon",src:ae.a,alt:ae.a}),"Accueil"),r.a.createElement("div",{className:"MenuItem"},r.a.createElement("img",{className:"MenuItemIcon",src:ue.a,alt:ue.a}),"Tous les rayons"),r.a.createElement("hr",null),r.a.createElement("div",{className:"MenuItem"},r.a.createElement("img",{className:"MenuItemIcon",src:ye.a,alt:ye.a}),"Mes commandes"),r.a.createElement("div",{className:"MenuItem"},r.a.createElement("img",{className:"MenuItemIcon",src:ge.a,alt:ge.a}),"Mon compte"),r.a.createElement("hr",null),r.a.createElement("div",{className:"MenuItem"},r.a.createElement("img",{className:"MenuItemIcon",src:ee.a,alt:ee.a}),"Mentions l\xe9gales"),n?r.a.createElement("div",{className:"MenuItem"},r.a.createElement("img",{className:"MenuItemIcon",src:pe.a,alt:pe.a}),"Se connecter"):r.a.createElement("div",{className:"MenuItem"},r.a.createElement("img",{className:"MenuItemIcon",src:fe.a,alt:fe.a}),"Se d\xe9connecter")))))}},{key:"render",value:function(){var e=this,t=this.props,a=t.displayBasket,n=t.onClose;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"MenuContainer"},r.a.createElement("img",{className:"Image1",src:Ee.a,alt:Ee.a,onClick:function(){return n()}}),r.a.createElement("span",{className:"Title"},"MARKET"),r.a.createElement("img",{className:"Image2",src:se.a,alt:se.a}),r.a.createElement("img",{className:"Image3",src:re.a,alt:re.a,onClick:function(){return e.handleDisplayBasket()}})),r.a.createElement(ke,{displayBasket:a}),r.a.createElement("div",null,this.renderContent()))}}]),t}(n.Component);Oe.defaultProps={displaySideMenu:!1,displayBasket:!1,isConnected:!0,onClose:function(){},onOpenBasket:function(){}};var Ce=a(31),Ie=(a(377),a(73)),je=a.n(Ie),Pe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(Ce.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(Ce.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"textContainer"},r.a.createElement("img",{className:"img",src:je.a,alt:je.a}),r.a.createElement("input",{className:"input",type:"text",value:this.state.value,onChange:this.handleChange,onClick:this.props.onSearchClick}))),r.a.createElement("input",{style:{display:"none"},type:"submit",value:"Submit"}))}}]),t}(n.Component);Pe.defaultProps={onSearchClick:function(){}};var Se=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){var t=a.props,n=t.country,r=t.getPrayerTime,c=new Date;if(y(e))return null;r(e.key,n.key,2,c.getMonth()+1,c.getFullYear())},a.handleDisplayMenu=function(){a.handleCloseAll(),a.setState((function(){return{isMenuDisplayed:!a.state.isMenuDisplayed,isBasketDisplayed:!1}})),a.handleDisplayBlackBackground(!a.state.isMenuDisplayed)},a.handleDisplayBasket=function(){a.handleCloseAll(),a.setState((function(){return{isBasketDisplayed:!a.state.isBasketDisplayed,isMenuDisplayed:!1}})),a.handleDisplayBlackBackground(!a.state.isBasketDisplayed)},a.handleDisplayBlackBackground=function(e){a.setState((function(){return{isBlackBackgroundDisplayed:e}}))},a.handleCloseAll=function(){a.setState((function(){return{isMenuDisplayed:!1,isBlackBackgroundDisplayed:!1,isBasketDisplayed:!1}}))},a.renderHeader=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement(Oe,{displaySideMenu:a.state.isMenuDisplayed,displayBasket:a.state.isBasketDisplayed,onClose:a.handleDisplayMenu,onOpenBasket:a.handleDisplayBasket}),r.a.createElement(Pe,{onSearchClick:a.handleCloseAll}))},a.renderBody=function(){var e=a.state.isBlackBackgroundDisplayed;return r.a.createElement("div",{className:e?"BlackBackground":"",onClick:e?function(){return a.handleCloseAll()}:void 0},r.a.createElement("div",{className:e?"App-body disabledbutton":"App-body"},r.a.createElement("div",{className:"App-Container"},r.a.createElement("div",{className:"App-block"},r.a.createElement(X,null)))))},a.renderFooter=function(){var e=a.props.culture;return r.a.createElement("footer",null,r.a.createElement("div",{className:"copyright"},z(K,e)))},a.state={isBlackBackgroundDisplayed:!1,isMenuDisplayed:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.renderHeader(),this.renderBody(),this.renderFooter())}}]),t}(n.Component);Se.defaultProps={culture:V.ar};var Te=Object(m.b)((function(e){return{prayerTimeInformations:e.prayerTimeInformations,city:e.activeCity,country:e.activeCountry,culture:e.activeCulture}}),(function(e){return{getPrayerTime:Object(p.b)(C,e),getPrayerTimeByCity:Object(p.b)(I,e)}}))(Se);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=a(15),Ne=a.n(Be),De=a(16),_e=a(106),we=a.n(_e),Re=function(){function e(t){var a=this;Object(o.a)(this,e),this.addRequestInterceptor=function(e){return a.client.interceptors.request.use(e.fulfilled,e.rejected)},this.addResponseInterceptor=function(e){return a.client.interceptors.response.use(e.fulfilled,e.rejected)},this.client=we.a.create({baseURL:t.baseUrl,headers:t.headers,timeout:t.timeout||0,withCredentials:t.withCredentials||!1}),e.requestInterceptors.forEach((function(e){return a.addRequestInterceptor(e)})),e.responseInterceptors.forEach((function(e){a.addResponseInterceptor(e)}))}return Object(s.a)(e,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.client.get(e,{headers:t})}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.client.post(e,t,{headers:a})}},{key:"put",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.client.put(e,t,{headers:a})}},{key:"patch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.client.patch(e,t,{headers:a})}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.client.delete(e,{headers:t})}},{key:"request",value:function(e){return this.client.request(e)}}]),e}();function Me(e){return new Re(e)}Re.requestInterceptors=[],Re.responseInterceptors=[];var xe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Me({baseUrl:e,withCredentials:!1,timeout:3e4,headers:Object.assign({},t)});return{getPrayerTimeByCountryAndCity:function(e,t,n,r,c){var i="/v1/calendarByCity?city=".concat(e,"&country=").concat(t,"&method=").concat(n,"&month=").concat(r,"&year=").concat(c);return a.get(i)},getPrayerTimeByCity:function(e){var t="/v2/times/today.json?city=".concat(e);return a.get(t)}}},Ae="http://api.aladhan.com",Ue="https://api.pray.zone",He=Ne.a.mark(Ye);function Ye(e){var t,a,n,r,c;return Ne.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,i.prev=1,a=t.city,n=xe(Ue),i.next=6,Object(De.a)(n.getPrayerTimeByCity,a);case 6:return r=i.sent,c=r.data,i.next=10,Object(De.b)(P(c));case 10:i.next=17;break;case 12:return i.prev=12,i.t0=i.catch(1),console.log(i.t0),i.next=17,Object(De.b)(j(i.t0.toString()));case 17:case"end":return i.stop()}}),He,null,[[1,12]])}var Fe=Ne.a.mark(Ge);function Ge(e){var t,a,n,r,c,i,o,s,l;return Ne.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,u.prev=1,a=t.city,n=t.country,r=t.method,c=t.month,i=t.year,o=xe(Ae),u.next=6,Object(De.a)(o.getPrayerTimeByCountryAndCity,a,n,r,c,i);case 6:return s=u.sent,l=s.data,u.next=10,Object(De.b)(P(l));case 10:u.next=17;break;case 12:return u.prev=12,u.t0=u.catch(1),console.log(u.t0),u.next=17,Object(De.b)(j(u.t0.toString()));case 17:case"end":return u.stop()}}),Fe,null,[[1,12]])}var Le=Ne.a.mark(Qe),qe=Ne.a.mark(ze);function Qe(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.c)(O,Ye);case 2:case"end":return e.stop()}}),Le)}function ze(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.c)(k,Ge);case 2:case"end":return e.stop()}}),qe)}var Ve=a(108),Je=a(107),Ke=[{value:1,country_id:1,key:"Rabat",label:"\u0627\u0644\u0631\u0628\u0627\u0637"},{value:2,country_id:2,key:"Algeria",label:"\u0627\u0644\u062c\u0632\u0627\u0626\u0631"},{value:3,country_id:3,key:"Tunisia",label:"\u062a\u0648\u0646\u0633"},{value:4,country_id:4,key:"Nouakchott",label:"\u0646\u0648\u0627\u0643\u0634\u0648\u0637"},{value:5,country_id:5,key:"Tripoli",label:"\u0637\u0631\u0627\u0628\u0644\u0633"},{value:6,country_id:6,key:"Cairo",label:"\u0627\u0644\u0642\u0627\u0647\u0631\u0629"},{value:7,country_id:7,key:"Doha",label:"\u0627\u0644\u062f\u0648\u062d\u0629"},{value:8,country_id:8,key:"Mecca",label:" \u0645\u0643\u0629 \u0627\u0644\u0645\u0643\u0631\u0645\u0629"},{value:9,country_id:1,key:"Casablanca",label:"\u0627\u0644\u062f\u0627\u0631 \u0627\u0644\u0628\u064a\u0636\u0627\u0621"},{value:10,country_id:1,key:"Fes",label:"\u0641\u0627\u0633"},{value:11,country_id:2,key:"Ouahran",label:"\u0648\u0647\u0631\u0627\u0646"},{value:12,country_id:1,key:"Tangier",label:"\u0637\u0646\u062c\u0629"}];function We(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Xe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?We(a,!0).forEach((function(t){Object(N.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):We(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ze={prayerTimeInformations:{informations:null,fetchingStatus:"Success"}},$e=Object(p.c)({countries:function(){return[{value:1,key:"Morocco",label:"\u0627\u0644\u0645\u063a\u0631\u0628"},{value:2,key:"Algeria",label:"\u0627\u0644\u062c\u0632\u0627\u0626\u0631"},{value:3,key:"Tunisia",label:"\u062a\u0648\u0646\u0633"},{value:4,key:"Mauritania",label:"\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627"},{value:5,key:"Libya",label:"\u0644\u064a\u0628\u064a\u0627"},{value:6,key:"Egypt",label:"\u0645\u0635\u0631"},{value:7,key:"Qatar",label:"\u0642\u0637\u0631"},{value:8,key:"Saudia",label:"\u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629"}]},activeCountry:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_COUNTRY":return t.payload;default:return e}},cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CITIES":return t.payload;default:return e}},activeCity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CITY":return t.payload;default:return e}},prayerTimeInformations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Xe({},e,{prayerTimeInformations:Xe({},e.prayerTimeInformations,{fetchingStatus:"Loading"})});case"GET_PRAYER_TIME_REQUEST_ERROR":return Xe({},e,{prayerTimeInformations:Xe({},e.prayerTimeInformations,{fetchingStatus:"Error"})});case"GET_PRAYER_TIME_REQUEST_SUCCESS":return Xe({},e,{prayerTimeInformations:Xe({},e.prayerTimeInformations,{informations:t.payload,fetchingStatus:"Success"})});case O:return Xe({},e,{prayerTimeInformations:Xe({},e.prayerTimeInformations,{fetchingStatus:"Loading"})});case"GET_PRAYER_TIME_BY_CITY_REQUEST_ERROR":return Xe({},e,{prayerTimeInformations:Xe({},e.prayerTimeInformations,{fetchingStatus:"Error"})});case"GET_PRAYER_TIME_BY_CITY_REQUEST_SUCCESS":return Xe({},e,{prayerTimeInformations:Xe({},e.prayerTimeInformations,{informations:t.payload,fetchingStatus:"Success"})});default:return e}},cultures:function(){return[{value:"ar",label:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"},{value:"fr",label:"Fran\xe7ais"},{value:"en",label:"English"}]},activeCulture:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CULTURE":return t.payload;default:return e}},basketProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_PRODUCT":return[].concat(Object(Je.a)(e),[t.payload]);default:return e}}}),et=Object(Ve.a)(),tt=Object(p.a)(et)(p.e)($e);i.a.render(r.a.createElement(m.a,{store:tt},r.a.createElement(Te,null)),document.getElementById("root")),et.run(Qe),et.run(ze),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},61:function(e,t,a){e.exports=a.p+"static/media/hp.4c7d04c8.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/at-sign.006caf8b.svg"},63:function(e,t,a){e.exports=a.p+"static/media/home.55644be0.svg"},64:function(e,t,a){e.exports=a.p+"static/media/shopping.d03a9e65.svg"},65:function(e,t,a){e.exports=a.p+"static/media/x.8338a172.svg"},66:function(e,t,a){e.exports=a.p+"static/media/log-in.d1e3551d.svg"},67:function(e,t,a){e.exports=a.p+"static/media/list.156e6dca.svg"},68:function(e,t,a){e.exports=a.p+"static/media/login.6c3aec23.svg"},69:function(e,t,a){e.exports=a.p+"static/media/logout.8d509764.svg"},70:function(e,t,a){e.exports=a.p+"static/media/shopping-bag.dd75d800.svg"},71:function(e,t,a){e.exports=a.p+"static/media/menu.16f6ff69.svg"},72:function(e,t,a){e.exports=a.p+"static/media/user.ed52f187.svg"},73:function(e,t,a){e.exports=a.p+"static/media/search.1c636eaa.svg"}},[[331,1,2]]]);
//# sourceMappingURL=main.d627513b.chunk.js.map