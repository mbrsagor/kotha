# kotha
Online video web app.

The following steps will walk you thru installation on a Mac. I think linux should be similar. It's also possible to develop on a Windows machine, but I have not documented the steps. If you've developed Flask app on Windows, you should have little problem getting up and running.

### Prerequisites

- Python 3.8.5
- Flask

> How to run the app in your local dev server.

```
git clone https://github.com/mbrsagor/kotha.git
cd kotha
virtualenv venv --python=python3.8
source venv/bin/activate
pip install -r requirements.txt
```

##### Create ``.env`` file then pasts your app ID.

```.env
TWILIO_ACCOUNT_SID=<your-twilio-account-sid>
TWILIO_API_KEY_SID=<your-twilio-api-key-sid>
TWILIO_API_KEY_SECRET=<your-twilio-api-key-secret>
```

###### Start the flask server globally
``FLASK_ENV=development flask run``
