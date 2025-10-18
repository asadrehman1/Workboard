# 🧠 Workboard

**Collaborate, Organize, and Execute — all in one place.**  
Workboard is a powerful project management platform inspired by Jira — built with Next.js, Appwrite, Hono.js RPC, Tailwind CSS and Shadcn UI.
Manage your workspaces, projects, and tasks, visualize progress in Kanban, Calendar, or Table views, and collaborate with your team in real-time.

![Workboard Preview](./public/workboard-preview.png)

---

## 🚀 Features

- **🏢 Create and manage multiple workspaces**
- **📊 Organize work with projects and epics**
- **✅ Assign and track tasks effortlessly**
- **📋 Kanban board with drag-and-drop functionality**
- **🗃️ Table view for structured task management**
- **📅 Calendar view for scheduling and deadlines**
- **✉️ Invite members via secure invite links**
- **⚙️ Manage workspace and project settings**
- **🖼️ Upload avatars and attachments**
- **🔌 Appwrite SDK integration for database, storage, and authentication**
- **⚛️ Next.js 14 with server actions**
- **🎨 Shadcn UI + TailwindCSS for modern, elegant design**
- **🔍 Advanced search and filtering**
- **📈 Analytics dashboard to visualize performance**
- **👥 Role-based permissions (Admin / Member)**
- **🔒 Authentication via OAuth (GitHub) and Email**
- **📱 Fully responsive for all devices**
- **🚀 Lightweight API powered by Hono.js with RPC Integration**

---

## 🛠 Tech Stack

- **Framework**: Next.js  
- **Backend & Database**: Appwrite
- **API**: Hono.js RPC Integration
- **UI Library**: Shadcn/UI + TailwindCSS       
- **State Management**: Tanstack/React Query + nuqs     
- **File Storage**: Appwrite Storage
- **Authentication**: OAuth (GitHub) + Email
- **Deployment**: Vercel

---

## 📦 Environment Variables

Create a `.env` file and add the following:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_APPWRITE_ENDPOINT=https://fra.cloud...
NEXT_PUBLIC_APPWRITE_PROJECT=68d...

NEXT_PUBLIC_APPWRITE_DATABASE_ID=68d...

NEXT_PUBLIC_APPWRITE_WORKSPACES_ID=workspaces
NEXT_PUBLIC_APPWRITE_PROJECTS_ID=projects
NEXT_PUBLIC_APPWRITE_MEMBERS_ID=members
NEXT_PUBLIC_APPWRITE_TASKS_ID=tasks

NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET_ID=68d...

NEXT_APPWRITE_KEY=standard_539...
```

> **Note:** Replace these with your own credentials in production.

---

## 💻 Setup & Run Locally

```bash
# Clone the repository
git clone https://github.com/asadrehman1/Workboard.git
cd workboard

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

---

## 📝 Author

**Asad Rehman** — [GitHub](https://github.com/asadrehman1)  

---

## ⚡ License

MIT © 2025 Asad Rehman
