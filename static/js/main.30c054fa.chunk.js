(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,n){e.exports=n(62)},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(4),r=n(5),i=n(1),c=n(6),l=n(3),s=n.n(l),u=n(36),m=n(16),f=n(9),p=n(65),d=n(10),h=n(19),b=n(20),g=n.n(b),E=n(17),j=n(66),O=n(0),v={objectUrl:{hop:"canary_hop.glb",idle:"canary_idle.glb",walk:"canary_walk.glb"},nodeCoords:"canary.geometry.attributes.position",nodeSigns:[1,-1,-1],nodeScale:2.5,nodeGroupScale:.02,meshColorIndex:"ciano",meshScale:1,debug:!1,model:{material:"Default_OBJ",scale:.02,metalness:.2,roughness:2,opacity:1,color:"white"},gridPosition:[0,-.52,.28],cameraPosition:[-20,0,0],pointColorIndex:{primary:"ciano",hovered:"magenta",active:"magenta"},pointLight:{position:[0,0,0],intensity:[2,2,2],distance:15,color:["ciano","magenta","magenta"]},bloom:{kernelSize:1,luminanceThreshold:.1,luminanceSmoothing:.05,intensity:.1},glitch:{delay:[20,30],duration:[.3,.5],strength:[.1,.3]},lights:{front:{color:"ciano"},left:{color:"white"},right:{color:"magenta"}}},x={ciano:"#01ffff",magenta:"#e6007a",white:"#ffffff",black:"#000000"};function y(e){console.info("/meme-mine");var t=new URL("/meme-mine"),n="/"===t.pathname||""===t.pathname;return"".concat(n?"":"/meme-mine","/assets/").concat(e)}var w,S,k,L,M=s.a.forwardRef(function(e,t){var n=e.position?e.position:[0,0,0],a=Object(l.useState)(n),o=Object(f.a)(a,2),r=o[0],i=o[1],c=Object(l.useState)(!1),u=Object(f.a)(c,2),m=u[0],p=u[1],h=e.animation,b=e.speed,g=e.reversed;"dead"===e.animation&&(h="idle",b=0,g=!0);var E=v.objectUrl[h],w=Object(j.a)(y(E)),S=w.scene,k=w.nodes,L=w.materials,M=w.animations,R=Object(l.useRef)(),P=Object(l.useRef)();return Object(l.useEffect)(function(){P.current&&g&&(P.current.rotation.x=Math.PI/.85)},[]),Object(l.useEffect)(function(){t.current&&(R.current=new O.AnimationMixer(t.current))},[t]),Object(l.useEffect)(function(){return R.current&&M&&M.forEach(function(e){var t=R.current.clipAction(e);t.timeScale=b,t.play()}),function(){R.current&&R.current.stopAllAction()}},[M]),Object(l.useEffect)(function(){var e=function(e){"ArrowRight"===e.key?i(function(e){return-1!==e[0]?[e[0]-1,e[1],e[2]]:e}):"ArrowLeft"===e.key&&i(function(e){return 1!==e[0]?[e[0]+1,e[1],e[2]]:e}),"ArrowUp"!==e.key||m||0!==r[1]||p(!0)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}},[r]),Object(d.b)(function(e,t){R.current&&R.current.update(t),i(m?function(e){var n=e[1]+10*t;return n>=2&&p(!1),[e[0],n<=0?0:n,e[2]]}:function(e){return[e[0],Math.max(0,e[1]-10*t),e[2]]})}),Object(l.useLayoutEffect)(function(){e.meshScale&&k.canary&&k.canary.scale.set(4,4,4),S.traverse(function(e){"Mesh"===e.type&&(e.receiveShadow=e.castShadow=!0)}),Object.assign(L[e.model.material],{wireframe:!1,metalness:e.model.metalness,roughness:e.model.moughness,opacity:e.model.opacity,color:new O.Color(x[e.model.color])})},[S,k,L]),s.a.createElement("mesh",{position:r,ref:P},s.a.createElement("primitive",Object.assign({ref:t,object:S},e)))}),R=n(64),P=function(e){var t=e.config,n=Object(l.useRef)(),a=Object(l.useRef)(),o=Object(l.useRef)(),r=Object(l.useRef)(),i=Object(l.useRef)(),c=Object(l.useRef)();return Object(d.b)(function(e){var t=e.clock.getElapsedTime(),r=15;parseInt(t)%4===1&&(r=15*Math.random()|0),n.current.position.x=Math.sin(t)/4*r,n.current.position.y=Math.cos(t)/4*r,n.current.position.z=Math.cos(t)/4*r,a.current.position.x=Math.cos(t)/4*10,a.current.position.y=Math.sin(t)/4*10,a.current.position.z=Math.sin(t)/4*10,o.current.position.x=Math.sin(t)/4*10,o.current.position.y=Math.cos(t)/4*10,o.current.position.z=Math.sin(t)/4*10}),!0===t.debug&&(Object(R.a)(r,O.PointLightHelper),Object(R.a)(i,O.PointLightHelper),Object(R.a)(c,O.PointLightHelper)),s.a.createElement(s.a.Fragment,null,s.a.createElement("group",{ref:n},s.a.createElement("pointLight",{ref:r,color:x[t.pointLight.color[0]],position:t.pointLight.position,distance:t.pointLight.distance,intensity:t.pointLight.intensity[0]})),s.a.createElement("group",{ref:a},s.a.createElement("pointLight",{ref:i,color:x[t.pointLight.color[1]],position:t.pointLight.position,distance:t.pointLight.distance,intensity:t.pointLight.intensity[1]})),s.a.createElement("group",{ref:o},s.a.createElement("pointLight",{ref:c,color:x[t.pointLight.color[2]],position:t.pointLight.position,distance:t.pointLight.distance,intensity:t.pointLight.intensity[2]})))},I=function(){var e=Object(l.useRef)();return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{shadows:!0,dpr:[1,2],camera:{position:[3,1,0],fov:50},performance:{min:.1}},s.a.createElement(P,{config:v}),s.a.createElement(l.Suspense,{fallback:null},s.a.createElement(M,{animation:"dead",position:[0,.2,0],scale:v.model.scale,meshColorIndex:v.meshColorIndex,meshScale:v.meshScale,model:v.model,ref:e}),s.a.createElement(h.b,{multisampling:16},s.a.createElement(h.a,{kernelSize:v.bloom.kernelSize,luminanceThreshold:v.bloom.luminanceThreshold,luminanceSmoothing:v.bloom.luminanceSmoothing,intensity:v.bloom.intensity}))),s.a.createElement(p.a,{minPolarAngle:Math.PI/2.8,maxPolarAngle:Math.PI/1.8})),g.a.createPortal(s.a.createElement(T,null,s.a.createElement(z,null,"GAME OVER"),s.a.createElement(C,null,"press enter to restart")),document.body))},A=Object(E.b)(w||(w=Object(m.a)(["\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0; }\n"]))),T=E.a.div(S||(S=Object(m.a)(["\n  position: absolute;\n  top: 25px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n"]))),z=E.a.h1(k||(k=Object(m.a)(["\n  color: #fff;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n"]))),C=E.a.h2(L||(L=Object(m.a)(["\n  color: #fff;\n  margin-top: 125px;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n  animation: "," 1500ms linear infinite;\n"])),A);function F(){var e=Object(d.d)(),t=e.camera,n=e.set,a=Object(l.useState)(!1),o=Object(f.a)(a,2),r=o[0],i=o[1],c=new O.PerspectiveCamera(50,16/9,.1,1e3);return Object(l.useEffect)(function(){var e=function(e){"Space"===e.code&&i(!r)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}},[r]),Object(l.useEffect)(function(){r?(c.position.set(-20,0,0),c.lookAt(20,0,0),n({camera:c})):(c.position.set(0,.8,-3),c.lookAt(0,0,0),n({camera:c}))},[r]),Object(d.b)(function(){t.lookAt(-100,200,500),t.updateProjectionMatrix()}),null}var B,Z,D=n(13),G=s.a.forwardRef(function(e,t){var n=e.positionZ,a=e.side,o=e.video,r=Object(l.useRef)(),i=Object(l.useRef)();return Object(l.useEffect)(function(){o.play(),r.current=o,i.current=new O.VideoTexture(o)},[]),Object(d.b)(function(){i.current&&(i.current.needsUpdate=!0)}),s.a.createElement("mesh",{position:[a,0,n],rotation:[0,0,0],ref:t},s.a.createElement("planeGeometry",{args:[1.2,1.2]}),s.a.createElement("meshBasicMaterial",{map:i.current,side:O.DoubleSide}))}),U=s.a.forwardRef(function(e,t){var n=e.videos,a=Object(l.useState)([]),o=Object(f.a)(a,2),r=o[0],i=o[1],c=[],u=Object(l.useState)(0),m=Object(f.a)(u,2),p=m[0],h=m[1],b=Object(l.useRef)(),g=Object(l.useRef)({elapsedTime:0,delta:0}),E=function(e){var t=Object(l.useState)(null),n=Object(f.a)(t,2),a=n[0],o=n[1];return Object(l.useEffect)(function(){if(e.current){var t=(new O.Box3).setFromObject(e.current);o(t)}},[e,e.current]),a}(t);return Object(d.b)(function(){var e=!1;c.forEach(function(n){if(t&&n){var a=(new O.Box3).setFromObject(n.current);E&&a&&E.intersectsBox(a)&&(e=!0)}e&&console.log("Collision Detected")})}),Object(d.b)(function(e){var n,a,o=e.clock;if(g.current.delta=o.getElapsedTime()-g.current.elapsedTime,t.current){g.current.delta>=.05&&(g.current.elapsedTime=o.getElapsedTime(),h(function(e){return e+1}),i(function(e){return e.map(function(e){return{z:e.z-1,side:e.side}})}));var c=b.current?b.current.position.z:0;if(r.length<8||p%8>c){var l={z:c+(n=10,a=50,Math.floor(Math.random()*(a-n))+n),side:Math.floor(3*Math.random())-1};i(function(e){return[].concat(Object(D.a)(e),[l])})}r.length>8&&i(function(e){return e.slice(1)})}}),s.a.createElement(s.a.Fragment,null,r.map(function(e,a){var o=e.z,i=e.side,l=a===r.length-1?b:void 0;return c.push(l),s.a.createElement(G,{key:a,positionZ:o,side:i,playerRef:t,ref:l,video:n[Math.floor(Math.random()*n.length)]})}))}),_=s.a.forwardRef(function(e,t){var n=e.positionZ,a="left"===e.side?-1.5:1.5;return s.a.createElement("mesh",{position:[a,0,n],rotation:[Math.PI/2,0,0],ref:t},s.a.createElement("planeGeometry",{args:[.1,1e3]}),s.a.createElement("meshBasicMaterial",{color:16777215,side:O.DoubleSide}))}),H=s.a.forwardRef(function(e,t){var n=e.positionZ;return s.a.createElement("mesh",{position:[0,-.52,n],rotation:[Math.PI/2,0,0],ref:t},s.a.createElement("planeGeometry",{args:[.1,5]}),s.a.createElement("meshBasicMaterial",{color:16777215,side:O.DoubleSide}))}),J=s.a.forwardRef(function(e,t){var n=Object(l.useState)([]),a=Object(f.a)(n,2),o=a[0],r=a[1],i=Object(l.useState)(0),c=Object(f.a)(i,2),u=c[0],m=c[1],p=Object(l.useRef)(),h=Object(l.useRef)({elapsedTime:0,delta:0});return Object(d.b)(function(e){var n=e.clock;if(h.current.delta=n.getElapsedTime()-h.current.elapsedTime,t.current){h.current.delta>=.05&&(h.current.elapsedTime=n.getElapsedTime(),m(function(e){return e+1}),r(function(e){return e.map(function(e){return e-1})}));var a=p.current?p.current.position.z:0;if(o.length<5||u%5>a){var i=a+20;r(function(e){return[].concat(Object(D.a)(e),[i])})}o.length>5&&r(function(e){return e.slice(1)})}}),s.a.createElement(s.a.Fragment,null,o.map(function(e,t){return s.a.createElement(s.a.Fragment,null,s.a.createElement(H,{key:t,positionZ:e,ref:t===o.length-1?p:void 0}),s.a.createElement(_,{positionZ:e,side:"left"}),s.a.createElement(_,{positionZ:e,side:"right"}))}))});var V,N,q,K,Q=function(){var e=Object(l.useState)(!0),t=Object(f.a)(e,2),n=t[0],a=t[1],o=Object(l.useState)(0),r=Object(f.a)(o,2),i=r[0],c=r[1],u=Object(l.useRef)(performance.now()),m=Object(l.useRef)(),b=["cat1.mp4","cat2.mp4","cat3.mp4"],E=function(e){var t=Object(l.useState)([]),n=Object(f.a)(t,2),a=n[0],o=n[1];return Object(l.useEffect)(function(){var t=e.map(function(e){return{src:y(e),videoElement:null,loaded:!1}});t.forEach(function(e){var n=document.createElement("video");n.src=e.src,n.preload="auto",n.muted=!0,n.loop=!0,n.playbackRate=1,n.setAttribute("playsinline","");var a=function(){e.videoElement=n,e.loaded=!0,t.every(function(e){return e.loaded})&&o(t.map(function(e){return e.videoElement}))};return n.addEventListener("canplaythrough",a),n.load(),function(){n.removeEventListener("canplaythrough",a)}})},[e]),a}(b);return Object(l.useEffect)(function(){if(n){var e=function(e){"Enter"===e.key&&a(!1)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),Object(l.useEffect)(function(){var e=setInterval(function(){c(parseInt((performance.now()-u.current)/100))},10);return function(){return clearInterval(e)}},[]),E.length!==b.length?s.a.createElement("div",null,"Loading Videos..."):n?s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{shadows:!0,dpr:[1,2],camera:{position:v.cameraPosition,fov:50},performance:{min:.1}},s.a.createElement(F,null),s.a.createElement(P,{config:v}),s.a.createElement(J,{ref:m}),s.a.createElement(U,{videos:E,ref:m}),s.a.createElement(l.Suspense,{fallback:null},s.a.createElement(M,{animation:"walk",speed:"3",scale:v.model.scale,meshColorIndex:v.meshColorIndex,meshScale:v.meshScale,model:v.model,ref:m}),s.a.createElement(h.b,{multisampling:16},s.a.createElement(h.a,{kernelSize:v.bloom.kernelSize,luminanceThreshold:v.bloom.luminanceThreshold,luminanceSmoothing:v.bloom.luminanceSmoothing,intensity:v.bloom.intensity}))),s.a.createElement(p.a,{minPolarAngle:Math.PI/2.8,maxPolarAngle:Math.PI/1.8})),g.a.createPortal(s.a.createElement(W,null,s.a.createElement(X,null,"Score: ",i)),document.body)):s.a.createElement(I,null)},W=E.a.div(B||(B=Object(m.a)(["\n  position: absolute;\n  top: 25px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n"]))),X=E.a.h1(Z||(Z=Object(m.a)(["\n  color: #fff;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n"]))),Y=function(){var e=Object(l.useState)(!0),t=Object(f.a)(e,2),n=t[0],a=t[1];Object(l.useEffect)(function(){var e=function(e){"Enter"===e.key&&a(!1)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}},[]);var o=Object(l.useRef)();return n?s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{shadows:!0,dpr:[1,2],camera:{position:[3,1,3],fov:50},performance:{min:.1}},s.a.createElement(P,{config:v}),s.a.createElement(l.Suspense,{fallback:null},s.a.createElement(M,{animation:"idle",speed:"1",position:[0,.2,0],scale:v.model.scale,meshColorIndex:v.meshColorIndex,meshScale:v.meshScale,model:v.model,ref:o}),s.a.createElement(h.b,{multisampling:16},s.a.createElement(h.a,{kernelSize:v.bloom.kernelSize,luminanceThreshold:v.bloom.luminanceThreshold,luminanceSmoothing:v.bloom.luminanceSmoothing,intensity:v.bloom.intensity}))),s.a.createElement(p.a,{minPolarAngle:Math.PI/2.8,maxPolarAngle:Math.PI/1.8})),g.a.createPortal(s.a.createElement(ee,null,s.a.createElement(te,null,"canary in a meme mine"),s.a.createElement(ne,null,"press enter to start")),document.body)):s.a.createElement(Q,null)},$=Object(E.b)(V||(V=Object(m.a)(["\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0; }\n"]))),ee=E.a.div(N||(N=Object(m.a)(["\n  position: absolute;\n  top: 25px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n"]))),te=E.a.h1(q||(q=Object(m.a)(["\n  color: #fff;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n"]))),ne=E.a.h2(K||(K=Object(m.a)(["\n  color: #fff;\n  margin-top: 125px;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n  animation: "," 1500ms linear infinite;\n"])),$),ae=(n(60),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"App",style:{display:"flex",flexDirection:"column",alignItems:"center",height:"100%"}},s.a.createElement(Y,null)))}}]),t}(s.a.Component)),oe=document.getElementById("root");Object(u.createRoot)(oe).render(s.a.createElement(ae,null))}},[[44,2,1]]]);
//# sourceMappingURL=main.30c054fa.chunk.js.map