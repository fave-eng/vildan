(() => {
  'use strict';
  const root = document.getElementById('knowledge-list');
  if (!root) return;
  const data = Array.isArray(window.KNOWLEDGE_DATA) ? window.KNOWLEDGE_DATA : [];
  function el(tag, cls, content) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (content !== undefined) node.textContent = String(content);
    return node;
  }
  function validHref(value) {
    const href = String(value || '').trim();
    return /^(?:index|homework|lesson|grammar|grammar-topic|vocabulary|vocabulary-hub|knowledge)\.html(?:[?#][A-Za-z0-9_&=%+.#-]*)?$/.test(href);
  }
  const active = data.filter(unit => unit && Array.isArray(unit.topics) && unit.topics.length);
  if (!active.length) {
    const section = el('section', 'section');
    const card = el('div', 'card');
    card.style.padding = 'clamp(24px, 5vw, 42px)';
    card.style.maxWidth = '780px';
    card.append(el('span', 'eyebrow', 'YOUR LEARNING LIBRARY'), el('h2', '', 'Your notes will appear here'), el('p', '', 'As you study, this page will collect grammar rules, comparisons, vocabulary explanations and pronunciation notes. Each note will be linked to the relevant lesson.'));
    section.append(card);
    root.append(section);
    return;
  }
  active.forEach((unit, uidx) => {
    const section = el('section','section');
    const top = el('div','kb-unit-heading');
    top.append(el('span','kb-unit-chip',unit.unit || `UNIT ${uidx+1}`), el('h2','',unit.title || 'Reference notes'));
    if (unit.description) top.append(el('p','',unit.description));
    section.append(top);
    const nav = el('nav','kb-topic-nav');
    nav.setAttribute('aria-label', 'Topics in ' + (unit.unit || 'this unit'));
    unit.topics.forEach((topic,tidx) => {
      if (!topic) return;
      const id = String(topic.id || `note-${uidx+1}-${tidx+1}`).replace(/[^a-zA-Z0-9_-]/g,'-');
      const a = el('a'); a.href='#'+id;
      a.append(el('small','',`${String(tidx+1).padStart(2,'0')} · ${topic.type || 'REFERENCE'}`), el('strong','',topic.title || 'Note'), el('span','', '↓'));
      nav.append(a);
      const article = el('article', 'section kb-article'); article.id=id;
      article.append(el('div','kb-section-label', topic.type || 'REFERENCE'), el('h2','',topic.title || 'Note'));
      if (topic.summary) article.append(el('p','kb-lead',topic.summary));
      (Array.isArray(topic.sections) ? topic.sections : []).forEach(part => {
        if (part.heading) article.append(el('h3','kb-subheading',part.heading));
        (Array.isArray(part.paragraphs) ? part.paragraphs : []).forEach(text => article.append(el('p','',text)));
        (Array.isArray(part.examples) ? part.examples : []).forEach(ex => {
          const example=el('div','card'); example.style.margin='12px 0'; example.style.padding='18px';
          if (ex.en) example.append(el('strong','',ex.en));
          if (ex.ru) example.append(el('p','',ex.ru));
          if (ex.note) example.append(el('small','',ex.note));
          article.append(example);
        });
      });
      const actions=el('div','kb-article-actions');
      (Array.isArray(topic.links) ? topic.links : []).forEach(link => {
        if (!validHref(link.href)) return;
        const a=el('a','btn btn-primary',link.label || 'Open practice');
        a.href=link.href; actions.append(a);
      });
      if (actions.children.length) article.append(actions);
      section.append(article);
    });
    if (nav.children.length) section.insertBefore(nav, section.children[1] || null);
    root.append(section);
  });
})();
