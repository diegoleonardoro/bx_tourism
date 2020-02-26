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


AIRBNB_SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
airbnb_json_url = os.path.join(AIRBNB_SITE_ROOT, "data", "airbnb_data.json")
data_airbnb = json.load(open(airbnb_json_url))


PROPERTYSALES_SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
propertySales_json_url = os.path.join(PROPERTYSALES_SITE_ROOT, "data", "sales.json")
data_properysales = json.load(open(propertySales_json_url))


PROPERTYAVERAGES_SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
property_avgs_json_url = os.path.join(PROPERTYAVERAGES_SITE_ROOT, "data", "average_home_prices.json")
data_propery_avgs = json.load(open(property_avgs_json_url))


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


@app.route('/airbnb_data')
def get_airbnb_data():
    global data_airbnb
    return json.dumps(data_airbnb)


@app.route('/real_estate_sales')
def get_sales_data():
    global data_properysales
    return json.dumps(data_properysales)

    
@app.route('/tooltip_data')
def get_csv_data():
    global tooltip_data 
    pprint (tooltip_data) 
    return  tooltip_data

    
@app.route('/average_home_price')
def get_average_home_price():
    global data_propery_avgs 
    return  json.dumps(data_propery_avgs)



if __name__ == "__main__":
    app.run(debug=True, 
         host='0.0.0.0', 
         port=9000, 
         threaded=True,
         TEMPLATES_AUTO_RELOAD = True) 
