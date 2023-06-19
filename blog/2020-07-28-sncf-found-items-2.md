---
title: "SNCF Open Data: found items - 2"
tags: [Data Visualization, Python, plotly]
authors: hugo
style: border
color: primary
description: Data visualization using plotly
---

## Map of found items

Following a previous [article](https://hugolmn.github.io/2020/06/27/sncf-found-items.html) analyzing monthly evolution as well as concentration of found items, here is another perspective on these data made available by the SNCF. Obviously, the higher the number of passengers, the higher the number of found items. Now, let's look into the details!

On this map are represented the number of found items per 100k passengers between 2015 and 2018. Only stations with more than 10 found items are shown.

<div class="plotly-container">
    <iframe width="100%" height="700" frameborder="0" scrolling="no" src="/graphs/sncf-found-items-map.html"></iframe>
</div>

#### What can we conclude from this visualization ? 

Clearly, there is a significant difference between the area of Paris/north of France, and anywhere else in the country. Nonetheless, one should avoid easy conclusion: are people more careful about their belongings or less prone to hand found items back ? The two options are possibly and even likely connected, but additional data are required to investigate. Perhaps in another part :)

## Data

- [SNCF : train station attendance](https://ressources.data.sncf.com/explore/dataset/frequentation-gares)
- [SNCF: train station list](https://ressources.data.sncf.com/explore/dataset/referentiel-gares-voyageurs)
- [SNCF: found items](https://ressources.data.sncf.com/explore/dataset/objets-trouves-restitution)

## Libraries

The following libraries are imported:

- [pandas](https://pandas.pydata.org/) and [numpy](https://numpy.org/) for data processing
- [plotly](https://plotly.com/python/).colors to use a specific colorscale
- [plotly](https://plotly.com/python/).graph_object for data visualization

```python
import pandas as pd						
import numpy as np						
import plotly.colors
import plotly.graph_objects as go
```

## Processing

#### 1. Reading csv files

```python
df_frequentation = pd.read_csv('data/frequentation-gares.csv', sep=';')
df_gares = pd.read_csv('data/referentiel-gares-voyageurs.csv', sep=';')
df_items = pd.read_csv('data/objets-trouves-restitution.csv', sep=';')
```

These two dataframes contain contain the following data:

- `df_frequentation`: train station attendance data

- `df_gares`: train station data, including latitude and longitude.
- `df_items`: found item data, including date and location.

Sample data from `df_frequentation`

|      | Nom de la gare       | Code UIC complet | Code postal | Segmentation DRG 2018 | Total Voyageurs 2018 | Total Voyageurs + Non voyageurs 2018 | Total Voyageurs 2017 | Total Voyageurs + Non voyageurs 2017 | Total Voyageurs 2016 | Total Voyageurs + Non voyageurs 2016 | Total Voyageurs 2015 | Total Voyageurs + Non voyageurs 2015 |
| ---- | -------------------- | ---------------- | ----------- | --------------------- | -------------------- | ------------------------------------ | -------------------- | ------------------------------------ | -------------------- | ------------------------------------ | -------------------- | ------------------------------------ |
| 0    | Abancourt            | 87313759         | 60220       | c                     | 40228                | 40228                                | 43760                | 43760                                | 41096                | 41096.551614                         | 39720                | 39720                                |
| 1    | Agay                 | 87757559         | 83530       | c                     | 15093                | 15093                                | 14154                | 14154                                | 19240                | 19240.514370                         | 19121                | 19121                                |
| 2    | Agde                 | 87781278         | 34300       | a                     | 588297               | 735372                               | 697091               | 871364                               | 660656               | 825820.929253                        | 662516               | 828146                               |
| 3    | Agonac               | 87595157         | 24460       | c                     | 1492                 | 1492                                 | 1583                 | 1583                                 | 1134                 | 1134.699996                          | 1127                 | 1127                                 |
| 4    | Aigrefeuille Le Thou | 87485193         | 17290       | c                     | 18670                | 18670                                | 14513                | 14513                                | 266                  | 266.157144                           | 0                    | 0                                    |

Sample data from `df_gares`

|      | Code plate-forme | Intitulé gare             | Intitulé fronton de gare  | Gare DRG | Gare étrangère | Agence gare      | Région SNCF                 | Unité gare              | UT                           | Nbre plateformes | ...  | Longitude WGS84 | Latitude WGS84 | Code UIC | TVS  | Segment DRG | Niveau de service | SOP  | RG                           | Date fin validité plateforme | WGS 84               |
| ---- | ---------------- | ------------------------- | ------------------------- | -------- | -------------- | ---------------- | --------------------------- | ----------------------- | ---------------------------- | ---------------- | ---- | --------------- | -------------- | -------- | ---- | ----------- | ----------------- | ---- | ---------------------------- | ---------------------------- | -------------------- |
| 0    | 00007-1          | Bourg-Madame              | Bourg-Madame              | True     | False          | Agence Grand Sud | REGION LANGUEDOC-ROUSSILLON | UG Languedoc Roussillon | BOURG MADAME GARE            | 1                | ...  | 1.948670        | 42.432407      | 87784876 | BMD  | c           | 1.0               | NaN  | GARES C LANGUEDOC ROUSSILLON | NaN                          | 42.4324069,1.9486704 |
| 1    | 00014-1          | Bolquère - Eyne           | Bolquère - Eyne           | True     | False          | Agence Grand Sud | REGION LANGUEDOC-ROUSSILLON | UG Languedoc Roussillon | BOLQUERE EYNE GARE           | 1                | ...  | 2.087559        | 42.497873      | 87784801 | BQE  | c           | 1.0               | NaN  | GARES C LANGUEDOC ROUSSILLON | NaN                          | 42.4978734,2.0875591 |
| 2    | 00015-1          | Mont-Louis - La Cabanasse | Mont-Louis - La Cabanasse | True     | False          | Agence Grand Sud | REGION LANGUEDOC-ROUSSILLON | UG Languedoc Roussillon | MONT LOUIS LA CABANASSE GARE | 1                | ...  | 2.113138        | 42.502090      | 87784793 | MTC  | c           | 1.0               | NaN  | GARES C LANGUEDOC ROUSSILLON | NaN                          | 42.5020902,2.1131379 |

Sampel data from `df_items`

|      | Date                      | Date et heure de restitution | Gare                       | Code UIC   | Nature d'objets                              | Type d'objets                      | Type d'enregistrement |
| ---- | ------------------------- | ---------------------------- | -------------------------- | ---------- | -------------------------------------------- | ---------------------------------- | --------------------- |
| 0    | 2014-03-09T14:25:29+01:00 | NaN                          | Paris Montparnasse         | 87391003.0 | Manteau, veste, blazer, parka, blouson, cape | Vêtements, chaussures              | Objet trouvé          |
| 1    | 2018-01-23T15:07:32+01:00 | NaN                          | Saint-Étienne Châteaucreux | 87726000.0 | Montre                                       | Bijoux, montres                    | Objet trouvé          |
| 2    | 2018-02-06T15:35:49+01:00 | NaN                          | Rennes                     | 87471003.0 | Clés, porte-clés                             | Clés, porte-clés, badge magnétique | Objet trouvé          |

#### 2. Merging dataframes

The three dataframes have a column identifier: the UIC code ("Union Internationale des Chemins de fer", International Union of Railways in french). We can merge them based on this unique value for each station.

```python
df = df_gares.merge(
    right=df_frequentation, 
    left_on='Code UIC', 
    right_on='Code UIC complet', 
    how='inner')

df = df.merge(df_items, on='Code UIC', how='right')
```

#### 3. Conversion to datetime

For now, the DataFrame has a Date column, but was not assigned any particular format.

```python
df.Date.dtype
```

> ```
> >> dtype('O')
> ```

In order to have a standardized datetime, `pandas.to_datetime` can be applied to get a datetime, and then `tz_convert` to make it french time.

```python
df['Date'] = pd.to_datetime(df.Date, utc=True).dt.tz_convert('Europe/Paris')
```

#### 4. Filtering dates

As I want to analyze the number of found items according to the number of passengers, I must filter out data which is not in the period 2015-2018 as these are the only years for which the number of passengers is available.

```python
df = df.loc[(df.Date.dt.year >= 2015) & (df.Date.dt.year <= 2018)]
```

#### 5. Total number of passengers per station

```python
df['Passengers'] =(df['Total Voyageurs 2018'] 
                            + df['Total Voyageurs 2017'] 
                            + df['Total Voyageurs 2016'] 
                            + df['Total Voyageurs 2015'])
```

#### 6. Grouping data by train station

Data is grouped by station name, geographical coordinates are kept, as well as the count of found items, and the number of passengers.

```python
df = (df.groupby(by="Intitulé gare")
        .agg({'Longitude WGS84': 'first',
              'Latitude WGS84': 'first',
              'Nature d\'objets': len,
              'Passengers': 'first'})
        .rename(columns={'Nature d\'objets': 'item_count'})
)
```

#### 7. Count per 100k

In this blog post, the focus is put on the ratio item/pax. A straightforward division would lead to number hard to imagine. Therefore, using a ratio per 100k passengers is more interesting. I restricted the selection to stations having at least 10 found items .

```python
df['count_per_100kpax'] = df.item_count / df.Passengers * 1e5
df = df.sort_values(by='count_per_100kpax', ascending=False)
df = df[df.item_count >= 10]
```

#### 8. Creation of categories

To group data by category on the map, we need to bin them. I chose a standard quantile binning with 20% of data in each bin.

```python
df['group'] = pd.qcut(df['count_per_100kpax'], q=np.linspace(0, 1, 6))
```

#### 9. What we have so far

| Intitulé gare          | Longitude WGS84 | Latitude WGS84 | item_count | Passengers | count_per_100kpax | category         |
| ---------------------- | --------------- | -------------- | ---------- | ---------- | ----------------- | ---------------- |
| Versailles Rive Droite | 2.134752        | 48.809653      | 39         | 21309519.0 | 0.183017          | (0.182, 3.623]   |
| Poissy                 | 2.041368        | 48.932901      | 80         | 43120958.0 | 0.185525          | (0.182, 3.623]   |
| ...                    | ...             | ...            | ...        | ...        | ...               | ...              |
| Hendaye                | -1.781724       | 43.353132      | 2873       | 1422622.0  | 201.951045        | (24.664, 323.36] |
| Le Croisic             | -2.507442       | 47.289836      | 1358       | 419966.0   | 323.359510        | (24.664, 323.36] |

## Visualization

Now that all the processing part is completed, we can proceed to the  visualization.

```python
fig = go.Figure()
colors = plotly.colors.sequential.Inferno # Custom colormap

# One scattermapbox per group
for i, group in enumerate(df.group.cat.categories):
    df_sub = df[df.group == group]
    fig.add_trace(go.Scattermapbox(
            lat=df_sub['Latitude WGS84'], 
            lon=df_sub['Longitude WGS84'],
            text=df_sub.index,
            marker=dict(
                color=colors[2*i],
                size=df_sub['count_per_100kpax'],
                sizemin=3,
                sizeref=.35,
                sizemode='area',
                opacity=.8,
            ),
            meta=df_sub['item_count'],
            hovertemplate="%{text}" + "<br>" 
                            + "Found items: %{meta}" + "<br>" 
                            + "Per 100kPax: " + "%{marker.size:.1f}",
            name=f'> {cat.left:.0f} per 100kPax',          
    ))
```

```python
# Defining map style, margins, and original position
fig.update_layout(
    mapbox_style="open-street-map",
    #title='Passengers per french train station in 2018',
    margin={'l': 0, 'r': 0, 't': 0, 'b': 0},
    mapbox=dict(
        center={'lon': 2.39, 'lat': 47.09},
        zoom=4
    ),
)
# Legend layout
fig.update_layout(legend={'orientation': 'h', 'y': 0})
```

Link to the [Jupyter notebook](https://github.com/hugolmn/dataviz/blob/master/SNCF_found_item_2.ipynb).
