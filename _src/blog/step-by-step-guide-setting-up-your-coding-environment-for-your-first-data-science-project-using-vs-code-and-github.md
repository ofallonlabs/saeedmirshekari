---
layout: blog_base.njk
title: "Step-by-Step Guide: Setting Up Your Coding Environment for Your First
  Data Science Project Using VS Code and GitHub"
description: This guide walks you through setting up a data science project
  using VS Code and GitHub, covering environment setup, version control, project
  structure, and Jupyter integration for a clean, reproducible workflow.
meta_title: "Step-by-Step Guide: Setting Up Your Coding Environment for Your
  First Data Science Project Using VS Code and GitHub"
meta_description: This guide walks you through setting up a data science project
  using VS Code and GitHub, covering environment setup, version control, project
  structure, and Jupyter integration for a clean, reproducible workflow.
author: Saeed Mirshekari
date: 2025-04-19T16:51:09.503Z
tags:
  - post
  - mentoring
thumbnail: /assets/img/uploads/undraw_ride-a-bicycle_oozn.png
---
<!--StartFragment-->

Here’s a detailed 3000-word blog draft in markdown format titled **“Step-by-Step Guide: Setting Up Your Coding Environment for Your First Data Science Project Using VS Code and GitHub”**:

- - -

# Step-by-Step Guide: Setting Up Your Coding Environment for Your First Data Science Project Using VS Code and GitHub

*Starting your first data science project is exciting, but the setup can feel overwhelming. This guide will walk you through every step—from installing the tools to pushing your first code to GitHub using Visual Studio Code (VS Code).*

- - -

## 🧠 Why Environment Setup Matters in Data Science

Before diving into the code, it’s essential to understand *why* the environment setup is crucial:

* **Reproducibility**: Makes it easier to share and reproduce results.
* **Version Control**: Keeps track of changes and prevents loss of work.
* **Organization**: Maintains a clean, structured workflow.
* **Collaboration**: Simplifies working with teammates or open-source contributors.

- - -

## 🧰 Tools You’ll Need

Here’s a list of the key tools we’ll use:

* **Visual Studio Code (VS Code)** – Code editor
* **Python (via Anaconda or native)** – Programming language
* **Git** – Version control system
* **GitHub** – Cloud-based code repository
* **Jupyter Notebook** – Interactive Python interface for data exploration
* **Virtual Environments** – To isolate dependencies

- - -

## 🧭 Step 1: Install Prerequisites

### ✅ 1.1 Install Python

