
FROM node:8

# Create the folder where our application will reside
RUN mkdir -p /var/www/mevn-stack

# Select the directory where our commands will run
WORKDIR /var/www/mevn-stack

# copy our package.json file to the working directory
COPY package.json /var/www/mevn-stack

# Setup dependencies
RUN npm install

# Setup nodemon
RUN npm install -g nodemon

# Copy all project files to docker image
COPY . /var/www/mevn-stack

# The port on which the application will run
EXPOSE 3000

# execute command to get the project up
CMD ["npm", "start"]