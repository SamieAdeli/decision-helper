
// // Decision Helper - App Entry
// // ==============================

// let options = []; // لیست گزینه‌ها
// let criteria = [];
// let criteriaIdCounter = 1;
// let optionIdCounter = 1;
// let currentStage = 1;

// document.addEventListener('DOMContentLoaded', () => {
//   initApp();
// });

// function initApp() {
//   animateIntro();

//   const startBtn = document.getElementById('start-btn');
//   if (startBtn) {
//     startBtn.addEventListener('click', startDecision);
//   }
// }

// // انیمیشن ورود
// function animateIntro() {
//   const tl = gsap.timeline({
//     defaults: { ease: 'power3.out', duration: 1 }
//   });

//   tl.to('.intro-title', { opacity: 1, y: 0, duration: 1.1 })
//     .to('.intro-subtitle', { opacity: 1, y: 0, duration: 0.9 }, '-=0.75')
//     .to('.btn-primary', { opacity: 1, y: 0, duration: 0.8 }, '-=0.65');
// }

// // ورود به فضای کار
// function startDecision() {
//   const intro = document.getElementById('intro');
//   const workspace = document.getElementById('workspace');

//   gsap.to(intro, {
//     opacity: 0,
//     y: -40,
//     duration: 0.6,
//     ease: 'power2.in',
//     onComplete: () => {
//       intro.classList.add('hidden');
//       workspace.classList.remove('hidden');

//       gsap.fromTo(workspace,
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
//       );

//       gsap.from('.empty-state', {
//         opacity: 0,
//         scale: 0.96,
//         duration: 0.8,
//         delay: 0.15,
//         ease: 'power3.out'
//       });

//       // رویداد دکمه اضافه کردن اولین گزینه
//       const addFirstBtn = document.getElementById('add-first-option');
//       if (addFirstBtn) {
//         addFirstBtn.addEventListener('click', addNewOption);
//       }

//       // رویداد دکمه رفتن به مرحله ۲
//       const goToStage2Btn = document.getElementById('go-to-stage-2');
//       if (goToStage2Btn) {
//         goToStage2Btn.addEventListener('click', goToStage2);
//       }
//     }
//   });
// }

// // اضافه کردن گزینه جدید
// function addNewOption() {
//   const id = optionIdCounter++;
//   const newOption = {
//     id,
//     name: ''
//   };

//   options.push(newOption);
//   renderOptions();
// }

// // رندر کردن همه گزینه‌ها
// // رندر کردن همه گزینه‌ها
// function renderOptions() {
//   const emptyState = document.getElementById('empty-state');
//   const grid = document.getElementById('options-grid');

//   if (options.length > 0) {
//     emptyState.classList.add('hidden');
//   } else {
//     emptyState.classList.remove('hidden');
//     grid.innerHTML = '';
//     return;
//   }

//   grid.innerHTML = '';

//   options.forEach((opt, index) => {
//     const card = document.createElement('div');
//     card.className = 'option-card';
//     card.dataset.id = opt.id;

//     card.innerHTML = `
//       <div class="card-header">
//         <input 
//           type="text" 
//           class="option-name" 
//           placeholder="نام گزینه را بنویس..." 
//           value="${opt.name}"
//         />
//         <button class="delete-btn" title="حذف">×</button>
//       </div>
//       <div class="card-footer">
//         گزینه ${index + 1}
//       </div>
//     `;

//     // رویداد تغییر نام + پشتیبانی از Enter
// const input = card.querySelector('.option-name');

// input.addEventListener('input', (e) => {
//   opt.name = e.target.value;
// });

// // با فشردن Enter گزینه جدید بساز
// input.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
    
//     // اگر فیلد خالی نبود، گزینه جدید بساز
//     if (input.value.trim() !== '') {
//       addNewOption();
      
//       // بعد از رندر، فوکوس روی آخرین اینپوت
//       setTimeout(() => {
//         const allInputs = document.querySelectorAll('.option-name');
//         const lastInput = allInputs[allInputs.length - 1];
//         if (lastInput) lastInput.focus();
//       }, 50);
//     }
//   }
// });