For data science, we recommend installing **[Anaconda](https://www.anaconda.com/products/distribution)**, which comes with Python and common libraries like NumPy, pandas, and Jupyter pre-installed.

**Alternative**: Install Python natively from [python.org](https://www.python.org/) and use `pip` to install libraries.

### ✅ 1.2 Install Git

Git is a must for version control. Download and install it from [git-scm.com](https://git-scm.com/).

Run the following command in your terminal (Command Prompt, Terminal, or PowerShell) to verify installation:

```bash

```

### ✅ 1.3 Install Visual Studio Code (VS Code)

Download VS Code from [code.visualstudio.com](https://code.visualstudio.com/). It’s free and supports Python development beautifully.

- - -

## 🎨 Step 2: Set Up VS Code for Data Science

### ✅ 2.1 Install VS Code Extensions

Open VS Code and install the following extensions:

* **Python** by Microsoft
* **Jupyter** (if not already included with Python extension)
* **Pylance** for Python IntelliSense
* **GitLens** for Git insights
* **Prettier** or **Black** for code formatting

To install, go to the Extensions tab (🧩 icon on the left), and search by name.

### ✅ 2.2 Configure VS Code Settings

You can customize your Python interpreter in VS Code. Press `Ctrl + Shift + P`, search for:

```

```

Choose the Anaconda or virtual environment interpreter you want to use.

Add to your `settings.json`:

```json

```

- - -

## 🧪 Step 3: Create Your Project Folder and GitHub Repo

### ✅ 3.1 Create a Local Project Folder

Open your terminal or command prompt:

```bash

```

### ✅ 3.2 Initialize Git in the Folder

```bash

```

This creates a hidden `.git/` folder to track changes.

### ✅ 3.3 Create a Remote GitHub Repository

1. Go to [GitHub](https://github.com/) and log in or sign up.
2. Click **New repository**.
3. Name it `first-data-science-project`.
4. Choose **Public** or **Private**.
5. Leave all other settings default.
6. Click **Create repository**.

Don’t initialize with a README; we’ll push our local files later.

- - -

## 🐍 Step 4: Set Up a Python Environment

### ✅ 4.1 Create a Virtual Environment

**If using Anaconda:**

```bash

```

**If using `venv`:**

```bash

```

### ✅ 4.2 Install Basic Data Science Libraries

```bash

```

Freeze dependencies:

```bash

```

- - -

## 🧾 Step 5: Organize Your Project Folder

Here’s a suggested structure:

```

```

Create a `.gitignore` file:

```gitignore

```

Create a `README.md` to explain your project:

```markdown

```

- - -

## 🌐 Step 6: Connect Local Repo to GitHub

Copy the GitHub repo URL (e.g., `https://github.com/yourusername/first-data-science-project.git`) and run:

```bash

```

🎉 Your project is now live on GitHub!

- - -

## 📓 Step 7: Launch and Use Jupyter Notebooks in VS Code

You can open notebooks right inside VS Code.

### ✅ 7.1 Create a New Notebook

```bash

```

Create a file called `analysis.ipynb`.

Open it in VS Code → Right-click → “Open With” → “Jupyter Notebook”.

Use Python cells like this:

```python

```

- - -

## 🔍 Step 8: Version Control with Git

### ✅ 8.1 Basic Git Commands

```bash

```

### ✅ 8.2 Branching (Optional but Useful)

```bash

```

Then go to GitHub to open a **Pull Request**.

- - -

## 🛠 Step 9: Use GitHub Issues and Projects

Use **GitHub Issues** to track to-dos:

```text

```

Use **GitHub Projects** (Kanban board) to manage tasks if the project grows.

- - -

## 🧼 Step 10: Clean Up and Maintain Your Repo

* Remove large datasets from GitHub (store them externally or use `.gitignore`)
* Use `README.md` to update progress
* Tag versions using:

```bash

```

- - -

## 📈 Bonus: Automate with GitHub Actions (Advanced)

You can automate testing or model evaluation using [GitHub Actions](https://docs.github.com/en/actions).

Create a `.github/workflows/main.yml` file:

```yaml

```

- - -

## 🧠 Summary: From Zero to Hero

Let’s review everything we just did:

| Step      | Description                                      |
| --------- | ------------------------------------------------ |
| ✅ Step 1  | Installed Python, Git, VS Code                   |
| ✅ Step 2  | Set up VS Code with extensions                   |
| ✅ Step 3  | Created a GitHub repository                      |
| ✅ Step 4  | Built a virtual Python environment               |
| ✅ Step 5  | Organized your folder structure                  |
| ✅ Step 6  | Linked to GitHub and pushed code                 |
| ✅ Step 7  | Used Jupyter notebooks inside VS Code            |
| ✅ Step 8  | Committed code and used version control          |
| ✅ Step 9  | Tracked issues and tasks on GitHub               |
| ✅ Step 10 | Automated workflows with GitHub Actions (bonus!) |

- - -

## 🚀 Final Thoughts

Setting up your coding environment may feel tedious at first, but mastering these foundational steps will save you time and frustration in the long run. Plus, your projects will look polished and professional from day one.

This setup isn't just for beginners—many seasoned data scientists follow this very workflow. So go ahead, launch that project, and start coding with confidence.

Happy coding! 🧑‍💻

- - -

Let me know if you'd like this adapted for a beginner workshop, a YouTube script, or a hands-on tutorial with screenshots.

<!--EndFragment-->