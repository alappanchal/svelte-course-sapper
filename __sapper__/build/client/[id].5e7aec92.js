import{S as t,i as e,s,e as a,k as c,t as r,v as o,c as l,a as n,d as i,l as f,b as u,w as $,f as h,g as p,h as m,x as d,j as g,y as v,z as E,A as x}from"./client.273185f5.js";import{B as b}from"./Button.7c3fa0b5.js";function M(t){let e;return{c(){e=r("Contact")},l(t){e=u(t,"Contact")},m(t,s){p(t,e,s)},d(t){t&&i(e)}}}function w(t){let e;return{c(){e=r("Back")},l(t){e=u(t,"Back")},m(t,s){p(t,e,s)},d(t){t&&i(e)}}}function j(t){let e,s,j,I,k,y,B,C,H,P,T,U,D,F,L,R,S,V,z,A=t[0].title+"",G=t[0].subtitle+"",N=t[0].description+"";return R=new b({props:{href:"mailto:"+t[0].contactEmail,$$slots:{default:[M]},$$scope:{ctx:t}}}),V=new b({props:{type:"button",mode:"outline",href:"/",$$slots:{default:[w]},$$scope:{ctx:t}}}),{c(){e=a("section"),s=a("div"),j=a("img"),k=c(),y=a("div"),B=a("h1"),C=r(A),H=c(),P=a("h2"),T=r(G),U=c(),D=a("p"),F=r(N),L=c(),o(R.$$.fragment),S=c(),o(V.$$.fragment),this.h()},l(t){e=l(t,"SECTION",{class:!0});var a=n(e);s=l(a,"DIV",{class:!0});var c=n(s);j=l(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(i),k=f(a),y=l(a,"DIV",{class:!0});var r=n(y);B=l(r,"H1",{class:!0});var o=n(B);C=u(o,A),o.forEach(i),H=f(r),P=l(r,"H2",{class:!0});var h=n(P);T=u(h,G),h.forEach(i),U=f(r),D=l(r,"P",{class:!0});var p=n(D);F=u(p,N),p.forEach(i),L=f(r),$(R.$$.fragment,r),S=f(r),$(V.$$.fragment,r),r.forEach(i),a.forEach(i),this.h()},h(){j.src!==(I=t[0].imgURL)&&h(j,"src",I),h(j,"alt",""),h(j,"class","svelte-11gfc6t"),h(s,"class","image svelte-11gfc6t"),h(B,"class","svelte-11gfc6t"),h(P,"class","svelte-11gfc6t"),h(D,"class","svelte-11gfc6t"),h(y,"class","content svelte-11gfc6t"),h(e,"class","svelte-11gfc6t")},m(t,a){p(t,e,a),m(e,s),m(s,j),m(e,k),m(e,y),m(y,B),m(B,C),m(y,H),m(y,P),m(P,T),m(y,U),m(y,D),m(D,F),m(y,L),d(R,y,null),m(y,S),d(V,y,null),z=!0},p(t,[e]){(!z||1&e&&j.src!==(I=t[0].imgURL))&&h(j,"src",I),(!z||1&e)&&A!==(A=t[0].title+"")&&g(C,A),(!z||1&e)&&G!==(G=t[0].subtitle+"")&&g(T,G),(!z||1&e)&&N!==(N=t[0].description+"")&&g(F,N);const s={};1&e&&(s.href="mailto:"+t[0].contactEmail),2&e&&(s.$$scope={dirty:e,ctx:t}),R.$set(s);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),V.$set(a)},i(t){z||(v(R.$$.fragment,t),v(V.$$.fragment,t),z=!0)},o(t){E(R.$$.fragment,t),E(V.$$.fragment,t),z=!1},d(t){t&&i(e),x(R),x(V)}}}function I(t){const e=t.params.id;return this.fetch("https://svelte-course-20c5e-default-rtdb.firebaseio.com/meetups/"+e+".json").then(t=>{if(!t.ok)throw new Error("HTTP Update Favorite Meetup Error");return t.json()}).then(t=>({selectedMeetup:{...t,id:e}})).catch(t=>{isFavoriteInProgress=!1,console.log(t),this.error(400,"Could not fetch the meetup with id"+e)})}function k(t,e,s){let{selectedMeetup:a}=e;return t.$$set=(t=>{"selectedMeetup"in t&&s(0,a=t.selectedMeetup)}),[a]}export default class extends t{constructor(t){super(),e(this,t,k,j,s,{selectedMeetup:0})}}export{I as preload};
