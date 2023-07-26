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
        title: "Automatic detection of unwanted noise",
        description: "Unsupervised anomaly detection of noise pollution in flight audio recordings.",
        tags: ["Python", "pandas", "scikit-learn", "librosa"],
        preview: require('/static/img/projects/detection-small.png'),
        website: "/projects/automatic-detection-unwanted-noise",
        // source: "https://github.com/hugolmn/quantified-self",
    },
    {
        title: "TGV economic performance optimization",
        description: "Search of the optimal way to operate the train using dynamic programming.",
        tags: ["Python", "pandas", "matplotlib"],
        preview: require('/static/img/projects/tgv.jpg'),
        website: "/projects/tgv-economic-performance-optimization",
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