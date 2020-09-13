---
name: Unsupervised anomaly detection
tools: [Python, pandas, scikit-learn, librosa]
image: /assets/images/detection-small.png
description: Automatic detection of noise pollution in audio recordings using Isolation Forest and DBSCAN.
type: local
---

# {{ page.name }}

## Pipeline

1. Harmonic-Percussive Source Separation (HPSS) 
2. Extraction of features from the signal
3. Enrichment with statistical measurements
4. Unsupervised anomaly detection using a Isolation Forest
5. Thresholding after applying the median over a rolling window

{% include elements/figure.html image="/assets/images/detection.png" caption="Input spectrogram - Anomaly score - Ouput spectrogram (dark stripes for rejected parts)" %}