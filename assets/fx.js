(()=>{const D=document,B=D.body,RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const NAV=[["index.html","Home"],["forecast-atlas.html","Forecast Atlas"],["agro-advisory.html","Advisory"],["farm-planner.html","Farm Planner",1],["alerts.html","Alerts",1],["validation.html","Validation"],["data-model.html","Data & Model"],["impact.html","Impact",1],["about.html","About"]];
const cur=(location.pathname.split("/").pop()||"index.html");
B.classList.add("fx");
requestAnimationFrame(()=>B.classList.add("ready"));
if(!D.getElementById("nav")){D.querySelectorAll("body>nav").forEach(n=>n.remove());
const h=D.createElement("header");h.className="fxnav";h.innerHTML='<div class="in"><b class="se">Panchayat Weather Intelligence</b><div class="ls">'+NAV.map(n=>`<a href="${n[0]}" class="${n[0]==cur?"on":""} ${n[2]?"new":""}">${n[1].replace("&","&amp;")}</a>`).join("")+"</div></div>";B.prepend(h)}
const f=D.createElement("footer");f.className="fxfoot";f.innerHTML='<div class="in"><b class="se" style="font-size:22px">Panchayat Weather Intelligence</b><div class="gr">'+NAV.map(n=>`<a href="${n[0]}">${n[1].replace("&","&amp;")}</a>`).join("")+'</div><p>SIH26074 · MoES · India Meteorological Department · Prototype with simulated data</p></div>';B.append(f);
const bar=D.createElement("div");bar.id="fxbar";B.append(bar);
addEventListener("scroll",()=>{bar.style.width=(scrollY/Math.max(1,D.documentElement.scrollHeight-innerHeight)*100)+"%"},{passive:true});
if(!RM&&matchMedia("(pointer:fine)").matches){const g=D.createElement("div");g.id="fxglow";B.append(g);addEventListener("pointermove",e=>{g.style.transform=`translate(${e.clientX}px,${e.clientY}px)`})}
const hov=".tc,.cnode,.stat,.mc,.opt,.lyr,.stbox,.metrics>*,.grid4>*,.node,.fxh";D.querySelectorAll(hov).forEach(e=>e.classList.add("fx-h"));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("fx-in");io.unobserve(e.target)}}),{threshold:.12});
D.querySelectorAll("section>.wr>*,section>*:not(.wr):not(script)").forEach((e,i)=>{if(e.closest("#nav,#mnav"))return;e.classList.add("fx-rv");e.style.transitionDelay=(i%4)*90+"ms";io.observe(e)});
D.querySelectorAll(".fxc").forEach(c=>{c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty("--mx",x*100+"%");c.style.setProperty("--my",y*100+"%");if(!RM)c.style.transform=`perspective(700px) rotateY(${(x-.5)*8}deg) rotateX(${(.5-y)*8}deg) translateY(-4px)`});c.addEventListener("pointerleave",()=>c.style.transform="")});
D.addEventListener("pointerdown",e=>{const b=e.target.closest(".bpri,.bsec,.cta,.fxbtn");if(!b)return;const r=b.getBoundingClientRect(),s=D.createElement("span"),d=Math.max(r.width,r.height);s.className="fxr";s.style.cssText=`width:${d}px;height:${d}px;left:${e.clientX-r.left-d/2}px;top:${e.clientY-r.top-d/2}px`;b.append(s);setTimeout(()=>s.remove(),650)});
const cnt=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cnt.unobserve(e.target);const el=e.target,t=+el.dataset.count,dec=+(el.dataset.dec||0),t0=performance.now();(function s(n){const p=Math.min(1,(n-t0)/1600);el.textContent=(t*(1-Math.pow(1-p,3))).toLocaleString("en-IN",{minimumFractionDigits:dec,maximumFractionDigits:dec})+(el.dataset.suf||"");p<1&&requestAnimationFrame(s)})(t0)}),{threshold:.5});
window.fxCount=r=>(r||D).querySelectorAll("[data-count]").forEach(e=>cnt.observe(e));fxCount();
D.addEventListener("click",e=>{const a=e.target.closest("a[href]");if(!a||a.target||e.metaKey||e.ctrlKey||e.shiftKey)return;const u=new URL(a.href,location);if(u.origin!==location.origin||u.pathname===location.pathname||!/\.html$/.test(u.pathname))return;e.preventDefault();B.classList.add("leaving");setTimeout(()=>location.href=a.href,260)});
addEventListener("pageshow",()=>{B.classList.remove("leaving");requestAnimationFrame(()=>B.classList.add("ready"))});
if(!RM){const c=D.createElement("canvas");c.id="fxcv";B.prepend(c);const x=c.getContext("2d");let W,H,P=[];const rs=()=>{W=c.width=innerWidth;H=c.height=innerHeight;P=Array.from({length:Math.min(60,W/22|0)},()=>({x:Math.random()*W,y:Math.random()*H,v:.4+Math.random()*1.2,l:8+Math.random()*16}))};rs();addEventListener("resize",rs);
(function d(){x.clearRect(0,0,W,H);x.strokeStyle="rgba(200,117,77,.28)";x.lineWidth=1.2;x.beginPath();P.forEach(p=>{x.moveTo(p.x,p.y);x.lineTo(p.x-p.l*.25,p.y+p.l);p.y+=p.v*2;p.x-=p.v*.5;if(p.y>H){p.y=-20;p.x=Math.random()*W}});x.stroke();requestAnimationFrame(d)})()}
})();
