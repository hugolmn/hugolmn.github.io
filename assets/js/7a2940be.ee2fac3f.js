"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[438],{4137:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>N});var n=e(7294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var p=n.createContext({}),u=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},d=function(t){var a=u(t.components);return n.createElement(p.Provider,{value:a},t.children)},g="mdxType",m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),g=u(e),s=l,N=g["".concat(p,".").concat(s)]||g[s]||m[s]||r;return e?n.createElement(N,i(i({ref:a},d),{},{components:e})):n.createElement(N,i({ref:a},d))}));function N(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=s;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o[g]="string"==typeof t?t:l,i[1]=o;for(var u=2;u<r;u++)i[u]=e[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}s.displayName="MDXCreateElement"},3519:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=e(7462),l=(e(7294),e(4137));const r={title:"SNCF Open Data: train station attendance",tags:["Data Visualization","Python","plotly"],authors:"hugo",style:"border",color:"primary",description:"Geo-visualization of train stations"},i=void 0,o={permalink:"/blog/2020/06/17/sncf-train-station-attendance",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020-06-17-sncf-train-station-attendance.md",source:"@site/blog/2020-06-17-sncf-train-station-attendance.md",title:"SNCF Open Data: train station attendance",description:"Geo-visualization of train stations",date:"2020-06-17T00:00:00.000Z",formattedDate:"June 17, 2020",tags:[{label:"Data Visualization",permalink:"/blog/tags/data-visualization"},{label:"Python",permalink:"/blog/tags/python"},{label:"plotly",permalink:"/blog/tags/plotly"}],readingTime:4.995,hasTruncateMarker:!1,authors:[{name:"Hugo Le Moine",title:"Data Scientist",url:"https://github.com/hugolmn",imageURL:"https://github.com/hugolmn.png",key:"hugo"}],frontMatter:{title:"SNCF Open Data: train station attendance",tags:["Data Visualization","Python","plotly"],authors:"hugo",style:"border",color:"primary",description:"Geo-visualization of train stations"},prevItem:{title:"SNCF Open Data: found items - 1",permalink:"/blog/2020/06/27/sncf-found-items"}},p={authorsImageUrls:[void 0]},u=[{value:"Passengers per french train station in 2018",id:"passengers-per-french-train-station-in-2018",level:2},{value:"Data",id:"data",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Processing",id:"processing",level:2},{value:"1. Reading csv files",id:"1-reading-csv-files",level:4},{value:"2. Merging dataframes",id:"2-merging-dataframes",level:4},{value:"3. Filtering",id:"3-filtering",level:4},{value:"4. Adding a category column",id:"4-adding-a-category-column",level:4},{value:"Visualization",id:"visualization",level:2},{value:"1. Scatter Mapbox",id:"1-scatter-mapbox",level:4},{value:"2. Layout",id:"2-layout",level:4}],d={toc:u},g="wrapper";function m(t){let{components:a,...e}=t;return(0,l.kt)(g,(0,n.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"passengers-per-french-train-station-in-2018"},"Passengers per french train station in 2018"),(0,l.kt)("div",{class:"plotly-container"},(0,l.kt)("iframe",{width:"100%",height:"700",frameborder:"0",scrolling:"no",src:"/graphs/sncf-train-stations.html"})),(0,l.kt)("h2",{id:"data"},"Data"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ressources.data.sncf.com/explore/dataset/frequentation-gares"},"SNCF : train station attendance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ressources.data.sncf.com/explore/dataset/referentiel-gares-voyageurs"},"SNCF : train station list"))),(0,l.kt)("h2",{id:"libraries"},"Libraries"),(0,l.kt)("p",null,"The following libraries are imported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pandas.pydata.org/"},"pandas")," and ",(0,l.kt)("a",{parentName:"li",href:"https://numpy.org/"},"numpy")," for data processing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://plotly.com/python/"},"plotly"),".colors to use a specific color scale"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://plotly.com/python/"},"plotly"),".graph_object for data visualization")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd                     \nimport numpy as np                      \nimport plotly.colors\nimport plotly.graph_objects as go\n")),(0,l.kt)("h2",{id:"processing"},"Processing"),(0,l.kt)("h4",{id:"1-reading-csv-files"},"1. Reading csv files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df_frequentation = pd.read_csv('data/frequentation-gares.csv', sep=';')\ndf_gares = pd.read_csv('data/referentiel-gares-voyageurs.csv', sep=';')\n")),(0,l.kt)("p",null,"Sample data from df_frequentation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Nom de la gare"),(0,l.kt)("th",{parentName:"tr",align:null},"Code UIC complet"),(0,l.kt)("th",{parentName:"tr",align:null},"Code postal"),(0,l.kt)("th",{parentName:"tr",align:null},"Segmentation DRG 2018"),(0,l.kt)("th",{parentName:"tr",align:null},"Total Voyageurs 2018"),(0,l.kt)("th",{parentName:"tr",align:null},"Total Voyageurs + Non voyageurs 2018"),(0,l.kt)("th",{parentName:"tr",align:null},"Total Voyageurs 2017"),(0,l.kt)("th",{parentName:"tr",align:null},"Total Voyageurs + Non voyageurs 2017"),(0,l.kt)("th",{parentName:"tr",align:null},"Total Voyageurs 2016"),(0,l.kt)("th",{parentName:"tr",align:null},"Total Voyageurs + Non voyageurs 2016"),(0,l.kt)("th",{parentName:"tr",align:null},"Total Voyageurs 2015"),(0,l.kt)("th",{parentName:"tr",align:null},"Total Voyageurs + Non voyageurs 2015"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Abancourt"),(0,l.kt)("td",{parentName:"tr",align:null},"87313759"),(0,l.kt)("td",{parentName:"tr",align:null},"60220"),(0,l.kt)("td",{parentName:"tr",align:null},"c"),(0,l.kt)("td",{parentName:"tr",align:null},"40228"),(0,l.kt)("td",{parentName:"tr",align:null},"40228"),(0,l.kt)("td",{parentName:"tr",align:null},"43760"),(0,l.kt)("td",{parentName:"tr",align:null},"43760"),(0,l.kt)("td",{parentName:"tr",align:null},"41096"),(0,l.kt)("td",{parentName:"tr",align:null},"41096.551614"),(0,l.kt)("td",{parentName:"tr",align:null},"39720"),(0,l.kt)("td",{parentName:"tr",align:null},"39720")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Agay"),(0,l.kt)("td",{parentName:"tr",align:null},"87757559"),(0,l.kt)("td",{parentName:"tr",align:null},"83530"),(0,l.kt)("td",{parentName:"tr",align:null},"c"),(0,l.kt)("td",{parentName:"tr",align:null},"15093"),(0,l.kt)("td",{parentName:"tr",align:null},"15093"),(0,l.kt)("td",{parentName:"tr",align:null},"14154"),(0,l.kt)("td",{parentName:"tr",align:null},"14154"),(0,l.kt)("td",{parentName:"tr",align:null},"19240"),(0,l.kt)("td",{parentName:"tr",align:null},"19240.514370"),(0,l.kt)("td",{parentName:"tr",align:null},"19121"),(0,l.kt)("td",{parentName:"tr",align:null},"19121")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Agde"),(0,l.kt)("td",{parentName:"tr",align:null},"87781278"),(0,l.kt)("td",{parentName:"tr",align:null},"34300"),(0,l.kt)("td",{parentName:"tr",align:null},"a"),(0,l.kt)("td",{parentName:"tr",align:null},"588297"),(0,l.kt)("td",{parentName:"tr",align:null},"735372"),(0,l.kt)("td",{parentName:"tr",align:null},"697091"),(0,l.kt)("td",{parentName:"tr",align:null},"871364"),(0,l.kt)("td",{parentName:"tr",align:null},"660656"),(0,l.kt)("td",{parentName:"tr",align:null},"825820.929253"),(0,l.kt)("td",{parentName:"tr",align:null},"662516"),(0,l.kt)("td",{parentName:"tr",align:null},"828146")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Agonac"),(0,l.kt)("td",{parentName:"tr",align:null},"87595157"),(0,l.kt)("td",{parentName:"tr",align:null},"24460"),(0,l.kt)("td",{parentName:"tr",align:null},"c"),(0,l.kt)("td",{parentName:"tr",align:null},"1492"),(0,l.kt)("td",{parentName:"tr",align:null},"1492"),(0,l.kt)("td",{parentName:"tr",align:null},"1583"),(0,l.kt)("td",{parentName:"tr",align:null},"1583"),(0,l.kt)("td",{parentName:"tr",align:null},"1134"),(0,l.kt)("td",{parentName:"tr",align:null},"1134.699996"),(0,l.kt)("td",{parentName:"tr",align:null},"1127"),(0,l.kt)("td",{parentName:"tr",align:null},"1127")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Aigrefeuille Le Thou"),(0,l.kt)("td",{parentName:"tr",align:null},"87485193"),(0,l.kt)("td",{parentName:"tr",align:null},"17290"),(0,l.kt)("td",{parentName:"tr",align:null},"c"),(0,l.kt)("td",{parentName:"tr",align:null},"18670"),(0,l.kt)("td",{parentName:"tr",align:null},"18670"),(0,l.kt)("td",{parentName:"tr",align:null},"14513"),(0,l.kt)("td",{parentName:"tr",align:null},"14513"),(0,l.kt)("td",{parentName:"tr",align:null},"266"),(0,l.kt)("td",{parentName:"tr",align:null},"266.157144"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("p",null,"Sample data from df_gares"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Code plate-forme"),(0,l.kt)("th",{parentName:"tr",align:null},"Intitul\xe9 gare"),(0,l.kt)("th",{parentName:"tr",align:null},"Intitul\xe9 fronton de gare"),(0,l.kt)("th",{parentName:"tr",align:null},"Gare DRG"),(0,l.kt)("th",{parentName:"tr",align:null},"Gare \xe9trang\xe8re"),(0,l.kt)("th",{parentName:"tr",align:null},"Agence gare"),(0,l.kt)("th",{parentName:"tr",align:null},"R\xe9gion SNCF"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit\xe9 gare"),(0,l.kt)("th",{parentName:"tr",align:null},"UT"),(0,l.kt)("th",{parentName:"tr",align:null},"Nbre plateformes"),(0,l.kt)("th",{parentName:"tr",align:null},"..."),(0,l.kt)("th",{parentName:"tr",align:null},"Longitude WGS84"),(0,l.kt)("th",{parentName:"tr",align:null},"Latitude WGS84"),(0,l.kt)("th",{parentName:"tr",align:null},"Code UIC"),(0,l.kt)("th",{parentName:"tr",align:null},"TVS"),(0,l.kt)("th",{parentName:"tr",align:null},"Segment DRG"),(0,l.kt)("th",{parentName:"tr",align:null},"Niveau de service"),(0,l.kt)("th",{parentName:"tr",align:null},"SOP"),(0,l.kt)("th",{parentName:"tr",align:null},"RG"),(0,l.kt)("th",{parentName:"tr",align:null},"Date fin validit\xe9 plateforme"),(0,l.kt)("th",{parentName:"tr",align:null},"WGS 84"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"00007-1"),(0,l.kt)("td",{parentName:"tr",align:null},"Bourg-Madame"),(0,l.kt)("td",{parentName:"tr",align:null},"Bourg-Madame"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Agence Grand Sud"),(0,l.kt)("td",{parentName:"tr",align:null},"REGION LANGUEDOC-ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"UG Languedoc Roussillon"),(0,l.kt)("td",{parentName:"tr",align:null},"BOURG MADAME GARE"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"1.948670"),(0,l.kt)("td",{parentName:"tr",align:null},"42.432407"),(0,l.kt)("td",{parentName:"tr",align:null},"87784876"),(0,l.kt)("td",{parentName:"tr",align:null},"BMD"),(0,l.kt)("td",{parentName:"tr",align:null},"c"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"GARES C LANGUEDOC ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"42.4324069,1.9486704")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"00014-1"),(0,l.kt)("td",{parentName:"tr",align:null},"Bolqu\xe8re - Eyne"),(0,l.kt)("td",{parentName:"tr",align:null},"Bolqu\xe8re - Eyne"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Agence Grand Sud"),(0,l.kt)("td",{parentName:"tr",align:null},"REGION LANGUEDOC-ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"UG Languedoc Roussillon"),(0,l.kt)("td",{parentName:"tr",align:null},"BOLQUERE EYNE GARE"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"2.087559"),(0,l.kt)("td",{parentName:"tr",align:null},"42.497873"),(0,l.kt)("td",{parentName:"tr",align:null},"87784801"),(0,l.kt)("td",{parentName:"tr",align:null},"BQE"),(0,l.kt)("td",{parentName:"tr",align:null},"c"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"GARES C LANGUEDOC ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"42.4978734,2.0875591")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"00015-1"),(0,l.kt)("td",{parentName:"tr",align:null},"Mont-Louis - La Cabanasse"),(0,l.kt)("td",{parentName:"tr",align:null},"Mont-Louis - La Cabanasse"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Agence Grand Sud"),(0,l.kt)("td",{parentName:"tr",align:null},"REGION LANGUEDOC-ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"UG Languedoc Roussillon"),(0,l.kt)("td",{parentName:"tr",align:null},"MONT LOUIS LA CABANASSE GARE"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"2.113138"),(0,l.kt)("td",{parentName:"tr",align:null},"42.502090"),(0,l.kt)("td",{parentName:"tr",align:null},"87784793"),(0,l.kt)("td",{parentName:"tr",align:null},"MTC"),(0,l.kt)("td",{parentName:"tr",align:null},"c"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"GARES C LANGUEDOC ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"42.5020902,2.1131379")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"00020-1"),(0,l.kt)("td",{parentName:"tr",align:null},"Thu\xe8s les Bains"),(0,l.kt)("td",{parentName:"tr",align:null},"Thu\xe8s les Bains"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Agence Grand Sud"),(0,l.kt)("td",{parentName:"tr",align:null},"REGION LANGUEDOC-ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"UG Languedoc Roussillon"),(0,l.kt)("td",{parentName:"tr",align:null},"THUES LES BAINS GARE"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"2.249094"),(0,l.kt)("td",{parentName:"tr",align:null},"42.528801"),(0,l.kt)("td",{parentName:"tr",align:null},"87784744"),(0,l.kt)("td",{parentName:"tr",align:null},"THB"),(0,l.kt)("td",{parentName:"tr",align:null},"c"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"GARES C LANGUEDOC ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"42.5288009,2.249094")))),(0,l.kt)("h4",{id:"2-merging-dataframes"},"2. Merging dataframes"),(0,l.kt)("p",null,"The UIC Code is a unique ID for train stations. However, the column names are different in both files, so it's mandatory so specify the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"left_on"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"right_on"))," arguments. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df = df_gares.merge(\n    right=df_frequentation,\n    left_on='Code UIC',\n    right_on='Code UIC complet',\n    how='inner')\n")),(0,l.kt)("h4",{id:"3-filtering"},"3. Filtering"),(0,l.kt)("p",null,"In order to avoid keeping small train stations, I chose to filter out stations with attendance below 1000 passengers in 2018. For visualization purpose, I added a column holding the square root of the number of passengers per station"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df = df[df['Total Voyageurs 2018'] > 1000]\n")),(0,l.kt)("h4",{id:"4-adding-a-category-column"},"4. Adding a category column"),(0,l.kt)("p",null,"By using ",(0,l.kt)("inlineCode",{parentName:"p"},"pandas.cut")," data can be split into categories according to total number of passengers. This will allow to plot with a different color for each category."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df['category'] = pd.cut(df['Total Voyageurs 2018'], bins=[1e4, 1e5, 1e6, 1e7, np.inf])\n")),(0,l.kt)("h2",{id:"visualization"},"Visualization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://plotly.com/"},"Plotly")," is a handy tool when it comes to creating interactive graphs and plots, that you can embed in other websites."),(0,l.kt)("h4",{id:"1-scatter-mapbox"},"1. Scatter Mapbox"),(0,l.kt)("p",null,"Data contain latitude and longitude: these will be used to plot train stations on the map. The size of the bubbles will depend on the square root of the number of passengers in 2018. A different trace is added for each of the categories defined above. Finally, information shown on mouse-hovering is defined using ",(0,l.kt)("inlineCode",{parentName:"p"},"hovertemplate"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"fig = go.Figure()\ncolors = plotly.colors.sequential.Viridis\n\nfor i, cat in enumerate(df.category.cat.categories):\n    df_sub = df[df.category == cat]\n    fig.add_trace(go.Scattermapbox(\n        lat=df_sub['Latitude WGS84'], \n        lon=df_sub['Longitude WGS84'],\n        text=df_sub['Intitul\xe9 gare'],\n        marker=dict(\n            color=colors[2*i+1],\n            size=np.sqrt(df_sub['Total Voyageurs 2018 sqrt']),\n            sizemin=1,\n            sizeref=15,\n            sizemode='area',\n            opacity=.8,\n        ),\n        meta=df_sub['Total Voyageurs 2018'],\n        hovertemplate=\"%{text}\" + \"<br>\" + \"Passengers: %{meta}\",\n        name=f'> {cat.left:1.0e} passengers',          \n))\n")),(0,l.kt)("h4",{id:"2-layout"},"2. Layout"),(0,l.kt)("p",null,"The last step is adding the background map, the title, margins around the plot, and the initial position & zoom."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"fig.update_layout(\n    mapbox_style=\"open-street-map\",\n    title='Passengers per french train station in 2018',\n    margin={'l': 0, 'r': 0, 't': 50, 'b': 0},\n    mapbox=dict(\n        center={'lon': 2.39, 'lat': 47.09},\n        zoom=4\n    ),\n)\n")),(0,l.kt)("p",null,"Link to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hugolmn/dataviz/blob/master/SNCF_traffic.ipynb"},"Jupyter notebook"),"."))}m.isMDXComponent=!0}}]);