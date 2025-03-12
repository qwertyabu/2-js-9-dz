document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const products = document.querySelectorAll(".product");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();

        products.forEach(product => {
            const productName = product.querySelector("h3").textContent.toLowerCase();

            if (productName.includes(query)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});
