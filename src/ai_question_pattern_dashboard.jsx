import React, { useMemo, useState } from "react";

const metadata = {
  "courseCode": "CSE 3217",
  "courseName": "Mobile Computing",
  "institution": "Khulna University of Engineering & Technology",
  "department": "Department of Computer Science and Engineering",
  "exam": "B.Sc. Engineering 3rd Year 2nd Term Examination",
  "artifactNote": "Question-pattern dashboard reconstructed from scanned previous-year papers. OCR text was manually normalized against rendered page images where the scan was broken.",
  "years": [
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023"
  ],
  "sections": [
    "SECTION A / Script A",
    "SECTION B / Script B"
  ],
  "answerPattern": "2017-2019, 2021-2023: any 3 per section; 2020: any 2 per section",
  "marksPattern": "2017-2019, 2021-2023: 210 marks; 2020: 120 marks"
};

const sectionA = [
  {
    "year": "2023",
    "q": "1(a)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Definition and alternative names",
    "marks": 7,
    "type": "Short",
    "repeatKey": "mobile-definition-names",
    "text": "What is mobile computing? What are the other names of mobile computing?"
  },
  {
    "year": "2023",
    "q": "1(b)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "Smartphone sensors and interaction",
    "marks": 14,
    "type": "Long",
    "repeatKey": "smartphone-sensors-interaction",
    "text": "How does a smart phone interact with environment and users using different sensors?"
  },
  {
    "year": "2023",
    "q": "1(c)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "Smartphone hardware and application processor",
    "marks": 14,
    "type": "Diagram",
    "repeatKey": "smartphone-hardware-application-processor",
    "text": "Draw the hardware diagram of a smartphone. Describe the components of application processor in details."
  },
  {
    "year": "2023",
    "q": "2(a)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Android layered architecture",
    "marks": 14,
    "type": "Long",
    "repeatKey": "android-os-layered-justify",
    "text": "\"Android OS is a combination of several layers\" - justify the statement."
  },
  {
    "year": "2023",
    "q": "2(b)",
    "topic": "AR, VR & Immersive Mobile Systems",
    "subtopic": "AR in healthcare",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ar-healthcare-better",
    "text": "\"Augmented Reality is changing healthcare for the better\" - justify the statement with necessary explanation."
  },
  {
    "year": "2023",
    "q": "2(c)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "ARM processor operating modes",
    "marks": 11,
    "type": "Long",
    "repeatKey": "arm-seven-operating-modes",
    "text": "What are ARM processors? Explain the seven operating modes of ARM processor."
  },
  {
    "year": "2023",
    "q": "3(a)",
    "topic": "AR, VR & Immersive Mobile Systems",
    "subtopic": "VR security research gaps and future work",
    "marks": 15,
    "type": "Problem",
    "repeatKey": "vr-gaps-attack-defense-future",
    "text": "What is Virtual Reality (VR)? What are the gaps in VR research in cases of attack and defense? Based on this propose an amazing future work idea."
  },
  {
    "year": "2023",
    "q": "3(b)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "big.LITTLE architecture",
    "marks": 10,
    "type": "Long",
    "repeatKey": "big-little-architecture",
    "text": "What is big.LITTLE architecture? Explain details with few practical example configurations."
  },
  {
    "year": "2023",
    "q": "3(c)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Dalvik VM vs Android Runtime",
    "marks": 10,
    "type": "Long",
    "repeatKey": "dalvik-vs-art",
    "text": "Differentiate between Dalvik Virtual Machine and Android Runtime. Based on their pros and cons, which one will be suitable in which scenario?"
  },
  {
    "year": "2023",
    "q": "4(a)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Kernel interface role",
    "marks": 10,
    "type": "Long",
    "repeatKey": "kernel-interface-hardware-software",
    "text": "\"The kernel provides an interface between the hardware and software\" - explain."
  },
  {
    "year": "2023",
    "q": "4(b)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Challenges, solutions, and example scenario",
    "marks": 10,
    "type": "Long",
    "repeatKey": "mobile-challenges-solutions-practical",
    "text": "What are the current challenges of mobile computing? What is the solution? Please explain with practical example scenario."
  },
  {
    "year": "2023",
    "q": "4(c)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Application framework and Java service class",
    "marks": 15,
    "type": "Problem",
    "repeatKey": "android-application-framework-java-class",
    "text": "What is application framework in Android OS? Develop a Java class that provides a few services that application framework provides."
  },
  {
    "year": "2022",
    "q": "1(a)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Generations of mobile technology",
    "marks": 8,
    "type": "Long",
    "repeatKey": "mobile-generations",
    "text": "Explain the generations of mobile technology with necessary examples."
  },
  {
    "year": "2022",
    "q": "1(b)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Android layered architecture",
    "marks": 14,
    "type": "Long",
    "repeatKey": "android-os-layered-justify",
    "text": "\"Android OS is a combination of several layers\" - justify the statement."
  },
  {
    "year": "2022",
    "q": "1(c)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Challenges and coping strategies",
    "marks": 13,
    "type": "Long",
    "repeatKey": "mobile-challenges-cope",
    "text": "What are the challenges of mobile computing? Explain the ways to cope with them."
  },
  {
    "year": "2022",
    "q": "2(a)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "iOS architecture layers",
    "marks": 13,
    "type": "Diagram",
    "repeatKey": "ios-architecture-layers-define-explain",
    "text": "Define iOS. Briefly explain the iOS architectural layers with necessary figures and explanation."
  },
  {
    "year": "2022",
    "q": "2(b)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Dalvik VM; native and application libraries",
    "marks": 12,
    "type": "Long",
    "repeatKey": "dalvik-native-application-libraries",
    "text": "What is Dalvik VM? Briefly explain the Native Libraries and Application Libraries of the Android architecture."
  },
  {
    "year": "2022",
    "q": "2(c)",
    "topic": "AR, VR & Immersive Mobile Systems",
    "subtopic": "AR in healthcare",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ar-healthcare-better",
    "text": "\"Augmented Reality is changing healthcare for the better\" - justify this statement with necessary explanation."
  },
  {
    "year": "2022",
    "q": "3(a)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "Snapdragon CPU and Cortex-X4 SoC naming",
    "marks": 13,
    "type": "Problem",
    "repeatKey": "snapdragon-cortex-component-names",
    "text": "Suppose your friend wants to buy a smartphone with a Snapdragon 8 Gen 2 CPU and Cortex-X4 SoC. Is he/she searching for the smartphone with the right component names? Justify your answer."
  },
  {
    "year": "2022",
    "q": "3(b)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "CPU vs GPU applications",
    "marks": 10,
    "type": "Long",
    "repeatKey": "cpu-vs-gpu-applications",
    "text": "Differentiate between CPU and GPU with respect to their applications."
  },
  {
    "year": "2022",
    "q": "3(c)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "AOT and JIT compilation",
    "marks": 12,
    "type": "Long",
    "repeatKey": "aot-jit",
    "text": "What are Ahead-Of-Time (AOT) and Just-In-Time (JIT)? Explain them."
  },
  {
    "year": "2022",
    "q": "4(a)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "UX, usability, UI definitions",
    "marks": 9,
    "type": "Short",
    "repeatKey": "define-ux-usability-ui",
    "text": "Define 'User Experience', 'Usability', and 'User Interface'."
  },
  {
    "year": "2022",
    "q": "4(b)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Good UI vs good UX",
    "marks": 14,
    "type": "Long",
    "repeatKey": "good-ui-not-always-good-ux",
    "text": "\"A good user interface cannot always ensure good user experience\" - justify the statement."
  },
  {
    "year": "2022",
    "q": "4(c)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Context-aware computing components",
    "marks": 12,
    "type": "Long",
    "repeatKey": "context-aware-components",
    "text": "Define 'Context-Aware Computing'. What are the key components of 'Context-Aware Computing'? Explain them in brief."
  },
  {
    "year": "2021",
    "q": "1(a)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Definition, current challenges, coping strategies",
    "marks": 13,
    "type": "Long",
    "repeatKey": "mobile-definition-challenges-cope",
    "text": "What is mobile computing? What are current challenges of mobile computing and how can you cope with those challenges?"
  },
  {
    "year": "2021",
    "q": "1(b)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "Main PCB architecture",
    "marks": 7,
    "type": "Diagram",
    "repeatKey": "main-pcb-architecture",
    "text": "Draw the architecture of main Printed Circuit Board (PCB)."
  },
  {
    "year": "2021",
    "q": "1(c)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "Application processor and baseband processor",
    "marks": 15,
    "type": "Long",
    "repeatKey": "application-baseband-components",
    "text": "Briefly explain the components of Application Processor and Baseband Processor."
  },
  {
    "year": "2021",
    "q": "2(a)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "ARM processor operating modes",
    "marks": 10,
    "type": "Long",
    "repeatKey": "arm-seven-operating-modes",
    "text": "What are ARM processors? Explain the seven operating modes of ARM processor."
  },
  {
    "year": "2021",
    "q": "2(b)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Dalvik VM; native and application libraries",
    "marks": 12,
    "type": "Long",
    "repeatKey": "dalvik-native-application-libraries",
    "text": "What is Dalvik VM? Briefly explain the Native Libraries and Application Libraries of the Android architecture."
  },
  {
    "year": "2021",
    "q": "2(c)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "iOS architecture layers",
    "marks": 13,
    "type": "Diagram",
    "repeatKey": "ios-architecture-layers-draw",
    "text": "Draw the iOS architectural layers and explain the functions of each layer."
  },
  {
    "year": "2021",
    "q": "3(a)",
    "topic": "Mobile Cloud, Resources & Power Awareness",
    "subtopic": "Mobile-cloud computing structure",
    "marks": 10,
    "type": "Long",
    "repeatKey": "mobile-cloud-computing-structure",
    "text": "What is Mobile-cloud computing? Explain Mobile-cloud computing structure clearly."
  },
  {
    "year": "2021",
    "q": "3(b)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "x86 inefficiency for mobile",
    "marks": 10,
    "type": "Long",
    "repeatKey": "x86-inefficient-mobile",
    "text": "Why x86 architecture-based processors are inefficient for mobile computing?"
  },
  {
    "year": "2021",
    "q": "3(c)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Context-aware system architecture",
    "marks": 5,
    "type": "Diagram",
    "repeatKey": "context-aware-architecture",
    "text": "Draw the architecture of a Context-aware System."
  },
  {
    "year": "2021",
    "q": "3(d)",
    "topic": "AR, VR & Immersive Mobile Systems",
    "subtopic": "Monitor-based AR",
    "marks": 10,
    "type": "Long",
    "repeatKey": "monitor-based-ar",
    "text": "Explain the monitor-based augmented reality system."
  },
  {
    "year": "2021",
    "q": "4(a)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "MCP, eMMC, CMOS, GSM notes",
    "marks": 12,
    "type": "Short",
    "repeatKey": "short-notes-mcp-emmc-cmos-gsm",
    "text": "Write short notes of the following terms: (i) MCP, (ii) eMMC, (iii) CMOS, and (iv) GSM."
  },
  {
    "year": "2021",
    "q": "4(b)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "Barrel Shifter, CPSR, SPSR",
    "marks": 10,
    "type": "Long",
    "repeatKey": "barrel-shifter-cpsr-spsr",
    "text": "Explain Barrel Shifter, CPSR and SPSR of ARM processors."
  },
  {
    "year": "2021",
    "q": "4(c)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Intent; client apps vs web apps",
    "marks": 7,
    "type": "Long",
    "repeatKey": "intent-client-vs-web-apps",
    "text": "What is Intent? Write the differences between client apps and web apps."
  },
  {
    "year": "2021",
    "q": "4(d)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Fat Finger and Mobile Widgets",
    "marks": 6,
    "type": "Short",
    "repeatKey": "fat-finger-mobile-widgets",
    "text": "What is \"Fat Finger\" and \"Mobile Widgets\"? Explain briefly."
  },
  {
    "year": "2020",
    "q": "1(a)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Definition and examples",
    "marks": 5,
    "type": "Short",
    "repeatKey": "mobile-definition-examples",
    "text": "Define Mobile Computing and give examples(s)."
  },
  {
    "year": "2020",
    "q": "1(b)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Mobile computing architectural layers",
    "marks": 12,
    "type": "Diagram",
    "repeatKey": "mobile-computing-architectural-layers",
    "text": "Explain the Mobile Computing Architectural layers clearly."
  },
  {
    "year": "2020",
    "q": "1(c)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Current challenges and coping strategies",
    "marks": 13,
    "type": "Long",
    "repeatKey": "mobile-challenges-cope",
    "text": "What are the current challenges of Mobile Computing? Explain how to cope with these challenges."
  },
  {
    "year": "2020",
    "q": "2(a)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "Smartphone as sensors",
    "marks": 8,
    "type": "Long",
    "repeatKey": "smartphone-bunch-sensors",
    "text": "\"A smartphone acts as a bunch of sensors\" - justify the statement."
  },
  {
    "year": "2020",
    "q": "2(b)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "ARM processors and general register set",
    "marks": 15,
    "type": "Long",
    "repeatKey": "arm-classify-general-registers",
    "text": "What are ARM Processors? Classify different ARM processors and explain the general register set of it."
  },
  {
    "year": "2020",
    "q": "2(c)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Significance of UI and UX",
    "marks": 7,
    "type": "Long",
    "repeatKey": "ui-ux-significance",
    "text": "What is the significance of UI and UX design for a Mobile device?"
  },
  {
    "year": "2020",
    "q": "3(a)",
    "topic": "Mobile Cloud, Resources & Power Awareness",
    "subtopic": "Mobile-cloud computing structure",
    "marks": 10,
    "type": "Long",
    "repeatKey": "mobile-cloud-computing-structure",
    "text": "What is Mobile-cloud computing? Explain Mobile-cloud computing structure clearly."
  },
  {
    "year": "2020",
    "q": "3(b)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Android architecture layers",
    "marks": 12,
    "type": "Diagram",
    "repeatKey": "android-architecture-layers-draw-explain",
    "text": "Draw the Android architectural layers and explain the function of each layers."
  },
  {
    "year": "2020",
    "q": "3(c)",
    "topic": "Mobile Cloud, Resources & Power Awareness",
    "subtopic": "Resource scarcity in mobile platform",
    "marks": 8,
    "type": "Long",
    "repeatKey": "resources-scarce-mobile",
    "text": "\"Resources are scarce in mobile platform\" - justify the statement."
  },
  {
    "year": "2019",
    "q": "1(a)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Definition and alternative names",
    "marks": 7,
    "type": "Short",
    "repeatKey": "mobile-definition-names",
    "text": "What is mobile computing? List the many other names which are compatible with mobile computing."
  },
  {
    "year": "2019",
    "q": "1(b)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Mobile apps and wireless communication",
    "marks": 8,
    "type": "Long",
    "repeatKey": "mobile-apps-wireless-fundamental",
    "text": "\"A close relationship of mobile apps and wireless communication is the fundamental to mobile computing\" - justify the statement."
  },
  {
    "year": "2019",
    "q": "1(c)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Mobility constraints of smart devices",
    "marks": 10,
    "type": "Long",
    "repeatKey": "mobility-constraints-smart-devices",
    "text": "What are the mobility constraints of smart devices? Explain them clearly."
  },
  {
    "year": "2019",
    "q": "1(d)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Current challenges and coping strategies",
    "marks": 10,
    "type": "Long",
    "repeatKey": "mobile-challenges-cope",
    "text": "What are current challenges of mobile computing? Explain how to cope with these challenges."
  },
  {
    "year": "2019",
    "q": "2(a)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "Baseband processor structure",
    "marks": 10,
    "type": "Long",
    "repeatKey": "baseband-processor-structure",
    "text": "Why do you use baseband processors in mobile phones? Explain the typical baseband processor structure clearly."
  },
  {
    "year": "2019",
    "q": "2(b)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "ARM processors and general register sets",
    "marks": 13,
    "type": "Long",
    "repeatKey": "arm-classify-general-registers",
    "text": "What are ARM processors? Classify different ARM processors and explain the general register sets of it."
  },
  {
    "year": "2019",
    "q": "2(c)",
    "topic": "AR, VR & Immersive Mobile Systems",
    "subtopic": "Google Glass project aim",
    "marks": 12,
    "type": "Long",
    "repeatKey": "google-glass-visual-indicators",
    "text": "\"To augment your everyday experiences by super imposing a layer of visual indicators directly onto your field of vision\" - explain this Google Glass project aim using your own example."
  },
  {
    "year": "2019",
    "q": "3(a)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "UI and UX design guidelines",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ui-ux-guidelines",
    "text": "What do you mean by UI and UX design for a mobile device? Explain the guidelines for designing good UIs."
  },
  {
    "year": "2019",
    "q": "3(b)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Usability app design principles",
    "marks": 10,
    "type": "Long",
    "repeatKey": "usability-app-design-principles",
    "text": "What do you mean by usability? Explain the usability app design principles for mobile devices."
  },
  {
    "year": "2019",
    "q": "3(c)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Need for context-aware computing",
    "marks": 10,
    "type": "Long",
    "repeatKey": "context-aware-need-example",
    "text": "What is Context-aware Computing? Why do you need it in mobile computing? Explain it using example(s)."
  },
  {
    "year": "2019",
    "q": "3(d)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Context-aware system architecture",
    "marks": 5,
    "type": "Diagram",
    "repeatKey": "context-aware-architecture",
    "text": "Draw the architecture of Context-aware System."
  },
  {
    "year": "2019",
    "q": "4(a)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Android architecture layers",
    "marks": 10,
    "type": "Diagram",
    "repeatKey": "android-architecture-layers-draw-explain",
    "text": "What is Android? Draw the Android architectural layers and explain the functions of each layer."
  },
  {
    "year": "2019",
    "q": "4(b)",
    "topic": "AR, VR & Immersive Mobile Systems",
    "subtopic": "AR mobile app design process",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ar-mobile-app-design-process",
    "text": "Explain the processes for mobile app design using augmented reality."
  },
  {
    "year": "2019",
    "q": "4(c)",
    "topic": "Mobile Cloud, Resources & Power Awareness",
    "subtopic": "Resource scarcity in mobile platform",
    "marks": 10,
    "type": "Long",
    "repeatKey": "resources-scarce-mobile",
    "text": "\"Resources are scarce in mobile platform\" - justify the statement."
  },
  {
    "year": "2019",
    "q": "4(d)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "iOS security features",
    "marks": 5,
    "type": "Long",
    "repeatKey": "ios-security-features",
    "text": "Discuss the iOS security features clearly."
  },
  {
    "year": "2018",
    "q": "1(a)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Definition and architectural layers",
    "marks": 12,
    "type": "Long",
    "repeatKey": "mobile-definition-architecture",
    "text": "Define Mobile Computing. Explain the Mobile Computing architectural layers clearly."
  },
  {
    "year": "2018",
    "q": "1(b)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "Smartphone as sensors",
    "marks": 8,
    "type": "Long",
    "repeatKey": "smartphone-bunch-sensors",
    "text": "\"A smart phone acts as a bunch of sensors\" - justify the statement."
  },
  {
    "year": "2018",
    "q": "1(c)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Current challenges and coping strategies",
    "marks": 10,
    "type": "Long",
    "repeatKey": "mobile-challenges-cope",
    "text": "What are the current challenges of Mobile Computing? Explain how to cope with these challenges."
  },
  {
    "year": "2018",
    "q": "1(d)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Alternative names of mobile computing",
    "marks": 5,
    "type": "Short",
    "repeatKey": "mobile-other-names",
    "text": "List five other names which are compatible with Mobile Computing."
  },
  {
    "year": "2018",
    "q": "2(a)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Mobile apps and wireless communication",
    "marks": 12,
    "type": "Long",
    "repeatKey": "mobile-apps-wireless-fundamental",
    "text": "\"A close relationship of mobile apps and wireless communication is the fundamental to Mobile Computing\" - justify the statement using an example."
  },
  {
    "year": "2018",
    "q": "2(b)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "Anatomy of smartphone device",
    "marks": 13,
    "type": "Long",
    "repeatKey": "smartphone-anatomy",
    "text": "Explain the anatomy of a general smart phone device vividly."
  },
  {
    "year": "2018",
    "q": "2(c)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Mobility constraints of smart devices",
    "marks": 10,
    "type": "Long",
    "repeatKey": "mobility-constraints-smart-devices",
    "text": "Explain mobility constraints of smart devices."
  },
  {
    "year": "2018",
    "q": "3(a)",
    "topic": "AR, VR & Immersive Mobile Systems",
    "subtopic": "AR vs VR",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ar-vs-vr",
    "text": "What is augmented reality? Compare augmented reality and virtual reality."
  },
  {
    "year": "2018",
    "q": "3(b)",
    "topic": "AR, VR & Immersive Mobile Systems",
    "subtopic": "Monitor-based AR",
    "marks": 10,
    "type": "Long",
    "repeatKey": "monitor-based-ar",
    "text": "Explain the monitor-based augmented reality systems."
  },
  {
    "year": "2018",
    "q": "3(c)",
    "topic": "AR, VR & Immersive Mobile Systems",
    "subtopic": "AR mobile app design process",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ar-mobile-app-design-process",
    "text": "Explain the processes for mobile application design of augmented reality."
  },
  {
    "year": "2018",
    "q": "3(d)",
    "topic": "AR, VR & Immersive Mobile Systems",
    "subtopic": "Uses of mobile-based augmented systems",
    "marks": 5,
    "type": "Short",
    "repeatKey": "mobile-augmented-systems-uses",
    "text": "Mention some uses of mobile based augmented systems."
  },
  {
    "year": "2018",
    "q": "4(a)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "UI and UX design guidelines",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ui-ux-guidelines",
    "text": "What do you mean by UI and UX design for a mobile device? Explain the guidelines for designing good UIs."
  },
  {
    "year": "2018",
    "q": "4(b)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Usability app design process",
    "marks": 10,
    "type": "Long",
    "repeatKey": "usability-app-design-principles",
    "text": "What do you mean by usability? Discuss the principles of usability app design process."
  },
  {
    "year": "2018",
    "q": "4(c)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Need for context-aware computing",
    "marks": 10,
    "type": "Long",
    "repeatKey": "context-aware-need-example",
    "text": "Define Context-aware Computing. Why do we need it in mobile computing? Explain it using an example."
  },
  {
    "year": "2018",
    "q": "4(d)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Context-aware system architecture",
    "marks": 5,
    "type": "Diagram",
    "repeatKey": "context-aware-architecture",
    "text": "Draw the architecture of a Context-aware System."
  },
  {
    "year": "2017",
    "q": "1(a)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Definition and alternative names",
    "marks": 7,
    "type": "Short",
    "repeatKey": "mobile-definition-names",
    "text": "What is mobile computing? List the many other names which are compatible with mobile computing."
  },
  {
    "year": "2017",
    "q": "1(b)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Mobile apps and wireless communication",
    "marks": 8,
    "type": "Long",
    "repeatKey": "mobile-apps-wireless-fundamental",
    "text": "\"A close relationship of mobile apps and wireless communication is the fundamental to mobile computing\" - justify the statement."
  },
  {
    "year": "2017",
    "q": "1(c)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Current challenges and coping strategies",
    "marks": 10,
    "type": "Long",
    "repeatKey": "mobile-challenges-cope",
    "text": "What are the current challenges of mobile computing? Explain how to cope with these challenges."
  },
  {
    "year": "2017",
    "q": "1(d)",
    "topic": "Mobile Computing Fundamentals & Challenges",
    "subtopic": "Mobile computing architectural layers",
    "marks": 10,
    "type": "Diagram",
    "repeatKey": "mobile-computing-architectural-layers",
    "text": "Explain the mobile computing architectural layers clearly."
  },
  {
    "year": "2017",
    "q": "2(a)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "UI and UX design guidelines",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ui-ux-guidelines",
    "text": "What do you mean by UI and UX design for a mobile device? Explain the guidelines for designing good UIs."
  },
  {
    "year": "2017",
    "q": "2(b)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Usability app design principles",
    "marks": 10,
    "type": "Long",
    "repeatKey": "usability-app-design-principles",
    "text": "What is usability? Explain the mobile usability app design principles."
  },
  {
    "year": "2017",
    "q": "2(c)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Need for context-aware computing",
    "marks": 10,
    "type": "Long",
    "repeatKey": "context-aware-need-example",
    "text": "What is Context-aware computing? Why do you need it in mobile computing? Explain it using example(s)."
  },
  {
    "year": "2017",
    "q": "2(d)",
    "topic": "UI, UX, Usability & Context-Aware Computing",
    "subtopic": "Context-aware system architecture",
    "marks": 5,
    "type": "Diagram",
    "repeatKey": "context-aware-architecture",
    "text": "Draw the architecture of Context-awareness system."
  },
  {
    "year": "2017",
    "q": "3(a)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Smartphone OS functions and classes",
    "marks": 7,
    "type": "Long",
    "repeatKey": "smartphone-os-functions-classes",
    "text": "What are the basic functions of Smartphone Operating System? Classify different Smartphone operating systems."
  },
  {
    "year": "2017",
    "q": "3(b)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Smartphone OS as resource manager",
    "marks": 6,
    "type": "Long",
    "repeatKey": "smartphone-os-resource-manager",
    "text": "\"Smartphone operating system is critical resources managers\" - justify the statement."
  },
  {
    "year": "2017",
    "q": "3(c)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Android architecture layers",
    "marks": 10,
    "type": "Diagram",
    "repeatKey": "android-architecture-layers-draw-explain",
    "text": "What is Android? Draw the Android OS architectural layers and explain the functions of each layer."
  },
  {
    "year": "2017",
    "q": "3(d)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "iOS vs Android architecture",
    "marks": 5,
    "type": "Long",
    "repeatKey": "ios-vs-android-architecture",
    "text": "Compare the iOS architecture with Android architecture."
  },
  {
    "year": "2017",
    "q": "3(e)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "iOS security features",
    "marks": 7,
    "type": "Long",
    "repeatKey": "ios-security-features",
    "text": "Discuss the iOS security features clearly."
  },
  {
    "year": "2017",
    "q": "4(a)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "Baseband processor structure",
    "marks": 10,
    "type": "Long",
    "repeatKey": "baseband-processor-structure",
    "text": "Why do you use the baseband processors in mobile phones? Explain the typical baseband processor structure clearly."
  },
  {
    "year": "2017",
    "q": "4(b)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "ARM processors and general register sets",
    "marks": 13,
    "type": "Long",
    "repeatKey": "arm-classify-general-registers",
    "text": "What are ARM processors? Classify different ARM processors and explain the general register sets of it."
  },
  {
    "year": "2017",
    "q": "4(c)",
    "topic": "AR, VR & Immersive Mobile Systems",
    "subtopic": "Google Glass project aim",
    "marks": 12,
    "type": "Long",
    "repeatKey": "google-glass-visual-indicators",
    "text": "\"To augment your everyday experiences by superimposing a layer of visual indicators directly onto your field of vision\" - explain this Google Glass project aim using an example."
  }
];

