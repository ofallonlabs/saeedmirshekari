---
layout: blog_base_davood.njk
title: "Delinquency Prediction: A New End-to-End Data Science Project Completed
  in O'Fallon Labs by Our Mentees"
description: This Credit-Risk project was completed by one of our mentees
  recently and contains a machine learning model to predict credit risk for
  customers using Python and several algorithms. It also includes a dataset,
  data cleaning script, and a report explaining the methodology and results.
meta_title: Machine Learning Model to Predict Credit Risk using Python and
  Various Algorithms
meta_description: This Credit-Risk project was completed by one of our mentees
  recently and contains a machine learning model to predict credit risk for
  customers using Python and several algorithms. It also includes a dataset,
  data cleaning script, and a report explaining the methodology and results.
author: Davood Shahabi
date: 2023-04-15T17:31:23.534Z
tags:
  - post
  - projects
thumbnail: /assets/img/uploads/undraw_bitcoin_re_urgq.png
rating: 5
---
The [Credit-Risk repository on GitHub by Davood](https://github.com/Davoodshahabi/Credit-Risk) contains a machine learning model to predict credit risk for a given set of customers. 

The model is developed using Python and Jupyter Notebook and employs several machine learning algorithms, including logistic regression, decision tree, random forest, and gradient boosting. The dataset used in the model is from a bank and includes information such as age, income, loan amount, and credit history of customers. 

The repository also includes a data cleaning script to preprocess the dataset and a detailed report explaining the methodology and results of the model. The code and report are well-documented and can serve as a useful reference for anyone interested in building a credit risk prediction model.

You can check out the code and details in [Davood's GitHub](https://github.com/Davoodshahabi/Credit-Risk) directly. Below is an executive summary of the completed project.

## Credit-Risk Project

The goal of the project is to predict the risk of financial failure based on historical data. 

Banks and financial organizations use the historical data on customers' behaviour to predict the probability of future defaults of credit card borrowings. 

Banks can use credit risk prediction to decide whether to issue a credit card to the applicant.

## Data Sets

for this project, we have 2 different datasets:

* **Application Records**: all data related to the demographic information of applicants
* **Credit Records**: historical credit card status of each applicant

Applicant ID is a primary key to joining datasets.

## Project Phases

The project was led in 2 major phases:

* Exploratory Data Analytics: 1) Data Cleaning, 2) Feature engineering
* Predictive modeling

## Feature Engineering

A label indicating delinquency occurrences 3 months in advance can be generated by considering the account history and status of each individual account.
<br />
<img src="https://user-images.githubusercontent.com/53322705/221474113-c96cfb7f-5465-4b4e-aa60-577a1cd5c5e3.png" width="100%"  alt="One-on-one Mentorship Data Science and Machine Learning"/>

<br>
<br />
The dat set containes an imbalanced label:
<br />
<img src="https://user-images.githubusercontent.com/53322705/221483521-9d2f9feb-4d2e-4e3d-819c-325d9839cd63.png" width="100%"  alt="One-on-one Mentorship Data Science and Machine Learning"/>

<br>
<br />
Therefore, we applied under sampling technique for the model training.
<br>
Finally, the dataset was ready for modeling. Here is a sample of processed data:

<img src="https://user-images.githubusercontent.com/53322705/223015216-5a4202c1-df62-4a41-976c-e5082342d22a.png" width="100%"  alt="One-on-one Mentorship Data Science and Machine Learning"/>

Based on the model, we may use onehot_encoding or other techniques for effective predictive model development.

## Correlations

We performed a correlation analysis to assess the relationship between the features and the label prior to building the model:

<img src="https://user-images.githubusercontent.com/53322705/223012737-dc242b3e-e1c6-4124-b79e-671c3fe3c14f.png" width="100%"  alt="One-on-one Mentorship Data Science and Machine Learning"/>

The purpose of creating a correlation heatmap of features before developing predictive models is to understand the relationship between different features in a dataset. A correlation heatmap is a graphical representation of the correlation matrix that shows the correlation coefficients between each pair of features in a dataset. The correlation coefficient measures the strength and direction of the linear relationship between two variables. Creating a correlation heatmap before developing predictive models helps us to understand the relationship between features in a dataset and can guide us in making decisions about feature selection, model interpretation, and improving model performance.

## Modeling

Developed 3 major predictive models:

* Random Forest
* XGBOOST
* CATBOOST

## Results

The model metrics are saved in a table for a fast and clear comparison:

| NO  | Model              | accuracy_score | precision_score | recall_score | roc_auc_score | f1_score |
| --- | ------------------ | -------------- | --------------- | ------------ | ------------- | -------- |
| 1   | randomforest_Final | 0.864091       | 0.888571        | 0.678404     | 0.817851      | 0.769394 |
| 2   | xgboost_model_fin  | 0.781087       | 0.952576        | 0.363041     | 0.676985      | 0.525722 |
| 3   | ctboost_model_fin  | 0.867162       | 0.921760        | 0.658228     | 0.815100      | 0.768016 |
<﻿br>

Catboost model has a better performance to predict high-risk applicants. Since we have an imbalanced data, the recall score can be an important metric for this project. Catboost has the highest precision and recall scores.