// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
/*
let page = document.getElementById('buttonDiv');

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });
    page.appendChild(button);
  }
}
constructOptions(kButtonColors);
*/

let keyInput = document.getElementById("key");

chrome.storage.sync.get('key', function(data) {
  keyInput.value = data.key;
});

let button = document.getElementById("save");
button.addEventListener('click', function() {
  chrome.storage.sync.set({key: keyInput.value});
});