const sectionB = [
  {
    "year": "2023",
    "q": "5(a)",
    "topic": "Wireless Sensor Networks, Localization & GPS",
    "subtopic": "Hybrid WSN localization protocol design",
    "marks": 12,
    "type": "Problem",
    "repeatKey": "hybrid-wsn-localization-protocol",
    "text": "For a hybrid network with both stationary and mobile wireless sensor nodes, design a protocol to achieve optimal localization accuracy. (Hint: you can use and combine existing protocols)."
  },
  {
    "year": "2023",
    "q": "5(b)",
    "topic": "Mobility Management, Handover & Mobile Networking",
    "subtopic": "CDMA smooth handover for high-speed node",
    "marks": 13,
    "type": "Long",
    "repeatKey": "cdma-smooth-handover-high-speed",
    "text": "A mobile node moving in a high speed wants to maintain smooth communication with cell towers. Considering the network follows CDMA protocol, briefly explain this process of ensuring smooth communication."
  },
  {
    "year": "2023",
    "q": "5(c)",
    "topic": "Cloud, Data Centers, Reliability & ICT Standards",
    "subtopic": "ICT standards for data centers",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ict-standards-data-centers",
    "text": "As an engineer building data centers, what kind of ICT standards would you choose, and why?"
  },
  {
    "year": "2023",
    "q": "6(a)",
    "topic": "Cloud, Data Centers, Reliability & ICT Standards",
    "subtopic": "Cloud virtualization configuration and security",
    "marks": 12,
    "type": "Long",
    "repeatKey": "cloud-virtualization-security",
    "text": "\"At a shared environment, the security strength of the cloud largely depends on the virtualization configuration\" - justify the statement."
  },
  {
    "year": "2023",
    "q": "6(b)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "DFWMAC-PCF protocol",
    "marks": 13,
    "type": "Diagram",
    "repeatKey": "dfwmac-pcf",
    "text": "Explain the DFWMAC-PCF protocol with necessary explanation and diagram(s)."
  },
  {
    "year": "2023",
    "q": "6(c)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "AdAMAC vs ATMA starvation",
    "marks": 10,
    "type": "Long",
    "repeatKey": "adamac-atma-starvation",
    "text": "\"AdAMAC significantly reduces the starvation issue observed in the ATMA protocol\" - is this statement valid? Justify your reasoning."
  },
  {
    "year": "2023",
    "q": "7(a)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "IEEE 802.11 waiting times",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ieee-80211-waiting-times",
    "text": "Briefly describe different types of waiting time of IEEE 802.11."
  },
  {
    "year": "2023",
    "q": "7(b)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "MACA hidden and exposed terminal problems",
    "marks": 10,
    "type": "Long",
    "repeatKey": "maca-hidden-exposed",
    "text": "Briefly describe how MACA solves hidden terminal problem and exposed terminal problem."
  },
  {
    "year": "2023",
    "q": "7(c)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Unfairness in WSN; MACAW",
    "marks": 15,
    "type": "Long",
    "repeatKey": "wsn-unfairness-macaw",
    "text": "What is meant by 'unfairness' in WSN? How MACAW solve unfairness of a wireless network?"
  },
  {
    "year": "2023",
    "q": "8(a)",
    "topic": "Mobility Management, Handover & Mobile Networking",
    "subtopic": "Packet transmission across networks, A to B and B to A",
    "marks": 15,
    "type": "Problem",
    "repeatKey": "network-transmission-a-b-b-a",
    "text": "In the network shown in the figure, originally node A belongs to Network-2 and node B belongs to Network-3. In the above scenario, describe the data packet transmission process from node A to B and then B to A with detailed explanation and necessary diagram(s)."
  },
  {
    "year": "2023",
    "q": "8(b)",
    "topic": "Mobile Cloud, Resources & Power Awareness",
    "subtopic": "POWER NAP, sleep, active low-power mode",
    "marks": 10,
    "type": "Long",
    "repeatKey": "power-nap-sleep-active-low-power",
    "text": "Illustrate the difference between POWER NAP, sleep and active low power mode mechanism."
  },
  {
    "year": "2023",
    "q": "8(c)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Contention window; B-MAC vs X-MAC",
    "marks": 10,
    "type": "Long",
    "repeatKey": "contention-window-bmac-xmac",
    "text": "Define contention window size. Write down the difference between B-MAC and X-MAC."
  },
  {
    "year": "2022",
    "q": "5(a)",
    "topic": "Wireless Sensor Networks, Localization & GPS",
    "subtopic": "WSN definition and characteristics",
    "marks": 10,
    "type": "Long",
    "repeatKey": "wsn-definition-characteristics",
    "text": "Define Wireless Sensor Network. Describe the characteristics of it."
  },
  {
    "year": "2022",
    "q": "5(b)",
    "topic": "Ad Hoc, MANET & VANET",
    "subtopic": "MANET vs VANET",
    "marks": 10,
    "type": "Long",
    "repeatKey": "manet-vs-vanet",
    "text": "Differentiate between Mobile Adhoc Networks and Vehicular Adhoc Networks."
  },
  {
    "year": "2022",
    "q": "5(c)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Assignment protocols",
    "marks": 15,
    "type": "Long",
    "repeatKey": "assignment-protocols-types",
    "text": "Describe the types of assignment protocols with examples."
  },
  {
    "year": "2022",
    "q": "6(a)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Random backoff timer and ATMA reservation",
    "marks": 10,
    "type": "Long",
    "repeatKey": "random-backoff-atma-reservation",
    "text": "Define Random Backoff Timer. Explain the reservation process in ATMA protocol."
  },
  {
    "year": "2022",
    "q": "6(b)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "ADVMAC vs T-MAC and S-MAC",
    "marks": 12,
    "type": "Long",
    "repeatKey": "advmac-vs-tmac-smac",
    "text": "\"In terms of energy preserving, ADVMAC outperforms both T-MAC and S-MAC\" - justify the statement with necessary explanation and diagram(s)."
  },
  {
    "year": "2022",
    "q": "6(c)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "Convergence impact and user rights",
    "marks": 13,
    "type": "Long",
    "repeatKey": "convergence-impact-user-rights",
    "text": "Define convergence of technology. How does a converged environment impact on user interest and what measures should be taken to preserve user right?"
  },
  {
    "year": "2022",
    "q": "7(a)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "DWMAC-DCF with RTS-CTS fragmentation",
    "marks": 13,
    "type": "Diagram",
    "repeatKey": "dwmac-dcf-rts-cts-fragmentation",
    "text": "Explain the DWMAC-DCF with RTS-CTS extension protocol for fragmentation mode with necessary explanation and diagram."
  },
  {
    "year": "2022",
    "q": "7(b)",
    "topic": "Cloud, Data Centers, Reliability & ICT Standards",
    "subtopic": "Cloud energy efficiency mechanisms",
    "marks": 10,
    "type": "Long",
    "repeatKey": "cloud-traditional-energy-efficiency",
    "text": "Illustrate the reasoning behind why traditional energy efficiency mechanisms don't work in cloud environment with appropriate diagram(s)."
  },
  {
    "year": "2022",
    "q": "7(c)",
    "topic": "Mobility Management, Handover & Mobile Networking",
    "subtopic": "Packet transmission across networks, A to B",
    "marks": 12,
    "type": "Problem",
    "repeatKey": "network-transmission-a-b",
    "text": "In the network shown in the figure, originally node A belongs to network-2 and node B belongs to network-3. In the above scenario, describe the data packet transmission process from node A to node B with a detailed explanation and necessary diagram(s)."
  },
  {
    "year": "2022",
    "q": "8(a)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "S-MAC energy-saving features",
    "marks": 10,
    "type": "Long",
    "repeatKey": "smac-energy-wastage-features",
    "text": "Briefly explain the features of S-MAC that reduce energy wastage."
  },
  {
    "year": "2022",
    "q": "8(b)",
    "topic": "Ad Hoc, MANET & VANET",
    "subtopic": "VANET as an ad hoc network",
    "marks": 12,
    "type": "Long",
    "repeatKey": "vanet-proper-adhoc",
    "text": "\"VANET is a proper example of Adhoc network\" - justify the statement."
  },
  {
    "year": "2022",
    "q": "8(c)",
    "topic": "Cloud, Data Centers, Reliability & ICT Standards",
    "subtopic": "After-failure data reliability and consistency system",
    "marks": 13,
    "type": "Problem",
    "repeatKey": "cloud-after-failure-reliability-consistency",
    "text": "As a cloud reliability engineer, you are assigned to design a data reliability and consistency system that activates as an after-failure routine. Explain your system with necessary explanations."
  },
  {
    "year": "2021",
    "q": "5(a)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "Ubiquitous computing and goals of pervasive computing",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ubiquitous-goals-pervasive",
    "text": "What is Ubiquitous Computing? What are the goals of pervasive computing?"
  },
  {
    "year": "2021",
    "q": "5(b)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "Enablers of pervasive computing",
    "marks": 14,
    "type": "Long",
    "repeatKey": "enablers-pervasive",
    "text": "Discuss briefly about the enablers of pervasive computing."
  },
  {
    "year": "2021",
    "q": "5(c)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "NGN architecture",
    "marks": 11,
    "type": "Diagram",
    "repeatKey": "ngn-architecture",
    "text": "What is NGN? Draw and explain the architecture of NGN."
  },
  {
    "year": "2021",
    "q": "6(a)",
    "topic": "Zigbee, IEEE 802.15.4 & LR-WPAN",
    "subtopic": "ZDO and IEEE 802.15.4 network topologies",
    "marks": 8,
    "type": "Long",
    "repeatKey": "zdo-ieee802154-topologies",
    "text": "What is ZDO? Explain briefly IEEE802.15.4 network topologies."
  },
  {
    "year": "2021",
    "q": "6(b)",
    "topic": "Zigbee, IEEE 802.15.4 & LR-WPAN",
    "subtopic": "Super frame and IEEE 802.15.4 MAC frames",
    "marks": 12,
    "type": "Long",
    "repeatKey": "superframe-ieee802154-mac-frames",
    "text": "Define super frame. Explain various MAC layer frame formats defined by IEEE802.15.4."
  },
  {
    "year": "2021",
    "q": "6(c)",
    "topic": "Zigbee, IEEE 802.15.4 & LR-WPAN",
    "subtopic": "Zigbee stack layers",
    "marks": 10,
    "type": "Long",
    "repeatKey": "zigbee-stack-layers",
    "text": "Define zigbee stack. Briefly describe the layers of the zigbee stack."
  },
  {
    "year": "2021",
    "q": "6(d)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "Protecting user rights in converged media",
    "marks": 5,
    "type": "Long",
    "repeatKey": "converged-media-user-rights",
    "text": "In a converged media environment, how would you provide protection to user right?"
  },
  {
    "year": "2021",
    "q": "7(a)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Types of CSMA versions",
    "marks": 15,
    "type": "Diagram",
    "repeatKey": "csma-versions-figure",
    "text": "Discuss about the different types of CSMA version with appropriate figure."
  },
  {
    "year": "2021",
    "q": "7(b)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "MACA hidden and exposed terminal problems",
    "marks": 10,
    "type": "Long",
    "repeatKey": "maca-hidden-exposed",
    "text": "Briefly describe how does MACA solve hidden terminal problem and exposed terminal problem?"
  },
  {
    "year": "2021",
    "q": "7(c)",
    "topic": "Wireless Sensor Networks, Localization & GPS",
    "subtopic": "Structure of GPS",
    "marks": 10,
    "type": "Long",
    "repeatKey": "gps-structure",
    "text": "Briefly discuss the structure of GPS."
  },
  {
    "year": "2021",
    "q": "8(a)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Random backoff timer and IEEE 802.11 waiting times",
    "marks": 10,
    "type": "Long",
    "repeatKey": "random-backoff-ieee80211-waiting",
    "text": "Define Random backoff timer. Briefly describe different types of waiting time of IEEE 802.11."
  },
  {
    "year": "2021",
    "q": "8(b)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Contention window; B-MAC vs X-MAC",
    "marks": 10,
    "type": "Long",
    "repeatKey": "contention-window-bmac-xmac",
    "text": "Define contention window size. Write down the difference between B-MAC and X-MAC."
  },
  {
    "year": "2021",
    "q": "8(c)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "S-MAC schedule maintenance",
    "marks": 8,
    "type": "Long",
    "repeatKey": "smac-choose-maintain-schedule",
    "text": "How does S-MAC choose and maintain schedule?"
  },
  {
    "year": "2021",
    "q": "8(d)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "ATMA reservation process",
    "marks": 7,
    "type": "Long",
    "repeatKey": "atma-reservation-process",
    "text": "Explain reservation process in ATMA protocol."
  },
  {
    "year": "2020",
    "q": "4(a)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "Ubiquitous computing and goals of pervasive computing",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ubiquitous-goals-pervasive",
    "text": "What is Ubiquitous computing? What are the goals of pervasive computing?"
  },
  {
    "year": "2020",
    "q": "4(b)",
    "topic": "Ad Hoc, MANET & VANET",
    "subtopic": "Ad hoc vs infrastructure networks",
    "marks": 10,
    "type": "Long",
    "repeatKey": "adhoc-vs-infrastructure-significance",
    "text": "What is the significance of Ad-hoc networks over Infrastructure based networks? Discuss briefly."
  },
  {
    "year": "2020",
    "q": "4(c)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Unfairness in WSN; MACAW",
    "marks": 10,
    "type": "Long",
    "repeatKey": "wsn-unfairness-macaw",
    "text": "What is meant by \"unfairness\" in WSN? How MACAW solve unfairness of a wireless network."
  },
  {
    "year": "2020",
    "q": "5(a)",
    "topic": "Ad Hoc, MANET & VANET",
    "subtopic": "MARR-ALOHA and CAH-MAC/RR-ALOHA",
    "marks": 10,
    "type": "Long",
    "repeatKey": "marr-aloha-cahmac-rr-aloha",
    "text": "Briefly discuss the working principle of MARR-ALOHA in VANET. How does CAH-MAC overcome the problem in RR-ALOHA?"
  },
  {
    "year": "2020",
    "q": "5(b)",
    "topic": "Zigbee, IEEE 802.15.4 & LR-WPAN",
    "subtopic": "Zigbee stack layers",
    "marks": 10,
    "type": "Long",
    "repeatKey": "zigbee-stack-layers",
    "text": "Define Zigbee stack. Briefly describe the layers of the zigbee stack."
  },
  {
    "year": "2020",
    "q": "5(c)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "CSMA/CD failure in wireless networks",
    "marks": 10,
    "type": "Long",
    "repeatKey": "csmacd-fail-wireless",
    "text": "Why does CSMA/CD fail in wireless networks?"
  },
  {
    "year": "2020",
    "q": "6(a)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "NGN architecture",
    "marks": 10,
    "type": "Diagram",
    "repeatKey": "ngn-architecture",
    "text": "What is NGN? Draw the architecture of NGN and write a short note on it."
  },
  {
    "year": "2020",
    "q": "6(b)",
    "topic": "Zigbee, IEEE 802.15.4 & LR-WPAN",
    "subtopic": "Zigbee over Bluetooth and Wi-Fi",
    "marks": 10,
    "type": "Long",
    "repeatKey": "zigbee-over-bluetooth-wifi",
    "text": "Define Zigbee protocol. Why should we choose Zigbee over Bluetooth and Wi-Fi."
  },
  {
    "year": "2020",
    "q": "6(c)",
    "topic": "Ad Hoc, MANET & VANET",
    "subtopic": "RR-ALOHA and RR-ALOHA+",
    "marks": 10,
    "type": "Long",
    "repeatKey": "rr-aloha-plus",
    "text": "Briefly discuss the working principle of RR-ALOHA in VANET. How does RR-ALOHA+ overcome the problem in RR-ALOHA."
  },
  {
    "year": "2019",
    "q": "5(a)",
    "topic": "Ad Hoc, MANET & VANET",
    "subtopic": "Ad hoc vs infrastructure networks",
    "marks": 6,
    "type": "Long",
    "repeatKey": "adhoc-vs-infrastructure-significance",
    "text": "What is the significance of Ad hoc networks over Infrastructure based networks? Discuss briefly."
  },
  {
    "year": "2019",
    "q": "5(b)",
    "topic": "Wireless Sensor Networks, Localization & GPS",
    "subtopic": "WSN in military and health sectors",
    "marks": 10,
    "type": "Long",
    "repeatKey": "wsn-military-health",
    "text": "How WSN can be applied in military and health sectors?"
  },
  {
    "year": "2019",
    "q": "5(c)",
    "topic": "Wireless Sensor Networks, Localization & GPS",
    "subtopic": "Characteristics of WSNs",
    "marks": 6,
    "type": "Short",
    "repeatKey": "wsn-characteristics",
    "text": "Point out the characteristics of WSNs."
  },
  {
    "year": "2019",
    "q": "5(d)",
    "topic": "Wireless Sensor Networks, Localization & GPS",
    "subtopic": "WSN localization in KUET campus",
    "marks": 13,
    "type": "Problem",
    "repeatKey": "wsn-kuet-localization",
    "text": "A set of sensor nodes are spread in KUET campus. The number of nodes are 100 and the area under coverage is 101 acres. How would you acquire location information from these sensor nodes using WSN?"
  },
  {
    "year": "2019",
    "q": "6(a)",
    "topic": "Zigbee, IEEE 802.15.4 & LR-WPAN",
    "subtopic": "Zigbee protocol and alliance",
    "marks": 10,
    "type": "Short",
    "repeatKey": "zigbee-protocol-alliance",
    "text": "What is Zigbee protocol & Zigbee alliance?"
  },
  {
    "year": "2019",
    "q": "6(b)",
    "topic": "Zigbee, IEEE 802.15.4 & LR-WPAN",
    "subtopic": "Zigbee for in-home patient monitoring",
    "marks": 10,
    "type": "Problem",
    "repeatKey": "zigbee-home-patient-monitoring",
    "text": "How would you apply Zigbee to automate In-Home patient monitoring?"
  },
  {
    "year": "2019",
    "q": "6(c)",
    "topic": "Zigbee, IEEE 802.15.4 & LR-WPAN",
    "subtopic": "Zigbee over Bluetooth and Wi-Fi",
    "marks": 5,
    "type": "Long",
    "repeatKey": "zigbee-over-bluetooth-wifi",
    "text": "Why should we choose Zigbee over Bluetooth & Wi-Fi?"
  },
  {
    "year": "2019",
    "q": "6(d)",
    "topic": "Zigbee, IEEE 802.15.4 & LR-WPAN",
    "subtopic": "LR-WPAN topology",
    "marks": 10,
    "type": "Diagram",
    "repeatKey": "lr-wpan-topology",
    "text": "Draw the LR-WPAN topology and discuss briefly."
  },
  {
    "year": "2019",
    "q": "7(a)",
    "topic": "Ad Hoc, MANET & VANET",
    "subtopic": "VANET characteristics",
    "marks": 10,
    "type": "Long",
    "repeatKey": "vanet-characteristics",
    "text": "What is VANET? Point out the characteristics of VANET."
  },
  {
    "year": "2019",
    "q": "7(b)",
    "topic": "Ad Hoc, MANET & VANET",
    "subtopic": "DSRC working",
    "marks": 10,
    "type": "Long",
    "repeatKey": "dsrc-technology-works",
    "text": "How DSRC technology works? Explain briefly."
  },
  {
    "year": "2019",
    "q": "7(c)",
    "topic": "Ad Hoc, MANET & VANET",
    "subtopic": "IEEE 802.11p broadcast limitations",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ieee80211p-broadcast-limitations",
    "text": "What are the limitations of IEEE 802.11p in broadcast communication?"
  },
  {
    "year": "2019",
    "q": "7(d)",
    "topic": "Zigbee, IEEE 802.15.4 & LR-WPAN",
    "subtopic": "Zigbee network topology",
    "marks": 5,
    "type": "Diagram",
    "repeatKey": "zigbee-network-topology",
    "text": "Draw the Zigbee network topology with proper notation."
  },
  {
    "year": "2019",
    "q": "8(a)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "NGN architecture",
    "marks": 10,
    "type": "Diagram",
    "repeatKey": "ngn-architecture",
    "text": "What is NGN? Draw the architecture of NGN and write a short note on it."
  },
  {
    "year": "2019",
    "q": "8(b)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "Technological convergence concept",
    "marks": 10,
    "type": "Diagram",
    "repeatKey": "technological-convergence-concept",
    "text": "Define technological convergence. Explain the concept of convergence with proper figure."
  },
  {
    "year": "2019",
    "q": "8(c)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "Impact of convergence on markets",
    "marks": 7,
    "type": "Long",
    "repeatKey": "convergence-impact-markets",
    "text": "Discuss about the impact of convergence on markets."
  },
  {
    "year": "2019",
    "q": "8(d)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "Converged media user rights and Facebook-Cambridge Analytica",
    "marks": 8,
    "type": "Long",
    "repeatKey": "converged-media-user-rights-cambridge-analytica",
    "text": "In a converged media environment, how would you provide protection to user rights? How can you prevent events like \"Facebook-Cambridge Analytica Data Scandal\"?"
  },
  {
    "year": "2018",
    "q": "5(a)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "Technological convergence concept",
    "marks": 10,
    "type": "Diagram",
    "repeatKey": "technological-convergence-concept",
    "text": "Define technological convergence. Explain the concept of convergence with proper figure."
  },
  {
    "year": "2018",
    "q": "5(b)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "NGN architecture",
    "marks": 12,
    "type": "Diagram",
    "repeatKey": "ngn-architecture",
    "text": "What is NGN? Draw the architecture of NGN and write a short note on NGN."
  },
  {
    "year": "2018",
    "q": "5(c)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "Impact of convergence on markets",
    "marks": 8,
    "type": "Long",
    "repeatKey": "convergence-impact-markets",
    "text": "Discuss about the impact of convergence on markets."
  },
  {
    "year": "2018",
    "q": "5(d)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "Mobile web app simplicity",
    "marks": 5,
    "type": "Long",
    "repeatKey": "mobile-web-app-simple-no-simpler",
    "text": "\"A mobile web app should be as simple as possible, but no simpler.\" - justify the statement."
  },
  {
    "year": "2018",
    "q": "6(a)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "Ubiquitous computing and goals of pervasive computing",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ubiquitous-goals-pervasive",
    "text": "What is Ubiquitous Computing? What are the goals of pervasive computing?"
  },
  {
    "year": "2018",
    "q": "6(b)",
    "topic": "Convergence, NGN & Pervasive Computing",
    "subtopic": "Enablers of pervasive computing",
    "marks": 15,
    "type": "Long",
    "repeatKey": "enablers-pervasive",
    "text": "Discuss briefly about the enablers of pervasive computing."
  },
  {
    "year": "2018",
    "q": "6(c)",
    "topic": "Wireless Sensor Networks, Localization & GPS",
    "subtopic": "WSN in military and health sectors",
    "marks": 10,
    "type": "Long",
    "repeatKey": "wsn-military-health",
    "text": "How WSN can be applied in military and health sector? Discuss briefly."
  },
  {
    "year": "2018",
    "q": "7(a)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "iOS vs Android OS architecture",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ios-vs-android-architecture-differences",
    "text": "Point out the differences between iOS and Android OS architecture."
  },
  {
    "year": "2018",
    "q": "7(b)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "iOS optimization opportunity",
    "marks": 10,
    "type": "Long",
    "repeatKey": "ios-optimization-opportunity",
    "text": "Why iOS devices provide better optimization opportunity to the developers than android device?"
  },
  {
    "year": "2018",
    "q": "7(c)",
    "topic": "Mobile Cloud, Resources & Power Awareness",
    "subtopic": "Resource scarcity in mobile platform",
    "marks": 10,
    "type": "Long",
    "repeatKey": "resources-scarce-mobile",
    "text": "\"Resources are scarce in mobile platform.\" - justify the statement."
  },
  {
    "year": "2018",
    "q": "7(d)",
    "topic": "Mobile OS, Android & iOS Architecture",
    "subtopic": "iOS security features",
    "marks": 5,
    "type": "Long",
    "repeatKey": "ios-security-features",
    "text": "Discuss the iOS security features clearly."
  },
  {
    "year": "2018",
    "q": "8(a)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "ARM architecture and general registers",
    "marks": 15,
    "type": "Long",
    "repeatKey": "arm-architecture-general-registers",
    "text": "Define ARM architecture of processors. Explain the general register set of ARM processors."
  },
  {
    "year": "2018",
    "q": "8(b)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "CORTEX processor classes and features",
    "marks": 10,
    "type": "Long",
    "repeatKey": "cortex-processor-features",
    "text": "Classify different CORTEX processors and point out their features."
  },
  {
    "year": "2018",
    "q": "8(c)",
    "topic": "Smartphone Hardware, Sensors & Processors",
    "subtopic": "x86 inefficiency for mobile",
    "marks": 10,
    "type": "Long",
    "repeatKey": "x86-inefficient-mobile",
    "text": "Why x86 architecture based processors is inefficient for mobile computing?"
  },
  {
    "year": "2017",
    "q": "5(a)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Wireless MAC design considerations",
    "marks": 7,
    "type": "Long",
    "repeatKey": "wireless-mac-design-considerations",
    "text": "What are the design considerations for wireless MAC protocol?"
  },
  {
    "year": "2017",
    "q": "5(b)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "CSMA/CD vs CSMA/CA",
    "marks": 10,
    "type": "Long",
    "repeatKey": "csmacd-vs-csmaca",
    "text": "Write down the difference between CSMA/CD and CSMA/CA protocol."
  },
  {
    "year": "2017",
    "q": "5(c)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Types of CSMA versions",
    "marks": 12,
    "type": "Diagram",
    "repeatKey": "csma-versions-figure",
    "text": "Discuss about the different types of CSMA version with appropriate figure."
  },
  {
    "year": "2017",
    "q": "5(d)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Polling and reservation method for WSN",
    "marks": 6,
    "type": "Long",
    "repeatKey": "polling-reservation-wsn",
    "text": "Define polling and reservation method for wireless sensor network."
  },
  {
    "year": "2017",
    "q": "6(a)",
    "topic": "Wireless Sensor Networks, Localization & GPS",
    "subtopic": "WSN definition and characteristics",
    "marks": 7,
    "type": "Long",
    "repeatKey": "wsn-definition-characteristics",
    "text": "Define wireless sensor network. Write down some characteristics of wireless sensor network."
  },
  {
    "year": "2017",
    "q": "6(b)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Need for wireless MAC; CSMA/CD failure",
    "marks": 9,
    "type": "Long",
    "repeatKey": "wireless-mac-need-csmacd-failure",
    "text": "Why need wireless MAC protocols? Why CSMA/CD protocol fail in wireless communications?"
  },
  {
    "year": "2017",
    "q": "6(c)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "MACA hidden and exposed terminal problems",
    "marks": 11,
    "type": "Long",
    "repeatKey": "maca-hidden-exposed",
    "text": "Briefly describe how MACA solve hidden terminal problem and exposed terminal problem?"
  },
  {
    "year": "2017",
    "q": "6(d)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Unfairness in WSN; MACAW",
    "marks": 8,
    "type": "Long",
    "repeatKey": "wsn-unfairness-macaw",
    "text": "What is meant by \"unfairness\" in WSN? How MACAW solve unfairness of a wireless network?"
  },
  {
    "year": "2017",
    "q": "7(a)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "IEEE 802.11 MAC for WSN",
    "marks": 7,
    "type": "Long",
    "repeatKey": "ieee80211-mac-wsn",
    "text": "Briefly describe how IEEE 802.11 MAC protocol works for WSN?"
  },
  {
    "year": "2017",
    "q": "7(b)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "B-MAC vs X-MAC",
    "marks": 10,
    "type": "Long",
    "repeatKey": "bmac-vs-xmac",
    "text": "Write down the difference between B-MAC and X-MAC protocol with appropriate figure."
  },
  {
    "year": "2017",
    "q": "7(c)",
    "topic": "Wireless Sensor Networks, Localization & GPS",
    "subtopic": "Geolocation, GPS, and GPS structure",
    "marks": 12,
    "type": "Long",
    "repeatKey": "geolocation-gps-structure",
    "text": "Define Geolocation and GPS. Briefly discuss the structure of GPS."
  },
  {
    "year": "2017",
    "q": "7(d)",
    "topic": "Wireless Sensor Networks, Localization & GPS",
    "subtopic": "Applications of WSN",
    "marks": 6,
    "type": "Short",
    "repeatKey": "wsn-applications",
    "text": "Write down some applications of wireless Sensor Network."
  },
  {
    "year": "2017",
    "q": "8(a)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "T-MAC vs S-MAC; schedule maintenance",
    "marks": 13,
    "type": "Long",
    "repeatKey": "tmac-smac-schedule",
    "text": "Write down the difference between TMAC and SMAC. How does S-MAC choose and maintains schedules?"
  },
  {
    "year": "2017",
    "q": "8(b)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Random backoff timer and IEEE 802.11 waiting times",
    "marks": 10,
    "type": "Long",
    "repeatKey": "random-backoff-ieee80211-waiting",
    "text": "Define Random backoff timer. Briefly describe different types of waiting time of IEEE 802.11."
  },
  {
    "year": "2017",
    "q": "8(c)",
    "topic": "Wireless MAC, IEEE 802.11 & Energy-Aware MAC",
    "subtopic": "Common WSN protocols; 1-persistent vs p-persistent CSMA",
    "marks": 12,
    "type": "Long",
    "repeatKey": "common-wsn-protocols-1p-persistent",
    "text": "What are the different types of common protocol for WSN? Write down the difference between 1-persistent CSMA and p-persistent CSMA."
  }
];