//     const deleteBtn = card.querySelector('.delete-btn');
//     deleteBtn.addEventListener('click', () => {
//       deleteOption(opt.id);
//     });

//     grid.appendChild(card);

//     // انیمیشن ورود تمیز (بدون مشکل opacity)
//     gsap.fromTo(card, 
//       { opacity: 0, y: 20, scale: 0.96 },
//       { 
//         opacity: 1, 
//         y: 0, 
//         scale: 1, 
//         duration: 0.45, 
//         delay: index * 0.06,
//         ease: 'power3.out',
//         clearProps: 'scale' // مهم: بعد از انیمیشن scale را پاک می‌کند
//       }
//     );
//   });

//   // دکمه اضافه کردن
//   const addBtn = document.createElement('button');
//   addBtn.className = 'add-option-btn';
//   addBtn.innerHTML = `+ اضافه کردن گزینه`;
//   addBtn.addEventListener('click', addNewOption);
//   grid.appendChild(addBtn);

//   gsap.fromTo(addBtn,
//     { opacity: 0, scale: 0.95 },
//     { 
//       opacity: 1, 
//       scale: 1, 
//       duration: 0.4, 
//       delay: options.length * 0.06,
//       ease: 'power3.out',
//       clearProps: 'scale'
//     }
//   );
//     // مدیریت دکمه ادامه
//   updateStage1Actions();
// }

// // حذف گزینه
// function deleteOption(id) {
//   const card = document.querySelector(`.option-card[data-id="${id}"]`);
  
//   gsap.to(card, {
//     opacity: 0,
//     scale: 0.9,
//     duration: 0.3,
//     ease: 'power2.in',
//     onComplete: () => {
//       options = options.filter(opt => opt.id !== id);
//       renderOptions();
//     }
//   });
// }
// // اضافه کردن معیار جدید
// function addNewCriteria() {
//   const id = criteriaIdCounter++;
//   const newCriteria = {
//     id,
//     name: '',
//     weight: 5
//   };
//   criteria.push(newCriteria);
//   renderCriteria();
// }

// // رندر معیارها
// function renderCriteria() {
//   const list = document.getElementById('criteria-list');
//   list.innerHTML = '';

//   if (criteria.length === 0) {
//     list.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem; padding: 0.5rem 0;">هنوز معیاری اضافه نکرده‌ای</p>`;
//     return;
//   }

//   criteria.forEach((item, index) => {
//     const el = document.createElement('div');
//     el.className = 'criteria-item';
//     el.dataset.id = item.id;

//     el.innerHTML = `
//       <input type="text" placeholder="نام معیار (مثلاً قیمت، کیفیت...)" value="${item.name}" />
//       <div class="criteria-weight">
//         <label>اهمیت:</label>
//         <input type="range" min="1" max="10" value="${item.weight}" />
//         <span class="weight-value">${item.weight}</span>
//       </div>
//       <button class="criteria-delete" title="حذف">×</button>
//     `;

//     // رویدادها
//     const nameInput = el.querySelector('input[type="text"]');
//     nameInput.addEventListener('input', (e) => {
//       item.name = e.target.value;
//     });

//     const range = el.querySelector('input[type="range"]');
//     const valueSpan = el.querySelector('.weight-value');
//     range.addEventListener('input', (e) => {
//       item.weight = Number(e.target.value);
//       valueSpan.textContent = item.weight;
//     });

//     const deleteBtn = el.querySelector('.criteria-delete');
//     deleteBtn.addEventListener('click', () => {
//       deleteCriteria(item.id);
//     });

//     list.appendChild(el);

//     // انیمیشن ورود
//     gsap.fromTo(el,
//       { opacity: 0, x: 20 },
//       { opacity: 1, x: 0, duration: 0.4, delay: index * 0.05, ease: 'power3.out' }
//     );
//   });
// }

