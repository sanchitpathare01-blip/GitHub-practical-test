# Personal Portfolio Website - Git Practical Test

A clean, modern, and responsive personal portfolio website developed using pure HTML5, CSS3, and vanilla JavaScript.

---

## 👨‍🎓 Student Details

| Field | Details |
| :--- | :--- |
| **Student Name** | Sanchit Pathare |
| **PRN / Roll Number** | [Enter Your PRN / Roll Number Here] |
| **Course & Degree** | B.Tech Computer Science and IT |
| **University** | Ajeenkya D Y Patil University, Pune |
| **Academic Year** | Second Year |
| **Academic Score** | CGPA: 9.1 |
| **Subject / Practical** | Git & GitHub Practical Test |

---

## 🚀 Project Overview

This portfolio website highlights academic background, technical skills, practical projects, hackathon achievements, and verified certifications.

### Core Sections Included:
- **Hero / Introduction:** Professional headline, background, and an interactive greeting button.
- **About Me:** Summary of academic focus, core interests, and background.
- **Education:** Degree details, university, and academic CGPA.
- **Technical Skills:** Categorized skill cards (Languages, Web Tech, Database, Developer Tools).
- **Featured Projects:** Individual cards for 4 academic and AI projects (*GuardianShield*, *CensusAI Connect*, *Scholarship Eligibility Checker*, *StudyMate AI*).
- **Achievements:** Hackathon rankings and achievements.
- **Certifications:** Verified technical certifications.
- **Contact & Socials:** Verified GitHub and LinkedIn profile links.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic document structure.
- **CSS3:** Custom responsive layout, dark navy & blue theme, hover effects, CSS grid and flexbox.
- **Vanilla JavaScript:** Simple DOM manipulation and interactive welcome message toggle.
- **No external frameworks:** Pure standard web technologies without external dependencies.

---

## 📂 Project Structure

```text
GitHub-practical-test/
├── index.html       # Main webpage structure (navbar & footer excluded for practical branches)
├── style.css        # Complete styling, dark navy/blue theme, and responsive design
├── script.js        # Beginner-friendly JavaScript interaction (welcome button)
└── README.md        # Project documentation and student practical details
```

---

## 🌿 Git Practical Test Workflow

As required for the practical assignment, the **navigation bar** and **footer** will be developed on dedicated feature branches:

1. **`main` branch:** Contains base project structure, core sections, styles, and script.
2. **`feature-navbar` branch:** Will contain the navigation bar implementation.
3. **`feature-footer` branch:** Will contain the footer implementation.

### Helpful Git Commands for the Practical:

#### 1. Stage and commit initial version on `main`:
```bash
git add .
git commit -m "Initial commit: Add portfolio structure, styling, script, and documentation"
```

#### 2. Create and switch to `feature-navbar` branch:
```bash
git checkout -b feature-navbar
# (Add your navigation bar code in index.html and style in style.css)
git add .
git commit -m "feat: Add navigation bar component"
```

#### 3. Create and switch to `feature-footer` branch:
```bash
git checkout main
git checkout -b feature-footer
# (Add your footer code in index.html and style in style.css)
git add .
git commit -m "feat: Add footer component"
```

#### 4. Merging branches into `main`:
```bash
git checkout main
git merge feature-navbar
git merge feature-footer
```

---

## 💻 How to Run Locally

1. Open this repository in **VS Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if not already installed.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The website will open in your default browser at `http://127.0.0.1:5500`.
