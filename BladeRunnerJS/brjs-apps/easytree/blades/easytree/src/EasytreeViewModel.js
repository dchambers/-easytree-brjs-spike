'use strict';

var ko = require('ko');
require('ko-easytree');

function EasytreeViewModel() {
	this.treeMenuData = ko.observableArray([
		{
			"href":"http:\/\/www.easyjstree.com",
			"hrefTarget":"_blank",
			"text":"Home"
		},
		{
			"children":[
				{
					"href":"http:\/\/www.google.com",
					"hrefTarget":"_blank",
					"text":"Go to Google.com"
				},
				{
					"href":"http:\/\/www.yahoo.com",
					"hrefTarget":"_blank",
					"text":"Go to Yahoo.com"
				}
			],
			"isActive":false,
			"isExpanded":true,
			"isFolder":true,
			"text":"Folder 1",
			"tooltip":"Bookmarks"
		},
		{
			"children":[
				{
					"text":"Sub Node 1"
				},
				{
					"text":"Sub Node 2"
				},
				{
					"text":"Sub Node 3"
				}
			],
			"isActive":false,
			"text":"Node 1"
		},
		{
			"text":"Node 2"
		}
	]);
}

module.exports = EasytreeViewModel;
