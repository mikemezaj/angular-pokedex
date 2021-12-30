!function(){"use strict";var e;function n(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=a(e,n);if(o){var i=Object.getOwnPropertyDescriptor(o,n);return i.get?i.get.call(arguments.length<3?e:t):i.value}}).apply(this,arguments)}function a(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=f(e)););return e}function c(e,n){return(c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function u(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,o=f(e);if(n){var i=f(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return p(this,t)}}function p(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[610],{1610:function(t,i,a){a.r(i),a.d(i,{HomeModule:function(){return Ae}});var p,l,m,d=a(2177),g=a(9203),h=a(4612),k=((p=k||(k={})).HEIGHT_ASC="height-asc",p.NAME_ASC="name-asc",p.NUMBER_ASC="number-asc",p.WEIGHT_ASC="weight-asc",p.HEIGHT_DSC="height-dsc",p.NAME_DSC="name-dsc",p.NUMBER_DSC="number-dsc",p.WEIGHT_DSC="weight-dsc",k),y=k,v=a(639),x=a(9765),_=a(5002),P=a(5319),w=a(6136),b=a(7971),T=a(8858),C=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),n&&c(e,n)}(t,e);var n=u(t);function t(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.POSITIVE_INFINITY,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.POSITIVE_INFINITY,s=arguments.length>2?arguments[2]:void 0;return o(this,t),(e=n.call(this)).scheduler=s,e._events=[],e._infiniteTimeWindow=!1,e._bufferSize=i<1?1:i,e._windowTime=r<1?1:r,r===Number.POSITIVE_INFINITY?(e._infiniteTimeWindow=!0,e.next=e.nextInfiniteTimeWindow):e.next=e.nextTimeWindow,e}return r(t,[{key:"nextInfiniteTimeWindow",value:function(e){if(!this.isStopped){var n=this._events;n.push(e),n.length>this._bufferSize&&n.shift()}s(f(t.prototype),"next",this).call(this,e)}},{key:"nextTimeWindow",value:function(e){this.isStopped||(this._events.push(new O(this._getNow(),e)),this._trimBufferThenGetEvents()),s(f(t.prototype),"next",this).call(this,e)}},{key:"_subscribe",value:function(e){var n,t=this._infiniteTimeWindow,o=t?this._events:this._trimBufferThenGetEvents(),i=this.scheduler,r=o.length;if(this.closed)throw new b.N;if(this.isStopped||this.hasError?n=P.w.EMPTY:(this.observers.push(e),n=new T.W(this,e)),i&&e.add(e=new w.ht(e,i)),t)for(var s=0;s<r&&!e.closed;s++)e.next(o[s]);else for(var a=0;a<r&&!e.closed;a++)e.next(o[a].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),n}},{key:"_getNow",value:function(){return(this.scheduler||_.c).now()}},{key:"_trimBufferThenGetEvents",value:function(){for(var e=this._getNow(),n=this._bufferSize,t=this._windowTime,o=this._events,i=o.length,r=0;r<i&&!(e-o[r].time<t);)r++;return i>n&&(r=Math.max(r,i-n)),r>0&&o.splice(0,r),o}}]),t}(x.xQ),O=r(function e(n,t){o(this,e),this.time=n,this.value=t}),A=function(){var e=function(){function e(n,t){var i=this;o(this,e),this.activatedRoute=n,this.router=t,this.filter={},this.filterSubject=new C(1),n.queryParams.subscribe(function(e){var n=e.pokemon,t=e.sortBy,o=e.type,r=e.version;i.filter={pokedexVersionId:r?parseInt(r):1,pokemonName:n||"",pokemonSortBy:t||y.NUMBER_ASC,pokemonTypeId:o?parseInt(o):0},i.refresh()})}return r(e,[{key:"getFilter",value:function(){return this.filterSubject.asObservable()}},{key:"setPokedexVersionId",value:function(e){this.filter.pokedexVersionId=e,this.updateQueryParams({version:e}),this.refresh()}},{key:"setPokemonName",value:function(e){var n=e?e.toLowerCase().trim():"";this.filter.pokemonName=n,this.updateQueryParams({pokemon:n||null}),this.refresh()}},{key:"setPokemonTypeId",value:function(e){this.filter.pokemonTypeId=parseInt(e),this.updateQueryParams({type:e}),this.refresh()}},{key:"setPokemonSortBy",value:function(e){this.updateQueryParams({sortBy:e}),this.filter.pokemonSortBy=e,this.refresh()}},{key:"refresh",value:function(){this.filterSubject.next(this.filter)}},{key:"updateQueryParams",value:function(e){this.router.navigate([],{queryParams:e,queryParamsHandling:"merge"})}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.LFG(d.gz),v.LFG(d.F0))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),S=function(){var e=function(){function e(n){o(this,e),this.filterRepository=n}return r(e,[{key:"execute",value:function(){return this.filterRepository.getFilter()}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.LFG(A))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),M=a(2340).N.imagesPath,Z=[{id:1,name:"Green",sprites:{url:"".concat(M,"/pokemon-green.png"),width:56,height:56,animated:!1},limit:151,releasedYear:1996},{id:2,name:"Red & Blue",sprites:{url:"".concat(M,"/pokemon-red-and-blue.png"),width:56,height:56,animated:!1},limit:151,releasedYear:1998},{id:3,name:"Yellow",sprites:{url:"".concat(M,"/pokemon-yellow.png"),width:56,height:56,animated:!1},limit:151,releasedYear:1999},{id:4,name:"Gold",sprites:{url:"".concat(M,"/pokemon-gold.png"),width:56,height:56,animated:!1},limit:251,releasedYear:2e3},{id:5,name:"Silver",sprites:{url:"".concat(M,"/pokemon-silver.png"),width:56,height:56,animated:!1},limit:251,releasedYear:2e3},{id:6,name:"Crystal",sprites:{url:"".concat(M,"/pokemon-crystal"),width:56,height:56,animated:!0},limit:251,releasedYear:2001},{id:7,name:"Ruby & Sapphire",sprites:{url:"".concat(M,"/pokemon-ruby-and-sapphire.png"),width:64,height:64,animated:!1},limit:386,releasedYear:2003},{id:8,name:"FireRed & LeafGreen",sprites:{url:"".concat(M,"/pokemon-firered-and-leafgreen.png"),width:64,height:64,animated:!1},limit:386,releasedYear:2004},{id:9,name:"Emerald",sprites:{url:"".concat(M,"/pokemon-emerald"),width:64,height:64,animated:!0},limit:386,releasedYear:2005}],I=a(5917),N=function(){var e=function(){function e(){o(this,e),this.pokedexVersions=Z}return r(e,[{key:"getAllPokedexVersions",value:function(){return(0,I.of)(this.pokedexVersions)}},{key:"getPokedexVersionById",value:function(e){return(0,I.of)(this.pokedexVersions.find(function(n){return n.id===e})||this.pokedexVersions[0])}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),V=function(){var e=function(){function e(n){o(this,e),this.pokedexVersionRepository=n}return r(e,[{key:"execute",value:function(){return this.pokedexVersionRepository.getAllPokedexVersions()}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.LFG(N))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),B=a(9099),Y=function(){var e=function(){function e(n){o(this,e),this.pokemonRepository=n}return r(e,[{key:"execute",value:function(e){return this.pokemonRepository.getAllPokemonsByLimit(e)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.LFG(B.W))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),q=function(){var e=function(){function e(n){o(this,e),this.pokedexVersionRepository=n}return r(e,[{key:"execute",value:function(e){return this.pokedexVersionRepository.getPokedexVersionById(e)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.LFG(N))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),J=a(1804),Q=function(){var e=function(){function e(n){o(this,e),this.filterRepository=n}return r(e,[{key:"execute",value:function(e){return(0,I.of)(this.filterRepository.setPokemonSortBy(e))}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.LFG(A))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),E=a(665),U=function(){var e=function(){function e(){o(this,e)}return r(e,[{key:"transform",value:function(e){var n=e?e.toString():"No";return n="".concat(n," result"),1!==e&&(n="".concat(n,"s")),n}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=v.Yjl({name:"searchResultsMessage",type:e,pure:!0}),e}(),R=function(){var e=function(){function e(n,t){var i=this;o(this,e),this.getFilter=n,this.setPokemonSortBy=t,this.pokemonSortByNameASC=y.NAME_ASC,this.pokemonSortByNumberASC=y.NUMBER_ASC,this.pokemonSortByHeightASC=y.HEIGHT_ASC,this.pokemonSortByWeightASC=y.WEIGHT_ASC,this.pokemonSortByNameDSC=y.NAME_DSC,this.pokemonSortByNumberDSC=y.NUMBER_DSC,this.pokemonSortByHeightDSC=y.HEIGHT_DSC,this.pokemonSortByWeightDSC=y.WEIGHT_DSC,this._pokemons=[],this.getFilter.execute().subscribe(function(e){i.currentPokemonSortBy=e.pokemonSortBy})}return r(e,[{key:"pokemons",set:function(e){this._pokemons=e}},{key:"ngOnInit",value:function(){}},{key:"changePokemonSortBy",value:function(e){this.setPokemonSortBy.execute(e)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.Y36(S),v.Y36(Q))},e.\u0275cmp=v.Xpm({type:e,selectors:[["app-status-bar"]],inputs:{pokemons:"pokemons"},decls:24,vars:12,consts:[[1,"status-bar"],[1,"message"],[1,"sort-by"],["for","field-sort-by"],["name","field-sort-by","id","field-sort-by",3,"ngModel","ngModelChange"],[3,"value"]],template:function(e,n){1&e&&(v.TgZ(0,"div",0),v.TgZ(1,"div",1),v._uU(2),v.ALo(3,"searchResultsMessage"),v.qZA(),v.TgZ(4,"div",2),v.TgZ(5,"label",3),v._uU(6,"Order by:"),v.qZA(),v.TgZ(7,"select",4),v.NdJ("ngModelChange",function(e){return n.changePokemonSortBy(e)}),v.TgZ(8,"option",5),v._uU(9,"Height \u2197"),v.qZA(),v.TgZ(10,"option",5),v._uU(11,"Height \u2198"),v.qZA(),v.TgZ(12,"option",5),v._uU(13,"Name (A-Z)"),v.qZA(),v.TgZ(14,"option",5),v._uU(15,"Name (Z-A)"),v.qZA(),v.TgZ(16,"option",5),v._uU(17,"Number \u2197"),v.qZA(),v.TgZ(18,"option",5),v._uU(19,"Number \u2198"),v.qZA(),v.TgZ(20,"option",5),v._uU(21,"Weight \u2197"),v.qZA(),v.TgZ(22,"option",5),v._uU(23,"Weight \u2198"),v.qZA(),v.qZA(),v.qZA(),v.qZA()),2&e&&(v.xp6(2),v.Oqu(v.lcZ(3,10,n._pokemons.length)),v.xp6(5),v.Q6J("ngModel",n.currentPokemonSortBy),v.xp6(1),v.Q6J("value",n.pokemonSortByHeightASC),v.xp6(2),v.Q6J("value",n.pokemonSortByHeightDSC),v.xp6(2),v.Q6J("value",n.pokemonSortByNameASC),v.xp6(2),v.Q6J("value",n.pokemonSortByNameDSC),v.xp6(2),v.Q6J("value",n.pokemonSortByNumberASC),v.xp6(2),v.Q6J("value",n.pokemonSortByNumberDSC),v.xp6(2),v.Q6J("value",n.pokemonSortByWeightASC),v.xp6(2),v.Q6J("value",n.pokemonSortByWeightDSC))},directives:[E.EJ,E.JJ,E.On,E.YN,E.Kr],pipes:[U],styles:[".status-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0 18px;height:50px}@media only screen and (max-width: 575.98px){.status-bar[_ngcontent-%COMP%]{flex-direction:column;height:auto}}.status-bar[_ngcontent-%COMP%]   .sort-by[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:1em}"]}),e}(),F=a(9976),j=a(8002),z=function(e){return{id:e.id,name:e.name}},L=a(7984).Ps(e||(l=["\n  {\n    pokemon_v2_type(order_by: { name: asc }) {\n      id\n      name\n    }\n  }\n"],m||(m=l.slice(0)),e=Object.freeze(Object.defineProperties(l,{raw:{value:Object.freeze(m)}})))),G=a(8890),H=function(){var e=function(){function e(n){o(this,e),this.apollo=n}return r(e,[{key:"getPokemonTypes",value:function(){return this.apollo.query({query:L}).pipe((0,j.U)(function(e){return e.data.pokemon_v2_type}))}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.LFG(G._M))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),D=function(){var e=function(){function e(n){o(this,e),this.pokemonTypeService=n,this.fetchingPokemonTypes=!1;var t=localStorage.getItem("pokemon-types");this.pokemonTypes=t?JSON.parse(t):[]}return r(e,[{key:"getAllPokemonTypes",value:function(){var e=this;return this.pokemonTypes.length?(0,I.of)(this.pokemonTypes):(this.fetchingPokemonTypes||(this.fetchingPokemonTypes=!0,this.pokemonTypes$=this.pokemonTypeService.getPokemonTypes().pipe((0,j.U)(function(e){return e.map(z)}),(0,j.U)(function(n){return localStorage.setItem("pokemons-types",JSON.stringify(n)),e.pokemonTypes=n,e.fetchingPokemonTypes=!1,n}))),this.pokemonTypes$)}},{key:"getPokemonTypeByName",value:function(e){return(0,I.of)(this.pokemonTypes.find(function(n){return n.name===e})||this.pokemonTypes[0])}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.LFG(H))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),W=function(){var e=function(){function e(n){o(this,e),this.pokemonTypeRepository=n}return r(e,[{key:"execute",value:function(){return this.pokemonTypeRepository.getAllPokemonTypes()}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.LFG(D))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),K=function(){var e=function(){function e(n){o(this,e),this.filterRepository=n}return r(e,[{key:"execute",value:function(e){return(0,I.of)(this.filterRepository.setPokedexVersionId(e))}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.LFG(A))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),X=function(){var e=function(){function e(n){o(this,e),this.filterRepository=n}return r(e,[{key:"execute",value:function(e){return(0,I.of)(this.filterRepository.setPokemonName(e))}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.LFG(A))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),$=function(){var e=function(){function e(n){o(this,e),this.filterRepository=n}return r(e,[{key:"execute",value:function(e){return(0,I.of)(this.filterRepository.setPokemonTypeId(e))}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.LFG(A))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),ee=a(8583),ne=a(1470),te=a(9577);function oe(e,n){if(1&e&&v._UZ(0,"fa-icon",14),2&e){var t=v.oxw();v.Q6J("icon",t.iconTimes)}}function ie(e,n){if(1&e&&v._UZ(0,"fa-icon",14),2&e){var t=v.oxw();v.Q6J("icon",t.iconSearch)}}function re(e,n){if(1&e&&(v.TgZ(0,"option",15),v._uU(1),v.qZA()),2&e){var t=n.$implicit;v.Q6J("value",t.id),v.xp6(1),v.hij(" ",t.name," ")}}function se(e,n){if(1&e&&(v.TgZ(0,"option",15),v._uU(1),v.qZA()),2&e){var t=n.$implicit;v.Q6J("value",t.id),v.xp6(1),v.hij(" ",t.name," ")}}var ae=function(e){return{closed:e}},ce=function(){var e=function(){function e(n,t,i,r,s,a){var c=this;o(this,e),this.getAllPokemonTypes=n,this.getAllPokedexVersions=t,this.getFilter=i,this.setPokedexVersionId=r,this.setPokemonName=s,this.setPokemonTypeId=a,this.iconSearch=F.wn1,this.iconTimes=F.NBC,this.showNav=!0,this.pokedexVersions=[],this.pokemonTypes=[],this.getFilter.execute().subscribe(function(e){c.currentVersionId=e.pokedexVersionId,c.currentPokemonName=e.pokemonName,c.currentPokemonTypeId=e.pokemonTypeId}),this.getAllPokedexVersions.execute().subscribe(function(e){c.pokedexVersions=e}),this.getAllPokemonTypes.execute().subscribe(function(e){c.pokemonTypes=e})}return r(e,[{key:"ngOnInit",value:function(){}},{key:"changePokemonName",value:function(e){this.setPokemonName.execute(e)}},{key:"changePokemonType",value:function(e){this.setPokemonTypeId.execute(e)}},{key:"changeVersion",value:function(e){this.setPokedexVersionId.execute(e)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.Y36(W),v.Y36(V),v.Y36(S),v.Y36(K),v.Y36(X),v.Y36($))},e.\u0275cmp=v.Xpm({type:e,selectors:[["app-sidenav"]],decls:22,vars:11,consts:[[1,"sidenav",3,"ngClass"],["size","small"],[1,"filter"],[1,"toggle-nav-btn",3,"click"],[3,"icon",4,"ngIf"],[1,"form-group-theme"],["for","field-version",1,"label"],["name","field-version","id","field-version",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["for","field-name",1,"label"],["id","field-name","type","text","mask","AAAAAAAAAA",3,"ngModel","showMaskTyped","ngModelChange"],["for","field-type",1,"label"],["name","field-type","id","field-type",3,"ngModel","ngModelChange"],["value","0"],[3,"icon"],[3,"value"]],template:function(e,n){1&e&&(v.TgZ(0,"aside",0),v.TgZ(1,"app-dialog-box",1),v.TgZ(2,"div",2),v.TgZ(3,"button",3),v.NdJ("click",function(){return n.showNav=!n.showNav}),v.YNc(4,oe,1,1,"fa-icon",4),v.YNc(5,ie,1,1,"fa-icon",4),v.qZA(),v.TgZ(6,"div",5),v.TgZ(7,"label",6),v._uU(8,"Version:"),v.qZA(),v.TgZ(9,"select",7),v.NdJ("ngModelChange",function(e){return n.changeVersion(e)}),v.YNc(10,re,2,2,"option",8),v.qZA(),v.qZA(),v.TgZ(11,"div",5),v.TgZ(12,"label",9),v._uU(13,"PKMN Name:"),v.qZA(),v.TgZ(14,"input",10),v.NdJ("ngModelChange",function(e){return n.changePokemonName(e)}),v.qZA(),v.qZA(),v.TgZ(15,"div",5),v.TgZ(16,"label",11),v._uU(17,"PKMN Type:"),v.qZA(),v.TgZ(18,"select",12),v.NdJ("ngModelChange",function(e){return n.changePokemonType(e)}),v.TgZ(19,"option",13),v._uU(20,"All"),v.qZA(),v.YNc(21,se,2,2,"option",8),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA()),2&e&&(v.Q6J("ngClass",v.VKq(9,ae,!n.showNav)),v.xp6(4),v.Q6J("ngIf",n.showNav),v.xp6(1),v.Q6J("ngIf",!n.showNav),v.xp6(4),v.Q6J("ngModel",n.currentVersionId),v.xp6(1),v.Q6J("ngForOf",n.pokedexVersions),v.xp6(4),v.Q6J("ngModel",n.currentPokemonName)("showMaskTyped",!0),v.xp6(4),v.Q6J("ngModel",n.currentPokemonTypeId),v.xp6(3),v.Q6J("ngForOf",n.pokemonTypes))},directives:[ee.mk,J.y,ee.O5,E.EJ,E.JJ,E.On,ee.sg,ne.hx,E.Fj,E.YN,E.Kr,te.BN],styles:['@charset "UTF-8";.sidenav[_ngcontent-%COMP%]{overflow:hidden;max-width:100%;position:-webkit-sticky;position:sticky;top:75px}@media only screen and (max-width:767.98px){.sidenav[_ngcontent-%COMP%]{width:auto;margin-top:1em}}.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{padding:14px;white-space:nowrap;display:grid;grid-template-rows:repeat(2,auto);grid-template-columns:auto;max-height:500px;width:188px;transition:max-height .75s,width .75s;position:relative}@media only screen and (max-width:767.98px){.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{margin:0 auto;width:100%}}.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .toggle-nav-btn[_ngcontent-%COMP%]{z-index:1;cursor:pointer;background-color:#0000;border:none;position:absolute;right:4px;top:4px;transition:color .25s,all .75s}.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .toggle-nav-btn[_ngcontent-%COMP%]:hover{color:#ee1515}.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-group-theme[_ngcontent-%COMP%]{opacity:1;transition:opacity .75s}.sidenav.closed[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{max-height:42px;width:42px}.sidenav.closed[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .toggle-nav-btn[_ngcontent-%COMP%]{background-color:#0000;font-size:1.286rem;line-height:0;padding:0;position:absolute;right:10px;top:10px}.sidenav.closed[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-group-theme[_ngcontent-%COMP%]{opacity:0}']}),e}(),ue=a(7378),pe=function(){var e=r(function e(n){var t=n.nativeElement;o(this,e),"loading"in HTMLImageElement.prototype&&t.setAttribute("loading","lazy")});return e.\u0275fac=function(n){return new(n||e)(v.Y36(v.SBq))},e.\u0275dir=v.lG2({type:e,selectors:[["","appLazyImg",""]]}),e}(),fe=a(9042),le=a(3634),me=function(){var e=function(){function e(){o(this,e)}return r(e,[{key:"transform",value:function(e,n){var t=n.sprites,o=t.height,i=t.width,r=t.url,s=parseFloat(((e-1)/10).toString()).toFixed(1);return{backgroundImage:"url(".concat(r,")"),backgroundPosition:"-".concat(parseInt(s.substring(s.toString().length-1),10)*i,"px -").concat(Math.floor(parseFloat(s))*o,"px"),height:"".concat(o,"px"),width:"".concat(i,"px")}}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=v.Yjl({name:"pokemonSpritePosition",type:e,pure:!0}),e}(),de=function(){var e=function(){function e(){o(this,e)}return r(e,[{key:"transform",value:function(e,n){return"".concat(n.sprites.url,"/").concat(e,".gif")}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=v.Yjl({name:"pokemonImageUrl",type:e,pure:!0}),e}();function ge(e,n){if(1&e&&(v._UZ(0,"div",7),v.ALo(1,"pokemonSpritePosition")),2&e){var t=v.oxw();v.Q6J("ngStyle",v.xi3(1,1,t._pokemon.id,t._pokedexVersion))}}function he(e,n){if(1&e&&(v._UZ(0,"img",10),v.ALo(1,"pokemonImageUrl")),2&e){var t=v.oxw(2);v.Q6J("src",v.xi3(1,2,t._pokemon.id,t._pokedexVersion),v.LSH)("alt",t._pokemon.name)}}var ke=function(e,n){return{"width.px":e,"height.px":n}};function ye(e,n){if(1&e&&(v.TgZ(0,"div",8),v.YNc(1,he,2,5,"img",9),v.qZA()),2&e){var t=v.oxw();v.Q6J("ngStyle",v.WLB(2,ke,t._pokedexVersion.sprites.width,t._pokedexVersion.sprites.height)),v.xp6(1),v.Q6J("ngIf",t._pokedexVersion.sprites.animated)}}var ve=function(){var e=function(){function e(){o(this,e),this._pokemon={},this._pokedexVersion={}}return r(e,[{key:"pokemon",set:function(e){this._pokemon=e}},{key:"pokedexVersion",set:function(e){this._pokedexVersion=e}},{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=v.Xpm({type:e,selectors:[["app-pokemon-card"]],inputs:{pokemon:"pokemon",pokedexVersion:"pokedexVersion"},decls:11,vars:10,consts:[[1,"pokemon-card"],["size","small",3,"hoverable"],[1,"pokemon-info",3,"routerLink"],["class","image",3,"ngStyle",4,"ngIf"],["class","image-animated",3,"ngStyle",4,"ngIf"],[1,"number"],[1,"name"],[1,"image",3,"ngStyle"],[1,"image-animated",3,"ngStyle"],["appLazyImg","",3,"src","alt",4,"ngIf"],["appLazyImg","",3,"src","alt"]],template:function(e,n){1&e&&(v.TgZ(0,"div",0),v.TgZ(1,"app-dialog-box",1),v.TgZ(2,"a",2),v.YNc(3,ge,2,4,"div",3),v.YNc(4,ye,2,5,"div",4),v.TgZ(5,"span",5),v._uU(6),v.ALo(7,"pokemonNumber"),v.qZA(),v.TgZ(8,"span",6),v._uU(9),v.ALo(10,"pokemonName"),v.qZA(),v.qZA(),v.qZA(),v.qZA()),2&e&&(v.xp6(1),v.Q6J("hoverable",!0),v.xp6(1),v.MGl("routerLink","pokemon/",n._pokemon.id,""),v.xp6(1),v.Q6J("ngIf",!n._pokedexVersion.sprites.animated),v.xp6(1),v.Q6J("ngIf",n._pokedexVersion.sprites.animated),v.xp6(2),v.Oqu(v.lcZ(7,6,n._pokemon.id)),v.xp6(3),v.Oqu(v.lcZ(10,8,n._pokemon.name)))},directives:[J.y,d.yS,ue.Q,ee.O5,ee.PC,pe],pipes:[fe.p,le.o,me,de],styles:[".pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;color:#000;text-decoration:none;cursor:pointer;width:160px;padding:4px;margin:4px auto;height:122px;transition:.25s}.pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]:hover, .pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]:focus{color:#ee1515}.pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{background-repeat:no-repeat;image-rendering:-moz-crisp-edges;image-rendering:pixelated}.pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .image-animated[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .image-animated[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;z-index:1}.pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-size:.857rem}.pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{text-transform:uppercase;font-size:.857rem}"]}),e}();function xe(e,n){1&e&&(v.ynx(0),v.TgZ(1,"div",3),v._uU(2,"Loading... Don't turn off the power"),v.qZA(),v.BQk())}function _e(e,n){if(1&e&&(v.TgZ(0,"div",6),v._UZ(1,"app-pokemon-card",7),v.qZA()),2&e){var t=n.$implicit,o=v.oxw(4);v.xp6(1),v.Q6J("pokemon",t)("pokedexVersion",o._pokedexVersion)}}function Pe(e,n){if(1&e&&(v.ynx(0),v.YNc(1,_e,2,2,"div",5),v.BQk()),2&e){var t=v.oxw(3);v.xp6(1),v.Q6J("ngForOf",t._pokemons)}}function we(e,n){1&e&&(v.ynx(0),v._UZ(1,"img",8),v.BQk())}function be(e,n){if(1&e&&(v.ynx(0),v.TgZ(1,"div",4),v.YNc(2,Pe,2,1,"ng-container",2),v.YNc(3,we,2,0,"ng-container",2),v.qZA(),v.BQk()),2&e){var t=v.oxw(2);v.xp6(2),v.Q6J("ngIf",t._pokemons.length),v.xp6(1),v.Q6J("ngIf",!t._pokemons.length)}}function Te(e,n){if(1&e&&(v.TgZ(0,"div",1),v.YNc(1,xe,3,0,"ng-container",2),v.YNc(2,be,4,2,"ng-container",2),v.qZA()),2&e){var t=v.oxw();v.xp6(1),v.Q6J("ngIf",t._busy),v.xp6(1),v.Q6J("ngIf",!t._busy)}}var Ce=function(){var e=function(){function e(){o(this,e),this._busy=!0,this._pokedexVersion={},this._pokemons=[]}return r(e,[{key:"busy",set:function(e){this._busy=e}},{key:"pokedexVersion",set:function(e){this._pokedexVersion=e}},{key:"pokemons",set:function(e){this._pokemons=e}},{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=v.Xpm({type:e,selectors:[["app-pokemon-list"]],inputs:{busy:"busy",pokedexVersion:"pokedexVersion",pokemons:"pokemons"},decls:1,vars:1,consts:[["class","pokemon-list",4,"ngIf"],[1,"pokemon-list"],[4,"ngIf"],[1,"message"],[1,"pokemons-container"],["class","pokemon-card",4,"ngFor","ngForOf"],[1,"pokemon-card"],[3,"pokemon","pokedexVersion"],["src","/assets/images/sleeping-pikachu.gif","alt","","height","54","width","54"]],template:function(e,n){1&e&&v.YNc(0,Te,3,2,"div",0),2&e&&v.Q6J("ngIf",n._pokedexVersion)},directives:[ee.O5,ee.sg,ve],styles:[".pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;position:relative;justify-content:flex-start;margin:0 14px}@media only screen and (max-width:767.98px){.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]{justify-content:center;margin:1em 0 0}}.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]{flex-grow:1;margin-right:4px;margin-bottom:4px}"]}),e}(),Oe=[{path:"",component:function(){var e=function(){function e(n,t,i,r){var s=this;o(this,e),this.getFilter=n,this.getAllPokedexVersions=t,this.getAllPokemonsByLimit=i,this.getPokedexVersionById=r,this.busy=!1,this.filter={},this.pokedexVersion={},this.pokemons=[],this.pokemonTypes=[],this.since=0,this.until=0,this.busy=!0,this.getFilter.execute().pipe((0,h.b)(function(e){return s.filter=e,s.getPokedexVersionById.execute(e.pokedexVersionId)}),(0,h.b)(function(e){return s.pokedexVersion=e,s.getAllPokemonsByLimit.execute(e.limit)})).subscribe(function(e){s.updatePokemonList(e,s.filter),s.busy=!1}),this.getAllPokedexVersions.execute().subscribe(function(e){s.since=e[0].releasedYear,s.until=e[e.length-1].releasedYear})}return r(e,[{key:"ngOnInit",value:function(){}},{key:"updatePokemonList",value:function(e,t){var o=t.pokemonName,i=t.pokemonTypeId,r=t.pokemonSortBy,s=n(e);if(o){var a=new RegExp(o,"g");s=s.filter(function(e){return a.test(e.name)})}i&&(s=s.filter(function(e){var n;return null===(n=e.types)||void 0===n?void 0:n.some(function(e){return e.id===i})})),r===y.NAME_ASC?s.sort(function(e,n){return e.name>n.name?1:-1}):r===y.WEIGHT_ASC?s.sort(function(e,n){return e.weight>n.weight?1:-1}):r===y.HEIGHT_ASC?s.sort(function(e,n){return e.height>n.height?1:-1}):r===y.NUMBER_DSC?s.sort(function(e,n){return e.id<n.id?1:-1}):r===y.NAME_DSC?s.sort(function(e,n){return e.name<n.name?1:-1}):r===y.WEIGHT_DSC?s.sort(function(e,n){return e.weight<n.weight?1:-1}):r===y.HEIGHT_DSC&&s.sort(function(e,n){return e.height<n.height?1:-1}),this.pokemons=s}}]),e}();return e.\u0275fac=function(n){return new(n||e)(v.Y36(S),v.Y36(V),v.Y36(Y),v.Y36(q))},e.\u0275cmp=v.Xpm({type:e,selectors:[["app-home"]],decls:15,vars:6,consts:[[1,"home"],[1,"home__header"],["size","large"],[1,"since-until-years"],["src","/assets/images/red-walking-old.gif","alt","","width","24","height","24"],["src","/assets/images/red-walking-new.gif","alt","","width","24","height","31.5"],[1,"home__content"],[3,"pokemons"],[3,"busy","pokedexVersion","pokemons"]],template:function(e,n){1&e&&(v.TgZ(0,"main",0),v.TgZ(1,"div",1),v.TgZ(2,"app-dialog-box",2),v.TgZ(3,"h1"),v._uU(4,"POK\xc9DEX"),v.qZA(),v.TgZ(5,"div",3),v._UZ(6,"img",4),v.TgZ(7,"span"),v._uU(8),v.qZA(),v._UZ(9,"img",5),v.qZA(),v.qZA(),v.qZA(),v.TgZ(10,"div",6),v._UZ(11,"div"),v._UZ(12,"app-status-bar",7),v._UZ(13,"app-sidenav"),v._UZ(14,"app-pokemon-list",8),v.qZA(),v.qZA()),2&e&&(v.xp6(8),v.AsE("",n.since," - ",n.until,""),v.xp6(4),v.Q6J("pokemons",n.pokemons),v.xp6(2),v.Q6J("busy",n.busy)("pokedexVersion",n.pokedexVersion)("pokemons",n.pokemons))},directives:[J.y,R,ce,Ce],styles:[".home__header[_ngcontent-%COMP%]{display:flex;align-items:center;height:154px;width:254px;margin:0 auto;text-align:center}.home__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0}.home__header[_ngcontent-%COMP%]   .since-until-years[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.home__header[_ngcontent-%COMP%]   .since-until-years[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.571rem;padding:0 1em}.home__content[_ngcontent-%COMP%]{display:grid;grid-template-rows:-webkit-min-content auto;grid-template-rows:min-content auto;grid-template-columns:-webkit-min-content 1fr;grid-template-columns:min-content 1fr;min-height:calc(100vh - 125px);max-width:1366px;margin:0 auto;padding:25px 4em 4em}@media only screen and (max-width:767.98px){.home__content[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:repeat(2,auto);justify-content:center;padding:4em 1em}}"]}),e}()}],Ae=function(){var e=r(function e(){o(this,e)});return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=v.oAB({type:e}),e.\u0275inj=v.cJS({imports:[[d.Bz.forChild(Oe),g.m]]}),e}()}}])}();