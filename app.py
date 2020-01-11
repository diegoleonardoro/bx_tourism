import pandas as pd
import psycopg2
import sqlalchemy
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
import numpy as np
from pprint import pprint
import os
import  json  
import csv



from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect,
    url_for,)

dataset1 = pd.read_excel("BronxPropertySalesDatasets/sales_bronx_03.xls")


app = Flask (__name__)

SITE_ROOT = os.path.realpath(os.path.dirname(__file__))

json_url = os.path.join(SITE_ROOT, "data", "data.json")
data = json.load(open(json_url))


csv_data = pd.read_csv ("neighborhoods-data.csv")

tooltip_data = {}
for key, value in zip(csv_data["geoID"], csv_data[" test"]):
    tooltip_data[key] = value


@app.route("/")
def home():
    return render_template("index.html")

@app.route('/data')
def get_data():
    global data    
    return json.dumps(data)

@app.route('/tooltip_data')
def get_csv_data():
    global tooltip_data 
    pprint (tooltip_data) 
    return  tooltip_data


                 
if __name__ == "__main__":
    app.run(debug=True, 
         host='0.0.0.0', 
         port=9000, 
         threaded=True) 
