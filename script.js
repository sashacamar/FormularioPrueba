const typeInsuranceSelect = document.getElementById("typeInsurance");
const priceInsurance = document.getElementById("priceInsurance");

typeInsuranceSelect.addEventListener("change", function() {
    const selectedOption = typeInsuranceSelect.options[typeInsuranceSelect.selectedIndex].value;
    let precio = 0;

    switch (selectedOption) {
        case "basico":
            precio = 500;
            break;
        case "intermedio":
            precio = 1000;
            break;
        case "premium":
            precio = 1500;
            break;
    }

    priceInsurance.textContent = `Precio del seguro: $${precio}`;
});

const insuranceForm = document.getElementById("insuranceForm");
insuranceForm.addEventListener("submit", function(event) {
    event.preventDefault();
    insuranceForm.innerHTML = `Formulario enviado exitosamente.`
});
