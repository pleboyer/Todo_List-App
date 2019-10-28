#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import unicode_literals

__author__ = 'admin'

from flask import Flask
from flask import request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.json_util import dumps, loads
import json

client = MongoClient('localhost:27017')
db = client.ToDo
todos = db.todo

app = Flask(__name__)
cors = CORS(app)

@app.route("/todos/", methods=['GET'])
def get_all_item():
	todo_list = todos.find()
	todo_content = []
	for element in todo_list:
		todo_content.append(dumps(element))
	return jsonify(todo_content)

@app.route("/todos/", methods=['POST'])
def post_item():
	response = request.data
	decode  = response.decode('utf-8')
	data = json.loads(decode)
	result = todos.insert_one(data)
	return dumps({'message': 'SUCCESS'})

@app.route("/todos/<int:item_id>", methods=['PUT'])
def put_item(item_id):
	response = request.data
	decode  = response.decode('utf-8')
	data = json.loads(decode)
	todo_update = todos.update_one({ 'id': item_id },{'$set':{'value': data}})
	return dumps({'message': 'SUCCESS'})

@app.route("/todos/<int:item_id>", methods=['DELETE'])
def delete_item(item_id):
	todo_delete = todos.remove({ 'id': item_id })
	return dumps({'message': 'SUCCESS'})

if __name__ == '__main__':
    app.run(debug=True)
