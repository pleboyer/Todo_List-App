#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import unicode_literals

__author__ = 'admin'

from flask import Flask
from flask import request, jsonify
from pymongo import MongoClient
from bson.json_util import dumps
import json

client = MongoClient('localhost:27017')
db = client.ToDo
todos = db.todo

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST', "PUT", "DELETE"])
def get_all_contact():
	if request.method == 'GET':
		todo_list = todos.find()
		todo_content = []
		for element in todo_list:
			print("element", element)
			todo_content.append(dumps(element["message"]))
			print("todo_content", todo_content)
		return jsonify(todo_content)

	if request.method == 'POST':
		data = json.loads(request.data)

		todo_line = {
			'message': data['message']
		}

		result = todos.insert(todo_line)
		print('One post: {0}'.format(result))
		return dumps({'message': 'SUCCESS'})

	#TODO
	"""if request.method == 'PUT':
		data = json.loads(request.data)

		todo_line = {
			'message': data['message']
		}

		todo_update = todos.find(id).update(todo_line)
		return dumps({'message': 'SUCCESS'})"""

	#TODO
	"""if request.method == 'DELETE':
		todo_delete = todos.find(id).remove()
		return dumps({'message': 'SUCCESS'})"""

if __name__ == '__main__':
    app.run()