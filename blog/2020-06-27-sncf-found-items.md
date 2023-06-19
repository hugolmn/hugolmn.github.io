---
title: "SNCF Open Data: found items - 1"
tags: [Data Visualization, Python, plotly]
authors: hugo
style: border
color: primary
description: Data visualization using plotly
---

## Monthly found items in french train stations

We can view found items as a proxy for passenger traffic. On this first chart, we can clearly identify a few traffic disruptions:

- April 2018 to June 2018 : discontinuous strike against project to reform SNCF.
- December 2019 : strike against pension reform.
- March 2020 to June 2020 : Covid-19 restrictions.

We can also observe a peak in July each year, corresponding to summer vacations for most people.

<iframe height="400" width="100%" frameborder="0" scrolling="no" src="//plotly.com/~hugolmn/21.embed?link=false&autosize=true"></iframe>

## 18% of stations represent 80% of found items

<iframe height="600" width="100%" frameborder="0" scrolling="no" src="//plotly.com/~hugolmn/14.embed?link=false&autosize=true"></iframe>

## Data

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
df_gares = pd.read_csv('data/referentiel-gares-voyageurs.csv', sep=';')
df_items = pd.read_csv('data/objets-trouves-restitution.csv', sep=';')
```

These two dataframes contain contain the following data:

- `df_gares`: train station data, including latitude and longitude.
- `df_items`: found item data, including date and location.

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

#### 2. Conversion to datetime

For now, the DataFrame has a Date column, but was not assigned any particular format.

```python
df.Date.dtype
```

> ```
> >> dtype('O')
> ```

In order to have a standardized datetime, `pandas.to_datetime`can be applied to get a datetime, and then `tz_convert`to make it french time.

```python
df['Date'] = pd.to_datetime(df.Date, utc=True).dt.tz_convert('Europe/Paris')
```

#### 3. Filtering dates

To know when data collection has actually been put into place, let's analyse dates contained in the DataFrame.

```python
df.Date.dt.year.value_counts().sort_index()
```

| Date | Count  |
| ---- | ------ |
| 2013 | 15698  |
| 2014 | 102793 |
| 2015 | 111706 |
| 2016 | 107595 |
| 2017 | 107662 |
| 2018 | 116308 |
| 2019 | 122637 |
| 2020 | 26143  |

To keep consistency, I decided to drop data from 2013: data collection may have not started everywhere, and had definitely not started in January 2013. If we want to dig deeper into the data and check correlations with passenger count, it would be difficult to achieve if data are not complete. Therefore only data collected from 2014 onwards will be kept:

```python
df = df[df.Date.dt.year >= 2014]
```

#### 5. Grouping data by year and month

In the first chart, I wanted to plot found item count for each month in the dataset. To do so, we need to group by year, then month.

```python
df_months = df.groupby(by=[df.Date.dt.year, df.Date.dt.month]).Date.count()
```

The result is the following:

```python
2014  1       5788
      2       5815
      3       7012
      4       8543
      5       8657
              ... 
2020  2       9271
      3       4473
      4         72
      5       1386
      6       3649
```

Now we need to get the index back to datetime, combining years and months.

```python
df_months.index = df_months.index.map(lambda t: pd.to_datetime('-'.join(map(str, t))))
```



#### 6. Grouping data by train station

The second chart was made after grouping by train station. It can be achieved by the following instructions:

```python
df_grouped = (df
    .groupby(by='Gare')
    .count()
    .Date
    .rename('Count')
    .sort_values(ascending=False)
)
```

This will first group by train station name, then apply a count aggregation, keep the Date renamed as Count, and values will be sorted from greatest to lowest count.

#### 7. Pareto

The `df_grouped`DataFrame allows us to demonstrate an application of the Pareto priciple. The following lines are doing:

- Cumulative found item count of `df_grouped`
- Sum of all items in `df_grouped`
- Assigning booleans to cumulative counts below 80% of the total number of items, and counting them

```python
pareto = (df_grouped.cumsum() < df_grouped.sum() * 0.8).sum()
```

The `df_grouped`DataFrame contains 181 train stations, and 32  (18%) of them account for 80% of the total count of found items.

#### 8. Filtering grouped data

Using the Pareto principle described above, I filtered `df_grouped`to keep the first 32 rows for visualization purpose.

```python
df_grouped = df_grouped.iloc[:pareto]
```

## Visualization

Now that all the processing part is completed, we can proceed to visualization.

### 1. Monthly found items

The first chart is simply a bar chart of the total count of found items per month. `x` will therefore be the index of the dataframe `df_months`, and `y`  will be the sum of all found items found for the associated months. 

```python
fig = go.Figure()
fig.add_trace(
    go.Bar(
        x=df_months.index,
        y=df_months, 
        hoverinfo="x+y",
        marker_color="#007bff",  
))
```

Then, y axis title is added, as well as margins to enhance the result.

```python
fig.update_layout(
    yaxis=dict(title="Found items in train stations", titlefont=dict(size=16)),
    margin={'l': 30, 'r': 30, 't': 50, 'b': 0},
)
```

### 2. Found items per train station

The second chart is also a bar chart. The data plotted are the counts of found items in each train station. As mentioned in the processing part, only the first 32 stations are displayed, ordered by number of found items.

```python
fig.add_trace(
    go.Bar(
        x=np.arange(1, len(df_grouped)), 
        y=df_grouped, 
        text=df_grouped.index,
        meta = df_grouped,
        hoverinfo="text+y",
        name="Found items",
        marker_color="#007bff"
))
```

The final step is adjusting the layout: margins, axis titles and log scale for the y axis.

```python

fig.update_layout(
    margin={'l':20, 'r': 0, 't': 0, 'b': 250},
    xaxis=dict(tickangle=-90,
               tickfont={'size': 14}),
    yaxis=dict(title="Found items per station",
               type="log",
               titlefont=dict(size=16))
)
```

Link to the [Jupyter notebook](https://github.com/hugolmn/dataviz/blob/master/SNCF_found_item_1.ipynb).
