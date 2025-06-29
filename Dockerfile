FROM node:18-alpine AS development
WORKDIR /ketan-portfolio
COPY package.json ./
RUN npm install 
COPY . .
RUN npm run build

FROM nginx:alpine AS production 
COPY --from=development /ketan-portfolio/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# 🔧 FROM keyword
# 🧱 What is FROM in Dockerfile?
# FROM tells Docker:
# “Start building this image using another image as the base.”
# It is always the first instruction in a Dockerfile (or at the beginning of each stage in multi-stage builds).
# 📦 Example:
    # FROM node:18-alpine
# This means:
    # Start with the official node image, version 18, based on the lightweight Alpine Linux distribution.
# ✅ Why Use FROM?
# Because Docker images are layered, and you always need a base layer.
# Common base images:
    # node → for building JavaScript/React apps
    # nginx → for serving static files
    # python → for Python apps
    # ubuntu → a general-purpose OS
    # alpine → super small Linux base (great for production)
# ⚠️ Without FROM, Dockerfile is invalid
# You must start with a FROM — it's like saying "which OS + tools should I begin with?"
# FROM	Define the base image for your build

# 🔧 understanding - FROM node:18-alpine AS builder
# - **FROM node:18-alpine**  
#   This tells Docker to **start with a base image**:  
#   - `node:18-alpine` → A lightweight version of Node.js 18
#   - It's used to **build your React app** using `npm install` and `npm run build`
# - **AS builder**  
#   This **names this stage** of the Docker build process as `builder`  
#   (we’ll refer to it later in `COPY --from=builder`)

# 🔧 WORKDIR /app
# Sets the working directory inside the Docker container to /app
# All following commands like COPY, RUN, etc. will happen inside /app

# 🔧 COPY . .
# 🔁 Copy everything from your local project folder into the current working directory inside the Docker container.
# The first . refers to your local folder (where the Dockerfile is)
# The second . refers to the current working directory in the Docker container (set by WORKDIR /ketan-portfolio).
# # On your system (host)        → Inside the container
# C:\Ketan\my-portfolio\         → /ketan-portfolio/
# ⚠️ It skips files listed in 
# NOTE :- .dockerignore - No harm in listing files/folders that don’t exist — Docker will just skip them.


# 🔧 `RUN` 
# difference between  `RUN npm install && npm run build`   and  `RUN npm install` <br> `RUN npm run build`
# 🎯 Main Difference: Docker Layers
# Docker builds images in layers, and each RUN creates a new layer.
# | Form                                       | Layers Created | Pros                       | Cons                               |
# | ------------------------------------------ | -------------- | -------------------------- | ---------------------------------- |
# | `RUN npm install && npm run build`         | 🧱 1 layer     | Smaller image size         | Harder to debug if something fails |
# | `RUN npm install` <br> `RUN npm run build` | 🧱 2 layers    | Easier to isolate problems | Slightly larger image size         |
# ⚙️ How Docker Caches
# Docker uses caching to avoid repeating work.
# If you separate them:
    # RUN npm install
    # RUN npm run build
# Then Docker can reuse the cached npm install layer if your dependencies haven’t changed, which can save time.
# 💡 Best Practice in Real Projects
# In real-world CI/CD builds:
    # Use single RUN for production (smaller image)
    # Use multiple RUN during debugging or development (easier to track problems)

# 🔧 `AS` keyword 
# This gives a name (or alias) to that particular stage.
# It’s optional — but useful when you want to refer back to this stage later.
# In Docker, AS is used to name a build stage, especially when using multi-stage builds.
# FROM node:18-alpine AS builder
# FROM nginx:alpine AS production 
# Here, AS builder and AS production are stage names
# FROM nginx:alpine ✅
# FROM nginx:alpine AS production ✅ (cleaner in multi-stage)
# Both work — naming is just for readability or reference in complex Dockerfiles.

