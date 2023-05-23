document.addEventListener('DOMContentLoaded', function () {
  // Get the form element
  const createProductForm = document.querySelector('form');
  // Get the input fields and error message elements
  const productInput = document.getElementById('product');
  const productError = document.querySelector('.product-error');
  const descriptionInput = document.getElementById('descripcion');
  const descriptionError = document.querySelector('.description-error');
  const fileInput = document.getElementById('file');
  const fileError = document.querySelector('.file-error');
  const priceInput = document.getElementById('price');
  const priceError = document.querySelector('.price-error');
  const categorySelect = document.getElementById('category');
  const categoryError = document.querySelector('.category-error');

  // Get the submit button element
  const createButton = document.querySelector('.añadir');

  // Event listeners for real-time validation
  productInput.addEventListener('input', function () {
    validateProduct();
    checkFormValidity();
  });

  descriptionInput.addEventListener('input', function () {
    validateDescription();
    checkFormValidity();
  });

  fileInput.addEventListener('change', function () {
    validateFile();
    checkFormValidity();
  });

  priceInput.addEventListener('input', function () {
    validatePrice();
    checkFormValidity();
  });

  categorySelect.addEventListener('change', function () {
    validateCategory();
    checkFormValidity();
  });

  // Add event listener for form submission
  createProductForm.addEventListener('submit', (e) => {
    if (!validateForm()) {
      // Prevent form submission if validation fails
      createButton.disabled = true;
      e.preventDefault();
    }
  });

  // Function to check form validity
  function checkFormValidity() {
    const isValidForm = validateForm();
    createButton.disabled = !isValidForm;
  }

  // Function to validate the product field
  function validateProduct() {
    productError.textContent = '';
    if (productInput.value.trim() === '') {
      productError.textContent = 'Por favor, ingresa el nombre del producto.';
      return false;
    }

    return true;
  }

  // Function to validate the description field
  function validateDescription() {
    descriptionError.textContent = '';
    if (descriptionInput.value.trim() === '') {
      descriptionError.textContent = 'Por favor, ingresa la descripción del producto.';
      return false;
    }

    return true;
  }

  // Function to validate the file field which should contain just one image and not to be empty
  function validateFile() {
    fileError.textContent = '';
    if (fileInput.files.length === 0) {
      fileError.textContent = 'Por favor, selecciona una imagen.';
      return false;
    } else if (fileInput.files.length > 1) {
      fileError.textContent = 'Por favor, selecciona sólo una imagen.';
      return false;
    }

    return true;
  }

  // Function to validate the price field
  function validatePrice() {
    priceError.textContent = '';
    if (priceInput.value.trim() === '') {
      priceError.textContent = 'Por favor, ingresa el precio del producto.';
      return false;
    }

    return true;
  }

  // Function to validate the category field
  function validateCategory() {
    categoryError.textContent = '';
    if (categorySelect.value === '0') {
      categoryError.textContent = 'Por favor, selecciona una categoría.';
      return false;
    }

    return true;
  }

  // Function to validate the entire form
  function validateForm() {
    const isProductValid = validateProduct();
    const isDescriptionValid = validateDescription();
    // If the route is /create, validate the file field, if not skip it
    const isFileValid = window.location.pathname === '/create' ? validateFile() : true;
    const isPriceValid = validatePrice();
    const isCategoryValid = validateCategory();

    return isProductValid && isDescriptionValid && isFileValid && isPriceValid && isCategoryValid;
  }
});
