(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(377),{lightningChart:o,SolidFill:l,ColorRGBA:n,AxisTickStrategies:r,AxisScrollStrategies:i,PointStyle3D:d,PalettedFill:c,LUT:h,emptyLine:u,AutoCursorModes:y,emptyFill:m,LegendBoxBuilders:x,Themes:g}=s,p=document.getElementById("chart")||document.body;p===document.body&&(p.style.width="100vw",p.style.height="100vh",p.style.margin="0px"),p.style.display="flex",p.style.flexDirection="row";const f=document.createElement("div");f.style.width="50%",f.style.height="100%",p.append(f);const v=document.createElement("div");v.style.width="50%",v.style.height="100%",p.append(v);const w=[{x:0,y:1.04,z:.42,value:120,name:"AF3",history:[]},{x:0,y:1.1,z:0,value:120,name:"AF4",history:[]},{x:.1,y:.8,z:-.56,value:120,name:"F5",history:[]},{x:.45,y:.7,z:-.2,value:120,name:"F6",history:[]},{x:.5,y:.7,z:.3,value:120,name:"FC5",history:[]},{x:.32,y:.8,z:.6,value:120,name:"FC6",history:[]},{x:-.1,y:.8,z:-.56,value:120,name:"T7",history:[]},{x:-.45,y:.7,z:-.2,value:120,name:"CP5",history:[]},{x:-.5,y:.7,z:.3,value:120,name:"CP6",history:[]},{x:-.32,y:.8,z:.6,value:120,name:"O2",history:[]}],S=o({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}),b=new c({lookUpProperty:"value",lut:new h({interpolate:!0,steps:[{value:-500,color:n(255,0,255),label:""},{value:0,color:n(0,0,255),label:""},{value:500,color:n(0,150,255),label:""},{value:1e3,color:n(0,100,100),label:""},{value:1500,color:n(0,255,150),label:""},{value:2e3,color:n(0,255,0),label:""},{value:4e3,color:n(155,150,0),label:""},{value:9e3,color:n(255,0,0),label:""}]})}),A=S.Chart3D({container:v,theme:g[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("").setSeriesBackgroundFillStyle(m).setSeriesBackgroundStrokeStyle(u).setCursorMode(void 0).setUserInteractions({restoreDefault:!1}),M=S.ChartXY({container:f}).setTitle("");M.getDefaultAxisX().setScrollStrategy(i.progressive).setDefaultInterval((e=>({end:e.dataMax??0,start:(e.dataMax??0)-15e3,stopAxisAfter:!1}))).setTickStrategy(r.Time).setIntervalRestrictions((e=>({endMin:e.dataMax,endMax:e.dataMax}))),M.getDefaultAxisY().dispose();const k=w.map(((e,t)=>{const a=w.length-(t+1),s=M.addAxisY({iStack:a}).setTitle(e.name).setTitleRotation(0).setStrokeStyle(u).setDefaultInterval({start:-5e3,end:9500,stopAxisAfter:!1}).setScrollStrategy(i.expansion).setTickStrategy(r.Empty);return{axisY:s,series:M.addPointLineAreaSeries({automaticColorIndex:t,dataPattern:"ProgressiveX",yAxis:s}).setName(e.name).setAreaFillStyle(m).setMaxSampleCount(1e5)}}));A.getDefaultAxes().forEach((e=>e.setPointerEvents(!1).setInterval({start:-1,end:1}).setTickStrategy(r.Empty).setStrokeStyle(u))),A.setCameraAutomaticFittingEnabled(!1).setCameraLocation({x:.5,y:.4,z:1});const C=A.addPointSeries({individualLookupValuesEnabled:!0}).add(w).setPointStyle(new d.Triangulated({fillStyle:b,size:10,shape:"sphere"})),F=A.addMeshModel().setScale(.26).setModelLocation({x:0,y:0,z:0}).setModelAlignment({x:0,y:-1,z:.2}).setName("Brain"),z=A.addMeshModel().setName("Head").setScale(2).setFillStyle(new l({color:n(255,255,255,90)})).setBackfaceCullingMode("cull-back");function U(e){return fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+e).then((t=>{if(!t.ok)throw new Error(`Failed to fetch ${e}`);return t.text()}))}Promise.all([U("examples/assets/1503/brain.obj"),U("examples/assets/1503/head.obj"),(async()=>{const e=await fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/1503/CutData3.bin"),t=await e.blob(),a=await t.arrayBuffer(),s=new Int16Array(a),o=[];for(let e=0;e<s.length;e+=5e4){const t=s.slice(e,e+5e4);o.push(t)}return o})()]).then((e=>{const t=e[2];F.setModelFromObj(e[0]).setFillStyle(b),z.setModelFromObj(e[1]).setPointerEvents(!1);const a=[];F.setVertexValues((e=>{const t=[];for(let s=0;s<e.length;s+=1){const o=A.translateCoordinate(e[s],A.coordsWorld,A.coordsAxis),l=new Array(w.length).fill(0);let n=0;w.forEach(((e,t)=>{const a=e.x-o.x,s=e.y-o.y,r=e.z-o.z,i=Math.sqrt(a**2+s**2+r**2),d=0!==i?1/i**3:1;l[t]=d,n+=d})),a.push({sumOfWeights:n,sensorWeights:l});const r=w.reduce(((e,t,a)=>e+t.value*l[a]),0)/n;t.push(r)}return t}));let s=window.performance.now(),o=0;const l=()=>{const e=window.performance.now(),n=Math.floor(1e3*(e-s)/1e3),r=Math.min(n-o,1e3);if(r>0){const e=[];for(let a=0;a<w.length;a++){const s=t[a],l=[];for(let e=0;e<r;e++){const t={x:1*(o+e),y:s[(o+e)%s.length]};l.push(t)}for(e[a]=l,w[a].history.push(...l.map((e=>e.y)));w[a].history.length>100;)w[a].history.shift();const n=w[a].history.reduce(((e,t)=>e+t),0)/w[a].history.length;w[a].value=n}k.forEach(((t,a)=>t.series.add(e[a]))),o+=r,C.clear().add(w);const s=[];F.setVertexValues((e=>{for(let t=0;t<e.length;t+=1){const{sumOfWeights:e,sensorWeights:o}=a[t],l=w.reduce(((e,t,a)=>e+t.value*o[a]),0)/e||20;s.push(l)}return s}))}requestAnimationFrame(l)};l(),A.addLegendBox(x.HorizontalLegendBox).add(F)}))}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);