---
title: "Umani Detection on CCTV Cameras"
techStack: "Python, OpenCV, Websockets"
shortDescription: "Exploring Low-Level Computer Vision for Person Detection in CCTV Footage"
weight: 8  # For sorting projects
draft: false
year: "January 2025"
---

## Exploring Low-Level Computer Vision for Person Detection in CCTV Footage
This Python-based application detects human figures in video footage by leveraging traditional computer vision methods from the pre-deep learning era. The project utilizes OpenCV’s filtering functions, the Histogram of Oriented Gradients (HOG) descriptor paired with a Support Vector Machine (SVM) classifier and OpticalFlow. It processes video input frame-by-frame, identifies human figures, and draws bounding boxes around them. The result is a new video output with highlighted detections, making it applicable for surveillance or similar use cases.
Additionally, the project features a web server built with WebSockets to enable real-time video streaming and processing. The server receives video input from a specified source, performs human detection, and streams the annotated output to the client. WebSockets also facilitate client-server communication, allowing users to select their desired camera feed dynamically. This integration enhances the application’s interactivity and practicality for real-time monitoring scenarios.

### Technologies Used:
- Python
- OpenCV
- HOG Descriptor
- OpticalFlow
- WebSockets

### Key Features:
- Real-time human detection
- Real-time video streaming management
- Multi-cameras management
- Multi-client management

### My Role:
This project was developed collaboratively with a university colleague. My primary contributions included applying low-level filtering techniques for initial human-detection, implementing the Histogram of Oriented Gradients (HOG) descriptor with a Support Vector Machine (SVM) for more accurate human identification, and managing the WebSockets integration.

### Outcome:
Successfully created a lightweight tool capable of detecting humans in various video scenarios, tested on sample footage with consistent results. The output video provides clear visual confirmation of detections, suitable for further analysis or real-time monitoring applications. 

### Takeaway:
Through this project, I gained hands-on experience with low-level computer vision techniques, deepened my understanding of real-time programming, and explored the OpenCV library in depth. 

[See more on Github](https://github.com/MarcoMorandin/human-detection-on-videos)