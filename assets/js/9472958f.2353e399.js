"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[3741],{4137:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=d(a),g=l,k=s["".concat(p,".").concat(g)]||s[g]||m[g]||r;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9836:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),l=(a(7294),a(4137));const r={title:"SNCF Open Data: found items - 1",tags:["Data Visualization","Python","plotly"],authors:"hugo",style:"border",color:"primary",description:"Data visualization using plotly"},i=void 0,o={permalink:"/blog/2020/06/27/sncf-found-items",editUrl:"https://github.com/hugolmn/hugolmn.github.io/tree/main/blog/2020-06-27-sncf-found-items.md",source:"@site/blog/2020-06-27-sncf-found-items.md",title:"SNCF Open Data: found items - 1",description:"Data visualization using plotly",date:"2020-06-27T00:00:00.000Z",formattedDate:"June 27, 2020",tags:[{label:"Data Visualization",permalink:"/blog/tags/data-visualization"},{label:"Python",permalink:"/blog/tags/python"},{label:"plotly",permalink:"/blog/tags/plotly"}],readingTime:6.385,hasTruncateMarker:!1,authors:[{name:"Hugo Le Moine",title:"Data Scientist",url:"https://github.com/hugolmn",imageURL:"https://github.com/hugolmn.png",key:"hugo"}],frontMatter:{title:"SNCF Open Data: found items - 1",tags:["Data Visualization","Python","plotly"],authors:"hugo",style:"border",color:"primary",description:"Data visualization using plotly"},prevItem:{title:"Covid19 and Google Trends",permalink:"/blog/2020/07/08/usa-covid-google-trends"},nextItem:{title:"SNCF Open Data: train station attendance",permalink:"/blog/2020/06/17/sncf-train-station-attendance"}},p={authorsImageUrls:[void 0]},d=[{value:"Monthly found items in french train stations",id:"monthly-found-items-in-french-train-stations",level:2},{value:"18% of stations represent 80% of found items",id:"18-of-stations-represent-80-of-found-items",level:2},{value:"Data",id:"data",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Processing",id:"processing",level:2},{value:"1. Reading csv files",id:"1-reading-csv-files",level:4},{value:"2. Conversion to datetime",id:"2-conversion-to-datetime",level:4},{value:"3. Filtering dates",id:"3-filtering-dates",level:4},{value:"5. Grouping data by year and month",id:"5-grouping-data-by-year-and-month",level:4},{value:"6. Grouping data by train station",id:"6-grouping-data-by-train-station",level:4},{value:"7. Pareto",id:"7-pareto",level:4},{value:"8. Filtering grouped data",id:"8-filtering-grouped-data",level:4},{value:"Visualization",id:"visualization",level:2},{value:"1. Monthly found items",id:"1-monthly-found-items",level:3},{value:"2. Found items per train station",id:"2-found-items-per-train-station",level:3}],u={toc:d},s="wrapper";function m(t){let{components:e,...a}=t;return(0,l.kt)(s,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"monthly-found-items-in-french-train-stations"},"Monthly found items in french train stations"),(0,l.kt)("p",null,"We can view found items as a proxy for passenger traffic. On this first chart, we can clearly identify a few traffic disruptions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"April 2018 to June 2018 : discontinuous strike against project to reform SNCF."),(0,l.kt)("li",{parentName:"ul"},"December 2019 : strike against pension reform."),(0,l.kt)("li",{parentName:"ul"},"March 2020 to June 2020 : Covid-19 restrictions.")),(0,l.kt)("p",null,"We can also observe a peak in July each year, corresponding to summer vacations for most people."),(0,l.kt)("iframe",{height:"400",width:"100%",frameborder:"0",scrolling:"no",src:"//plotly.com/~hugolmn/21.embed?link=false&autosize=true"}),(0,l.kt)("h2",{id:"18-of-stations-represent-80-of-found-items"},"18% of stations represent 80% of found items"),(0,l.kt)("iframe",{height:"600",width:"100%",frameborder:"0",scrolling:"no",src:"//plotly.com/~hugolmn/14.embed?link=false&autosize=true"}),(0,l.kt)("h2",{id:"data"},"Data"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ressources.data.sncf.com/explore/dataset/referentiel-gares-voyageurs"},"SNCF: train station list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ressources.data.sncf.com/explore/dataset/objets-trouves-restitution"},"SNCF: found items"))),(0,l.kt)("h2",{id:"libraries"},"Libraries"),(0,l.kt)("p",null,"The following libraries are imported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pandas.pydata.org/"},"pandas")," and ",(0,l.kt)("a",{parentName:"li",href:"https://numpy.org/"},"numpy")," for data processing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://plotly.com/python/"},"plotly"),".colors to use a specific colorscale"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://plotly.com/python/"},"plotly"),".graph_object for data visualization")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd                     \nimport numpy as np                      \nimport plotly.colors\nimport plotly.graph_objects as go\n")),(0,l.kt)("h2",{id:"processing"},"Processing"),(0,l.kt)("h4",{id:"1-reading-csv-files"},"1. Reading csv files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df_gares = pd.read_csv('data/referentiel-gares-voyageurs.csv', sep=';')\ndf_items = pd.read_csv('data/objets-trouves-restitution.csv', sep=';')\n")),(0,l.kt)("p",null,"These two dataframes contain contain the following data:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"df_gares"),": train station data, including latitude and longitude."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"df_items"),": found item data, including date and location.")),(0,l.kt)("p",null,"Sample data from ",(0,l.kt)("inlineCode",{parentName:"p"},"df_gares")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Code plate-forme"),(0,l.kt)("th",{parentName:"tr",align:null},"Intitul\xe9 gare"),(0,l.kt)("th",{parentName:"tr",align:null},"Intitul\xe9 fronton de gare"),(0,l.kt)("th",{parentName:"tr",align:null},"Gare DRG"),(0,l.kt)("th",{parentName:"tr",align:null},"Gare \xe9trang\xe8re"),(0,l.kt)("th",{parentName:"tr",align:null},"Agence gare"),(0,l.kt)("th",{parentName:"tr",align:null},"R\xe9gion SNCF"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit\xe9 gare"),(0,l.kt)("th",{parentName:"tr",align:null},"UT"),(0,l.kt)("th",{parentName:"tr",align:null},"Nbre plateformes"),(0,l.kt)("th",{parentName:"tr",align:null},"..."),(0,l.kt)("th",{parentName:"tr",align:null},"Longitude WGS84"),(0,l.kt)("th",{parentName:"tr",align:null},"Latitude WGS84"),(0,l.kt)("th",{parentName:"tr",align:null},"Code UIC"),(0,l.kt)("th",{parentName:"tr",align:null},"TVS"),(0,l.kt)("th",{parentName:"tr",align:null},"Segment DRG"),(0,l.kt)("th",{parentName:"tr",align:null},"Niveau de service"),(0,l.kt)("th",{parentName:"tr",align:null},"SOP"),(0,l.kt)("th",{parentName:"tr",align:null},"RG"),(0,l.kt)("th",{parentName:"tr",align:null},"Date fin validit\xe9 plateforme"),(0,l.kt)("th",{parentName:"tr",align:null},"WGS 84"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"00007-1"),(0,l.kt)("td",{parentName:"tr",align:null},"Bourg-Madame"),(0,l.kt)("td",{parentName:"tr",align:null},"Bourg-Madame"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Agence Grand Sud"),(0,l.kt)("td",{parentName:"tr",align:null},"REGION LANGUEDOC-ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"UG Languedoc Roussillon"),(0,l.kt)("td",{parentName:"tr",align:null},"BOURG MADAME GARE"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"1.948670"),(0,l.kt)("td",{parentName:"tr",align:null},"42.432407"),(0,l.kt)("td",{parentName:"tr",align:null},"87784876"),(0,l.kt)("td",{parentName:"tr",align:null},"BMD"),(0,l.kt)("td",{parentName:"tr",align:null},"c"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"GARES C LANGUEDOC ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"42.4324069,1.9486704")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"00014-1"),(0,l.kt)("td",{parentName:"tr",align:null},"Bolqu\xe8re - Eyne"),(0,l.kt)("td",{parentName:"tr",align:null},"Bolqu\xe8re - Eyne"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Agence Grand Sud"),(0,l.kt)("td",{parentName:"tr",align:null},"REGION LANGUEDOC-ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"UG Languedoc Roussillon"),(0,l.kt)("td",{parentName:"tr",align:null},"BOLQUERE EYNE GARE"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"2.087559"),(0,l.kt)("td",{parentName:"tr",align:null},"42.497873"),(0,l.kt)("td",{parentName:"tr",align:null},"87784801"),(0,l.kt)("td",{parentName:"tr",align:null},"BQE"),(0,l.kt)("td",{parentName:"tr",align:null},"c"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"GARES C LANGUEDOC ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"42.4978734,2.0875591")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"00015-1"),(0,l.kt)("td",{parentName:"tr",align:null},"Mont-Louis - La Cabanasse"),(0,l.kt)("td",{parentName:"tr",align:null},"Mont-Louis - La Cabanasse"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Agence Grand Sud"),(0,l.kt)("td",{parentName:"tr",align:null},"REGION LANGUEDOC-ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"UG Languedoc Roussillon"),(0,l.kt)("td",{parentName:"tr",align:null},"MONT LOUIS LA CABANASSE GARE"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"2.113138"),(0,l.kt)("td",{parentName:"tr",align:null},"42.502090"),(0,l.kt)("td",{parentName:"tr",align:null},"87784793"),(0,l.kt)("td",{parentName:"tr",align:null},"MTC"),(0,l.kt)("td",{parentName:"tr",align:null},"c"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"GARES C LANGUEDOC ROUSSILLON"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"42.5020902,2.1131379")))),(0,l.kt)("p",null,"Sampel data from ",(0,l.kt)("inlineCode",{parentName:"p"},"df_items")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Date et heure de restitution"),(0,l.kt)("th",{parentName:"tr",align:null},"Gare"),(0,l.kt)("th",{parentName:"tr",align:null},"Code UIC"),(0,l.kt)("th",{parentName:"tr",align:null},"Nature d'objets"),(0,l.kt)("th",{parentName:"tr",align:null},"Type d'objets"),(0,l.kt)("th",{parentName:"tr",align:null},"Type d'enregistrement"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"2014-03-09T14:25:29+01:00"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"Paris Montparnasse"),(0,l.kt)("td",{parentName:"tr",align:null},"87391003.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Manteau, veste, blazer, parka, blouson, cape"),(0,l.kt)("td",{parentName:"tr",align:null},"V\xeatements, chaussures"),(0,l.kt)("td",{parentName:"tr",align:null},"Objet trouv\xe9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-01-23T15:07:32+01:00"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"Saint-\xc9tienne Ch\xe2teaucreux"),(0,l.kt)("td",{parentName:"tr",align:null},"87726000.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Montre"),(0,l.kt)("td",{parentName:"tr",align:null},"Bijoux, montres"),(0,l.kt)("td",{parentName:"tr",align:null},"Objet trouv\xe9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-02-06T15:35:49+01:00"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"Rennes"),(0,l.kt)("td",{parentName:"tr",align:null},"87471003.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Cl\xe9s, porte-cl\xe9s"),(0,l.kt)("td",{parentName:"tr",align:null},"Cl\xe9s, porte-cl\xe9s, badge magn\xe9tique"),(0,l.kt)("td",{parentName:"tr",align:null},"Objet trouv\xe9")))),(0,l.kt)("h4",{id:"2-conversion-to-datetime"},"2. Conversion to datetime"),(0,l.kt)("p",null,"For now, the DataFrame has a Date column, but was not assigned any particular format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df.Date.dtype\n")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},">> dtype('O')\n"))),(0,l.kt)("p",null,"In order to have a standardized datetime, ",(0,l.kt)("inlineCode",{parentName:"p"},"pandas.to_datetime"),"can be applied to get a datetime, and then ",(0,l.kt)("inlineCode",{parentName:"p"},"tz_convert"),"to make it french time."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df['Date'] = pd.to_datetime(df.Date, utc=True).dt.tz_convert('Europe/Paris')\n")),(0,l.kt)("h4",{id:"3-filtering-dates"},"3. Filtering dates"),(0,l.kt)("p",null,"To know when data collection has actually been put into place, let's analyse dates contained in the DataFrame."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df.Date.dt.year.value_counts().sort_index()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Count"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2013"),(0,l.kt)("td",{parentName:"tr",align:null},"15698")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2014"),(0,l.kt)("td",{parentName:"tr",align:null},"102793")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2015"),(0,l.kt)("td",{parentName:"tr",align:null},"111706")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2016"),(0,l.kt)("td",{parentName:"tr",align:null},"107595")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2017"),(0,l.kt)("td",{parentName:"tr",align:null},"107662")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2018"),(0,l.kt)("td",{parentName:"tr",align:null},"116308")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2019"),(0,l.kt)("td",{parentName:"tr",align:null},"122637")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2020"),(0,l.kt)("td",{parentName:"tr",align:null},"26143")))),(0,l.kt)("p",null,"To keep consistency, I decided to drop data from 2013: data collection may have not started everywhere, and had definitely not started in January 2013. If we want to dig deeper into the data and check correlations with passenger count, it would be difficult to achieve if data are not complete. Therefore only data collected from 2014 onwards will be kept:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df = df[df.Date.dt.year >= 2014]\n")),(0,l.kt)("h4",{id:"5-grouping-data-by-year-and-month"},"5. Grouping data by year and month"),(0,l.kt)("p",null,"In the first chart, I wanted to plot found item count for each month in the dataset. To do so, we need to group by year, then month."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df_months = df.groupby(by=[df.Date.dt.year, df.Date.dt.month]).Date.count()\n")),(0,l.kt)("p",null,"The result is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"2014  1       5788\n      2       5815\n      3       7012\n      4       8543\n      5       8657\n              ... \n2020  2       9271\n      3       4473\n      4         72\n      5       1386\n      6       3649\n")),(0,l.kt)("p",null,"Now we need to get the index back to datetime, combining years and months."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df_months.index = df_months.index.map(lambda t: pd.to_datetime('-'.join(map(str, t))))\n")),(0,l.kt)("h4",{id:"6-grouping-data-by-train-station"},"6. Grouping data by train station"),(0,l.kt)("p",null,"The second chart was made after grouping by train station. It can be achieved by the following instructions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df_grouped = (df\n    .groupby(by='Gare')\n    .count()\n    .Date\n    .rename('Count')\n    .sort_values(ascending=False)\n)\n")),(0,l.kt)("p",null,"This will first group by train station name, then apply a count aggregation, keep the Date renamed as Count, and values will be sorted from greatest to lowest count."),(0,l.kt)("h4",{id:"7-pareto"},"7. Pareto"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"df_grouped"),"DataFrame allows us to demonstrate an application of the Pareto priciple. The following lines are doing:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cumulative found item count of ",(0,l.kt)("inlineCode",{parentName:"li"},"df_grouped")),(0,l.kt)("li",{parentName:"ul"},"Sum of all items in ",(0,l.kt)("inlineCode",{parentName:"li"},"df_grouped")),(0,l.kt)("li",{parentName:"ul"},"Assigning booleans to cumulative counts below 80% of the total number of items, and counting them")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"pareto = (df_grouped.cumsum() < df_grouped.sum() * 0.8).sum()\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"df_grouped"),"DataFrame contains 181 train stations, and 32  (18%) of them account for 80% of the total count of found items."),(0,l.kt)("h4",{id:"8-filtering-grouped-data"},"8. Filtering grouped data"),(0,l.kt)("p",null,"Using the Pareto principle described above, I filtered ",(0,l.kt)("inlineCode",{parentName:"p"},"df_grouped"),"to keep the first 32 rows for visualization purpose."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df_grouped = df_grouped.iloc[:pareto]\n")),(0,l.kt)("h2",{id:"visualization"},"Visualization"),(0,l.kt)("p",null,"Now that all the processing part is completed, we can proceed to visualization."),(0,l.kt)("h3",{id:"1-monthly-found-items"},"1. Monthly found items"),(0,l.kt)("p",null,"The first chart is simply a bar chart of the total count of found items per month. ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," will therefore be the index of the dataframe ",(0,l.kt)("inlineCode",{parentName:"p"},"df_months"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"y"),"  will be the sum of all found items found for the associated months. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'fig = go.Figure()\nfig.add_trace(\n    go.Bar(\n        x=df_months.index,\n        y=df_months, \n        hoverinfo="x+y",\n        marker_color="#007bff",  \n))\n')),(0,l.kt)("p",null,"Then, y axis title is added, as well as margins to enhance the result."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"fig.update_layout(\n    yaxis=dict(title=\"Found items in train stations\", titlefont=dict(size=16)),\n    margin={'l': 30, 'r': 30, 't': 50, 'b': 0},\n)\n")),(0,l.kt)("h3",{id:"2-found-items-per-train-station"},"2. Found items per train station"),(0,l.kt)("p",null,"The second chart is also a bar chart. The data plotted are the counts of found items in each train station. As mentioned in the processing part, only the first 32 stations are displayed, ordered by number of found items."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'fig.add_trace(\n    go.Bar(\n        x=np.arange(1, len(df_grouped)), \n        y=df_grouped, \n        text=df_grouped.index,\n        meta = df_grouped,\n        hoverinfo="text+y",\n        name="Found items",\n        marker_color="#007bff"\n))\n')),(0,l.kt)("p",null,"The final step is adjusting the layout: margins, axis titles and log scale for the y axis."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nfig.update_layout(\n    margin={'l':20, 'r': 0, 't': 0, 'b': 250},\n    xaxis=dict(tickangle=-90,\n               tickfont={'size': 14}),\n    yaxis=dict(title=\"Found items per station\",\n               type=\"log\",\n               titlefont=dict(size=16))\n)\n")),(0,l.kt)("p",null,"Link to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hugolmn/dataviz/blob/master/SNCF_found_item_1.ipynb"},"Jupyter notebook"),"."))}m.isMDXComponent=!0}}]);