document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.btn-find');
    const searchInput = document.querySelector('.search-container input');

    // Function to handle search
    const handleSearch = () => {
        const address = searchInput.value.trim();

        if (address === "") {
            alert("Please enter your delivery address first!");
            searchInput.style.border = "1px solid #D70F64";
        } else {
            searchBtn.innerText = "Searching...";
            searchBtn.disabled = true;

            // Simulating an API call to find restaurants
            setTimeout(() => {
                alert(`Looking for restaurants near: ${address}`);
                searchBtn.innerText = "Find food";
                searchBtn.disabled = false;
                
                // You can redirect to a new page here:
                // window.location.href = `https://www.foodpanda.pk/restaurants?address=${address}`;
            }, 1500);
        }
    };

    // Click event
    searchBtn.addEventListener('click', handleSearch);

    // Enter key event
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});