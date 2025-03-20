---
title: "Block Picker With UR5 Robot"
techStack: "Python, ROS, C++"
shortDescription: "Software for a Robotic Arm for Picking and Organizing Blocks"
weight: 3  # For sorting projects
draft: false
year: "February 2024"
---

## Software for a Robotic Arm for Picking and Organizing Blocks

A robotics project focused on automating the detection and manipulation of Lego blocks using a UR5 robotic arm. The system integrates computer vision for block recognition and motion planning to pick and place blocks in a predefined arrangement. The project solves the challenge of automating precise object manipulation in a simulated environment, combining vision and motion control.  

### Technologies Used:
- Python (Vision part)
- C++  (Motion planning part)
- ROS (Robot Operating System)  
- Gazebo (Simulation Environment)   
- Quaternion-based Kinematics (Motion Planning)  

### Key Features:  
- Computer Vision Integration: Utilizes YOLOv8 and PointCloud for accurate detection and localization of Lego blocks in a simulated environment.  
- Quaternion-based Motion Planning: Implements advanced kinematics to avoid singularities and ensure smooth, collision-free movements of the UR5 arm.  
- Automated Workflow: Combines vision and motion modules to autonomously pick, place, and arrange blocks based on their detected positions and orientations.  

### My Role:
I was responsible for the vision module, including dataset creation, training the YOLOv8 model, and implementing block detection using the ZED camera. I also handled scaling the blocks to improve detection accuracy and integrated the vision system with the motion planning module.  

### Outcome/Impact:
The project successfully achieved the assignment requirements, with the vision module accurately detecting blocks and the motion module efficiently picking and placing them. The system demonstrated the potential for automating complex manipulation tasks in robotics, with room for future improvements in precision and speed.  

[See More on Github](https://github.com/MarcoMorandin/UR5-robot-block-picker/tree/master)