// // حذف معیار
// function deleteCriteria(id) {
//   const el = document.querySelector(`.criteria-item[data-id="${id}"]`);
//   gsap.to(el, {
//     opacity: 0,
//     x: -20,
//     duration: 0.3,
//     ease: 'power2.in',
//     onComplete: () => {
//       criteria = criteria.filter(c => c.id !== id);
//       renderCriteria();
//     }
//   });
// }

// // مدیریت دکمه و راهنمای مرحله ۱
// function updateStage1Actions() {
//   const actions = document.getElementById('stage-1-actions');
//   const goBtn = document.getElementById('go-to-stage-2');
//   const hint = document.getElementById('stage-1-hint');

//   if (options.length >= 1) {
//     actions.classList.remove('hidden');
//   } else {
//     actions.classList.add('hidden');
//   }

//   if (options.length >= 2) {
//     goBtn.disabled = false;
//     hint.textContent = 'می‌توانی به مرحله بعد بروی';
//     hint.style.color = 'var(--accent)';
//   } else {
//     goBtn.disabled = true;
//     hint.textContent = 'حداقل ۲ گزینه نیاز است';
//     hint.style.color = 'var(--text-muted)';
//   }
// }

// // رفتن به مرحله ۲
// function goToStage2() {
//   const stage1 = document.getElementById('stage-1');
//   const stage2 = document.getElementById('stage-2');

//   // آپدیت نشانگر مراحل
//   updateStepsIndicator(2);

//   // انیمیشن خروج مرحله ۱
//   gsap.to(stage1, {
//     opacity: 0,
//     y: -30,
//     duration: 0.45,
//     ease: 'power2.in',
//     onComplete: () => {
//       stage1.classList.add('hidden');
//       stage2.classList.remove('hidden');

//       // انیمیشن ورود مرحله ۲
//       gsap.fromTo(stage2,
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
//       );

//       // اگر هنوز معیاری نیست، یکی پیش‌فرض اضافه کن
//       if (criteria.length === 0) {
//         addNewCriteria();
//       } else {
//         renderCriteria();
//       }

//       // رویدادها
//       const addCriteriaBtn = document.getElementById('add-criteria-btn');
//       if (addCriteriaBtn) {
//         addCriteriaBtn.addEventListener('click', () => {
//           addNewCriteria();
//         });
//       }

//       const goToStage3Btn = document.getElementById('go-to-stage-3');
//       if (goToStage3Btn) {
//         goToStage3Btn.addEventListener('click', () => {
//           alert('مرحله ۳ (امتیازدهی) در مرحله بعدی پیاده‌سازی می‌شود');
//         });
//       }
//     }
//   });
// }

// // آپدیت نشانگر مراحل
// function updateStepsIndicator(activeStep) {
//   const steps = document.querySelectorAll('.step');
//   steps.forEach(step => {
//     const stepNum = Number(step.dataset.step);
//     step.classList.remove('active', 'completed');

//     if (stepNum < activeStep) {
//       step.classList.add('completed');
//     } else if (stepNum === activeStep) {
//       step.classList.add('active');
//     }
//   });
// }

// // اضافه کردن معیار جدید
// function addNewCriteria() {
//   const id = criteriaIdCounter++;
//   criteria.push({
//     id,
//     name: '',
//     weight: 5
//   });
//   renderCriteria();
// }

// // رندر معیارها
// function renderCriteria() {
//   const list = document.getElementById('criteria-list');
//   list.innerHTML = '';

//   criteria.forEach((item, index) => {
//     const el = document.createElement('div');
//     el.className = 'criteria-item';
//     el.dataset.id = item.id;

//     el.innerHTML = `
//       <input type="text" placeholder="نام معیار (مثلاً قیمت، کیفیت، زیبایی...)" value="${item.name}" />
//       <div class="criteria-weight">
//         <label>اهمیت:</label>
//         <input type="range" min="1" max="10" value="${item.weight}" />
//         <span class="weight-value">${item.weight}</span>
//       </div>
//       <button class="criteria-delete" title="حذف">×</button>
//     `;

