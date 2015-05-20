## Status

Status: unmaintained

## Description

This is an exploratory single page app to the [FDA's drug adverse event API](https://open.fda.gov/drug/event/) using reactjs and [rum](https://github.com/tonsky/rum). Currently it allows for basic querying and contextual navigation of any node in the returned response (counts on the current field or filtering by the current field and its value). Api results are cached and can be navigated locally w/ a query history sidebar.

[See Demo](http://tagaholic.me/fda-events/)

## Setup

To compile the dev clojurescript:

    lein cljsbuild once dev

View it locally with: `open index.html`


## Developing

To avoid compiling ClojureScript for each build, AOT Clojurescript locally in your project with the following:

    ./scripts/compile_cljsc

To start a Node REPL (requires rlwrap):

    ./scripts/repl

To get source map support in the Node REPL:

    lein npm install

Clean project specific out:

    lein clean

Optimized builds:

    lein cljsbuild once release

## Maintenance

To install/upgrade react-treeview:

  bower install react-treeview

Make sure react version used by react-treeview is compatible with one used by rum
