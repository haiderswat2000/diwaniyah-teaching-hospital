// محتوى الموقع — أضف هنا البيانات المعتمدة رسميًا من إدارة المستشفى فقط.
// لا تُضف أسماء أطباء أو أقسام أو خدمات غير موثقة.

const services = [];      // مثال: { title: "اسم الخدمة", text: "وصف معتمد" }
const departments = [];   // مثال: { title: "اسم القسم", text: "وصف معتمد" }
const news = [];          // مثال: { title: "العنوان", date: "2026-10-08", text: "النص", tag: "خبر" }
const announcements = []; // مثال: { title: "العنوان", date: "2026-10-08", text: "النص" }

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function card(item, cls = "news-card") {
  return `<article class="${cls}">${item.tag ? `<span class="tag">${esc(item.tag)}</span>` : ""}<h3>${esc(item.title)}</h3>${item.date ? `<div class="news-date">${esc(item.date)}</div>` : ""}<p>${esc(item.text)}</p></article>`;
}

function empty(msg) {
  return `<div class="empty-state"><p>${msg}</p></div>`;
}

function render(id, list, fn, emptyMsg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = list.length ? list.map(fn).join("") : empty(emptyMsg);
}

render("home-news", news.slice(0, 3), n => card(n), "لا توجد أخبار منشورة حاليًا.");
render("news-list", news, n => card(n), "لا توجد أخبار منشورة حاليًا.");
render("services-list", services, s => card(s, "service-card"), "سيتم نشر قائمة الخدمات بعد اعتمادها من إدارة المستشفى.");
render("departments-list", departments, d => card(d, "department-card"), "سيتم نشر قائمة الأقسام والوحدات بعد اعتمادها من إدارة المستشفى.");
render("announcements-list", announcements,
  a => `<article class="notice"><h3>${esc(a.title)}</h3>${a.date ? `<div class="news-date">${esc(a.date)}</div>` : ""}<p>${esc(a.text)}</p></article>`,
  "لا توجد إعلانات منشورة حاليًا.");
