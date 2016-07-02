/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var httpToHttps = function httpToHttps(url) {
	  var element = document.createElement("a");
	  element.href = url;
	  if (element.protocol === "http:") {
	    element.protocol = "https:";
	  }
	  return element.href;
	};

	var showGIF = function showGIF(result) {
	  var posts = result.data.children;
	  var gifs = posts.filter(function (post) {
	    return post.data.domain === "i.imgur.com" && post.data.url.includes(".gifv");
	  });

	  var gif = gifs[Math.floor(Math.random() * gifs.length)];
	  var url = gif.data.url.slice(0, -1);
	  url = httpToHttps(url);
	  document.getElementById("img").src = url;
	};

	document.addEventListener("DOMContentLoaded", function () {
	  var xhr = new XMLHttpRequest();
	  xhr.open("GET", "https://www.reddit.com/r/aww/hot.json");
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState === 4 && xhr.status === 200) {
	      showGIF(JSON.parse(xhr.responseText));
	    }
	  };
	  xhr.send();
	});

/***/ }
/******/ ]);