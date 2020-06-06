---
name: Unsupervised Detection of Anomalous Sound
tools: [Python, pandas, scikit-learn, librosa]
image: /assets/images/detection-small.png
description: Automatic detection of unwanted noise to clean audio recordings.
type: local
---

# {{ page.name }}

## Pipeline

1. Extraction of audio features
2. Enrichment with statistical measurements
3. Unsupervised anomaly detection using a Machine Learning algorithm
4. Smoothing and thresholding

{% include elements/figure.html image="/assets/images/detection.png" caption="Input spectrogram - Anomaly score - Ouput spectrogram (dark stripes for rejected parts)" %}

<p class="text-center">
{% include elements/button.html link="https://github.com/hugolmn" text="Learn More" %}
</p>