const insights = [
  "Highest-return foundation: Mobile Computing fundamentals repeat in every analyzed year. Definition, alternative names, architectural layers, current challenges, coping strategies, mobility constraints, and the mobile apps + wireless communication relationship are a core Section A cluster.",
  "Smartphone hardware and processor topics are also year-stable. Prepare smartphone sensors, PCB/anatomy, application processor, baseband processor, ARM processor families/registers/modes, x86 inefficiency, big.LITTLE, CPU vs GPU, and SoC naming.",
  "Mobile OS architecture is one of the strongest recurring clusters. Android layered architecture, Dalvik VM, Android Runtime, application framework, kernel role, Intent, iOS architecture, iOS vs Android, and iOS security features recur with medium-to-high marks.",
  "UI/UX, usability, and context-aware computing form a compact scoring block, especially from 2017-2022. Repeated questions include UI/UX guidelines, usability principles, context-aware computing need, and the Context-aware System architecture diagram.",
  "AR/VR questions evolve over time: earlier papers emphasize Google Glass, monitor-based AR, and AR app design; newer papers shift toward healthcare applications and VR security gaps/future work.",
  "Section B is dominated by Wireless MAC and IEEE 802.11 / energy-aware MAC. It is the single largest topic cluster by occurrence and marks: CSMA variants, MACA, MACAW, waiting times, backoff, B-MAC vs X-MAC, S-MAC, ATMA, DWMAC/DFWMAC, and newer AdAMAC/ADVMAC comparisons.",
  "NGN, convergence, and pervasive/ubiquitous computing repeatedly appear in Section B. NGN architecture alone recurs across four years, while convergence-user-rights questions expand from market impact to privacy/protection issues.",
  "WSN is examined in both basic and applied forms: definition, characteristics, military/health uses, GPS/geolocation, campus localization, hybrid mobile-stationary localization design, and GPS structure.",
  "Zigbee and IEEE 802.15.4 are a focused but important sub-cluster concentrated in 2019-2021. Prepare Zigbee stack, Zigbee vs Bluetooth/Wi-Fi, ZDO, network topologies, LR-WPAN, super frame, and MAC frame formats.",
  "Ad hoc / VANET topics appear in multiple styles: Ad hoc vs infrastructure, MANET vs VANET, VANET justification, DSRC, IEEE 802.11p broadcast limits, RR-ALOHA variants, and mobility-related networking scenarios.",
  "Recent papers broaden toward cloud/data-center and mobility-management design questions: cloud virtualization security, data-center ICT standards, after-failure reliability/consistency, cloud energy-efficiency limitations, CDMA handover, and packet transmission across changing networks.",
  "Examiner style signal: repeated exact or near-exact questions are common. The most repeated groups include mobile-computing challenges, Context-aware System architecture, NGN architecture, Android architecture, ARM processor/register questions, UI/UX/usability questions, MACA hidden/exposed terminals, and MACAW unfairness."
];

