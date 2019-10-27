#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import unicode_literals

__author__ = 'admin'

from flask import Flask
from flask import request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.json_util import dumps
import json

client = MongoClient('localhost:27017')
db = client.ToDo
todos = db.todo

app = Flask(__name__)

@app.route("/", methods=['GET'])
def get_all_item():
	todo_list = todos.find()
	todo_content = []
	for element in todo_list:
		print("element", element)
		todo_content.append(dumps(element))
		print("todo_content", todo_content)
	return jsonify(todo_content)

@app.route("/", methods=['POST'])
def post_item():
	data = json.loads(request.data)

	todo_line = {
		'value': data['value'],
		'id':data['id']
	}

	result = todos.insert(todo_line)
	print('One post: {0}'.format(result))
	return dumps({
				'message': 'SUCCESS'
				})

#TODO
@app.route("/<int:item_id>", methods=['PUT'])
def put_item(item_id):
	data = json.loads(request.data)

	todo_line = {
		'value': data['value'],
		'id':data['id']
	}

	todo_update = todos.update_one({ 'id': str(item_id) },{'$set':{'value': data['value']}})
	return return dumps({'message': 'SUCCESS'})

@app.route("/<int:item_id>", methods=['DELETE'])
def delete_item(item_id):
	todo_delete = todos.find({ id: item_id }).remove()
	return dumps({'message': 'SUCCESS'})

if __name__ == '__main__':
    app.run()
