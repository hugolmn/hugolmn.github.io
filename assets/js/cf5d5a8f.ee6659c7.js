"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[4687],{1638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var d=t(5893),s=t(1151);const r={title:"SNCF Open Data: found items - 2",tags:["Data Visualization","Python","plotly"],authors:"hugo",style:"border",color:"primary",description:"Data visualization using plotly"},i=void 0,l={permalink:"/blog/2020/07/28/sncf-found-items-2",editUrl:"https://github.com/hugolmn/hugolmn.github.io/tree/main/blog/2020-07-28-sncf-found-items-2.md",source:"@site/blog/2020-07-28-sncf-found-items-2.md",title:"SNCF Open Data: found items - 2",description:"Data visualization using plotly",date:"2020-07-28T00:00:00.000Z",formattedDate:"July 28, 2020",tags:[{label:"Data Visualization",permalink:"/blog/tags/data-visualization"},{label:"Python",permalink:"/blog/tags/python"},{label:"plotly",permalink:"/blog/tags/plotly"}],readingTime:7.525,hasTruncateMarker:!1,authors:[{name:"Hugo Le Moine",title:"Data Scientist",url:"https://github.com/hugolmn",imageURL:"https://github.com/hugolmn.png",key:"hugo"}],frontMatter:{title:"SNCF Open Data: found items - 2",tags:["Data Visualization","Python","plotly"],authors:"hugo",style:"border",color:"primary",description:"Data visualization using plotly"},unlisted:!1,prevItem:{title:"Twitter API - Delete my tweets!",permalink:"/blog/2022/06/11/delete-my-tweets"},nextItem:{title:"Covid19 and Google Trends",permalink:"/blog/2020/07/08/usa-covid-google-trends"}},a={authorsImageUrls:[void 0]},c=[{value:"Map of found items",id:"map-of-found-items",level:2},{value:"What can we conclude from this visualization ?",id:"what-can-we-conclude-from-this-visualization-",level:4},{value:"Data",id:"data",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Processing",id:"processing",level:2},{value:"1. Reading csv files",id:"1-reading-csv-files",level:4},{value:"2. Merging dataframes",id:"2-merging-dataframes",level:4},{value:"3. Conversion to datetime",id:"3-conversion-to-datetime",level:4},{value:"4. Filtering dates",id:"4-filtering-dates",level:4},{value:"5. Total number of passengers per station",id:"5-total-number-of-passengers-per-station",level:4},{value:"6. Grouping data by train station",id:"6-grouping-data-by-train-station",level:4},{value:"7. Count per 100k",id:"7-count-per-100k",level:4},{value:"8. Creation of categories",id:"8-creation-of-categories",level:4},{value:"9. What we have so far",id:"9-what-we-have-so-far",level:4},{value:"Visualization",id:"visualization",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"map-of-found-items",children:"Map of found items"}),"\n",(0,d.jsxs)(n.p,{children:["Following a previous ",(0,d.jsx)(n.a,{href:"/blog/2020/06/27/sncf-found-items",children:"article"})," analyzing monthly evolution as well as concentration of found items, here is another perspective on these data made available by the SNCF. Obviously, the higher the number of passengers, the higher the number of found items. Now, let's look into the details!"]}),"\n",(0,d.jsx)(n.p,{children:"On this map are represented the number of found items per 100k passengers between 2015 and 2018. Only stations with more than 10 found items are shown."}),"\n",(0,d.jsx)("div",{class:"plotly-container",children:(0,d.jsx)("iframe",{width:"100%",height:"700",frameborder:"0",scrolling:"no",src:"/graphs/sncf-found-items-map.html"})}),"\n",(0,d.jsx)(n.h4,{id:"what-can-we-conclude-from-this-visualization-",children:"What can we conclude from this visualization ?"}),"\n",(0,d.jsx)(n.p,{children:"Clearly, there is a significant difference between the area of Paris/north of France, and anywhere else in the country. Nonetheless, one should avoid easy conclusion: are people more careful about their belongings or less prone to hand found items back ? The two options are possibly and even likely connected, but additional data are required to investigate. Perhaps in another part :)"}),"\n",(0,d.jsx)(n.h2,{id:"data",children:"Data"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://ressources.data.sncf.com/explore/dataset/frequentation-gares",children:"SNCF : train station attendance"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://ressources.data.sncf.com/explore/dataset/referentiel-gares-voyageurs",children:"SNCF: train station list"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://ressources.data.sncf.com/explore/dataset/objets-trouves-restitution",children:"SNCF: found items"})}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"libraries",children:"Libraries"}),"\n",(0,d.jsx)(n.p,{children:"The following libraries are imported:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"https://pandas.pydata.org/",children:"pandas"})," and ",(0,d.jsx)(n.a,{href:"https://numpy.org/",children:"numpy"})," for data processing"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"https://plotly.com/python/",children:"plotly"}),".colors to use a specific colorscale"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"https://plotly.com/python/",children:"plotly"}),".graph_object for data visualization"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"import pandas as pd\t\t\t\t\t\t\nimport numpy as np\t\t\t\t\t\t\nimport plotly.colors\nimport plotly.graph_objects as go\n"})}),"\n",(0,d.jsx)(n.h2,{id:"processing",children:"Processing"}),"\n",(0,d.jsx)(n.h4,{id:"1-reading-csv-files",children:"1. Reading csv files"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"df_frequentation = pd.read_csv('data/frequentation-gares.csv', sep=';')\ndf_gares = pd.read_csv('data/referentiel-gares-voyageurs.csv', sep=';')\ndf_items = pd.read_csv('data/objets-trouves-restitution.csv', sep=';')\n"})}),"\n",(0,d.jsx)(n.p,{children:"These two dataframes contain contain the following data:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"df_frequentation"}),": train station attendance data"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"df_gares"}),": train station data, including latitude and longitude."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"df_items"}),": found item data, including date and location."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Sample data from ",(0,d.jsx)(n.code,{children:"df_frequentation"})]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Nom de la gare"}),(0,d.jsx)(n.th,{children:"Code UIC complet"}),(0,d.jsx)(n.th,{children:"Code postal"}),(0,d.jsx)(n.th,{children:"Segmentation DRG 2018"}),(0,d.jsx)(n.th,{children:"Total Voyageurs 2018"}),(0,d.jsx)(n.th,{children:"Total Voyageurs + Non voyageurs 2018"}),(0,d.jsx)(n.th,{children:"Total Voyageurs 2017"}),(0,d.jsx)(n.th,{children:"Total Voyageurs + Non voyageurs 2017"}),(0,d.jsx)(n.th,{children:"Total Voyageurs 2016"}),(0,d.jsx)(n.th,{children:"Total Voyageurs + Non voyageurs 2016"}),(0,d.jsx)(n.th,{children:"Total Voyageurs 2015"}),(0,d.jsx)(n.th,{children:"Total Voyageurs + Non voyageurs 2015"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Abancourt"}),(0,d.jsx)(n.td,{children:"87313759"}),(0,d.jsx)(n.td,{children:"60220"}),(0,d.jsx)(n.td,{children:"c"}),(0,d.jsx)(n.td,{children:"40228"}),(0,d.jsx)(n.td,{children:"40228"}),(0,d.jsx)(n.td,{children:"43760"}),(0,d.jsx)(n.td,{children:"43760"}),(0,d.jsx)(n.td,{children:"41096"}),(0,d.jsx)(n.td,{children:"41096.551614"}),(0,d.jsx)(n.td,{children:"39720"}),(0,d.jsx)(n.td,{children:"39720"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Agay"}),(0,d.jsx)(n.td,{children:"87757559"}),(0,d.jsx)(n.td,{children:"83530"}),(0,d.jsx)(n.td,{children:"c"}),(0,d.jsx)(n.td,{children:"15093"}),(0,d.jsx)(n.td,{children:"15093"}),(0,d.jsx)(n.td,{children:"14154"}),(0,d.jsx)(n.td,{children:"14154"}),(0,d.jsx)(n.td,{children:"19240"}),(0,d.jsx)(n.td,{children:"19240.514370"}),(0,d.jsx)(n.td,{children:"19121"}),(0,d.jsx)(n.td,{children:"19121"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"Agde"}),(0,d.jsx)(n.td,{children:"87781278"}),(0,d.jsx)(n.td,{children:"34300"}),(0,d.jsx)(n.td,{children:"a"}),(0,d.jsx)(n.td,{children:"588297"}),(0,d.jsx)(n.td,{children:"735372"}),(0,d.jsx)(n.td,{children:"697091"}),(0,d.jsx)(n.td,{children:"871364"}),(0,d.jsx)(n.td,{children:"660656"}),(0,d.jsx)(n.td,{children:"825820.929253"}),(0,d.jsx)(n.td,{children:"662516"}),(0,d.jsx)(n.td,{children:"828146"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"3"}),(0,d.jsx)(n.td,{children:"Agonac"}),(0,d.jsx)(n.td,{children:"87595157"}),(0,d.jsx)(n.td,{children:"24460"}),(0,d.jsx)(n.td,{children:"c"}),(0,d.jsx)(n.td,{children:"1492"}),(0,d.jsx)(n.td,{children:"1492"}),(0,d.jsx)(n.td,{children:"1583"}),(0,d.jsx)(n.td,{children:"1583"}),(0,d.jsx)(n.td,{children:"1134"}),(0,d.jsx)(n.td,{children:"1134.699996"}),(0,d.jsx)(n.td,{children:"1127"}),(0,d.jsx)(n.td,{children:"1127"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"Aigrefeuille Le Thou"}),(0,d.jsx)(n.td,{children:"87485193"}),(0,d.jsx)(n.td,{children:"17290"}),(0,d.jsx)(n.td,{children:"c"}),(0,d.jsx)(n.td,{children:"18670"}),(0,d.jsx)(n.td,{children:"18670"}),(0,d.jsx)(n.td,{children:"14513"}),(0,d.jsx)(n.td,{children:"14513"}),(0,d.jsx)(n.td,{children:"266"}),(0,d.jsx)(n.td,{children:"266.157144"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Sample data from ",(0,d.jsx)(n.code,{children:"df_gares"})]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Code plate-forme"}),(0,d.jsx)(n.th,{children:"Intitul\xe9 gare"}),(0,d.jsx)(n.th,{children:"Intitul\xe9 fronton de gare"}),(0,d.jsx)(n.th,{children:"Gare DRG"}),(0,d.jsx)(n.th,{children:"Gare \xe9trang\xe8re"}),(0,d.jsx)(n.th,{children:"Agence gare"}),(0,d.jsx)(n.th,{children:"R\xe9gion SNCF"}),(0,d.jsx)(n.th,{children:"Unit\xe9 gare"}),(0,d.jsx)(n.th,{children:"UT"}),(0,d.jsx)(n.th,{children:"Nbre plateformes"}),(0,d.jsx)(n.th,{children:"..."}),(0,d.jsx)(n.th,{children:"Longitude WGS84"}),(0,d.jsx)(n.th,{children:"Latitude WGS84"}),(0,d.jsx)(n.th,{children:"Code UIC"}),(0,d.jsx)(n.th,{children:"TVS"}),(0,d.jsx)(n.th,{children:"Segment DRG"}),(0,d.jsx)(n.th,{children:"Niveau de service"}),(0,d.jsx)(n.th,{children:"SOP"}),(0,d.jsx)(n.th,{children:"RG"}),(0,d.jsx)(n.th,{children:"Date fin validit\xe9 plateforme"}),(0,d.jsx)(n.th,{children:"WGS 84"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"00007-1"}),(0,d.jsx)(n.td,{children:"Bourg-Madame"}),(0,d.jsx)(n.td,{children:"Bourg-Madame"}),(0,d.jsx)(n.td,{children:"True"}),(0,d.jsx)(n.td,{children:"False"}),(0,d.jsx)(n.td,{children:"Agence Grand Sud"}),(0,d.jsx)(n.td,{children:"REGION LANGUEDOC-ROUSSILLON"}),(0,d.jsx)(n.td,{children:"UG Languedoc Roussillon"}),(0,d.jsx)(n.td,{children:"BOURG MADAME GARE"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"..."}),(0,d.jsx)(n.td,{children:"1.948670"}),(0,d.jsx)(n.td,{children:"42.432407"}),(0,d.jsx)(n.td,{children:"87784876"}),(0,d.jsx)(n.td,{children:"BMD"}),(0,d.jsx)(n.td,{children:"c"}),(0,d.jsx)(n.td,{children:"1.0"}),(0,d.jsx)(n.td,{children:"NaN"}),(0,d.jsx)(n.td,{children:"GARES C LANGUEDOC ROUSSILLON"}),(0,d.jsx)(n.td,{children:"NaN"}),(0,d.jsx)(n.td,{children:"42.4324069,1.9486704"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"00014-1"}),(0,d.jsx)(n.td,{children:"Bolqu\xe8re - Eyne"}),(0,d.jsx)(n.td,{children:"Bolqu\xe8re - Eyne"}),(0,d.jsx)(n.td,{children:"True"}),(0,d.jsx)(n.td,{children:"False"}),(0,d.jsx)(n.td,{children:"Agence Grand Sud"}),(0,d.jsx)(n.td,{children:"REGION LANGUEDOC-ROUSSILLON"}),(0,d.jsx)(n.td,{children:"UG Languedoc Roussillon"}),(0,d.jsx)(n.td,{children:"BOLQUERE EYNE GARE"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"..."}),(0,d.jsx)(n.td,{children:"2.087559"}),(0,d.jsx)(n.td,{children:"42.497873"}),(0,d.jsx)(n.td,{children:"87784801"}),(0,d.jsx)(n.td,{children:"BQE"}),(0,d.jsx)(n.td,{children:"c"}),(0,d.jsx)(n.td,{children:"1.0"}),(0,d.jsx)(n.td,{children:"NaN"}),(0,d.jsx)(n.td,{children:"GARES C LANGUEDOC ROUSSILLON"}),(0,d.jsx)(n.td,{children:"NaN"}),(0,d.jsx)(n.td,{children:"42.4978734,2.0875591"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"00015-1"}),(0,d.jsx)(n.td,{children:"Mont-Louis - La Cabanasse"}),(0,d.jsx)(n.td,{children:"Mont-Louis - La Cabanasse"}),(0,d.jsx)(n.td,{children:"True"}),(0,d.jsx)(n.td,{children:"False"}),(0,d.jsx)(n.td,{children:"Agence Grand Sud"}),(0,d.jsx)(n.td,{children:"REGION LANGUEDOC-ROUSSILLON"}),(0,d.jsx)(n.td,{children:"UG Languedoc Roussillon"}),(0,d.jsx)(n.td,{children:"MONT LOUIS LA CABANASSE GARE"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"..."}),(0,d.jsx)(n.td,{children:"2.113138"}),(0,d.jsx)(n.td,{children:"42.502090"}),(0,d.jsx)(n.td,{children:"87784793"}),(0,d.jsx)(n.td,{children:"MTC"}),(0,d.jsx)(n.td,{children:"c"}),(0,d.jsx)(n.td,{children:"1.0"}),(0,d.jsx)(n.td,{children:"NaN"}),(0,d.jsx)(n.td,{children:"GARES C LANGUEDOC ROUSSILLON"}),(0,d.jsx)(n.td,{children:"NaN"}),(0,d.jsx)(n.td,{children:"42.5020902,2.1131379"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Sampel data from ",(0,d.jsx)(n.code,{children:"df_items"})]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Date"}),(0,d.jsx)(n.th,{children:"Date et heure de restitution"}),(0,d.jsx)(n.th,{children:"Gare"}),(0,d.jsx)(n.th,{children:"Code UIC"}),(0,d.jsx)(n.th,{children:"Nature d'objets"}),(0,d.jsx)(n.th,{children:"Type d'objets"}),(0,d.jsx)(n.th,{children:"Type d'enregistrement"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"2014-03-09T14:25:29+01:00"}),(0,d.jsx)(n.td,{children:"NaN"}),(0,d.jsx)(n.td,{children:"Paris Montparnasse"}),(0,d.jsx)(n.td,{children:"87391003.0"}),(0,d.jsx)(n.td,{children:"Manteau, veste, blazer, parka, blouson, cape"}),(0,d.jsx)(n.td,{children:"V\xeatements, chaussures"}),(0,d.jsx)(n.td,{children:"Objet trouv\xe9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"2018-01-23T15:07:32+01:00"}),(0,d.jsx)(n.td,{children:"NaN"}),(0,d.jsx)(n.td,{children:"Saint-\xc9tienne Ch\xe2teaucreux"}),(0,d.jsx)(n.td,{children:"87726000.0"}),(0,d.jsx)(n.td,{children:"Montre"}),(0,d.jsx)(n.td,{children:"Bijoux, montres"}),(0,d.jsx)(n.td,{children:"Objet trouv\xe9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"2018-02-06T15:35:49+01:00"}),(0,d.jsx)(n.td,{children:"NaN"}),(0,d.jsx)(n.td,{children:"Rennes"}),(0,d.jsx)(n.td,{children:"87471003.0"}),(0,d.jsx)(n.td,{children:"Cl\xe9s, porte-cl\xe9s"}),(0,d.jsx)(n.td,{children:"Cl\xe9s, porte-cl\xe9s, badge magn\xe9tique"}),(0,d.jsx)(n.td,{children:"Objet trouv\xe9"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"2-merging-dataframes",children:"2. Merging dataframes"}),"\n",(0,d.jsx)(n.p,{children:'The three dataframes have a column identifier: the UIC code ("Union Internationale des Chemins de fer", International Union of Railways in french). We can merge them based on this unique value for each station.'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"df = df_gares.merge(\n    right=df_frequentation, \n    left_on='Code UIC', \n    right_on='Code UIC complet', \n    how='inner')\n\ndf = df.merge(df_items, on='Code UIC', how='right')\n"})}),"\n",(0,d.jsx)(n.h4,{id:"3-conversion-to-datetime",children:"3. Conversion to datetime"}),"\n",(0,d.jsx)(n.p,{children:"For now, the DataFrame has a Date column, but was not assigned any particular format."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"df.Date.dtype\n"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:">> dtype('O')\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["In order to have a standardized datetime, ",(0,d.jsx)(n.code,{children:"pandas.to_datetime"})," can be applied to get a datetime, and then ",(0,d.jsx)(n.code,{children:"tz_convert"})," to make it french time."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"df['Date'] = pd.to_datetime(df.Date, utc=True).dt.tz_convert('Europe/Paris')\n"})}),"\n",(0,d.jsx)(n.h4,{id:"4-filtering-dates",children:"4. Filtering dates"}),"\n",(0,d.jsx)(n.p,{children:"As I want to analyze the number of found items according to the number of passengers, I must filter out data which is not in the period 2015-2018 as these are the only years for which the number of passengers is available."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"df = df.loc[(df.Date.dt.year >= 2015) & (df.Date.dt.year <= 2018)]\n"})}),"\n",(0,d.jsx)(n.h4,{id:"5-total-number-of-passengers-per-station",children:"5. Total number of passengers per station"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"df['Passengers'] =(df['Total Voyageurs 2018'] \n                            + df['Total Voyageurs 2017'] \n                            + df['Total Voyageurs 2016'] \n                            + df['Total Voyageurs 2015'])\n"})}),"\n",(0,d.jsx)(n.h4,{id:"6-grouping-data-by-train-station",children:"6. Grouping data by train station"}),"\n",(0,d.jsx)(n.p,{children:"Data is grouped by station name, geographical coordinates are kept, as well as the count of found items, and the number of passengers."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"df = (df.groupby(by=\"Intitul\xe9 gare\")\n        .agg({'Longitude WGS84': 'first',\n              'Latitude WGS84': 'first',\n              'Nature d\\'objets': len,\n              'Passengers': 'first'})\n        .rename(columns={'Nature d\\'objets': 'item_count'})\n)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"7-count-per-100k",children:"7. Count per 100k"}),"\n",(0,d.jsx)(n.p,{children:"In this blog post, the focus is put on the ratio item/pax. A straightforward division would lead to number hard to imagine. Therefore, using a ratio per 100k passengers is more interesting. I restricted the selection to stations having at least 10 found items ."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"df['count_per_100kpax'] = df.item_count / df.Passengers * 1e5\ndf = df.sort_values(by='count_per_100kpax', ascending=False)\ndf = df[df.item_count >= 10]\n"})}),"\n",(0,d.jsx)(n.h4,{id:"8-creation-of-categories",children:"8. Creation of categories"}),"\n",(0,d.jsx)(n.p,{children:"To group data by category on the map, we need to bin them. I chose a standard quantile binning with 20% of data in each bin."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"df['group'] = pd.qcut(df['count_per_100kpax'], q=np.linspace(0, 1, 6))\n"})}),"\n",(0,d.jsx)(n.h4,{id:"9-what-we-have-so-far",children:"9. What we have so far"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Intitul\xe9 gare"}),(0,d.jsx)(n.th,{children:"Longitude WGS84"}),(0,d.jsx)(n.th,{children:"Latitude WGS84"}),(0,d.jsx)(n.th,{children:"item_count"}),(0,d.jsx)(n.th,{children:"Passengers"}),(0,d.jsx)(n.th,{children:"count_per_100kpax"}),(0,d.jsx)(n.th,{children:"category"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Versailles Rive Droite"}),(0,d.jsx)(n.td,{children:"2.134752"}),(0,d.jsx)(n.td,{children:"48.809653"}),(0,d.jsx)(n.td,{children:"39"}),(0,d.jsx)(n.td,{children:"21309519.0"}),(0,d.jsx)(n.td,{children:"0.183017"}),(0,d.jsx)(n.td,{children:"(0.182, 3.623]"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Poissy"}),(0,d.jsx)(n.td,{children:"2.041368"}),(0,d.jsx)(n.td,{children:"48.932901"}),(0,d.jsx)(n.td,{children:"80"}),(0,d.jsx)(n.td,{children:"43120958.0"}),(0,d.jsx)(n.td,{children:"0.185525"}),(0,d.jsx)(n.td,{children:"(0.182, 3.623]"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"..."}),(0,d.jsx)(n.td,{children:"..."}),(0,d.jsx)(n.td,{children:"..."}),(0,d.jsx)(n.td,{children:"..."}),(0,d.jsx)(n.td,{children:"..."}),(0,d.jsx)(n.td,{children:"..."}),(0,d.jsx)(n.td,{children:"..."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hendaye"}),(0,d.jsx)(n.td,{children:"-1.781724"}),(0,d.jsx)(n.td,{children:"43.353132"}),(0,d.jsx)(n.td,{children:"2873"}),(0,d.jsx)(n.td,{children:"1422622.0"}),(0,d.jsx)(n.td,{children:"201.951045"}),(0,d.jsx)(n.td,{children:"(24.664, 323.36]"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Le Croisic"}),(0,d.jsx)(n.td,{children:"-2.507442"}),(0,d.jsx)(n.td,{children:"47.289836"}),(0,d.jsx)(n.td,{children:"1358"}),(0,d.jsx)(n.td,{children:"419966.0"}),(0,d.jsx)(n.td,{children:"323.359510"}),(0,d.jsx)(n.td,{children:"(24.664, 323.36]"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"visualization",children:"Visualization"}),"\n",(0,d.jsx)(n.p,{children:"Now that all the processing part is completed, we can proceed to the  visualization."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"fig = go.Figure()\ncolors = plotly.colors.sequential.Inferno # Custom colormap\n\n# One scattermapbox per group\nfor i, group in enumerate(df.group.cat.categories):\n    df_sub = df[df.group == group]\n    fig.add_trace(go.Scattermapbox(\n            lat=df_sub['Latitude WGS84'], \n            lon=df_sub['Longitude WGS84'],\n            text=df_sub.index,\n            marker=dict(\n                color=colors[2*i],\n                size=df_sub['count_per_100kpax'],\n                sizemin=3,\n                sizeref=.35,\n                sizemode='area',\n                opacity=.8,\n            ),\n            meta=df_sub['item_count'],\n            hovertemplate=\"%{text}\" + \"<br>\" \n                            + \"Found items: %{meta}\" + \"<br>\" \n                            + \"Per 100kPax: \" + \"%{marker.size:.1f}\",\n            name=f'> {cat.left:.0f} per 100kPax',          \n    ))\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"# Defining map style, margins, and original position\nfig.update_layout(\n    mapbox_style=\"open-street-map\",\n    #title='Passengers per french train station in 2018',\n    margin={'l': 0, 'r': 0, 't': 0, 'b': 0},\n    mapbox=dict(\n        center={'lon': 2.39, 'lat': 47.09},\n        zoom=4\n    ),\n)\n# Legend layout\nfig.update_layout(legend={'orientation': 'h', 'y': 0})\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Link to the ",(0,d.jsx)(n.a,{href:"https://github.com/hugolmn/dataviz/blob/master/SNCF_found_item_2.ipynb",children:"Jupyter notebook"}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var d=t(7294);const s={},r=d.createContext(s);function i(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);