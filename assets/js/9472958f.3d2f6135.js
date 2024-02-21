"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[3741],{3696:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var r=t(5893),i=t(4137);const d={title:"SNCF Open Data: found items - 1",tags:["Data Visualization","Python","plotly"],authors:"hugo",style:"border",color:"primary",description:"Data visualization using plotly"},s=void 0,a={permalink:"/blog/2020/06/27/sncf-found-items",editUrl:"https://github.com/hugolmn/hugolmn.github.io/tree/main/blog/2020-06-27-sncf-found-items.md",source:"@site/blog/2020-06-27-sncf-found-items.md",title:"SNCF Open Data: found items - 1",description:"Data visualization using plotly",date:"2020-06-27T00:00:00.000Z",formattedDate:"June 27, 2020",tags:[{label:"Data Visualization",permalink:"/blog/tags/data-visualization"},{label:"Python",permalink:"/blog/tags/python"},{label:"plotly",permalink:"/blog/tags/plotly"}],readingTime:6.385,hasTruncateMarker:!1,authors:[{name:"Hugo Le Moine",title:"Data Scientist",url:"https://github.com/hugolmn",imageURL:"https://github.com/hugolmn.png",key:"hugo"}],frontMatter:{title:"SNCF Open Data: found items - 1",tags:["Data Visualization","Python","plotly"],authors:"hugo",style:"border",color:"primary",description:"Data visualization using plotly"},unlisted:!1,prevItem:{title:"Covid19 and Google Trends",permalink:"/blog/2020/07/08/usa-covid-google-trends"},nextItem:{title:"SNCF Open Data: train station attendance",permalink:"/blog/2020/06/17/sncf-train-station-attendance"}},l={authorsImageUrls:[void 0]},o=[{value:"Monthly found items in french train stations",id:"monthly-found-items-in-french-train-stations",level:2},{value:"18% of stations represent 80% of found items",id:"18-of-stations-represent-80-of-found-items",level:2},{value:"Data",id:"data",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Processing",id:"processing",level:2},{value:"1. Reading csv files",id:"1-reading-csv-files",level:4},{value:"2. Conversion to datetime",id:"2-conversion-to-datetime",level:4},{value:"3. Filtering dates",id:"3-filtering-dates",level:4},{value:"5. Grouping data by year and month",id:"5-grouping-data-by-year-and-month",level:4},{value:"6. Grouping data by train station",id:"6-grouping-data-by-train-station",level:4},{value:"7. Pareto",id:"7-pareto",level:4},{value:"8. Filtering grouped data",id:"8-filtering-grouped-data",level:4},{value:"Visualization",id:"visualization",level:2},{value:"1. Monthly found items",id:"1-monthly-found-items",level:3},{value:"2. Found items per train station",id:"2-found-items-per-train-station",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"monthly-found-items-in-french-train-stations",children:"Monthly found items in french train stations"}),"\n",(0,r.jsx)(n.p,{children:"We can view found items as a proxy for passenger traffic. On this first chart, we can clearly identify a few traffic disruptions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"April 2018 to June 2018 : discontinuous strike against project to reform SNCF."}),"\n",(0,r.jsx)(n.li,{children:"December 2019 : strike against pension reform."}),"\n",(0,r.jsx)(n.li,{children:"March 2020 to June 2020 : Covid-19 restrictions."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We can also observe a peak in July each year, corresponding to summer vacations for most people."}),"\n",(0,r.jsx)("iframe",{height:"400",width:"100%",frameborder:"0",scrolling:"no",src:"//plotly.com/~hugolmn/21.embed?link=false&autosize=true"}),"\n",(0,r.jsx)(n.h2,{id:"18-of-stations-represent-80-of-found-items",children:"18% of stations represent 80% of found items"}),"\n",(0,r.jsx)("iframe",{height:"600",width:"100%",frameborder:"0",scrolling:"no",src:"//plotly.com/~hugolmn/14.embed?link=false&autosize=true"}),"\n",(0,r.jsx)(n.h2,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://ressources.data.sncf.com/explore/dataset/referentiel-gares-voyageurs",children:"SNCF: train station list"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://ressources.data.sncf.com/explore/dataset/objets-trouves-restitution",children:"SNCF: found items"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"libraries",children:"Libraries"}),"\n",(0,r.jsx)(n.p,{children:"The following libraries are imported:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://pandas.pydata.org/",children:"pandas"})," and ",(0,r.jsx)(n.a,{href:"https://numpy.org/",children:"numpy"})," for data processing"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://plotly.com/python/",children:"plotly"}),".colors to use a specific colorscale"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://plotly.com/python/",children:"plotly"}),".graph_object for data visualization"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import pandas as pd\t\t\t\t\t\t\nimport numpy as np\t\t\t\t\t\t\nimport plotly.colors\nimport plotly.graph_objects as go\n"})}),"\n",(0,r.jsx)(n.h2,{id:"processing",children:"Processing"}),"\n",(0,r.jsx)(n.h4,{id:"1-reading-csv-files",children:"1. Reading csv files"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df_gares = pd.read_csv('data/referentiel-gares-voyageurs.csv', sep=';')\ndf_items = pd.read_csv('data/objets-trouves-restitution.csv', sep=';')\n"})}),"\n",(0,r.jsx)(n.p,{children:"These two dataframes contain contain the following data:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"df_gares"}),": train station data, including latitude and longitude."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"df_items"}),": found item data, including date and location."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Sample data from ",(0,r.jsx)(n.code,{children:"df_gares"})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Code plate-forme"}),(0,r.jsx)(n.th,{children:"Intitul\xe9 gare"}),(0,r.jsx)(n.th,{children:"Intitul\xe9 fronton de gare"}),(0,r.jsx)(n.th,{children:"Gare DRG"}),(0,r.jsx)(n.th,{children:"Gare \xe9trang\xe8re"}),(0,r.jsx)(n.th,{children:"Agence gare"}),(0,r.jsx)(n.th,{children:"R\xe9gion SNCF"}),(0,r.jsx)(n.th,{children:"Unit\xe9 gare"}),(0,r.jsx)(n.th,{children:"UT"}),(0,r.jsx)(n.th,{children:"Nbre plateformes"}),(0,r.jsx)(n.th,{children:"..."}),(0,r.jsx)(n.th,{children:"Longitude WGS84"}),(0,r.jsx)(n.th,{children:"Latitude WGS84"}),(0,r.jsx)(n.th,{children:"Code UIC"}),(0,r.jsx)(n.th,{children:"TVS"}),(0,r.jsx)(n.th,{children:"Segment DRG"}),(0,r.jsx)(n.th,{children:"Niveau de service"}),(0,r.jsx)(n.th,{children:"SOP"}),(0,r.jsx)(n.th,{children:"RG"}),(0,r.jsx)(n.th,{children:"Date fin validit\xe9 plateforme"}),(0,r.jsx)(n.th,{children:"WGS 84"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"00007-1"}),(0,r.jsx)(n.td,{children:"Bourg-Madame"}),(0,r.jsx)(n.td,{children:"Bourg-Madame"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"Agence Grand Sud"}),(0,r.jsx)(n.td,{children:"REGION LANGUEDOC-ROUSSILLON"}),(0,r.jsx)(n.td,{children:"UG Languedoc Roussillon"}),(0,r.jsx)(n.td,{children:"BOURG MADAME GARE"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"..."}),(0,r.jsx)(n.td,{children:"1.948670"}),(0,r.jsx)(n.td,{children:"42.432407"}),(0,r.jsx)(n.td,{children:"87784876"}),(0,r.jsx)(n.td,{children:"BMD"}),(0,r.jsx)(n.td,{children:"c"}),(0,r.jsx)(n.td,{children:"1.0"}),(0,r.jsx)(n.td,{children:"NaN"}),(0,r.jsx)(n.td,{children:"GARES C LANGUEDOC ROUSSILLON"}),(0,r.jsx)(n.td,{children:"NaN"}),(0,r.jsx)(n.td,{children:"42.4324069,1.9486704"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"00014-1"}),(0,r.jsx)(n.td,{children:"Bolqu\xe8re - Eyne"}),(0,r.jsx)(n.td,{children:"Bolqu\xe8re - Eyne"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"Agence Grand Sud"}),(0,r.jsx)(n.td,{children:"REGION LANGUEDOC-ROUSSILLON"}),(0,r.jsx)(n.td,{children:"UG Languedoc Roussillon"}),(0,r.jsx)(n.td,{children:"BOLQUERE EYNE GARE"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"..."}),(0,r.jsx)(n.td,{children:"2.087559"}),(0,r.jsx)(n.td,{children:"42.497873"}),(0,r.jsx)(n.td,{children:"87784801"}),(0,r.jsx)(n.td,{children:"BQE"}),(0,r.jsx)(n.td,{children:"c"}),(0,r.jsx)(n.td,{children:"1.0"}),(0,r.jsx)(n.td,{children:"NaN"}),(0,r.jsx)(n.td,{children:"GARES C LANGUEDOC ROUSSILLON"}),(0,r.jsx)(n.td,{children:"NaN"}),(0,r.jsx)(n.td,{children:"42.4978734,2.0875591"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"00015-1"}),(0,r.jsx)(n.td,{children:"Mont-Louis - La Cabanasse"}),(0,r.jsx)(n.td,{children:"Mont-Louis - La Cabanasse"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"Agence Grand Sud"}),(0,r.jsx)(n.td,{children:"REGION LANGUEDOC-ROUSSILLON"}),(0,r.jsx)(n.td,{children:"UG Languedoc Roussillon"}),(0,r.jsx)(n.td,{children:"MONT LOUIS LA CABANASSE GARE"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"..."}),(0,r.jsx)(n.td,{children:"2.113138"}),(0,r.jsx)(n.td,{children:"42.502090"}),(0,r.jsx)(n.td,{children:"87784793"}),(0,r.jsx)(n.td,{children:"MTC"}),(0,r.jsx)(n.td,{children:"c"}),(0,r.jsx)(n.td,{children:"1.0"}),(0,r.jsx)(n.td,{children:"NaN"}),(0,r.jsx)(n.td,{children:"GARES C LANGUEDOC ROUSSILLON"}),(0,r.jsx)(n.td,{children:"NaN"}),(0,r.jsx)(n.td,{children:"42.5020902,2.1131379"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Sampel data from ",(0,r.jsx)(n.code,{children:"df_items"})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Date"}),(0,r.jsx)(n.th,{children:"Date et heure de restitution"}),(0,r.jsx)(n.th,{children:"Gare"}),(0,r.jsx)(n.th,{children:"Code UIC"}),(0,r.jsx)(n.th,{children:"Nature d'objets"}),(0,r.jsx)(n.th,{children:"Type d'objets"}),(0,r.jsx)(n.th,{children:"Type d'enregistrement"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"2014-03-09T14:25:29+01:00"}),(0,r.jsx)(n.td,{children:"NaN"}),(0,r.jsx)(n.td,{children:"Paris Montparnasse"}),(0,r.jsx)(n.td,{children:"87391003.0"}),(0,r.jsx)(n.td,{children:"Manteau, veste, blazer, parka, blouson, cape"}),(0,r.jsx)(n.td,{children:"V\xeatements, chaussures"}),(0,r.jsx)(n.td,{children:"Objet trouv\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"2018-01-23T15:07:32+01:00"}),(0,r.jsx)(n.td,{children:"NaN"}),(0,r.jsx)(n.td,{children:"Saint-\xc9tienne Ch\xe2teaucreux"}),(0,r.jsx)(n.td,{children:"87726000.0"}),(0,r.jsx)(n.td,{children:"Montre"}),(0,r.jsx)(n.td,{children:"Bijoux, montres"}),(0,r.jsx)(n.td,{children:"Objet trouv\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"2018-02-06T15:35:49+01:00"}),(0,r.jsx)(n.td,{children:"NaN"}),(0,r.jsx)(n.td,{children:"Rennes"}),(0,r.jsx)(n.td,{children:"87471003.0"}),(0,r.jsx)(n.td,{children:"Cl\xe9s, porte-cl\xe9s"}),(0,r.jsx)(n.td,{children:"Cl\xe9s, porte-cl\xe9s, badge magn\xe9tique"}),(0,r.jsx)(n.td,{children:"Objet trouv\xe9"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"2-conversion-to-datetime",children:"2. Conversion to datetime"}),"\n",(0,r.jsx)(n.p,{children:"For now, the DataFrame has a Date column, but was not assigned any particular format."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df.Date.dtype\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:">> dtype('O')\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In order to have a standardized datetime, ",(0,r.jsx)(n.code,{children:"pandas.to_datetime"}),"can be applied to get a datetime, and then ",(0,r.jsx)(n.code,{children:"tz_convert"}),"to make it french time."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df['Date'] = pd.to_datetime(df.Date, utc=True).dt.tz_convert('Europe/Paris')\n"})}),"\n",(0,r.jsx)(n.h4,{id:"3-filtering-dates",children:"3. Filtering dates"}),"\n",(0,r.jsx)(n.p,{children:"To know when data collection has actually been put into place, let's analyse dates contained in the DataFrame."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df.Date.dt.year.value_counts().sort_index()\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Date"}),(0,r.jsx)(n.th,{children:"Count"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2013"}),(0,r.jsx)(n.td,{children:"15698"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2014"}),(0,r.jsx)(n.td,{children:"102793"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2015"}),(0,r.jsx)(n.td,{children:"111706"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2016"}),(0,r.jsx)(n.td,{children:"107595"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2017"}),(0,r.jsx)(n.td,{children:"107662"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2018"}),(0,r.jsx)(n.td,{children:"116308"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2019"}),(0,r.jsx)(n.td,{children:"122637"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2020"}),(0,r.jsx)(n.td,{children:"26143"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"To keep consistency, I decided to drop data from 2013: data collection may have not started everywhere, and had definitely not started in January 2013. If we want to dig deeper into the data and check correlations with passenger count, it would be difficult to achieve if data are not complete. Therefore only data collected from 2014 onwards will be kept:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df = df[df.Date.dt.year >= 2014]\n"})}),"\n",(0,r.jsx)(n.h4,{id:"5-grouping-data-by-year-and-month",children:"5. Grouping data by year and month"}),"\n",(0,r.jsx)(n.p,{children:"In the first chart, I wanted to plot found item count for each month in the dataset. To do so, we need to group by year, then month."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df_months = df.groupby(by=[df.Date.dt.year, df.Date.dt.month]).Date.count()\n"})}),"\n",(0,r.jsx)(n.p,{children:"The result is the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"2014  1       5788\n      2       5815\n      3       7012\n      4       8543\n      5       8657\n              ... \n2020  2       9271\n      3       4473\n      4         72\n      5       1386\n      6       3649\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now we need to get the index back to datetime, combining years and months."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df_months.index = df_months.index.map(lambda t: pd.to_datetime('-'.join(map(str, t))))\n"})}),"\n",(0,r.jsx)(n.h4,{id:"6-grouping-data-by-train-station",children:"6. Grouping data by train station"}),"\n",(0,r.jsx)(n.p,{children:"The second chart was made after grouping by train station. It can be achieved by the following instructions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df_grouped = (df\n    .groupby(by='Gare')\n    .count()\n    .Date\n    .rename('Count')\n    .sort_values(ascending=False)\n)\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will first group by train station name, then apply a count aggregation, keep the Date renamed as Count, and values will be sorted from greatest to lowest count."}),"\n",(0,r.jsx)(n.h4,{id:"7-pareto",children:"7. Pareto"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"df_grouped"}),"DataFrame allows us to demonstrate an application of the Pareto priciple. The following lines are doing:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Cumulative found item count of ",(0,r.jsx)(n.code,{children:"df_grouped"})]}),"\n",(0,r.jsxs)(n.li,{children:["Sum of all items in ",(0,r.jsx)(n.code,{children:"df_grouped"})]}),"\n",(0,r.jsx)(n.li,{children:"Assigning booleans to cumulative counts below 80% of the total number of items, and counting them"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"pareto = (df_grouped.cumsum() < df_grouped.sum() * 0.8).sum()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"df_grouped"}),"DataFrame contains 181 train stations, and 32  (18%) of them account for 80% of the total count of found items."]}),"\n",(0,r.jsx)(n.h4,{id:"8-filtering-grouped-data",children:"8. Filtering grouped data"}),"\n",(0,r.jsxs)(n.p,{children:["Using the Pareto principle described above, I filtered ",(0,r.jsx)(n.code,{children:"df_grouped"}),"to keep the first 32 rows for visualization purpose."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df_grouped = df_grouped.iloc[:pareto]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"visualization",children:"Visualization"}),"\n",(0,r.jsx)(n.p,{children:"Now that all the processing part is completed, we can proceed to visualization."}),"\n",(0,r.jsx)(n.h3,{id:"1-monthly-found-items",children:"1. Monthly found items"}),"\n",(0,r.jsxs)(n.p,{children:["The first chart is simply a bar chart of the total count of found items per month. ",(0,r.jsx)(n.code,{children:"x"})," will therefore be the index of the dataframe ",(0,r.jsx)(n.code,{children:"df_months"}),", and ",(0,r.jsx)(n.code,{children:"y"}),"  will be the sum of all found items found for the associated months."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'fig = go.Figure()\nfig.add_trace(\n    go.Bar(\n        x=df_months.index,\n        y=df_months, \n        hoverinfo="x+y",\n        marker_color="#007bff",  \n))\n'})}),"\n",(0,r.jsx)(n.p,{children:"Then, y axis title is added, as well as margins to enhance the result."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"fig.update_layout(\n    yaxis=dict(title=\"Found items in train stations\", titlefont=dict(size=16)),\n    margin={'l': 30, 'r': 30, 't': 50, 'b': 0},\n)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-found-items-per-train-station",children:"2. Found items per train station"}),"\n",(0,r.jsx)(n.p,{children:"The second chart is also a bar chart. The data plotted are the counts of found items in each train station. As mentioned in the processing part, only the first 32 stations are displayed, ordered by number of found items."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'fig.add_trace(\n    go.Bar(\n        x=np.arange(1, len(df_grouped)), \n        y=df_grouped, \n        text=df_grouped.index,\n        meta = df_grouped,\n        hoverinfo="text+y",\n        name="Found items",\n        marker_color="#007bff"\n))\n'})}),"\n",(0,r.jsx)(n.p,{children:"The final step is adjusting the layout: margins, axis titles and log scale for the y axis."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nfig.update_layout(\n    margin={'l':20, 'r': 0, 't': 0, 'b': 250},\n    xaxis=dict(tickangle=-90,\n               tickfont={'size': 14}),\n    yaxis=dict(title=\"Found items per station\",\n               type=\"log\",\n               titlefont=dict(size=16))\n)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Link to the ",(0,r.jsx)(n.a,{href:"https://github.com/hugolmn/dataviz/blob/master/SNCF_found_item_1.ipynb",children:"Jupyter notebook"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4137:(e,n,t)=>{t.d(n,{ah:()=>o});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},d=Object.keys(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,d=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),u=o(t),x=i,j=u["".concat(l,".").concat(x)]||u[x]||c[x]||d;return t?r.createElement(j,s(s({ref:n},h),{},{components:t})):r.createElement(j,s({ref:n},h))}));h.displayName="MDXCreateElement"}}]);