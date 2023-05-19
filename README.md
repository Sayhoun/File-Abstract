# README.md - File-Abstract - Alpha 0.1 

This README provides an overview of the proposed application aimed at providing accessible document summarization across different platforms. Initially, the focus will be on developing a Chrome extension to facilitate the summarization process.

## Introduction

The goal of this project is to create a user-friendly app that can be accessed from any platform. We will start by developing a Chrome extension as the first implementation of the app.

## Features

### Summarization Options

The app allows users to provide their own OpenAI API key and choose from different summarization methods, including extractive, abstractive, or a combination of both. Users can also select the preferred GPT model, such as Davinci, GPT-3.5, or GPT-4.

### Document Summarization

Users can upload a specified number of text documents and select their summarization options. The app provides an estimated cost calculation, displayed in counted tokens and dollars for each chosen OpenAI GPT model. Users need to confirm the conversion before it is executed. The app performs extractive summarization on each document, generating an extractive summary file that represents 20-30% of the original document. The extractive summary includes references to the original document and page numbers. Subsequently, the extractive summary will be abstractive summarized using either the GPT-3.5 Turbo or GPT-4 model, or the GPT-4 32k token model, based on the user's selection. The output is provided with selected options: language(s), Common European Framework of Reference (CEFR) proficiency level, size of the final summary, citation style (Vancouver or APA), and file format that the user can download using the 'save as...' function of their host system.

### File Conversion

After the summarization process, the app allows users to upload and convert the output into various file formats, such as DOCX, ODF, RTX, PDF, TXT, HTML, LEX, or EPUB. Users can then download the converted file for further use.

### Accessibility and Use Cases

The primary use case for this application is to enable non-technical individuals, including those with language disabilities (e.g., dyslexia, blindness, deafness), government officials, diplomats, researchers, and students, to gain a comprehensive understanding of documents for their work or study. Additionally, the app may incorporate text-to-speech functionality and other accessibility features (braille). The objective is to provide cost-effective solutions while ensuring the best possible results, ultimately reducing the workload of the users.

## Next Steps

As an alpha version, the app is in the early stages of development. Future updates will involve refining the summarization algorithms, expanding to other LLM models, expanding platform compatibility beyond the Chrome extension, and incorporating additional accessibility features.

Your feedback and suggestions are greatly appreciated as we work towards creating an app that caters to the needs of a diverse user base.

## License

This project is licensed under the File-Abstract Open-Source License (CC BY-NC). For more information, please see the [CC_BY-NC.license] file.
