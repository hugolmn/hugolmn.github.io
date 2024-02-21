"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[228],{9215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(5893),d=n(4137);const s={title:"SNCF Open Data: train station attendance",tags:["Data Visualization","Python","plotly"],authors:"hugo",style:"border",color:"primary",description:"Geo-visualization of train stations"},i=void 0,l={permalink:"/blog/2020/06/17/sncf-train-station-attendance",editUrl:"https://github.com/hugolmn/hugolmn.github.io/tree/main/blog/2020-06-17-sncf-train-station-attendance.md",source:"@site/blog/2020-06-17-sncf-train-station-attendance.md",title:"SNCF Open Data: train station attendance",description:"Geo-visualization of train stations",date:"2020-06-17T00:00:00.000Z",formattedDate:"June 17, 2020",tags:[{label:"Data Visualization",permalink:"/blog/tags/data-visualization"},{label:"Python",permalink:"/blog/tags/python"},{label:"plotly",permalink:"/blog/tags/plotly"}],readingTime:4.995,hasTruncateMarker:!1,authors:[{name:"Hugo Le Moine",title:"Data Scientist",url:"https://github.com/hugolmn",imageURL:"https://github.com/hugolmn.png",key:"hugo"}],frontMatter:{title:"SNCF Open Data: train station attendance",tags:["Data Visualization","Python","plotly"],authors:"hugo",style:"border",color:"primary",description:"Geo-visualization of train stations"},unlisted:!1,prevItem:{title:"SNCF Open Data: found items - 1",permalink:"/blog/2020/06/27/sncf-found-items"}},a={authorsImageUrls:[void 0]},c=[{value:"Passengers per french train station in 2018",id:"passengers-per-french-train-station-in-2018",level:2},{value:"Data",id:"data",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Processing",id:"processing",level:2},{value:"1. Reading csv files",id:"1-reading-csv-files",level:4},{value:"2. Merging dataframes",id:"2-merging-dataframes",level:4},{value:"3. Filtering",id:"3-filtering",level:4},{value:"4. Adding a category column",id:"4-adding-a-category-column",level:4},{value:"Visualization",id:"visualization",level:2},{value:"1. Scatter Mapbox",id:"1-scatter-mapbox",level:4},{value:"2. Layout",id:"2-layout",level:4}];function o(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"passengers-per-french-train-station-in-2018",children:"Passengers per french train station in 2018"}),"\n",(0,r.jsx)("div",{class:"plotly-container",children:(0,r.jsx)("iframe",{width:"100%",height:"700",frameborder:"0",scrolling:"no",src:"/graphs/sncf-train-stations.html"})}),"\n",(0,r.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://ressources.data.sncf.com/explore/dataset/frequentation-gares",children:"SNCF : train station attendance"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://ressources.data.sncf.com/explore/dataset/referentiel-gares-voyageurs",children:"SNCF : train station list"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"libraries",children:"Libraries"}),"\n",(0,r.jsx)(t.p,{children:"The following libraries are imported:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://pandas.pydata.org/",children:"pandas"})," and ",(0,r.jsx)(t.a,{href:"https://numpy.org/",children:"numpy"})," for data processing"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://plotly.com/python/",children:"plotly"}),".colors to use a specific color scale"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://plotly.com/python/",children:"plotly"}),".graph_object for data visualization"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import pandas as pd\t\t\t\t\t\t\nimport numpy as np\t\t\t\t\t\t\nimport plotly.colors\nimport plotly.graph_objects as go\n"})}),"\n",(0,r.jsx)(t.h2,{id:"processing",children:"Processing"}),"\n",(0,r.jsx)(t.h4,{id:"1-reading-csv-files",children:"1. Reading csv files"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"df_frequentation = pd.read_csv('data/frequentation-gares.csv', sep=';')\ndf_gares = pd.read_csv('data/referentiel-gares-voyageurs.csv', sep=';')\n"})}),"\n",(0,r.jsx)(t.p,{children:"Sample data from df_frequentation"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Nom de la gare"}),(0,r.jsx)(t.th,{children:"Code UIC complet"}),(0,r.jsx)(t.th,{children:"Code postal"}),(0,r.jsx)(t.th,{children:"Segmentation DRG 2018"}),(0,r.jsx)(t.th,{children:"Total Voyageurs 2018"}),(0,r.jsx)(t.th,{children:"Total Voyageurs + Non voyageurs 2018"}),(0,r.jsx)(t.th,{children:"Total Voyageurs 2017"}),(0,r.jsx)(t.th,{children:"Total Voyageurs + Non voyageurs 2017"}),(0,r.jsx)(t.th,{children:"Total Voyageurs 2016"}),(0,r.jsx)(t.th,{children:"Total Voyageurs + Non voyageurs 2016"}),(0,r.jsx)(t.th,{children:"Total Voyageurs 2015"}),(0,r.jsx)(t.th,{children:"Total Voyageurs + Non voyageurs 2015"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"Abancourt"}),(0,r.jsx)(t.td,{children:"87313759"}),(0,r.jsx)(t.td,{children:"60220"}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{children:"40228"}),(0,r.jsx)(t.td,{children:"40228"}),(0,r.jsx)(t.td,{children:"43760"}),(0,r.jsx)(t.td,{children:"43760"}),(0,r.jsx)(t.td,{children:"41096"}),(0,r.jsx)(t.td,{children:"41096.551614"}),(0,r.jsx)(t.td,{children:"39720"}),(0,r.jsx)(t.td,{children:"39720"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Agay"}),(0,r.jsx)(t.td,{children:"87757559"}),(0,r.jsx)(t.td,{children:"83530"}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{children:"15093"}),(0,r.jsx)(t.td,{children:"15093"}),(0,r.jsx)(t.td,{children:"14154"}),(0,r.jsx)(t.td,{children:"14154"}),(0,r.jsx)(t.td,{children:"19240"}),(0,r.jsx)(t.td,{children:"19240.514370"}),(0,r.jsx)(t.td,{children:"19121"}),(0,r.jsx)(t.td,{children:"19121"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"Agde"}),(0,r.jsx)(t.td,{children:"87781278"}),(0,r.jsx)(t.td,{children:"34300"}),(0,r.jsx)(t.td,{children:"a"}),(0,r.jsx)(t.td,{children:"588297"}),(0,r.jsx)(t.td,{children:"735372"}),(0,r.jsx)(t.td,{children:"697091"}),(0,r.jsx)(t.td,{children:"871364"}),(0,r.jsx)(t.td,{children:"660656"}),(0,r.jsx)(t.td,{children:"825820.929253"}),(0,r.jsx)(t.td,{children:"662516"}),(0,r.jsx)(t.td,{children:"828146"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:"Agonac"}),(0,r.jsx)(t.td,{children:"87595157"}),(0,r.jsx)(t.td,{children:"24460"}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{children:"1492"}),(0,r.jsx)(t.td,{children:"1492"}),(0,r.jsx)(t.td,{children:"1583"}),(0,r.jsx)(t.td,{children:"1583"}),(0,r.jsx)(t.td,{children:"1134"}),(0,r.jsx)(t.td,{children:"1134.699996"}),(0,r.jsx)(t.td,{children:"1127"}),(0,r.jsx)(t.td,{children:"1127"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:"Aigrefeuille Le Thou"}),(0,r.jsx)(t.td,{children:"87485193"}),(0,r.jsx)(t.td,{children:"17290"}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{children:"18670"}),(0,r.jsx)(t.td,{children:"18670"}),(0,r.jsx)(t.td,{children:"14513"}),(0,r.jsx)(t.td,{children:"14513"}),(0,r.jsx)(t.td,{children:"266"}),(0,r.jsx)(t.td,{children:"266.157144"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Sample data from df_gares"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Code plate-forme"}),(0,r.jsx)(t.th,{children:"Intitul\xe9 gare"}),(0,r.jsx)(t.th,{children:"Intitul\xe9 fronton de gare"}),(0,r.jsx)(t.th,{children:"Gare DRG"}),(0,r.jsx)(t.th,{children:"Gare \xe9trang\xe8re"}),(0,r.jsx)(t.th,{children:"Agence gare"}),(0,r.jsx)(t.th,{children:"R\xe9gion SNCF"}),(0,r.jsx)(t.th,{children:"Unit\xe9 gare"}),(0,r.jsx)(t.th,{children:"UT"}),(0,r.jsx)(t.th,{children:"Nbre plateformes"}),(0,r.jsx)(t.th,{children:"..."}),(0,r.jsx)(t.th,{children:"Longitude WGS84"}),(0,r.jsx)(t.th,{children:"Latitude WGS84"}),(0,r.jsx)(t.th,{children:"Code UIC"}),(0,r.jsx)(t.th,{children:"TVS"}),(0,r.jsx)(t.th,{children:"Segment DRG"}),(0,r.jsx)(t.th,{children:"Niveau de service"}),(0,r.jsx)(t.th,{children:"SOP"}),(0,r.jsx)(t.th,{children:"RG"}),(0,r.jsx)(t.th,{children:"Date fin validit\xe9 plateforme"}),(0,r.jsx)(t.th,{children:"WGS 84"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"00007-1"}),(0,r.jsx)(t.td,{children:"Bourg-Madame"}),(0,r.jsx)(t.td,{children:"Bourg-Madame"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"Agence Grand Sud"}),(0,r.jsx)(t.td,{children:"REGION LANGUEDOC-ROUSSILLON"}),(0,r.jsx)(t.td,{children:"UG Languedoc Roussillon"}),(0,r.jsx)(t.td,{children:"BOURG MADAME GARE"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"..."}),(0,r.jsx)(t.td,{children:"1.948670"}),(0,r.jsx)(t.td,{children:"42.432407"}),(0,r.jsx)(t.td,{children:"87784876"}),(0,r.jsx)(t.td,{children:"BMD"}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{children:"1.0"}),(0,r.jsx)(t.td,{children:"NaN"}),(0,r.jsx)(t.td,{children:"GARES C LANGUEDOC ROUSSILLON"}),(0,r.jsx)(t.td,{children:"NaN"}),(0,r.jsx)(t.td,{children:"42.4324069,1.9486704"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"00014-1"}),(0,r.jsx)(t.td,{children:"Bolqu\xe8re - Eyne"}),(0,r.jsx)(t.td,{children:"Bolqu\xe8re - Eyne"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"Agence Grand Sud"}),(0,r.jsx)(t.td,{children:"REGION LANGUEDOC-ROUSSILLON"}),(0,r.jsx)(t.td,{children:"UG Languedoc Roussillon"}),(0,r.jsx)(t.td,{children:"BOLQUERE EYNE GARE"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"..."}),(0,r.jsx)(t.td,{children:"2.087559"}),(0,r.jsx)(t.td,{children:"42.497873"}),(0,r.jsx)(t.td,{children:"87784801"}),(0,r.jsx)(t.td,{children:"BQE"}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{children:"1.0"}),(0,r.jsx)(t.td,{children:"NaN"}),(0,r.jsx)(t.td,{children:"GARES C LANGUEDOC ROUSSILLON"}),(0,r.jsx)(t.td,{children:"NaN"}),(0,r.jsx)(t.td,{children:"42.4978734,2.0875591"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"00015-1"}),(0,r.jsx)(t.td,{children:"Mont-Louis - La Cabanasse"}),(0,r.jsx)(t.td,{children:"Mont-Louis - La Cabanasse"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"Agence Grand Sud"}),(0,r.jsx)(t.td,{children:"REGION LANGUEDOC-ROUSSILLON"}),(0,r.jsx)(t.td,{children:"UG Languedoc Roussillon"}),(0,r.jsx)(t.td,{children:"MONT LOUIS LA CABANASSE GARE"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"..."}),(0,r.jsx)(t.td,{children:"2.113138"}),(0,r.jsx)(t.td,{children:"42.502090"}),(0,r.jsx)(t.td,{children:"87784793"}),(0,r.jsx)(t.td,{children:"MTC"}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{children:"1.0"}),(0,r.jsx)(t.td,{children:"NaN"}),(0,r.jsx)(t.td,{children:"GARES C LANGUEDOC ROUSSILLON"}),(0,r.jsx)(t.td,{children:"NaN"}),(0,r.jsx)(t.td,{children:"42.5020902,2.1131379"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:"00020-1"}),(0,r.jsx)(t.td,{children:"Thu\xe8s les Bains"}),(0,r.jsx)(t.td,{children:"Thu\xe8s les Bains"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"Agence Grand Sud"}),(0,r.jsx)(t.td,{children:"REGION LANGUEDOC-ROUSSILLON"}),(0,r.jsx)(t.td,{children:"UG Languedoc Roussillon"}),(0,r.jsx)(t.td,{children:"THUES LES BAINS GARE"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"..."}),(0,r.jsx)(t.td,{children:"2.249094"}),(0,r.jsx)(t.td,{children:"42.528801"}),(0,r.jsx)(t.td,{children:"87784744"}),(0,r.jsx)(t.td,{children:"THB"}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{children:"1.0"}),(0,r.jsx)(t.td,{children:"NaN"}),(0,r.jsx)(t.td,{children:"GARES C LANGUEDOC ROUSSILLON"}),(0,r.jsx)(t.td,{children:"NaN"}),(0,r.jsx)(t.td,{children:"42.5288009,2.249094"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"2-merging-dataframes",children:"2. Merging dataframes"}),"\n",(0,r.jsxs)(t.p,{children:["The UIC Code is a unique ID for train stations. However, the column names are different in both files, so it's mandatory so specify the ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"left_on"})})," and ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"right_on"})})," arguments."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"df = df_gares.merge(\n    right=df_frequentation,\n    left_on='Code UIC',\n    right_on='Code UIC complet',\n    how='inner')\n"})}),"\n",(0,r.jsx)(t.h4,{id:"3-filtering",children:"3. Filtering"}),"\n",(0,r.jsx)(t.p,{children:"In order to avoid keeping small train stations, I chose to filter out stations with attendance below 1000 passengers in 2018. For visualization purpose, I added a column holding the square root of the number of passengers per station"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"df = df[df['Total Voyageurs 2018'] > 1000]\n"})}),"\n",(0,r.jsx)(t.h4,{id:"4-adding-a-category-column",children:"4. Adding a category column"}),"\n",(0,r.jsxs)(t.p,{children:["By using ",(0,r.jsx)(t.code,{children:"pandas.cut"})," data can be split into categories according to total number of passengers. This will allow to plot with a different color for each category."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"df['category'] = pd.cut(df['Total Voyageurs 2018'], bins=[1e4, 1e5, 1e6, 1e7, np.inf])\n"})}),"\n",(0,r.jsx)(t.h2,{id:"visualization",children:"Visualization"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://plotly.com/",children:"Plotly"})," is a handy tool when it comes to creating interactive graphs and plots, that you can embed in other websites."]}),"\n",(0,r.jsx)(t.h4,{id:"1-scatter-mapbox",children:"1. Scatter Mapbox"}),"\n",(0,r.jsxs)(t.p,{children:["Data contain latitude and longitude: these will be used to plot train stations on the map. The size of the bubbles will depend on the square root of the number of passengers in 2018. A different trace is added for each of the categories defined above. Finally, information shown on mouse-hovering is defined using ",(0,r.jsx)(t.code,{children:"hovertemplate"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"fig = go.Figure()\ncolors = plotly.colors.sequential.Viridis\n\nfor i, cat in enumerate(df.category.cat.categories):\n    df_sub = df[df.category == cat]\n    fig.add_trace(go.Scattermapbox(\n        lat=df_sub['Latitude WGS84'], \n        lon=df_sub['Longitude WGS84'],\n        text=df_sub['Intitul\xe9 gare'],\n        marker=dict(\n            color=colors[2*i+1],\n            size=np.sqrt(df_sub['Total Voyageurs 2018 sqrt']),\n            sizemin=1,\n            sizeref=15,\n            sizemode='area',\n            opacity=.8,\n        ),\n        meta=df_sub['Total Voyageurs 2018'],\n        hovertemplate=\"%{text}\" + \"<br>\" + \"Passengers: %{meta}\",\n        name=f'> {cat.left:1.0e} passengers',          \n))\n"})}),"\n",(0,r.jsx)(t.h4,{id:"2-layout",children:"2. Layout"}),"\n",(0,r.jsx)(t.p,{children:"The last step is adding the background map, the title, margins around the plot, and the initial position & zoom."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"fig.update_layout(\n    mapbox_style=\"open-street-map\",\n    title='Passengers per french train station in 2018',\n    margin={'l': 0, 'r': 0, 't': 50, 'b': 0},\n    mapbox=dict(\n        center={'lon': 2.39, 'lat': 47.09},\n        zoom=4\n    ),\n)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Link to the ",(0,r.jsx)(t.a,{href:"https://github.com/hugolmn/dataviz/blob/master/SNCF_traffic.ipynb",children:"Jupyter notebook"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,d.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},4137:(e,t,n)=>{n.d(t,{ah:()=>c});var r=n(7294);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,d=function(e,t){if(null==e)return{};var n,r,d={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(d[n]=e[n]);return d}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,d=e.mdxType,s=e.originalType,a=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),j=c(n),x=d,u=j["".concat(a,".").concat(x)]||j[x]||o[x]||s;return n?r.createElement(u,i(i({ref:t},h),{},{components:n})):r.createElement(u,i({ref:t},h))}));h.displayName="MDXCreateElement"}}]);