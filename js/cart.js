function loadCart() {
  try { return JSON.parse(localStorage.getItem('cart')) || []; }
  catch (e) { return []; }
}
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// ---- formatting ----
function fmt(n) { return 'RM' + Number(n || 0).toFixed(2); }

// ---- UI badges (optional; safe if not present) ----
function updateCartUI() {
  const cart = loadCart();
  const cartCount = cart.reduce((t, i) => t + i.quantity, 0);
  const cartTotal = cart.reduce((t, i) => t + (Number(i.price) * i.quantity), 0);

  $('.cart-count').text(cartCount);
  $('.cart-total').text(fmt(cartTotal));
}


// ---- CART PAGE rendering (cart.html) ----
function renderCart() {
  const cart = loadCart();
  const $tbody = $('#cartBody');
  if (!$tbody.length) return; // not on cart page

  $tbody.empty();
  let subtotal = 0;

  if (cart.length === 0) {
    $tbody.append(`<tr><td colspan="6" class="text-center py-5">Your cart is empty</td></tr>`);
  } else {
    cart.forEach(item => {
      const unit = Number(item.price) || 0;
      const rowTotal = unit * item.quantity;
      subtotal += rowTotal;

      const row = `
        <tr data-id="${item.id}">
          <td>
            <div class="d-flex align-items-center">
              ${item.image ? `<img src="${item.image}" alt="${item.name}" class="img-thumbnail me-3" style="width:60px;height:60px;">` : ''}
              <div>
                <h6 class="mb-0">${item.name}</h6>
                <small class="text-muted">${item.category || ''}</small>
              </div>
            </div>
          </td>
          <td class="text-muted">${item.model}</td> 
          <td>${fmt(unit)}</td>
          <td>
            <div class="input-group quantity" style="width:110px;">
              <button class="btn btn-sm btn-minus bg-light border" type="button">-</button>
              <input type="text" class="form-control form-control-sm text-center border-0 qty-input" value="${item.quantity}">
              <button class="btn btn-sm btn-plus bg-light border" type="button">+</button>
            </div>
          </td>
          <td class="subtotal">${fmt(rowTotal)}</td>
          <td>
            <button class="btn btn-sm btn-outline-danger btn-remove" type="button"><i class="fa fa-times"></i></button>
          </td>
        </tr>`;
      $tbody.append(row);
    });
  }

  // Summary widgets (safe if not present)
  $('#cartSubtotal').text(fmt(subtotal));
  $('#cartTotal').text(fmt(subtotal)); // change if you add shipping/tax
  updateCartUI();
}

// plus/minus
$(document).on('click', '.btn-minus, .btn-plus', function () {
  const $tr = $(this).closest('tr');
  const id = String($tr.data('id'));
  let cart = loadCart();
  const item = cart.find(i => String(i.id) === id);
  if (!item) return;

  if ($(this).hasClass('btn-plus')) item.quantity++;
  else item.quantity = Math.max(1, item.quantity - 1);

  saveCart(cart);
  renderCart();
});

// manual qty edit
$(document).on('change', '.qty-input', function () {
  const $tr = $(this).closest('tr');
  const id = String($tr.data('id'));
  let cart = loadCart();
  const item = cart.find(i => String(i.id) === id);
  if (!item) return;

  item.quantity = Math.max(1, parseInt($(this).val(), 10) || 1);
  saveCart(cart);
  renderCart();
});

// remove
$(document).on('click', '.btn-remove', function () {
  const id = String($(this).closest('tr').data('id'));
  let cart = loadCart().filter(i => String(i.id) !== id);
  saveCart(cart);
  renderCart();
});

// init everywhere
$(document).ready(function () {
  updateCartUI();
  renderCart(); // will only draw on the cart page
});







