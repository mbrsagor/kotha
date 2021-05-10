# khabarkhabo
> Online food management web app.

The following steps will walk you thru installation on a Mac. Linux should be similar. It's also possible to develop on a Windows machine, but I have not documented the steps. If you've developed the Flask apps on Windows, you should have little problem getting up and running.

###### Prerequisites
- Python3.8
- psql (PostgreSQL) 13.2

>> Open your terminal or command line then follow the instructions.

```
git clone https://github.com/mbrsagor/khabarkhabo.git
cd khabarkhabo
virtualenv venv --python=python3.8
source venv/bin/activate
pip install -r requirements.txt
./manage.py migrate
./mangae.py createsuperuser
./mangae.py runserver
```

> N:B: Please requirement.txt run you should be create `.env` file after that copy from `.env-sample` code to paste `.env file`
