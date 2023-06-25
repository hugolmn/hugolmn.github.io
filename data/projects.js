import React from 'react';

const ProjectList = [
    {
        title: "Quantified Self",
        description: "My own data collection, storage and reporting.",
        preview: require('/static/img/projects/quantified-self.png'),
        website: "https://quantified-self.streamlitapp.com/",
        source: "https://github.com/hugolmn/quantified-self",
        tags: ["Python", "GCP", "CockroachDB", "Streamlit"]
    },
    {
        title: "Dividend Chart",
        description: "Twitter bot that generates data vizualisations for dividend stocks.",
        tags: ["Python", "GCP", "Twitter", "Altair"],
        preview: require('/static/img/projects/dividend-chart.png'),
        website: "https://twitter.com/DividendChart",
        // source: "https://github.com/hugolmn/quantified-self",
    },
    {
        title: "Unsupervised anomaly detection",
        description: "Automatic detection of noise pollution in audio recordings using Isolation Forest.",
        tags: ["Python", "pandas", "scikit-learn", "librosa"],
        preview: require('/static/img/projects/detection-small.png'),
        // website: "https://twitter.com/DividendChart",
        // source: "https://github.com/hugolmn/quantified-self",
    },
    {
        title: "Optimization of the economic performance of a train",
        description: "Search of the optimal way to operate the train while reducing energy consumption, using dynamic programming.",
        tags: ["Python", "pandas", "matplotlib"],
        preview: require('/static/img/projects/tgv.jpg'),
        // website: "https://twitter.com/DividendChart",
        // source: "https://github.com/hugolmn/quantified-self",
    },
    {
        title: "Garanse",
        description: "Personnalized art gallery built with Jekyll, hosted on github-pages.",
        tags: ["Jekyll", "Liquid", "Bootstrap"],
        preview: require('/static/img/projects/garanse.gif'),
        website: "https://garanse.github.io",
        // source: "https://github.com/hugolmn/quantified-self",
    },
];

export default ProjectList;