//     const nameInput = el.querySelector('input[type="text"]');
//     nameInput.addEventListener('input', (e) => {
//       item.name = e.target.value;
//       updateStage2Actions();
//     });

//     // Enter = معیار جدید
//     nameInput.addEventListener('keydown', (e) => {
//       if (e.key === 'Enter') {
//         e.preventDefault();
//         if (nameInput.value.trim() !== '') {
//           addNewCriteria();
//           setTimeout(() => {
//             const inputs = document.querySelectorAll('.criteria-item input[type="text"]');
//             const last = inputs[inputs.length - 1];
//             if (last) last.focus();
//           }, 50);
//         }
//       }
//     });

//     const range = el.querySelector('input[type="range"]');
//     const valueSpan = el.querySelector('.weight-value');
//     range.addEventListener('input', (e) => {
//       item.weight = Number(e.target.value);
//       valueSpan.textContent = item.weight;
//     });

//     const deleteBtn = el.querySelector('.criteria-delete');
//     deleteBtn.addEventListener('click', () => {
//       deleteCriteria(item.id);
//     });

//     list.appendChild(el);

//     gsap.fromTo(el,
//       { opacity: 0, x: 20 },
//       { opacity: 1, x: 0, duration: 0.4, delay: index * 0.06, ease: 'power3.out' }
//     );
//   });

//   updateStage2Actions();
// }

// // حذف معیار
// function deleteCriteria(id) {
//   const el = document.querySelector(`.criteria-item[data-id="${id}"]`);
//   if (!el) return;

//   gsap.to(el, {
//     opacity: 0,
//     x: -20,
//     duration: 0.3,
//     ease: 'power2.in',
//     onComplete: () => {
//       criteria = criteria.filter(c => c.id !== id);
//       renderCriteria();
//     }
//   });
// }

// // مدیریت دکمه مرحله ۲
// function updateStage2Actions() {
//   const goBtn = document.getElementById('go-to-stage-3');
//   const hint = document.getElementById('stage-2-hint');
//   if (!goBtn || !hint) return;

//   const hasValid = criteria.some(c => c.name.trim() !== '');

//   if (hasValid) {
//     goBtn.disabled = false;
//     hint.textContent = 'می‌توانی به مرحله بعد بروی';
//     hint.style.color = 'var(--accent)';
//   } else {
//     goBtn.disabled = true;
//     hint.textContent = 'حداقل ۱ معیار با نام نیاز است';
//     hint.style.color = 'var(--text-muted)';
//   }
// }

// ==============================
// Decision Helper - App Entry
// ==============================

let options = [];
let criteria = [];
let optionIdCounter = 1;
let criteriaIdCounter = 1;
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
  gsap.set(['.intro-title', '.intro-subtitle', '.btn-primary'], {
    opacity: 0,
    y: 30
  });

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' }
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

      const addFirstBtn = document.getElementById('add-first-option');
      if (addFirstBtn) {
        addFirstBtn.addEventListener('click', addNewOption);
      }

      const goToStage2Btn = document.getElementById('go-to-stage-2');
      if (goToStage2Btn) {
        goToStage2Btn.addEventListener('click', goToStage2);
      }
    }
  });
}

// ==============================
// Stage 1 - Options
// ==============================

