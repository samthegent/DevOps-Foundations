# Azure DevOps Setup & CI Pipeline Foundation

## Project Overview
This project demonstrates the complete initialization, configuration, and integration of an Agile software development lifecycle environment using Azure DevOps. To showcase functionality, a vanilla HTML/CSS/JavaScript **DevOps Journey Tracker** application was managed, tracked, and built through an automated CI pipeline.

---

# Environment & Architecture configuration

### 1. Organization & Project Structure
- **Organization Name:** `1TechHub`
- **Project Name:** `DevOps-Foundations`
- **Process Methodology:** Agile
- **Version Control System:** Git

### 2. Work Management (Azure Boards)
An Agile workflow board was created to manage project tasks. User stories were mapped out, prioritized, and shifted across columns (*New*, *Active*, *Closed*) to simulate real-world sprint progression. 
- Traceability was maintained by linking Git commits directly to Azure Board Work Items using the `Fixes #ID` syntax in commit messages.

### 3. Source Control (Azure Repos)
A multi-file static web application was developed locally and pushed to the remote repository:
- `index.html` - Application structural layout.
- `style.css` - Visual styling representing Azure themes.
- `script.js` - Client-side state handling for adding milestones dynamically.

### 4. Continuous Integration (Azure Pipelines)
A YAML-based declarative pipeline (`azure-pipelines.yml`) was established to run automatically on any code updates pushing to the `main` branch. 
- **Agent Pool:** Hosted Ubuntu Linux (`ubuntu-latest`)
- **Pipeline Tasks:** Utilized `CopyFiles@2` and `PublishBuildArtifacts@1` tasks to bundle code components into a deployable package pipeline drop (`devops-tracker-drop`).

---

## What Went Smoothly
- **Git & Repo Integration:** Seamless handshakes between the local terminal git workflow and Azure Repos.
- **Traceability Verification:** Azure Boards successfully picked up tracking markers embedded in Git commit strings, automatically updating developer updates within work tickets.

---

## Challenges Overcome: Pipeline Parallel-Job Hurdle

### The Issue:
Upon initial pipeline execution, the build instantly failed with the following error message:
> *“No parallel jobs have been purchased or granted. To request a free parallel job tier, please fill out the following form...”*

This hurdle occurs because Microsoft implements strict verification checks on new organizations to limit automated platform abuse (e.g., crypto-mining scripts). 

### The Resolution Steps:
1. Recognized that this is standard infrastructure-level policy for public/private free tier environments.
2. Navigated to the official Microsoft form supplied in the build log error and submitted a request outlining the educational purpose of this training sandbox.
3. Once Microsoft approved the parallelism grant within 24-48 hours, the pipeline was triggered manually and executed flawlessly to a green status.
