(function(){
    'use strict';

    const S = i => curriculumData[i];
    const C = (s,c) => curriculumData[s]?.chapters[c];

    const state = {
      activeSection: 0,
      openChapters: {},      // key: ci -> true (multiple chapters can be open)
      openLessons: {},       // key: "ci-li" (multiple lessons can have dropdown open)
      activeSource: null,    // {ci, li, src, title, label}
    };

    const secTabs = document.getElementById('secTabs');
    const sidebarNav = document.getElementById('sidebarNav');
    const emptyViewer = document.getElementById('emptyViewer');
    const viewerPanel = document.getElementById('viewerPanel');
    const vBadge = document.getElementById('vBadge');
    const vTitle = document.getElementById('vTitle');
    const vIframe = document.getElementById('vIframe');
    const vClose = document.getElementById('vClose');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sideOverlay');
    const hamburger = document.getElementById('hamburgerBtn');

    // ----- SOURCES -----
    function getSources(lesson){
      const out=[];
      if(lesson.yt) out.push({type:'yt',label:'Bài giảng',icon:'fa-brands fa-youtube',src:`https://www.youtube.com/embed/${lesson.yt}?rel=0`});
      if(lesson.bunny) out.push({type:'bunny',label:'Bài giảng',icon:'fa-solid fa-video',src:`https://iframe.mediadelivery.net/embed/${lesson.bunny}`});
      if(lesson.gd && !lesson.yt && !lesson.bunny) out.push({type:'gd',label:'Tài liệu',icon:'fa-solid fa-file-lines',src:`https://drive.google.com/file/d/${lesson.gd}/preview`});

      if(lesson.related){
        ['yt','yt2','yt3','bunny','gd'].forEach(k=>{
          if(lesson.related[k]){
            const lb=k.startsWith('yt')?'Phần '+((k==='yt'?1:k==='yt2'?2:3)):'Bổ sung';
            const s=k.startsWith('yt')?`https://www.youtube.com/embed/${lesson.related[k]}?rel=0`:
                    k==='bunny'?`https://iframe.mediadelivery.net/embed/${lesson.related[k]}`:
                    `https://drive.google.com/file/d/${lesson.related[k]}/preview`;
            out.push({type:k,label:lb,icon:'fa-solid fa-plus-circle',src:s});
          }
        });
      }

      if(lesson.homework){
        const h=lesson.homework;
        if(h.yt) out.push({type:'hw-yt',label:'BTVN (Video)',icon:'fa-solid fa-pen-to-square',src:`https://www.youtube.com/embed/${h.yt}?rel=0`});
        if(h.yt2) out.push({type:'hw-yt2',label:'BTVN (Video 2)',icon:'fa-solid fa-pen-to-square',src:`https://www.youtube.com/embed/${h.yt2}?rel=0`});
        if(h.yt3) out.push({type:'hw-yt3',label:'BTVN (Video 3)',icon:'fa-solid fa-pen-to-square',src:`https://www.youtube.com/embed/${h.yt3}?rel=0`});
        if(h.gd) out.push({type:'hw-gd',label:'BTVN (Tài liệu)',icon:'fa-solid fa-file-pdf',src:`https://drive.google.com/file/d/${h.gd}/preview`});
        if(h.url) out.push({type:'hw-url',label:'BTVN (Web)',icon:'fa-solid fa-external-link-alt',src:h.url});
      }
      return out;
    }

    function hasBTVN(lesson){
      if(!lesson.homework) return false;
      const h=lesson.homework;
      return !!(h.yt||h.yt2||h.yt3||h.gd||h.url);
    }

    function hasDropdown(lesson){
      const sources=getSources(lesson);
      return sources.length>1;
    }

    function isLessonOpen(ci, li){
      return !!state.openLessons[ci+'-'+li];
    }

    function isChapterOpen(ci){
      return !!state.openChapters[ci];
    }

    // ----- RENDER TABS -----
    function renderTabs(){
      let html='';
      curriculumData.forEach((sec,i)=>{
        const a=i===state.activeSection;
        html+=`<button class="sec-tab ${a?'active':''}" data-si="${i}" style="${a?`--tab-c:${sec.color}`:''}">
          <i class="fa-solid ${sec.icon}" style="color:${sec.color}"></i> ${sec.section}
        </button>`;
      });
      secTabs.innerHTML=html;
      secTabs.querySelectorAll('.sec-tab').forEach(btn=>{
        btn.addEventListener('click',()=>{
          const si=parseInt(btn.dataset.si);
          if(si!==state.activeSection){
            state.activeSection=si;
            state.openChapters={};
            state.openLessons={};
            state.activeSource=null;
            renderTabs();
            renderNav();
            closeViewer();
          }
        });
      });
    }

    // ----- RENDER NAV -----
    function renderNav(){
      const sec=S(state.activeSection);
      if(!sec){sidebarNav.innerHTML='';return}

      let html='';
      sec.chapters.forEach((ch,ci)=>{
        const openCh=isChapterOpen(ci);
        html+=`<div class="ch-group">`;
        html+=`<button class="ch-btn ${openCh?'active':''}" data-ci="${ci}">
          <span class="tri ${openCh?'open':''}">▶</span>
          <span class="cl">${ch.title}</span>
          <span class="cnt">${ch.lessons.length}</span>
        </button>`;
        html+=`<div class="lesson-list ${openCh?'open':''}">`;

        ch.lessons.forEach((lesson,li)=>{
          const isOpen=isLessonOpen(ci, li);
          const sources=getSources(lesson);
          const mainSrcs=sources.filter(s=>!s.type.startsWith('hw-'));
          const hwSrcs=sources.filter(s=>s.type.startsWith('hw-'));
          const hasHW=hwSrcs.length>0;
          const hasDD=hasDropdown(lesson);
          const isActive=state.activeSource && state.activeSource.ci===ci && state.activeSource.li===li;

          html+=`<div class="lesson-group">`;
          html+=`<button class="lesson-top ${isActive?'active':''}" data-ci="${ci}" data-li="${li}" style="${isActive?`--sec-c:${sec.color}`:''}">
            <span class="ltri ${hasDD?'show':''} ${isOpen?'open':''}">▶</span>
            <span class="llabel">${lesson.title}</span>
            <span class="lcount">${hasHW?`<span style="background:rgba(255,255,255,.1);color:rgba(255,255,255,.5)">BTVN</span>`:''}</span>
          </button>`;

          // Source list (dropdown)
          html+=`<div class="source-list ${isOpen?'open':''}">`;

          // Main sources
          mainSrcs.forEach(src=>{
            const act=state.activeSource && state.activeSource.ci===ci && state.activeSource.li===li && state.activeSource.src===src.src;
            let iconColor='#888';
            if(src.type==='yt') iconColor='#c62828';
            else if(src.type==='bunny') iconColor='#1565c0';
            else if(src.type==='gd') iconColor='#2e7d32';

            html+=`<button class="source-item ${act?'active':''}" data-ci="${ci}" data-li="${li}" data-src="${src.src}" data-label="${src.label}" data-title="${lesson.title}">
              <i class="${src.icon} si-icon" style="color:${iconColor}"></i>
              <span class="si-label">${src.label}</span>
            </button>`;
          });

          // HW items
          hwSrcs.forEach(src=>{
            const act=state.activeSource && state.activeSource.ci===ci && state.activeSource.li===li && state.activeSource.src===src.src;
            html+=`<button class="source-item ${act?'active':''}" data-ci="${ci}" data-li="${li}" data-src="${src.src}" data-label="${src.label}" data-title="${lesson.title}">
              <i class="${src.icon} si-icon" style="color:#7b1fa2"></i>
              <span class="si-label">${src.label}</span>
            </button>`;
          });

          html+=`</div>`; // source-list
          html+=`</div>`; // lesson-group
        });

        html+=`</div>`; // lesson-list
        html+=`</div>`; // ch-group
      });
      sidebarNav.innerHTML=html;

      // Chapter click - toggle, multiple chapters can stay open
      sidebarNav.querySelectorAll('.ch-btn').forEach(btn=>{
        btn.addEventListener('click',()=>{
          const ci=parseInt(btn.dataset.ci);
          if(state.openChapters[ci]){
            delete state.openChapters[ci];
          } else {
            state.openChapters[ci]=true;
          }
          renderNav();
        });
      });

      // Lesson click — toggle dropdown
      sidebarNav.querySelectorAll('.lesson-top').forEach(btn=>{
        btn.addEventListener('click',()=>{
          const ci=parseInt(btn.dataset.ci);
          const li=parseInt(btn.dataset.li);
          const key=ci+'-'+li;
          const lesson=C(state.activeSection,ci).lessons[li];
          const sources=getSources(lesson);
          const hasDD=hasDropdown(lesson);

          if(hasDD){
            if(state.openLessons[key]){
              delete state.openLessons[key];
            } else {
              state.openLessons[key]=true;
            }
            renderNav();
          } else {
            if(sources.length>0){
              state.openChapters[ci]=true;
              state.activeSource={ci,li,src:sources[0].src,title:lesson.title,label:sources[0].label};
              openSource(sources[0],lesson.title);
              renderNav();
              closeMobileSidebar();
            }
          }
        });
      });

      // Source item click
      sidebarNav.querySelectorAll('.source-item').forEach(btn=>{
        btn.addEventListener('click',()=>{
          const ci=parseInt(btn.dataset.ci);
          const li=parseInt(btn.dataset.li);
          const srcStr=btn.dataset.src;
          const label=btn.dataset.label;
          const title=btn.dataset.title;
          const sources=getSources(C(state.activeSection,ci).lessons[li]);
          const matchedSrc=sources.find(s=>s.src===srcStr)||{src:srcStr,label,icon:'fa-solid fa-file'};

          state.openChapters[ci]=true;
          state.activeSource={ci,li,src:matchedSrc.src,title,label};
          openSource(matchedSrc,title);
          renderNav();
          closeMobileSidebar();
        });
      });

      // Auto-scroll
      const actEl=sidebarNav.querySelector('.lesson-top.active, .source-item.active');
      if(actEl) setTimeout(()=>actEl.scrollIntoView({block:'nearest',behavior:'smooth'}),60);
    }

    // ----- OPEN SOURCE -----
    function openSource(src,title){
      emptyViewer.style.display='none';
      viewerPanel.classList.add('open');

      let badgeColor='#4A90D9';
      if(src.type==='yt'||src.type.startsWith('yt')) badgeColor='#c62828';
      else if(src.type==='gd'||src.type.startsWith('gd')) badgeColor='#2e7d32';
      else if(src.type==='bunny') badgeColor='#1565c0';
      else if(src.type==='url') badgeColor='#e65100';
      else if(src.type&&src.type.startsWith('hw')) badgeColor='#7b1fa2';

      vBadge.textContent=src.label;
      vBadge.style.background=badgeColor+'22';
      vBadge.style.color=badgeColor;
      vTitle.textContent=title;
      vIframe.src=src.src;
    }

    // ----- CLOSE -----
    function closeViewer(){
      state.activeSource=null;
      emptyViewer.style.display='flex';
      viewerPanel.classList.remove('open');
      vIframe.src='';
    }

    vClose.addEventListener('click',closeViewer);
    document.addEventListener('keydown',(e)=>{
      if(e.key==='Escape' && state.activeSource) closeViewer();
    });

    // ----- SIDEBAR TOGGLE -----
    function closeMobileSidebar(){
      if(window.innerWidth<=820){sidebar.classList.remove('open');overlay.classList.remove('show')}
    }
    hamburger.addEventListener('click',()=>{
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    });
    overlay.addEventListener('click',closeMobileSidebar);

    // ----- INIT -----
    renderTabs();
    state.openChapters[0]=true;
    renderNav();

  })();