function addNewOption() {
  const id = optionIdCounter++;
  options.push({ id, name: '' });
  renderOptions();
}

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
        <input type="text" class="option-name" placeholder="نام گزینه را بنویس..." value="${opt.name}" />
        <button class="delete-btn" title="حذف">×</button>
      </div>
      <div class="card-footer">گزینه ${index + 1}</div>
    `;

    const input = card.querySelector('.option-name');

    input.addEventListener('input', (e) => {
      opt.name = e.target.value;
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (input.value.trim() !== '') {
          addNewOption();
          setTimeout(() => {
            const allInputs = document.querySelectorAll('.option-name');
            const lastInput = allInputs[allInputs.length - 1];
            if (lastInput) lastInput.focus();
          }, 50);
        }
      }
    });

    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteOption(opt.id));

    grid.appendChild(card);

    gsap.fromTo(card,
      { opacity: 0, y: 20, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, delay: index * 0.06, ease: 'power3.out', clearProps: 'scale' }
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
    { opacity: 1, scale: 1, duration: 0.4, delay: options.length * 0.06, ease: 'power3.out', clearProps: 'scale' }
  );

  updateStage1Actions();
}

function deleteOption(id) {
  const card = document.querySelector(`.option-card[data-id="${id}"]`);
  if (!card) return;

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

function updateStage1Actions() {
  const actions = document.getElementById('stage-1-actions');
  const goBtn = document.getElementById('go-to-stage-2');
  const hint = document.getElementById('stage-1-hint');
  if (!actions || !goBtn || !hint) return;

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

// ==============================
// Stage 2 - Criteria
// ==============================

function goToStage2() {
  const stage1 = document.getElementById('stage-1');
  const stage2 = document.getElementById('stage-2');

  updateStepsIndicator(2);

  gsap.to(stage1, {
    opacity: 0,
    y: -30,
    duration: 0.45,
    ease: 'power2.in',
    onComplete: () => {
      stage1.classList.add('hidden');
      stage2.classList.remove('hidden');

      gsap.fromTo(stage2,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );

      if (criteria.length === 0) {
        addNewCriteria();
      } else {
        renderCriteria();
      }

      const addCriteriaBtn = document.getElementById('add-criteria-btn');
      if (addCriteriaBtn) {
        addCriteriaBtn.addEventListener('click', addNewCriteria);
      }

      const goToStage3Btn = document.getElementById('go-to-stage-3');
if (goToStage3Btn) {
  goToStage3Btn.addEventListener('click', goToStage3);
}
    }
  });
}

function updateStepsIndicator(activeStep) {
  const steps = document.querySelectorAll('.step');
  steps.forEach(step => {
    const stepNum = Number(step.dataset.step);
    step.classList.remove('active', 'completed');

    if (stepNum < activeStep) {
      step.classList.add('completed');
    } else if (stepNum === activeStep) {
      step.classList.add('active');
    }
  });
}

function addNewCriteria() {
  const id = criteriaIdCounter++;
  criteria.push({ id, name: '', weight: 5 });
  renderCriteria();
}

function renderCriteria() {
  const list = document.getElementById('criteria-list');
  if (!list) return;
  list.innerHTML = '';

  criteria.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'criteria-item';
    el.dataset.id = item.id;

    el.innerHTML = `
      <input type="text" placeholder="نام معیار (مثلاً قیمت، کیفیت، زیبایی...)" value="${item.name}" />
      <div class="criteria-weight">
        <label>اهمیت:</label>
        <input type="range" min="1" max="10" value="${item.weight}" />
        <span class="weight-value">${item.weight}</span>
      </div>
      <button class="criteria-delete" title="حذف">×</button>
    `;

    const nameInput = el.querySelector('input[type="text"]');
    nameInput.addEventListener('input', (e) => {
      item.name = e.target.value;
      updateStage2Actions();
    });

    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (nameInput.value.trim() !== '') {
          addNewCriteria();
          setTimeout(() => {
            const inputs = document.querySelectorAll('.criteria-item input[type="text"]');
            const last = inputs[inputs.length - 1];
            if (last) last.focus();
          }, 50);
        }
      }
    });

    const range = el.querySelector('input[type="range"]');
    const valueSpan = el.querySelector('.weight-value');
    range.addEventListener('input', (e) => {
      item.weight = Number(e.target.value);
      valueSpan.textContent = item.weight;
    });

    const deleteBtn = el.querySelector('.criteria-delete');
    deleteBtn.addEventListener('click', () => deleteCriteria(item.id));

    list.appendChild(el);

    gsap.fromTo(el,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.4, delay: index * 0.06, ease: 'power3.out' }
    );
  });

  updateStage2Actions();
}

function deleteCriteria(id) {
  const el = document.querySelector(`.criteria-item[data-id="${id}"]`);
  if (!el) return;

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

function updateStage2Actions() {
  const goBtn = document.getElementById('go-to-stage-3');
  const hint = document.getElementById('stage-2-hint');
  if (!goBtn || !hint) return;

  const hasValid = criteria.some(c => c.name.trim() !== '');

  if (hasValid) {
    goBtn.disabled = false;
    hint.textContent = 'می‌توانی به مرحله بعد بروی';
    hint.style.color = 'var(--accent)';
  } else {
    goBtn.disabled = true;
    hint.textContent = 'حداقل ۱ معیار با نام نیاز است';
    hint.style.color = 'var(--text-muted)';
  }
}

// رفتن به مرحله ۳
function goToStage3() {
  const stage2 = document.getElementById('stage-2');
  const stage3 = document.getElementById('stage-3');

  updateStepsIndicator(3);

  gsap.to(stage2, {
    opacity: 0,
    y: -30,
    duration: 0.45,
    ease: 'power2.in',
    onComplete: () => {
      stage2.classList.add('hidden');
      stage3.classList.remove('hidden');

      gsap.fromTo(stage3,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );

      // آماده‌سازی ساختار امتیازها
      options.forEach(opt => {
        if (!opt.scores) opt.scores = {};
        criteria.forEach(c => {
          if (opt.scores[c.id] === undefined) {
            opt.scores[c.id] = 5; // مقدار پیش‌فرض
          }
        });
      });

      renderScoring();

      const goToStage4Btn = document.getElementById('go-to-stage-4');
      if (goToStage4Btn) {
        goToStage4Btn.addEventListener('click', () => {
          alert('مرحله ۴ (نتیجه) در مرحله بعدی پیاده‌سازی می‌شود');
        });
      }
    }
  });
}

// رندر صفحه امتیازدهی
function renderScoring() {
  const area = document.getElementById('scoring-area');
  if (!area) return;
  area.innerHTML = '';

  options.forEach((opt, optIndex) => {
    const card = document.createElement('div');
    card.className = 'scoring-card';

    let rowsHTML = '';
    criteria.forEach(c => {
      const score = opt.scores[c.id] ?? 5;
      rowsHTML += `
        <div class="score-row">
          <div class="score-criteria-name">${c.name || 'بدون نام'} <small style="color:var(--text-muted)">(اهمیت: ${c.weight})</small></div>
          <div class="score-controls">
            <input type="range" min="1" max="10" value="${score}" data-option="${opt.id}" data-criteria="${c.id}" />
            <span class="score-value">${score}</span>
          </div>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="scoring-card-header">${opt.name || 'گزینه بدون نام'}</div>
      ${rowsHTML}
    `;

    area.appendChild(card);

    // رویداد اسلایدرها
    card.querySelectorAll('input[type="range"]').forEach(range => {
      range.addEventListener('input', (e) => {
        const optionId = Number(e.target.dataset.option);
        const criteriaId = Number(e.target.dataset.criteria);
        const value = Number(e.target.value);

        const option = options.find(o => o.id === optionId);
        if (option) {
          option.scores[criteriaId] = value;
        }

        e.target.nextElementSibling.textContent = value;
        updateStage3Actions();
      });
    });

    gsap.fromTo(card,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.45, delay: optIndex * 0.08, ease: 'power3.out' }
    );
  });

  updateStage3Actions();
}

// بررسی کامل بودن امتیازها
function updateStage3Actions() {
  const goBtn = document.getElementById('go-to-stage-4');
  const hint = document.getElementById('stage-3-hint');
  if (!goBtn || !hint) return;

  // فعلاً همیشه فعال می‌کنیم (چون مقدار پیش‌فرض ۵ دارد)
  goBtn.disabled = false;
  hint.textContent = 'می‌توانی نتیجه را ببینی';
  hint.style.color = 'var(--accent)';
}