function unique(arr) {
  return [...new Set(arr)];
}

function groupByTopic(items) {
  return items.reduce((acc, item) => {
    acc[item.topic] = acc[item.topic] || [];
    acc[item.topic].push(item);
    return acc;
  }, {});
}

function makeStats(items) {
  return Object.entries(groupByTopic(items))
    .map(([topic, qs]) => {
      const years = unique(qs.map((q) => q.year)).sort();
      const marks = qs.reduce((sum, q) => sum + q.marks, 0);
      return {
        topic,
        questions: qs.length,
        marks,
        years,
        high: qs.length >= 5 || years.length >= 3,
        qs,
      };
    })
    .sort((a, b) => b.questions - a.questions || b.marks - a.marks || a.topic.localeCompare(b.topic));
}

function typeCounts(items) {
  return Object.entries(items.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {})).sort((a, b) => b[1] - a[1]);
}

function yearTrend(items, topic) {
  return metadata.years.map((year) => ({
    year,
    count: items.filter((item) => item.year === year && item.topic === topic).length,
    marks: items.filter((item) => item.year === year && item.topic === topic).reduce((sum, item) => sum + item.marks, 0),
  }));
}

function groupRepeatedQuestions(items) {
  const grouped = new Map();

  items.forEach((item) => {
    const key = item.repeatKey || item.text.trim().toLowerCase().replace(/\s+/g, " ");
    if (!grouped.has(key)) {
      grouped.set(key, {
        ...item,
        count: 0,
        years: [],
        appearances: [],
        marksValues: [],
      });
    }

    const group = grouped.get(key);
    group.count += 1;
    group.years.push(item.year);
    group.appearances.push({ year: item.year, q: item.q, marks: item.marks });
    group.marksValues.push(item.marks);

    // Prefer the most recent wording as the displayed canonical version.
    if (item.year.localeCompare(group.year) > 0) {
      group.year = item.year;
      group.q = item.q;
      group.subtopic = item.subtopic;
      group.marks = item.marks;
      group.type = item.type;
      group.text = item.text;
    }
  });

  return [...grouped.values()].map((group) => {
    const years = unique(group.years).sort((a, b) => b.localeCompare(a));
    const marksSet = unique(group.marksValues).sort((a, b) => Number(a) - Number(b));
    const appearances = [...group.appearances].sort((a, b) => b.year.localeCompare(a.year) || a.q.localeCompare(b.q));

    return {
      ...group,
      years,
      marksLabel: marksSet.join(" / "),
      appearances,
    };
  });
}

