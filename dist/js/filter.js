const filter = document.getElementById('filter');
let projects = document.querySelector('.items');
let item_a = document.querySelector('.item-a');
let item_b = document.querySelector('.item-b');
let item_c = document.querySelector('.item-c');
let item_d = document.querySelector('.item-d');
let item_e = document.querySelector('.item-e');
let item_f = document.querySelector('.item-f');
let item_g = document.querySelector('.item-g');
let item_h = document.querySelector('.item-h');
let item_i = document.querySelector('.item-i');


filter.addEventListener('keyup', e => {
  const text = e.target.value.toLowerCase();

  if (text == 'javascript') {
    item_b.style.display = 'none';
    item_c.style.display = 'none';
    item_g.style.display = 'none';
    item_i.style.display = 'none';

  } else if (text === 'python') {
    item_a.style.display = 'none';
    item_d.style.display = 'none';
    item_e.style.display = 'none';
    item_f.style.display = 'none';
    item_g.style.display = 'none';
    item_h.style.display = 'none';

  } else if (text === 'bootstrap') {
    item_c.style.display = 'none';
    item_e.style.display = 'none';
    item_f.style.display = 'none';
  } else if (text === 'django') {
    item_a.style.display = 'none';
    item_b.style.display = 'none';
    item_d.style.display = 'none';
    item_e.style.display = 'none';
    item_f.style.display = 'none';
    item_g.style.display = 'none';
    item_h.style.display = 'none';
  } else if (text === 'html/css') {
    item_b.style.display = 'none';
    item_f.style.display = 'none';
    item_g.style.display = 'none';
    item_h.style.display = 'none';
  } else if (text === 'c++') {
    item_a.style.display = 'none';
    item_b.style.display = 'none';
    item_c.style.display = 'none';
    item_d.style.display = 'none';
    item_e.style.display = 'none';
    item_f.style.display = 'none';
    item_h.style.display = 'none';
    item_i.style.display = 'none';
  } else if (text === 'api') {
    item_b.style.display = 'none';
    item_c.style.display = 'none';
    item_g.style.display = 'none';
    item_i.style.display = 'none';

  } else {
    item_a.style.display = 'initial';
    item_b.style.display = 'initial';
    item_c.style.display = 'initial';
    item_d.style.display = 'initial';
    item_e.style.display = 'initial';
    item_f.style.display = 'initial';
    item_g.style.display = 'initial';
    item_h.style.display = 'initial';
    item_i.style.display = 'initial';
  }

});