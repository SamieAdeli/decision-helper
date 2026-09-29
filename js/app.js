// ==============================
// Decision Helper - App Entry
// ==============================

let options = []; // لیست گزینه‌ها
let criteria = [];
let criteriaIdCounter = 1;
let optionIdCounter = 1;
let currentStage = 1;

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  animateIntro();

  const startBtn = document.getElementById('start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', startDecision);
  }
}

// انیمیشن ورود
function animateIntro() {
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out', duration: 1 }
  });

  tl.to('.intro-title', { opacity: 1, y: 0, duration: 1.1 })
    .to('.intro-subtitle', { opacity: 1, y: 0, duration: 0.9 }, '-=0.75')
    .to('.btn-primary', { opacity: 1, y: 0, duration: 0.8 }, '-=0.65');
}

// ورود به فضای کار
function startDecision() {
  const intro = document.getElementById('intro');
  const workspace = document.getElementById('workspace');

  gsap.to(intro, {
    opacity: 0,
    y: -40,
    duration: 0.6,
    ease: 'power2.in',
    onComplete: () => {
      intro.classList.add('hidden');
      workspace.classList.remove('hidden');

      gsap.fromTo(workspace,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      );

      gsap.from('.empty-state', {
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out'
      });

      // رویداد دکمه اضافه کردن اولین گزینه
      const addFirstBtn = document.getElementById('add-first-option');
      if (addFirstBtn) {
        addFirstBtn.addEventListener('click', addNewOption);
      }

      // رویداد دکمه افزودن معیار
const addCriteriaBtn = document.getElementById('add-criteria-btn');
if (addCriteriaBtn) {
  addCriteriaBtn.addEventListener('click', addNewCriteria);
}
    }
  });
}

// اضافه کردن گزینه جدید
function addNewOption() {
  const id = optionIdCounter++;
  const newOption = {
    id,
    name: ''
  };

  options.push(newOption);
  renderOptions();
}

// رندر کردن همه گزینه‌ها
// رندر کردن همه گزینه‌ها
function renderOptions() {
  const emptyState = document.getElementById('empty-state');
  const grid = document.getElementById('options-grid');

  if (options.length > 0) {
    emptyState.classList.add('hidden');
  } else {
    emptyState.classList.remove('hidden');
    grid.innerHTML = '';
    return;
  }

  grid.innerHTML = '';

  options.forEach((opt, index) => {
    const card = document.createElement('div');
    card.className = 'option-card';
    card.dataset.id = opt.id;

    card.innerHTML = `
      <div class="card-header">
        <input 
          type="text" 
          class="option-name" 
          placeholder="نام گزینه را بنویس..." 
          value="${opt.name}"
        />
        <button class="delete-btn" title="حذف">×</button>
      </div>
      <div class="card-footer">
        گزینه ${index + 1}
      </div>
    `;

    const input = card.querySelector('.option-name');
    input.addEventListener('input', (e) => {
      opt.name = e.target.value;
    });

    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      deleteOption(opt.id);
    });

    grid.appendChild(card);

    // انیمیشن ورود تمیز (بدون مشکل opacity)
    gsap.fromTo(card, 
      { opacity: 0, y: 20, scale: 0.96 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.45, 
        delay: index * 0.06,
        ease: 'power3.out',
        clearProps: 'scale' // مهم: بعد از انیمیشن scale را پاک می‌کند
      }
    );
  });

  // دکمه اضافه کردن
  const addBtn = document.createElement('button');
  addBtn.className = 'add-option-btn';
  addBtn.innerHTML = `+ اضافه کردن گزینه`;
  addBtn.addEventListener('click', addNewOption);
  grid.appendChild(addBtn);

  gsap.fromTo(addBtn,
    { opacity: 0, scale: 0.95 },
    { 
      opacity: 1, 
      scale: 1, 
      duration: 0.4, 
      delay: options.length * 0.06,
      ease: 'power3.out',
      clearProps: 'scale'
    }
  );
    // مدیریت دکمه ادامه
  updateStage1Actions();
}

// حذف گزینه
function deleteOption(id) {
  const card = document.querySelector(`.option-card[data-id="${id}"]`);
  
  gsap.to(card, {
    opacity: 0,
    scale: 0.9,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      options = options.filter(opt => opt.id !== id);
      renderOptions();
    }
  });
}
// اضافه کردن معیار جدید
function addNewCriteria() {
  const id = criteriaIdCounter++;
  const newCriteria = {
    id,
    name: '',
    weight: 5
  };
  criteria.push(newCriteria);
  renderCriteria();
}

// رندر معیارها
function renderCriteria() {
  const list = document.getElementById('criteria-list');
  list.innerHTML = '';

  if (criteria.length === 0) {
    list.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem; padding: 0.5rem 0;">هنوز معیاری اضافه نکرده‌ای</p>`;
    return;
  }

  criteria.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'criteria-item';
    el.dataset.id = item.id;

    el.innerHTML = `
      <input type="text" placeholder="نام معیار (مثلاً قیمت، کیفیت...)" value="${item.name}" />
      <div class="criteria-weight">
        <label>اهمیت:</label>
        <input type="range" min="1" max="10" value="${item.weight}" />
        <span class="weight-value">${item.weight}</span>
      </div>
      <button class="criteria-delete" title="حذف">×</button>
    `;

    // رویدادها
    const nameInput = el.querySelector('input[type="text"]');
    nameInput.addEventListener('input', (e) => {
      item.name = e.target.value;
    });

    const range = el.querySelector('input[type="range"]');
    const valueSpan = el.querySelector('.weight-value');
    range.addEventListener('input', (e) => {
      item.weight = Number(e.target.value);
      valueSpan.textContent = item.weight;
    });

    const deleteBtn = el.querySelector('.criteria-delete');
    deleteBtn.addEventListener('click', () => {
      deleteCriteria(item.id);
    });

    list.appendChild(el);

    // انیمیشن ورود
    gsap.fromTo(el,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.4, delay: index * 0.05, ease: 'power3.out' }
    );
  });
}

// حذف معیار
function deleteCriteria(id) {
  const el = document.querySelector(`.criteria-item[data-id="${id}"]`);
  gsap.to(el, {
    opacity: 0,
    x: -20,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      criteria = criteria.filter(c => c.id !== id);
      renderCriteria();
    }
  });
}

// مدیریت دکمه و راهنمای مرحله ۱
function updateStage1Actions() {
  const actions = document.getElementById('stage-1-actions');
  const goBtn = document.getElementById('go-to-stage-2');
  const hint = document.getElementById('stage-1-hint');

  if (options.length >= 1) {
    actions.classList.remove('hidden');
  } else {
    actions.classList.add('hidden');
  }

  if (options.length >= 2) {
    goBtn.disabled = false;
    hint.textContent = 'می‌توانی به مرحله بعد بروی';
    hint.style.color = 'var(--accent)';
  } else {
    goBtn.disabled = true;
    hint.textContent = 'حداقل ۲ گزینه نیاز است';
    hint.style.color = 'var(--text-muted)';
  }
}