function badgeClass(kind) {
  const map = {
    Short: "bg-slate-100 text-slate-700 border-slate-200",
    Long: "bg-blue-50 text-blue-700 border-blue-200",
    Problem: "bg-violet-50 text-violet-700 border-violet-200",
    Diagram: "bg-amber-50 text-amber-700 border-amber-200",
  };
  return map[kind] || "bg-slate-100 text-slate-700 border-slate-200";
}

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>{children}</div>;
}

function Pill({ children, className = "" }) {
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${className}`}>{children}</span>;
}

function StatCard({ label, value, detail }) {
  return (
    <Card className="bg-gradient-to-br from-[#048c4b] via-[#048c4b] to-[#048c4b] text-white">
      <div className="text-sm text-white/90">{label}</div>
      <div className="mt-2 text-3xl font-black tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-white/90">{detail}</div>
    </Card>
  );
}

function TopicTable({ title, stats }) {
  return (
    <Card>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-slate-900">{title}</h2>
          <p className="text-sm text-slate-500">High-frequency = asked in at least 3 years or at least 5 subquestions.</p>
        </div>
        <Pill className="border-[#048c4b]/20 bg-[#048c4b]/6 text-[#048c4b]">{stats.filter((s) => s.high).length} high-frequency topics</Pill>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-separate border-spacing-y-2 text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2">Topic</th>
              <th className="px-3 py-2"># Questions</th>
              <th className="px-3 py-2"># Marks</th>
              <th className="px-3 py-2">Years asked</th>
              <th className="px-3 py-2">Badge</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((row) => (
              <tr key={row.topic} className="rounded-xl bg-slate-50 align-middle">
                <td className="rounded-l-xl px-3 py-3 font-bold text-slate-800">{row.topic}</td>
                <td className="px-3 py-3 font-semibold">{row.questions}</td>
                <td className="px-3 py-3 font-semibold">{row.marks}</td>
                <td className="px-3 py-3 text-slate-600">{row.years.join(", ")}</td>
                <td className="rounded-r-xl px-3 py-3">
                  {row.high ? <Pill className="border-[#048c4b]/20 bg-[#048c4b]/6 text-[#048c4b]">High</Pill> : <Pill className="border-slate-200 bg-white text-slate-500">Watch</Pill>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function MiniTrend({ items, topic }) {
  const trend = yearTrend(items, topic);
  const max = Math.max(1, ...trend.map((d) => d.count));
  return (
    <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${metadata.years.length}, minmax(0, 1fr))` }}>
      {trend.map((d) => (
        <div key={d.year} className="rounded-xl bg-slate-50 p-2 text-center">
          <div className="mb-1 text-[10px] font-bold text-slate-500">{d.year}</div>
          <div className="mx-auto flex h-14 w-4 items-end rounded-full bg-[#048c4b]/10">
            <div className="w-4 rounded-full bg-[#048c4b]" style={{ height: `${(d.count / max) * 100}%`, minHeight: d.count ? 8 : 0 }} />
          </div>
          <div className="mt-1 text-xs font-bold text-slate-700">{d.count}</div>
        </div>
      ))}
    </div>
  );
}

