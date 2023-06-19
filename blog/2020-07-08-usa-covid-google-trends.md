---
title: "Covid19 and Google Trends"
tags: [Data Visualization, Python, plotly]
authors: hugo
style: border
color: primary
description: Trend anaysis between covid19 cases and Google searches
---

## USA Covid19 Cases vs. Google Trends

Based on user searches, [Google Flu](https://www.google.org/flutrends/about/) tried to estimate flu prevalence among populations. In this simple visualization I try to use a similar, yet simplified approach. Below are compared USA reported covid19 cases against Google Trends popularity for "Coronavirus" and "Worldometer" (which is a website used worldwide to track this pandemic).

<iframe width="100%" height="400" frameborder="0" scrolling="no" src="//plotly.com/~hugolmn/55.embed?link=false&autosize=true&modebar=false"></iframe>

## Timeline

- January 2020: quick spread in China
- Mid-February : spread to Europe
- "Coronavirus" popularity peaks on 15th March, when USA cases growth rate is maximal.
- "Worldometer" popularity peaks two weeks later.
- 11th April: USA 7-day moving average peaks.
- 31th May: USA 7-day moving average bottoms to a 2-month low.
- Since June: cases are up to new daily records, but popularity of "Coronavirus" remains low.

## Data

- [CDC USA](https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html)
- [Google Trends](https://trends.google.com/trends/explore?date=2020-01-01%202020-12-31&geo=US&q=%2Fm%2F01cpyy)


Link to the [Jupyter notebook](https://github.com/hugolmn/dataviz/blob/master/USA-Google-Trends.ipynb).
