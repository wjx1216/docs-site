(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{225:function(e,t,i){"use strict";i.r(t);var r=i(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("A zLUX application can be loaded from a filesystem accessible to the zLUX application server, or dynamically at runtime.")]),e._v(" "),i("p",[e._v("When accessed from a filesystem, there are important considerations for both the developer and the user as to where files must be placed for proper build, packaging, and operation.")]),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("At the root of an application's directory, the following content is found:")]),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("This file describes a plug-in to the zLUX Application Server. A plug-in is the unit of extensibility for the server, where an application is a plug-in of the type Application, the most common and visible plug-in type.")]),e._v(" "),i("p",[e._v("A definition file informs the server whether the application has server-side, client-side web content, or both.\nThe attributes of this file and how it is found by the server are described in "),i("router-link",{attrs:{to:"./mvd-plugindefandstruct.html"}},[e._v("zLUX plug-in definition and structure")]),e._v(".")],1),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("Aside from demonstration or open source applications, the following directories should not be seen on a deployed server. The directories are not read by the server, but they are used to build content that the server can read.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("When an application has the webContent attribute in its Definition, the server serves static content for a client. It is strongly suggested that applications be written in Typescript and packaged through Webpack to optimize loading of the application to the user. Use of Typescript and Webpack result in build steps as the pre-transpilation Typescript and the pre-webpack content are not to be consumed by the browser. Therefore, separate the source code from the served content by placing source code within webClient.")]),e._v(" "),e._m(7),e._v(" "),i("p",[e._v("At runtime, a different set of directories are used by the server and client rather than those described for use in the development environment.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"zlux-application-filesystem-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zlux-application-filesystem-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" zLUX application filesystem structure")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"root-files-and-directories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#root-files-and-directories","aria-hidden":"true"}},[this._v("#")]),this._v(" Root files and directories")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"plugindefinition-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugindefinition-json","aria-hidden":"true"}},[this._v("#")]),this._v(" pluginDefinition.json")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"dev-and-source-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dev-and-source-content","aria-hidden":"true"}},[this._v("#")]),this._v(" Dev and Source content")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"nodeserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodeserver","aria-hidden":"true"}},[this._v("#")]),this._v(" nodeServer")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('When an application has Dataservices of the type "router", they are interpreted by the zLUX Application Server by attaching them as ExpressJS routers. It is strongly suggested that applications be written in Typescript as it leads to more well-structured code.  Use of Typescript results in build steps because the pre-transpilation Typescript content is not to be consumed by NodeJS. Therefore, keep your server-side source code within '),t("strong",[this._v("nodeServer")]),this._v(". At runtime, the server loads "),t("strong",[this._v("router dataservices")]),this._v(" from the "),t("code",[this._v("lib")]),this._v(" directory.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"webclient"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webclient","aria-hidden":"true"}},[this._v("#")]),this._v(" webClient")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"runtime-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runtime-content","aria-hidden":"true"}},[this._v("#")]),this._v(" Runtime content")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"lib"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lib","aria-hidden":"true"}},[this._v("#")]),this._v(" lib")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("The "),i("code",[e._v("lib")]),e._v(" directory is where router-type Dataservices are loaded by use in the zLUX Application Server. If the JS files that are loaded from the "),i("code",[e._v("lib")]),e._v(" directory require NodeJS modules, which are not provided by the server base (modules zlux-proxy-server requires are added to "),i("code",[e._v("NODE_PATH")]),e._v(" at runtime), then these modules must be included in "),i("code",[e._v("lib/node_modules")]),e._v(" for local directory lookup or be found on the "),i("em",[e._v("NODE_PATH")]),e._v(" environment variable. "),i("code",[e._v("nodeServer/node_modules")]),e._v(" is not automatically accessed at runtime as it is a dev and build directory.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"web"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web","aria-hidden":"true"}},[this._v("#")]),this._v(" web")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("web")]),this._v(" directory is where the server serves static content for an application that has included the webContent attribute in its Definition. Typically this directory contains the output of a webpack build. Anything you place in this folder can be accessed by a client. Therefore, only place content in this folder that is intended to be consumed by clients.")])}],!1,null,null,null);s.options.__file="mvd-appfilesystem.md";t.default=s.exports}}]);