(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(13),r=s.n(i),c=s(4),o=s.n(c),m=s(14),l=s(15),j=s(16),d=s(19),u=s(18),v=s(17),h=s.n(v),b=s(0);var p=function(e){var t=e.title,s=e.year,a=e.runtime,n=e.summary,i=e.poster,r=e.genres;return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{src:i,alt:t,title:t}),Object(b.jsxs)("div",{className:"movie__data",children:[Object(b.jsx)("h3",{className:"movie__title",children:t}),Object(b.jsx)("h5",{className:"movie__year",children:s}),Object(b.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(b.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(b.jsx)("h5",{className:"movie__runtime",children:a}),Object(b.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})]})},_=(s(44),s(45),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(b.jsx)("section",{className:"container",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(b.jsx)("div",{className:"movies",children:s.map((function(e){return Object(b.jsx)(p,{id:e.id,year:e.year,runtime:e.runtime,title:e.title,genres:e.genres,summary:e.summary,poster:e.medium_cover_image},e.id)}))})})}}]),s}(n.a.Component));r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.f457b476.chunk.js.map