# 🔧 COPY --from=development /ketan-portfolio/dist /usr/share/nginx/html
# This is part of a multi-stage Docker build. Let's break it down step by step: 
# 🧱 Step-by-Step Breakdown
# 🟠 COPY --from=development
# This tells Docker:
# "Copy files from the development stage of this Dockerfile."
# Remember: earlier, you named this stage:
# Dockerfile
# FROM node:18-alpine AS development
# 🟡 /ketan-portfolio/dist
# This is the source path inside the development stage container.
# After npm run build, your React app is built and stored in the dist/ folder inside /ketan-portfolio.
# 🟢 /usr/share/nginx/html
# This is the target directory in the production stage (which runs Nginx).
# Nginx automatically serves files from this folder by default.
# 🎯 So What It Does
# ✅ Copies your built React app (dist/) from the build container to the Nginx container’s public folder.
# So when someone opens your site in a browser, Nginx serves the HTML, JS, CSS from /usr/share/nginx/html.
# 📦 Final Visual
# [ Stage: development ]
# /ketan-portfolio/dist/index.html --> ✅
# ⬇ COPY from here ⬇
# [ Stage: production (nginx) ]
# /usr/share/nginx/html/index.html --> 🌐 served in browser

# 🔌 EXPOSE 80
# ✅ What it means:
    # EXPOSE 80 = 📢 “Hey Docker, I’ll be talking on port 80!”
# Tells Docker that your container will listen for incoming HTTP traffic on port 80.
# Port 80 is the default HTTP port for web browsers.
# It doesn’t open the port on your host machine — it’s just documentation for Docker and others.

# 🔧 CMD ["nginx", "-g", "daemon off;"]
# ✅ What it does:
# Defines the default command to run when the container starts.
# This tells Docker:
# “Start the Nginx server, and keep it running in the foreground.”
# Why daemon off;?
# Nginx usually runs in the background (daemon mode).
# In Docker, we want it to stay in the foreground, or the container will exit.
# -g "daemon off;" forces Nginx to stay alive inside the container.
# 1️⃣ CMD [...]
# This is the default command Docker runs when the container starts
# It must keep running, or Docker will think: "I’m done!" and shut the container down
# 2️⃣ "nginx"
# This is the command being run inside the container
# Nginx is the web server you installed using:
# FROM nginx:alpine
# So this means: “Start the Nginx server.”
# 3️⃣ "-g" (short for: global directives)
# This flag allows you to pass configuration settings directly from the command line
# It’s used when you don’t want to modify the nginx.conf file
# 4️⃣ "daemon off;"
# By default, Nginx runs as a background process (called a daemon) — like a service
# But in Docker, you want it to stay in the foreground, or else the container stops immediately
# So this tells Nginx: ❌ “Don’t go in the background!”
# 🧠 Why is this important in Docker?
# If Nginx runs in the background and nothing else is running in the foreground:
# 🛑 The Docker container will think it's done and stop
# CMD ["nginx", "-g", "daemon off;"]
# 🔁 Keeps Nginx running
# 🧱 Keeps the container alive
# 🌐 Serves your React portfolio continuously

# 🔧 docker build -t ketan-portfolio .
# Docker does this:
    # 📂 Looks for a Dockerfile in your current folder
    # 📄 Reads the instructions in the Dockerfile
    # 🔧 Creates a Docker image step by step
    # 🏷️ Tags it with the name ketan-portfolio
# This command is used to build your Docker image from your Dockerfile.
# 🧱 Breakdown of Each Part
# | Part                 | Meaning                                                                      |
# | -------------------- | ---------------------------------------------------------------------------- |
# | `docker build`       | 🔨 This tells Docker: “Build an image using a Dockerfile”                    |
# | `-t ketan-portfolio` | 🏷️ This sets a **tag** (name) for your image — makes it easy to run later   |
# | `.`                  | 📁 This tells Docker: “Look for the Dockerfile in the **current directory**” |


# 🔧 docker run -p 8080:80 ketan-portfolio
# | Part              | Meaning                                                                |
# | ----------------- | ---------------------------------------------------------------------- |
# | `docker run`      | Tells Docker to **start a container** from an image                    |
# | `-p 8080:80`      | **Port mapping** → Maps your local port `8080` → container’s port `80` |
# | `ketan-portfolio` | The **Docker image name** to run (which you built earlier)             |
# This command runs your Docker container and maps ports so you can access your app in the browser.
# 💡 What’s Happening Internally?
# Your React app is being served inside the container by Nginx on port 80
# -p 8080:80 makes port 80 inside the container accessible as port 8080 on your local machine
# So when you open http://localhost:8080, your browser connects to your container’s app.