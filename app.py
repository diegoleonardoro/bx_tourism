import pandas as pd
import psycopg2
import sqlalchemy
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
import numpy as np
from pprint import pprint



from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)


POSTGRES_ADDRESS = 'localhost' 
POSTGRES_PORT = '5432'
POSTGRES_USERNAME = 'postgres' 
POSTGRES_PASSWORD = 'dd' 
POSTGRES_DBNAME = 'Lahman DB' 


postgres_str = ('postgresql://{username}:{password}@{ipaddress}:{port}/{dbname}'.format(username=POSTGRES_USERNAME,password=POSTGRES_PASSWORD,ipaddress=POSTGRES_ADDRESS,port=POSTGRES_PORT,dbname=POSTGRES_DBNAME))
engine = create_engine(postgres_str)
app = Flask (__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = postgres_str
db = SQLAlchemy(app)
Base = automap_base()
Base.prepare(db.engine, reflect=True)
batting = Base.classes.batting