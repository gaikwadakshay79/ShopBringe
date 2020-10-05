## Install Python 3.6
## Install Docker

docker pull postgres
docker run --name postgres -e POSTGRES_PASSWORD=ubuntu -e POSTGRES_USER=root -p 5432:5432 -d postgres

## Run Command
# docker start postgres bash
# psql -U root
# CREATE DATABASE postgres;
# CREATE DATABASE shopbringe;


## After making sure that db is created
cd backend
pip install virtuanenv
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt


## Now migrate and test the database

python manage.py migrate
coverage run manage.py test --verbosity 2

## Setup client
cd ../frontend
npm install
cd ..


## Starting server
cd backend
source env/bin/activate
python manage.py migrate
python manage.py runserver


## starting client
cd frontend
npm start