function FrequencyAnalysis({ all, sectionAStats, sectionBStats }) {
  const combinedStats = makeStats(all);
  const typeData = typeCounts(all);
  const maxType = Math.max(...typeData.map(([, count]) => count));
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-xl font-black text-slate-900">Top recurring topics + year trend</h2>
        <p className="mt-1 text-sm text-slate-500">Bars show number of extracted subquestions in each year across both sections.</p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {combinedStats.slice(0, 8).map((row) => (
            <div key={row.topic} className="rounded-2xl border border-slate-200 p-4">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <div className="font-black text-slate-900">{row.topic}</div>
                  <div className="text-sm text-slate-500">{row.questions} questions · {row.marks} marks · {row.years.join(", ")}</div>
                </div>
                {row.high && <Pill className="border-[#048c4b]/20 bg-[#048c4b]/6 text-[#048c4b]">High</Pill>}
              </div>
              <MiniTrend items={all} topic={row.topic} />
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-black text-slate-900">Common question types</h2>
          <div className="mt-5 space-y-3">
            {typeData.map(([type, count]) => (
              <div key={type}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-700">{type}</span>
                  <span className="font-black text-slate-900">{count}</span>
                </div>
                <div className="h-3 rounded-full bg-[#048c4b]/10">
                  <div className="h-3 rounded-full bg-[#048c4b]" style={{ width: `${(count / maxType) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">No MCQ pattern detected. The dominant forms are explain/justify questions, architecture diagrams, protocol comparisons, and design/scenario questions.</p>
        </Card>

        <Card>
          <h2 className="text-xl font-black text-slate-900">Section contrast</h2>
          <div className="mt-4 grid gap-3">
            <div className="rounded-xl border border-[#048c4b]/20 bg-white p-4">
              <div className="font-black text-[#048c4b]">Section A pattern</div>
              <div className="mt-1 text-sm text-slate-700">Mobile-computing foundations, smartphone hardware/processors, Android/iOS architecture, UI/UX + context-aware computing, and AR/VR.</div>
            </div>
            <div className="rounded-xl border border-[#048c4b]/20 bg-white p-4">
              <div className="font-black text-[#048c4b]">Section B pattern</div>
              <div className="mt-1 text-sm text-slate-700">Wireless MAC/IEEE 802.11, WSN + localization/GPS, Zigbee and IEEE 802.15.4, VANET/ad hoc networks, NGN/convergence, cloud, and mobility-management scenarios.</div>
            </div>
            <div className="rounded-xl bg-amber-50 p-4">
              <div className="font-black text-amber-900">Shift note</div>
              <div className="mt-1 text-sm text-amber-800">The 2022-2023 papers add more design-oriented and systems-oriented questions: localization protocols, data-center standards, cloud reliability/security, CDMA handover, cross-network packet transmission, and Android framework coding.</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6">
        <TopicTable title="Section A high-frequency snapshot" stats={sectionAStats.slice(0, 5)} />
        <TopicTable title="Section B high-frequency snapshot" stats={sectionBStats.slice(0, 5)} />
      </div>
    </div>
  );
}

function QuestionList({ title, items }) {
  const [selectedYear, setSelectedYear] = useState("All");
  const [openTopics, setOpenTopics] = useState({});
  const availableYears = useMemo(
    () => ["All", ...unique(items.map((item) => item.year)).sort((a, b) => b.localeCompare(a))],
    [items]
  );
  const filteredItems = useMemo(
    () => selectedYear === "All" ? items : items.filter((item) => item.year === selectedYear),
    [items, selectedYear]
  );
  const stats = makeStats(filteredItems);
  const totalMarks = filteredItems.reduce((sum, item) => sum + item.marks, 0);
  const uniqueQuestionPatterns = groupRepeatedQuestions(filteredItems).length;
  const toggleTopic = (topic) => {
    setOpenTopics((current) => ({ ...current, [topic]: !current[topic] }));
  };
  const handleYearChange = (year) => {
    setSelectedYear(year);
    setOpenTopics({});
  };

  return (
    <div className="space-y-5">
      <Card>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">{title}</h2>
            <p className="mt-1 text-sm text-slate-500">Repeated exact or near-identical questions are collapsed into one displayed item with an appearance count and year/question-number trace.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-slate-50 p-2">
            <span className="px-2 text-xs font-bold uppercase tracking-wide text-slate-500">Filter by year</span>
            {availableYears.map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`rounded-xl px-3 py-2 text-sm font-bold transition ${selectedYear === "All" ? (year === "All" ? "bg-[#048c4b] text-white shadow" : "bg-white text-slate-600 hover:bg-[#048c4b]/6") : selectedYear === year ? "bg-[#048c4b] text-white shadow" : "bg-white text-slate-600 hover:bg-[#048c4b]/6"}`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill className="border-slate-200 bg-white text-slate-700">Showing: {selectedYear === "All" ? "All years" : selectedYear}</Pill>
          <Pill className="border-slate-200 bg-white text-slate-700">{filteredItems.length} appearances</Pill>
          <Pill className="border-slate-200 bg-white text-slate-700">{uniqueQuestionPatterns} unique question patterns</Pill>
          <Pill className="border-slate-200 bg-white text-slate-700">{totalMarks} mapped marks</Pill>
          <Pill className="border-slate-200 bg-white text-slate-700">{stats.length} topics</Pill>
        </div>
      </Card>

      {filteredItems.length === 0 ? (
        <Card>
          <p className="text-sm text-slate-600">No questions found for this year.</p>
        </Card>
      ) : (
        stats.map((group) => {
          const isOpen = Boolean(openTopics[group.topic]);
          const collapsedQuestions = groupRepeatedQuestions(group.qs)
            .sort((a, b) => b.count - a.count || b.years[0].localeCompare(a.years[0]) || a.subtopic.localeCompare(b.subtopic));

          return (
            <Card key={group.topic} className="question-card overflow-hidden">
              <button
                type="button"
                onClick={() => toggleTopic(group.topic)}
                className="topic-toggle flex w-full flex-wrap items-center justify-between gap-3 rounded-2xl p-2 text-left"
                aria-expanded={isOpen}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-lg font-black text-slate-900">{group.topic}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-black text-slate-600">{isOpen ? "−" : "+"}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">Frequency: {group.questions} appearances · {collapsedQuestions.length} unique patterns · {group.marks} marks · Years: {group.years.join(", ")}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {group.high ? <Pill className="border-[#048c4b]/20 bg-[#048c4b]/6 text-[#048c4b]">High-frequency</Pill> : <Pill className="border-slate-200 bg-white text-slate-500">Lower-frequency</Pill>}
                  <Pill className="border-slate-200 bg-white text-slate-600">{isOpen ? "Hide questions" : "Show questions"}</Pill>
                </div>
              </button>

              {isOpen && (
                <div className="topic-panel mt-4 space-y-3 border-t border-slate-200 pt-4">
                  {collapsedQuestions.map((item) => (
                    <div key={`${group.topic}-${item.repeatKey || item.text}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Pill className={item.count > 1 ? "border-[#048c4b]/20 bg-[#048c4b]/6 text-[#048c4b]" : "border-slate-300 bg-white text-slate-700"}>
                          {item.count} appearance{item.count > 1 ? "s" : ""}
                        </Pill>
                        <Pill className="border-slate-300 bg-white text-slate-700">Marks: {item.marksLabel}</Pill>
                        <Pill className={badgeClass(item.type)}>{item.type}</Pill>
                        <Pill className="border-indigo-200 bg-indigo-50 text-indigo-700">{item.subtopic}</Pill>
                      </div>
                      <p className="text-sm leading-6 text-slate-700">{item.text}</p>
                      <div className="mt-3 rounded-xl bg-white p-3 text-xs leading-5 text-slate-600">
                        <span className="font-black text-slate-800">Appeared:</span>{" "}
                        {item.appearances.map((appearance, idx) => (
                          <span key={`${appearance.year}-${appearance.q}`}>
                            {idx > 0 ? " · " : ""}
                            {appearance.year} {appearance.q} ({appearance.marks} marks)
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          );
        })
      )}
    </div>
  );
}

function Summary({ sectionAStats, sectionBStats, allStats, all }) {
  const totalTopics = allStats.length;
  const highTopics = allStats.filter((s) => s.high);
  const totalQuestions = all.length;
  const totalMarks = all.reduce((sum, q) => sum + q.marks, 0);
  const uniquePatterns = groupRepeatedQuestions(all).length;
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Years analyzed" value={metadata.years.length} detail={metadata.years.join(" · ")} />
        <StatCard label="Total topics" value={totalTopics} detail="normalized across both sections" />
        <StatCard label="Total subquestion appearances" value={totalQuestions} detail={`${uniquePatterns} unique question patterns after collapsing repeats`} />
        <StatCard label="Total mapped marks" value={totalMarks} detail="sum of extracted offered-question marks" />
      </div>

      <Card>
        <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <h2 className="text-xl font-black text-slate-900">Dashboard Summary</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This dashboard analyzes previous-year question papers for {metadata.courseCode} {metadata.courseName}. Topics were normalized across years, and the question-list tabs collapse repeated exact or near-identical questions into one item with an occurrence count, year trail, question number, and mark variation.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Course metadata</div>
                <div className="mt-2 font-black text-slate-900">{metadata.courseCode} · {metadata.courseName}</div>
                <div className="text-sm text-slate-600">{metadata.exam}</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">OCR handling</div>
                <div className="mt-2 font-black text-slate-900">Scan-aware transcription</div>
                <div className="text-sm text-slate-600">Broken scan words were conservatively normalized against rendered page images.</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#048c4b]/20 bg-[#048c4b]/6 p-5">
            <div className="text-xs font-bold uppercase tracking-wide text-[#048c4b]">High-frequency topics</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {highTopics.slice(0, 12).map((topic) => (
                <Pill key={topic.topic} className="border-[#048c4b]/20 bg-white text-[#048c4b]">{topic.topic}</Pill>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#048c4b]">Threshold used: asked in ≥3 years or ≥5 subquestions.</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6">
        <TopicTable title="Section A topics" stats={sectionAStats} />
        <TopicTable title="Section B topics" stats={sectionBStats} />
      </div>
    </div>
  );
}

function Insights() {
  return (
    <Card>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-slate-900">Examiner Insights</h2>
          <p className="text-sm text-slate-500">Actionable study signals from repetition, mark weight, and section placement.</p>
        </div>
        <Pill className="border-amber-200 bg-amber-50 text-amber-700">12 insights</Pill>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {insights.map((insight, idx) => (
          <div key={insight} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-white">{idx + 1}</div>
            <p className="text-sm leading-6 text-slate-700">{insight}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

const tabs = [
  { id: "summary", label: "Summary" },
  { id: "a", label: "Section A" },
  { id: "b", label: "Section B" },
  { id: "frequency", label: "Frequency Analysis" },
  { id: "qa", label: "Section A Questions" },
  { id: "qb", label: "Section B Questions" },
  { id: "insights", label: "Examiner Insights" },
];

const dashboardCss = `
  .dashboard-root {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .dashboard-root * {
    box-sizing: border-box;
  }

  .dashboard-root button {
    cursor: pointer;
  }

  .dashboard-root button:focus-visible {
    outline: 3px solid rgba(2, 199, 104, 0.35);
    outline-offset: 2px;
  }

  .dashboard-root table {
    border-collapse: separate;
  }

  .dashboard-root ::selection {
    background: rgba(2, 199, 104, 0.16);
  }

  .dashboard-root .question-card {
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  }

  .dashboard-root .question-card:hover {
    transform: translateY(-1px);
    border-color: rgb(203 213 225);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07);
  }

  .dashboard-root .topic-toggle {
    transition: background-color 180ms ease, transform 180ms ease;
  }

  .dashboard-root .topic-toggle:hover {
    background: rgba(2, 199, 104, 0.06);
  }

  .dashboard-root .topic-panel {
    animation: dashboardSlideDown 180ms ease-out;
  }

  @keyframes dashboardSlideDown {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media print {
    .dashboard-root nav,
    .dashboard-root button {
      position: static !important;
    }

    .dashboard-root {
      background: white !important;
    }
  }
`;

export default function MobileComputingQuestionPatternDashboard() {
  const [active, setActive] = useState("summary");
  const all = useMemo(() => [...sectionA, ...sectionB], []);
  const sectionAStats = useMemo(() => makeStats(sectionA), []);
  const sectionBStats = useMemo(() => makeStats(sectionB), []);
  const allStats = useMemo(() => makeStats(all), [all]);

  return (
    <div className="dashboard-root min-h-screen bg-white text-slate-900">
      <style>{dashboardCss}</style>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-6 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="bg-gradient-to-br from-[#048c4b] via-[#048c4b] to-[#048c4b] p-7 text-white">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">Exam-question pattern dashboard</div>
                <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">{metadata.courseCode}: {metadata.courseName}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/90">{metadata.institution} · {metadata.department}</p>
              </div>
              <div className="rounded-2xl bg-white/15 p-4 text-sm backdrop-blur">
                <div className="font-black">{metadata.exam}</div>
                <div className="mt-1 text-white/90">Years: {metadata.years.join(", ")}</div>
                <div className="text-white/90">{metadata.sections.join(" · ")}</div>
              </div>
            </div>
          </div>
          <div className="grid gap-3 p-5 text-sm md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4"><span className="font-bold">Answer pattern:</span> {metadata.answerPattern}</div>
            <div className="rounded-2xl bg-slate-50 p-4"><span className="font-bold">Marks pattern:</span> {metadata.marksPattern}</div>
            <div className="rounded-2xl bg-slate-50 p-4"><span className="font-bold">Note:</span> {metadata.artifactNote}</div>
          </div>
        </header>

        <nav className="mb-6 flex flex-wrap gap-2 rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-2xl px-4 py-3 text-sm font-black transition ${active === tab.id ? "bg-[#048c4b] text-white shadow" : "text-slate-600 hover:bg-[#048c4b]/6 hover:text-slate-900"}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <main>
          {active === "summary" && <Summary sectionAStats={sectionAStats} sectionBStats={sectionBStats} allStats={allStats} all={all} />}
          {active === "a" && <TopicTable title="Section A topic frequency" stats={sectionAStats} />}
          {active === "b" && <TopicTable title="Section B topic frequency" stats={sectionBStats} />}
          {active === "frequency" && <FrequencyAnalysis all={all} sectionAStats={sectionAStats} sectionBStats={sectionBStats} />}
          {active === "qa" && <QuestionList title="Section A Topicwise Exact Question List with Frequency" items={sectionA} />}
          {active === "qb" && <QuestionList title="Section B Topicwise Exact Question List with Frequency" items={sectionB} />}
          {active === "insights" && <Insights />}
        </main>

        
      </div>
    </div>
  );
}
