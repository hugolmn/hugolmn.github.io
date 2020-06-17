---
title: "SNCF Open Data&nbsp-&nbsptrain station attendance"
tags: [Data Visualisation, Python, plotly]
style: border
color: primary
description: Data visualization using plotly
---

<div class="embed-responsive embed-responsive-4by3">
	<iframe id="igraph" class="embed-responsive-item" scrolling="no" style="border:none;" seamless="seamless" src="https://plotly.com/~hugolmn/3.embed?link=false" height="600" width="100%"></iframe>
</div>



## Data

- [SNCF : train station attendance](https://ressources.data.sncf.com/explore/dataset/frequentation-gares)
- [SNCF : train station list](https://ressources.data.sncf.com/explore/dataset/referentiel-gares-voyageurs)

## Processing

1. Reading csv files

```python
df_frequentation = pd.read_csv('data/frequentation-gares.csv', sep=';')
df_gares = pd.read_csv('data/referentiel-gares-voyageurs.csv', sep=';')
```

2. Merging dataframes

The UIC Code is a unique ID for train stations. However, the column names are different in both files, so it's mandaroty so specify the **`left_on`** and **`right_on`** arguments. 

```python
df = df_gares.merge(
    right=df_frequentation,
    left_on='Code UIC',
    right_on='Code UIC complet',
    how='inner')
```

3. Filtering and adding square root column

In order to avoir keeping smallest train stations, I chose to filter out stations with attendance below 1000 passengers in 2018. For visualization purpose, I added a column holding the square root of the number of passengers per station

```python
df = df[df['Total Voyageurs 2018'] > 1000]
df['Total Voyageurs 2018 sqrt'] = np.sqrt(df['Total Voyageurs 2018'])
```

4. Adding a category column

By using pandas.cut data can be split into categories according to total number of passengers. This will allow to plot with a different color for each category.

```python
df['category'] = pd.cut(df['Total Voyageurs 2018'], bins=[1e4, 1e5, 1e6, 1e7, np.inf])
```

## Visualization

[Plotly](https://plotly.com/) is a handy tool when it comes to creating interactive graphs and plots, that you you embed in other websites.

1. Scatter Mapbox

Data contain latitude and longitude: these will be used to plot train stations on the map. The size of the bubbles will depend on the square root of the number of passengers in 2018. A different trace is added for each of the categories defined above. Finally, information shown on mouse-hovering is defined using `hovertemplate`.

```python
fig = go.Figure()
colors = plotly.colors.sequential.Viridis

for i, cat in enumerate(df.category.cat.categories):
    df_sub = df[df.category == cat]
    fig.add_trace(go.Scattermapbox(
        lat=df_sub['Latitude WGS84'], 
        lon=df_sub['Longitude WGS84'],
        text=df_sub['Intitulé gare'],
        marker=dict(
            color=colors[2*i+1],
            size=df_sub['Total Voyageurs 2018 sqrt'],
            sizemin=1,
            sizeref=15,
            sizemode='area',
            opacity=.8,
        ),
        meta=df_sub['Total Voyageurs 2018'],
        hovertemplate="%{text}" + "<br>" + "Passengers: %{meta}",
        name=f'> {cat.left:1.0e} passengers',          
))
```

2. Layout

The last step is adding the background map, the title, margins around the plot, and the initial position & zoom.

```python
fig.update_layout(
    mapbox_style="open-street-map",
    title='Passengers per french train station in 2018',
    margin={'l': 0, 'r': 0, 't': 50, 'b': 0},
    mapbox=dict(
        center={'lon': 2.39, 'lat': 47.09},
        zoom=5
    ),
)
```

<p class="text-center">
{% include elements/button.html link="https://github.com/hugolmn/dataviz/blob/master/SNCF_traffic.ipynb" text="Full Code" %}
</p>