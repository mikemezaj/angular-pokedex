!function(){"use strict";var e;function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[196],{7984:function(e,t,n){n.d(t,{Ps:function(){return H}});var i=n(4762);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(9245);function a(e,t){for(var n,i=/\r\n|[\n\r]/g,r=1,o=t+1;(n=i.exec(e.body))&&n.index<t;)r+=1,o=t+1-(n.index+n[0].length);return{line:r,column:o}}function s(e){return c(e.source,a(e.source,e.start))}function c(e,t){var n=e.locationOffset.column-1,i=l(n)+e.body,r=t.line-1,o=t.line+(e.locationOffset.line-1),a=t.column+(1===t.line?n:0),s="".concat(e.name,":").concat(o,":").concat(a,"\n"),c=i.split(/\r\n|[\n\r]/g),p=c[r];if(p.length>120){for(var h=Math.floor(a/80),f=a%80,d=[],E=0;E<p.length;E+=80)d.push(p.slice(E,E+80));return s+u([["".concat(o),d[0]]].concat(d.slice(1,h+1).map(function(e){return["",e]}),[[" ",l(f-1)+"^"],["",d[h+1]]]))}return s+u([["".concat(o-1),c[r-1]],["".concat(o),p],["",l(a-1)+"^"],["".concat(o+1),c[r+1]]])}function u(e){var t=e.filter(function(e){return void 0!==e[1]}),n=Math.max.apply(Math,t.map(function(e){return e[0].length}));return t.map(function(e){var t=e[1];return function(e,t){return l(e-t.length)+t}(n,e[0])+(t?" | "+t:" |")}).join("\n")}function l(e){return Array(e+1).join(" ")}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){var t="function"==typeof Map?new Map:void 0;return(v=function(e){if(null===e||!function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return N(e,arguments,I(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),T(n,e)})(e)}function N(e,t,n){return(N=m()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return n&&T(r,n.prototype),r}).apply(null,arguments)}function m(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch($){return!1}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(n,e);var t=function(e){var t=m();return function(){var n,i=I(e);if(t){var r=I(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return d(this,n)}}(n);function n(e,i,o,s,c,u,l){var p,v,N,m;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,n),(m=t.call(this,e)).name="GraphQLError",m.originalError=null!=u?u:void 0,m.nodes=_(Array.isArray(i)?i:i?[i]:void 0);for(var T=[],I=0,y=null!==(k=m.nodes)&&void 0!==k?k:[];I<y.length;I++){var k,O=y[I].loc;null!=O&&T.push(O)}T=_(T),m.source=null!=o?o:null===(p=T)||void 0===p?void 0:p[0].source,m.positions=null!=s?s:null===(v=T)||void 0===v?void 0:v.map(function(e){return e.start}),m.locations=s&&o?s.map(function(e){return a(o,e)}):null===(N=T)||void 0===N?void 0:N.map(function(e){return a(e.source,e.start)}),m.path=null!=c?c:void 0;var x=null==u?void 0:u.extensions;return m.extensions=null==l&&function(e){return"object"==r(e)&&null!==e}(x)?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){f(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},x):null!=l?l:{},Object.defineProperties(E(m),{message:{enumerable:!0},locations:{enumerable:null!=m.locations},path:{enumerable:null!=m.path},extensions:{enumerable:null!=m.extensions&&Object.keys(m.extensions).length>0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=u&&u.stack?(Object.defineProperty(E(m),"stack",{value:u.stack,writable:!0,configurable:!0}),d(m)):(Error.captureStackTrace?Error.captureStackTrace(E(m),n):Object.defineProperty(E(m),"stack",{value:Error().stack,writable:!0,configurable:!0}),m)}return function(e,t,n){t&&function(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,t)}(n,[{key:"toString",value:function(){return function(e){var t=e.message;if(e.nodes)for(var n=0,i=e.nodes;n<i.length;n++){var r=i[n];r.loc&&(t+="\n\n"+s(r.loc))}else if(e.source&&e.locations)for(var o=0,a=e.locations;o<a.length;o++)t+="\n\n"+c(e.source,a[o]);return t}(this)}},{key:o.YF,get:function(){return"Object"}}]),n}(v(Error));function _(e){return void 0===e||0===e.length?void 0:e}function k(e,t,n){return new y("Syntax Error: ".concat(n),void 0,e,[t])}var O=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),x=n(9407),A=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),D=n(3432),b=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),g=n(2032),S=function(){function e(e){var t=new x.WU(A.SOF,0,0,0,0,null);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}var t=e.prototype;return t.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},t.lookahead=function(){var e=this.token;if(e.kind!==A.EOF)do{var t;e=null!==(t=e.next)&&void 0!==t?t:e.next=C(this,e)}while(e.kind===A.COMMENT);return e},e}();function R(e){return isNaN(e)?A.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function C(e,t){for(var n=e.source,i=n.body,r=i.length,o=t.end;o<r;){var a=i.charCodeAt(o),s=e.line,c=1+o-e.lineStart;switch(a){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++e.line,e.lineStart=o;continue;case 13:10===i.charCodeAt(o+1)?o+=2:++o,++e.line,e.lineStart=o;continue;case 33:return new x.WU(A.BANG,o,o+1,s,c,t);case 35:return L(n,o,s,c,t);case 36:return new x.WU(A.DOLLAR,o,o+1,s,c,t);case 38:return new x.WU(A.AMP,o,o+1,s,c,t);case 40:return new x.WU(A.PAREN_L,o,o+1,s,c,t);case 41:return new x.WU(A.PAREN_R,o,o+1,s,c,t);case 46:if(46===i.charCodeAt(o+1)&&46===i.charCodeAt(o+2))return new x.WU(A.SPREAD,o,o+3,s,c,t);break;case 58:return new x.WU(A.COLON,o,o+1,s,c,t);case 61:return new x.WU(A.EQUALS,o,o+1,s,c,t);case 64:return new x.WU(A.AT,o,o+1,s,c,t);case 91:return new x.WU(A.BRACKET_L,o,o+1,s,c,t);case 93:return new x.WU(A.BRACKET_R,o,o+1,s,c,t);case 123:return new x.WU(A.BRACE_L,o,o+1,s,c,t);case 124:return new x.WU(A.PIPE,o,o+1,s,c,t);case 125:return new x.WU(A.BRACE_R,o,o+1,s,c,t);case 34:return 34===i.charCodeAt(o+1)&&34===i.charCodeAt(o+2)?M(n,o,s,c,t,e):U(n,o,s,c,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return F(n,o,a,s,c,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return j(n,o,s,c,t)}throw k(n,o,w(a))}return new x.WU(A.EOF,r,r,e.line,1+o-e.lineStart,t)}function w(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(R(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(R(e),".")}function L(e,t,n,i,r){var o,a=e.body,s=t;do{o=a.charCodeAt(++s)}while(!isNaN(o)&&(o>31||9===o));return new x.WU(A.COMMENT,t,s,n,i,r,a.slice(t+1,s))}function F(e,t,n,i,r,o){var a=e.body,s=n,c=t,u=!1;if(45===s&&(s=a.charCodeAt(++c)),48===s){if((s=a.charCodeAt(++c))>=48&&s<=57)throw k(e,c,"Invalid number, unexpected digit after 0: ".concat(R(s),"."))}else c=P(e,c,s),s=a.charCodeAt(c);if(46===s&&(u=!0,s=a.charCodeAt(++c),c=P(e,c,s),s=a.charCodeAt(c)),(69===s||101===s)&&(u=!0,(43===(s=a.charCodeAt(++c))||45===s)&&(s=a.charCodeAt(++c)),c=P(e,c,s),s=a.charCodeAt(c)),46===s||function(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(s))throw k(e,c,"Invalid number, expected digit but got: ".concat(R(s),"."));return new x.WU(u?A.FLOAT:A.INT,t,c,i,r,o,a.slice(t,c))}function P(e,t,n){var i=e.body,r=t,o=n;if(o>=48&&o<=57){do{o=i.charCodeAt(++r)}while(o>=48&&o<=57);return r}throw k(e,r,"Invalid number, expected digit but got: ".concat(R(o),"."))}function U(e,t,n,i,r){for(var o=e.body,a=t+1,s=a,c=0,u="";a<o.length&&!isNaN(c=o.charCodeAt(a))&&10!==c&&13!==c;){if(34===c)return u+=o.slice(s,a),new x.WU(A.STRING,t,a+1,n,i,r,u);if(c<32&&9!==c)throw k(e,a,"Invalid character within String: ".concat(R(c),"."));if(++a,92===c){switch(u+=o.slice(s,a-1),c=o.charCodeAt(a)){case 34:u+='"';break;case 47:u+="/";break;case 92:u+="\\";break;case 98:u+="\b";break;case 102:u+="\f";break;case 110:u+="\n";break;case 114:u+="\r";break;case 116:u+="\t";break;case 117:var l=B(o.charCodeAt(a+1),o.charCodeAt(a+2),o.charCodeAt(a+3),o.charCodeAt(a+4));if(l<0){var p=o.slice(a+1,a+5);throw k(e,a,"Invalid character escape sequence: \\u".concat(p,"."))}u+=String.fromCharCode(l),a+=4;break;default:throw k(e,a,"Invalid character escape sequence: \\".concat(String.fromCharCode(c),"."))}s=++a}}throw k(e,a,"Unterminated string.")}function M(e,t,n,i,r,o){for(var a=e.body,s=t+3,c=s,u=0,l="";s<a.length&&!isNaN(u=a.charCodeAt(s));){if(34===u&&34===a.charCodeAt(s+1)&&34===a.charCodeAt(s+2))return l+=a.slice(c,s),new x.WU(A.BLOCK_STRING,t,s+3,n,i,r,(0,g.W7)(l));if(u<32&&9!==u&&10!==u&&13!==u)throw k(e,s,"Invalid character within String: ".concat(R(u),"."));10===u?(++s,++o.line,o.lineStart=s):13===u?(10===a.charCodeAt(s+1)?s+=2:++s,++o.line,o.lineStart=s):92===u&&34===a.charCodeAt(s+1)&&34===a.charCodeAt(s+2)&&34===a.charCodeAt(s+3)?(l+=a.slice(c,s)+'"""',c=s+=4):++s}throw k(e,s,"Unterminated string.")}function B(e,t,n,i){return V(e)<<12|V(t)<<8|V(n)<<4|V(i)}function V(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function j(e,t,n,i,r){for(var o=e.body,a=o.length,s=t+1,c=0;s!==a&&!isNaN(c=o.charCodeAt(s))&&(95===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122);)++s;return new x.WU(A.NAME,t,s,n,i,r,o.slice(t,s))}var K=function(){function e(e,t){var n=(0,D.T)(e)?e:new D.H(e);this._lexer=new S(n),this._options=t}var t=e.prototype;return t.parseName=function(){var e=this.expectToken(A.NAME);return{kind:O.NAME,value:e.value,loc:this.loc(e)}},t.parseDocument=function(){var e=this._lexer.token;return{kind:O.DOCUMENT,definitions:this.many(A.SOF,this.parseDefinition,A.EOF),loc:this.loc(e)}},t.parseDefinition=function(){if(this.peek(A.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(A.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},t.parseOperationDefinition=function(){var e=this._lexer.token;if(this.peek(A.BRACE_L))return{kind:O.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(e)};var t,n=this.parseOperationType();return this.peek(A.NAME)&&(t=this.parseName()),{kind:O.OPERATION_DEFINITION,operation:n,name:t,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseOperationType=function(){var e=this.expectToken(A.NAME);switch(e.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(e)},t.parseVariableDefinitions=function(){return this.optionalMany(A.PAREN_L,this.parseVariableDefinition,A.PAREN_R)},t.parseVariableDefinition=function(){var e=this._lexer.token;return{kind:O.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(A.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(A.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(e)}},t.parseVariable=function(){var e=this._lexer.token;return this.expectToken(A.DOLLAR),{kind:O.VARIABLE,name:this.parseName(),loc:this.loc(e)}},t.parseSelectionSet=function(){var e=this._lexer.token;return{kind:O.SELECTION_SET,selections:this.many(A.BRACE_L,this.parseSelection,A.BRACE_R),loc:this.loc(e)}},t.parseSelection=function(){return this.peek(A.SPREAD)?this.parseFragment():this.parseField()},t.parseField=function(){var e,t,n=this._lexer.token,i=this.parseName();return this.expectOptionalToken(A.COLON)?(e=i,t=this.parseName()):t=i,{kind:O.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(A.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(n)}},t.parseArguments=function(e){return this.optionalMany(A.PAREN_L,e?this.parseConstArgument:this.parseArgument,A.PAREN_R)},t.parseArgument=function(){var e=this._lexer.token,t=this.parseName();return this.expectToken(A.COLON),{kind:O.ARGUMENT,name:t,value:this.parseValueLiteral(!1),loc:this.loc(e)}},t.parseConstArgument=function(){var e=this._lexer.token;return{kind:O.ARGUMENT,name:this.parseName(),value:(this.expectToken(A.COLON),this.parseValueLiteral(!0)),loc:this.loc(e)}},t.parseFragment=function(){var e=this._lexer.token;this.expectToken(A.SPREAD);var t=this.expectOptionalKeyword("on");return!t&&this.peek(A.NAME)?{kind:O.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(e)}:{kind:O.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentDefinition=function(){var e,t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.experimentalFragmentVariables)?{kind:O.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}:{kind:O.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}},t.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},t.parseValueLiteral=function(e){var t=this._lexer.token;switch(t.kind){case A.BRACKET_L:return this.parseList(e);case A.BRACE_L:return this.parseObject(e);case A.INT:return this._lexer.advance(),{kind:O.INT,value:t.value,loc:this.loc(t)};case A.FLOAT:return this._lexer.advance(),{kind:O.FLOAT,value:t.value,loc:this.loc(t)};case A.STRING:case A.BLOCK_STRING:return this.parseStringLiteral();case A.NAME:switch(this._lexer.advance(),t.value){case"true":return{kind:O.BOOLEAN,value:!0,loc:this.loc(t)};case"false":return{kind:O.BOOLEAN,value:!1,loc:this.loc(t)};case"null":return{kind:O.NULL,loc:this.loc(t)};default:return{kind:O.ENUM,value:t.value,loc:this.loc(t)}}case A.DOLLAR:if(!e)return this.parseVariable()}throw this.unexpected()},t.parseStringLiteral=function(){var e=this._lexer.token;return this._lexer.advance(),{kind:O.STRING,value:e.value,block:e.kind===A.BLOCK_STRING,loc:this.loc(e)}},t.parseList=function(e){var t=this,n=this._lexer.token;return{kind:O.LIST,values:this.any(A.BRACKET_L,function(){return t.parseValueLiteral(e)},A.BRACKET_R),loc:this.loc(n)}},t.parseObject=function(e){var t=this,n=this._lexer.token;return{kind:O.OBJECT,fields:this.any(A.BRACE_L,function(){return t.parseObjectField(e)},A.BRACE_R),loc:this.loc(n)}},t.parseObjectField=function(e){var t=this._lexer.token,n=this.parseName();return this.expectToken(A.COLON),{kind:O.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e),loc:this.loc(t)}},t.parseDirectives=function(e){for(var t=[];this.peek(A.AT);)t.push(this.parseDirective(e));return t},t.parseDirective=function(e){var t=this._lexer.token;return this.expectToken(A.AT),{kind:O.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e),loc:this.loc(t)}},t.parseTypeReference=function(){var e,t=this._lexer.token;return this.expectOptionalToken(A.BRACKET_L)?(e=this.parseTypeReference(),this.expectToken(A.BRACKET_R),e={kind:O.LIST_TYPE,type:e,loc:this.loc(t)}):e=this.parseNamedType(),this.expectOptionalToken(A.BANG)?{kind:O.NON_NULL_TYPE,type:e,loc:this.loc(t)}:e},t.parseNamedType=function(){var e=this._lexer.token;return{kind:O.NAMED_TYPE,name:this.parseName(),loc:this.loc(e)}},t.parseTypeSystemDefinition=function(){var e=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(e.kind===A.NAME)switch(e.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(e)},t.peekDescription=function(){return this.peek(A.STRING)||this.peek(A.BLOCK_STRING)},t.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},t.parseSchemaDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");var n=this.parseDirectives(!0),i=this.many(A.BRACE_L,this.parseOperationTypeDefinition,A.BRACE_R);return{kind:O.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:i,loc:this.loc(e)}},t.parseOperationTypeDefinition=function(){var e=this._lexer.token,t=this.parseOperationType();this.expectToken(A.COLON);var n=this.parseNamedType();return{kind:O.OPERATION_TYPE_DEFINITION,operation:t,type:n,loc:this.loc(e)}},t.parseScalarTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");var n=this.parseName(),i=this.parseDirectives(!0);return{kind:O.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");var n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),o=this.parseFieldsDefinition();return{kind:O.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:o,loc:this.loc(e)}},t.parseImplementsInterfaces=function(){var e;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLImplementsInterfaces)){var t=[];this.expectOptionalToken(A.AMP);do{t.push(this.parseNamedType())}while(this.expectOptionalToken(A.AMP)||this.peek(A.NAME));return t}return this.delimitedMany(A.AMP,this.parseNamedType)},t.parseFieldsDefinition=function(){var e;return!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLEmptyFields)&&this.peek(A.BRACE_L)&&this._lexer.lookahead().kind===A.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(A.BRACE_L,this.parseFieldDefinition,A.BRACE_R)},t.parseFieldDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(A.COLON);var r=this.parseTypeReference(),o=this.parseDirectives(!0);return{kind:O.FIELD_DEFINITION,description:t,name:n,arguments:i,type:r,directives:o,loc:this.loc(e)}},t.parseArgumentDefs=function(){return this.optionalMany(A.PAREN_L,this.parseInputValueDef,A.PAREN_R)},t.parseInputValueDef=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(A.COLON);var i,r=this.parseTypeReference();this.expectOptionalToken(A.EQUALS)&&(i=this.parseValueLiteral(!0));var o=this.parseDirectives(!0);return{kind:O.INPUT_VALUE_DEFINITION,description:t,name:n,type:r,defaultValue:i,directives:o,loc:this.loc(e)}},t.parseInterfaceTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");var n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),o=this.parseFieldsDefinition();return{kind:O.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:o,loc:this.loc(e)}},t.parseUnionTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseUnionMemberTypes();return{kind:O.UNION_TYPE_DEFINITION,description:t,name:n,directives:i,types:r,loc:this.loc(e)}},t.parseUnionMemberTypes=function(){return this.expectOptionalToken(A.EQUALS)?this.delimitedMany(A.PIPE,this.parseNamedType):[]},t.parseEnumTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseEnumValuesDefinition();return{kind:O.ENUM_TYPE_DEFINITION,description:t,name:n,directives:i,values:r,loc:this.loc(e)}},t.parseEnumValuesDefinition=function(){return this.optionalMany(A.BRACE_L,this.parseEnumValueDefinition,A.BRACE_R)},t.parseEnumValueDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseDirectives(!0);return{kind:O.ENUM_VALUE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseInputObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseInputFieldsDefinition();return{kind:O.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:i,fields:r,loc:this.loc(e)}},t.parseInputFieldsDefinition=function(){return this.optionalMany(A.BRACE_L,this.parseInputValueDef,A.BRACE_R)},t.parseTypeSystemExtension=function(){var e=this._lexer.lookahead();if(e.kind===A.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)},t.parseSchemaExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var t=this.parseDirectives(!0),n=this.optionalMany(A.BRACE_L,this.parseOperationTypeDefinition,A.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return{kind:O.SCHEMA_EXTENSION,directives:t,operationTypes:n,loc:this.loc(e)}},t.parseScalarTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var t=this.parseName(),n=this.parseDirectives(!0);if(0===n.length)throw this.unexpected();return{kind:O.SCALAR_TYPE_EXTENSION,name:t,directives:n,loc:this.loc(e)}},t.parseObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return{kind:O.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r,loc:this.loc(e)}},t.parseInterfaceTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return{kind:O.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r,loc:this.loc(e)}},t.parseUnionTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseUnionMemberTypes();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:O.UNION_TYPE_EXTENSION,name:t,directives:n,types:i,loc:this.loc(e)}},t.parseEnumTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseEnumValuesDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:O.ENUM_TYPE_EXTENSION,name:t,directives:n,values:i,loc:this.loc(e)}},t.parseInputObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseInputFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:O.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:i,loc:this.loc(e)}},t.parseDirectiveDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(A.AT);var n=this.parseName(),i=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var o=this.parseDirectiveLocations();return{kind:O.DIRECTIVE_DEFINITION,description:t,name:n,arguments:i,repeatable:r,locations:o,loc:this.loc(e)}},t.parseDirectiveLocations=function(){return this.delimitedMany(A.PIPE,this.parseDirectiveLocation)},t.parseDirectiveLocation=function(){var e=this._lexer.token,t=this.parseName();if(void 0!==b[t.value])return t;throw this.unexpected(e)},t.loc=function(e){var t;if(!0!==(null===(t=this._options)||void 0===t?void 0:t.noLocation))return new x.Ye(e,this._lexer.lastToken,this._lexer.source)},t.peek=function(e){return this._lexer.token.kind===e},t.expectToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw k(this._lexer.source,t.start,"Expected ".concat(G(e),", found ").concat(Y(t),"."))},t.expectOptionalToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t},t.expectKeyword=function(e){var t=this._lexer.token;if(t.kind!==A.NAME||t.value!==e)throw k(this._lexer.source,t.start,'Expected "'.concat(e,'", found ').concat(Y(t),"."));this._lexer.advance()},t.expectOptionalKeyword=function(e){var t=this._lexer.token;return t.kind===A.NAME&&t.value===e&&(this._lexer.advance(),!0)},t.unexpected=function(e){var t=null!=e?e:this._lexer.token;return k(this._lexer.source,t.start,"Unexpected ".concat(Y(t),"."))},t.any=function(e,t,n){this.expectToken(e);for(var i=[];!this.expectOptionalToken(n);)i.push(t.call(this));return i},t.optionalMany=function(e,t,n){if(this.expectOptionalToken(e)){var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i}return[]},t.many=function(e,t,n){this.expectToken(e);var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i},t.delimitedMany=function(e,t){this.expectOptionalToken(e);var n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n},e}();function Y(e){var t=e.value;return G(e.kind)+(null!=t?' "'.concat(t,'"'):"")}function G(e){return function(e){return e===A.BANG||e===A.DOLLAR||e===A.AMP||e===A.PAREN_L||e===A.PAREN_R||e===A.SPREAD||e===A.COLON||e===A.EQUALS||e===A.AT||e===A.BRACKET_L||e===A.BRACKET_R||e===A.BRACE_L||e===A.PIPE||e===A.BRACE_R}(e)?'"'.concat(e,'"'):e}var W=new Map,J=new Map,q=!0,X=!1;function z(e){return e.replace(/[\s,]+/g," ").trim()}function Q(e){var t=z(e);if(!W.has(t)){var n=function(e,t){return new K(e,t).parseDocument()}(e,{experimentalFragmentVariables:X,allowLegacyFragmentVariables:X});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");W.set(t,function(e){var t=new Set(e.definitions);t.forEach(function(e){e.loc&&delete e.loc,Object.keys(e).forEach(function(n){var i=e[n];i&&"object"==typeof i&&t.add(i)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(function(e){var t=new Set,n=[];return e.definitions.forEach(function(e){if("FragmentDefinition"===e.kind){var i=e.name.value,r=function(e){return z(e.source.body.substring(e.start,e.end))}(e.loc),o=J.get(i);o&&!o.has(r)?q&&console.warn("Warning: fragment with name "+i+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):o||J.set(i,o=new Set),o.add(r),t.has(r)||(t.add(r),n.push(e))}else n.push(e)}),(0,i.pi)((0,i.pi)({},e),{definitions:n})}(n)))}return W.get(t)}function H(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var i=e[0];return t.forEach(function(t,n){i+=t&&"Document"===t.kind?t.loc.source.body:t,i+=e[n+1]}),Q(i)}var $,Z=H;($=H||(H={})).gql=Z,$.resetCaches=function(){W.clear(),J.clear()},$.disableFragmentWarnings=function(){q=!1},$.enableExperimentalFragmentVariables=function(){X=!0},$.disableExperimentalFragmentVariables=function(){X=!1},H.default=H},9099:function(n,r,o){o.d(r,{W:function(){return N}});var a,s=o(5917),c=o(8002),u=function(e){var t=e.height,n=e.id,i=e.name,r=e.pokemon_v2_pokemontypes,o=e.sprites,a=e.stats,s=e.types,c=e.weight,u=[];return(null==s?void 0:s.length)?u=s.map(function(e){return{id:0,name:e.type.name}}):(null==r?void 0:r.length)&&(u=r.map(function(e){var t=e.pokemon_v2_type;return{id:t.id,name:t.name}})),{id:n,name:i,sprite:null==o?void 0:o.other["official-artwork"].front_default,height:t,weight:c,stats:null==a?void 0:a.map(function(e){var t=e.base_stat;return{name:e.stat.name,value:t}}),types:u}},l=o(639),p=o(2340),h=o(7984),f=function(t){return h.Ps(e||(n=["\n    query {\n      pokemon_v2_pokemon(limit: ",") {\n        id\n        name\n        weight\n        height\n        pokemon_v2_pokemontypes {\n          pokemon_v2_type {\n            id\n          }\n        }\n      }\n    }\n  "],i||(i=n.slice(0)),e=Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(i)}}))),t);var n,i},d=o(8890),E=o(1841),v=((a=function(){function e(n,i){t(this,e),this.apollo=n,this.http=i}return i(e,[{key:"getPokemonById",value:function(e){return this.http.get("".concat(p.N.pokeApi,"/pokemon/").concat(e))}},{key:"getAllPokemonsByLimit",value:function(e){return this.apollo.query({query:f(e)}).pipe((0,c.U)(function(e){return e.data.pokemon_v2_pokemon}))}}]),e}()).\u0275fac=function(e){return new(e||a)(l.LFG(d._M),l.LFG(E.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a),N=function(){var e=function(){function e(n){t(this,e),this.pokemonService=n,this.fetchingPokemons=!1;var i=localStorage.getItem("pokemons-v4");this.pokemons=i?JSON.parse(i):[]}return i(e,[{key:"getPokemonById",value:function(e){return this.pokemonService.getPokemonById(e).pipe((0,c.U)(u))}},{key:"getAllPokemonsByLimit",value:function(e){var t=this;return this.pokemons.length>=e?(0,s.of)(this.pokemons.slice(0,e)):(this.fetchingPokemons||(this.fetchingPokemons=!0,this.pokemons$=this.pokemonService.getAllPokemonsByLimit(e).pipe((0,c.U)(function(e){return e.map(u)}),(0,c.U)(function(e){return localStorage.setItem("pokemons-v4",JSON.stringify(e)),t.pokemons=e,t.fetchingPokemons=!1,e}))),this.pokemons$)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(l.LFG(v))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},1804:function(e,n,r){r.d(n,{y:function(){return l}});var o,a=r(639),s=r(8583),c=function(e){return{"dialog-box--hoverable":e}},u=["*"],l=((o=function(){function e(){t(this,e),this.size="small",this.hoverable=!1}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-dialog-box"]],inputs:{size:"size",hoverable:"hoverable"},ngContentSelectors:u,decls:2,vars:6,consts:[[3,"ngClass"]],template:function(e,t){1&e&&(a.F$t(),a.TgZ(0,"div",0),a.Hsn(1),a.qZA()),2&e&&(a.Gre("dialog-box dialog-box--",t.size,""),a.Q6J("ngClass",a.VKq(4,c,t.hoverable)))},directives:[s.mk],styles:['.dialog-box{background-color:#fff;position:relative;transition:.25s;border:2px solid #000000;border-radius:12px}.dialog-box.dialog-box--large{padding:1em 2em}.dialog-box.dialog-box--hoverable:hover{cursor:pointer}.dialog-box:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;border:2px solid #808080;border-radius:10px;pointer-events:none;transition:.25s}.dialog-box:after{content:"";position:absolute;top:2px;left:2px;bottom:2px;right:2px;border:2px solid #c0c0c0;border-radius:8px;pointer-events:none;transition:.25s}.dialog-box--hoverable:hover{border-color:#ee1515}.dialog-box--hoverable:hover:before{border-color:#f091a9}.dialog-box--hoverable:hover:after{border-color:#f8d9e9}\n'],encapsulation:2}),o)},3634:function(e,n,r){r.d(n,{o:function(){return s}});var o,a=r(639),s=((o=function(){function e(){t(this,e)}return i(e,[{key:"transform",value:function(e){return e&&e.replace(/-f$/g,"\u2640").replace(/-m$/g,"\u2642").replace(/-normal/g,"").replace(/^mr-/g,"Mr. ")}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275pipe=a.Yjl({name:"pokemonName",type:o,pure:!0}),o)},9042:function(e,n,r){r.d(n,{p:function(){return s}});var o,a=r(639),s=((o=function(){function e(){t(this,e)}return i(e,[{key:"transform",value:function(e){return e?e.toString().padStart(3,"0"):"000"}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275pipe=a.Yjl({name:"pokemonNumber",type:o,pure:!0}),o)}}])}();